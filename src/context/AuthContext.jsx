import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const AuthContext = createContext(null)

function getAuthMessage(error) {
  const code = error?.code || ''

  if (code.includes('auth/email-already-in-use')) {
    return 'This email is already registered. Please log in instead.'
  }

  if (code.includes('auth/invalid-credential') || code.includes('auth/wrong-password')) {
    return 'Invalid email or password. Please check your details.'
  }

  if (code.includes('auth/user-not-found')) {
    return 'No account found with this email. Please sign up first.'
  }

  if (code.includes('auth/weak-password')) {
    return 'Password should be at least 6 characters.'
  }

  if (code.includes('auth/invalid-email')) {
    return 'Please enter a valid email address.'
  }

  return 'Something went wrong. Please try again.'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw new Error(getAuthMessage(error))
    }
  }

  async function signup({ name, email, password, branch }) {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(credential.user, { displayName: name })

      try {
        await setDoc(doc(db, 'users', credential.user.uid), {
          name,
          email,
          branch,
          role: 'student',
          placementReadiness: 78,
          currentStreak: 0,
          xp: 0,
          createdAt: serverTimestamp(),
        })
      } catch {
        // Profile storage is helpful but should not block account creation.
      }
    } catch (error) {
      throw new Error(getAuthMessage(error))
    }
  }

  async function logout() {
    await signOut(auth)
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      signup,
      logout,
    }),
    [user, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
