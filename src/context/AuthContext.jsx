import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
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

  if (code.includes('auth/operation-not-allowed')) {
    return 'Email/password login is not enabled in Firebase. Enable it in Firebase Console > Authentication > Sign-in method.'
  }

  if (code.includes('auth/unauthorized-domain')) {
    return 'This website domain is not authorized in Firebase. Add placeonix-theta.vercel.app in Firebase Console > Authentication > Settings > Authorized domains.'
  }

  if (code.includes('auth/network-request-failed')) {
    return 'Network error. Please check your internet connection and try again.'
  }

  if (code.includes('auth/invalid-email')) {
    return 'Please enter a valid email address.'
  }

  return `Firebase error: ${code || 'unknown error'}. Please try again.`
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (!currentUser) {
        setLoading(false)
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (!user) {
      setProfile(null)
      return undefined
    }

    const profileRef = doc(db, 'users', user.uid)

    const unsubscribe = onSnapshot(
      profileRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.data())
          setLoading(false)
          return
        }

        const defaultProfile = {
          email: user.email,
          branch: 'ECE',
          role: 'student',
          placementReadiness: 0,
          aptitudeScore: 0,
          codingScore: 0,
          skillsCompleted: 0,
          skillsTarget: 15,
          currentStreak: 0,
          bestStreak: 0,
          mockInterviewScore: 0,
          interviewsCompleted: 0,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }

        setDoc(profileRef, defaultProfile, { merge: true })
        setProfile(defaultProfile)
        setLoading(false)
      },
      (err) => {
        console.error('Profile fetch error:', err)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [user])

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw new Error(getAuthMessage(error))
    }
  }

  async function signup({ email, password, branch }) {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password)

      // Send verification email
      try {
        await sendEmailVerification(credential.user)
      } catch (verificationError) {
        console.error('Failed to send verification email on signup:', verificationError)
      }

      try {
        await setDoc(doc(db, 'users', credential.user.uid), {
          email,
          branch,
          role: 'student',
          placementReadiness: 0,
          aptitudeScore: 0,
          codingScore: 0,
          skillsCompleted: 0,
          skillsTarget: 15,
          currentStreak: 0,
          bestStreak: 0,
          mockInterviewScore: 0,
          interviewsCompleted: 0,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        })
      } catch {
        // Profile storage is helpful but should not block account creation.
      }
    } catch (error) {
      throw new Error(getAuthMessage(error))
    }
  }

  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      throw new Error(getAuthMessage(error))
    }
  }

  async function updateUserProfile(updates) {
    if (!user) {
      throw new Error('You must be logged in to update your profile.')
    }

    await setDoc(
      doc(db, 'users', user.uid),
      {
        ...updates,
        email: user.email,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  }

  async function logout() {
    await signOut(auth)
  }

  async function sendVerification() {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser)
    }
  }

  async function checkVerification() {
    if (auth.currentUser) {
      await auth.currentUser.reload()
      setUser({ ...auth.currentUser })
      return auth.currentUser.emailVerified
    }
    return false
  }

  const value = useMemo(
    () => ({
      user,
      profile,
      loading,
      login,
      signup,
      resetPassword,
      updateUserProfile,
      logout,
      sendVerification,
      checkVerification,
    }),
    [user, profile, loading]
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
