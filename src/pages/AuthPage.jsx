import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function AuthPage() {
  const { login, signup } = useAuth()
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('ECE')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isSignup = mode === 'signup'

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      if (isSignup) {
        await signup({
          name: name.trim() || 'Placeonix Student',
          branch,
          email: email.trim(),
          password,
        })
      } else {
        await login(email.trim(), password)
      }
    } catch (authError) {
      setError(authError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-hero">
        <div className="auth-logo">P</div>
        <p className="auth-kicker">Welcome to Placeonix</p>
        <h1>Your placement preparation starts here.</h1>
        <p>
          Sign in to track your interviews, resume progress, aptitude practice,
          streaks, XP, and placement readiness.
        </p>
      </section>

      <section className="auth-card" aria-label={isSignup ? 'Create account' : 'Login'}>
        <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button
            className={!isSignup ? 'active' : ''}
            type="button"
            onClick={() => {
              setMode('login')
              setError('')
            }}
          >
            Login
          </button>
          <button
            className={isSignup ? 'active' : ''}
            type="button"
            onClick={() => {
              setMode('signup')
              setError('')
            }}
          >
            Sign Up
          </button>
        </div>

        <h2>{isSignup ? 'Create your account' : 'Login to your dashboard'}</h2>
        <p className="auth-subtitle">
          {isSignup
            ? 'Use your email and password to create a Placeonix student account.'
            : 'Continue with your registered email and password.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <label>
                Full Name
                <input
                  type="text"
                  placeholder="Kanchi Prayuktha"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>

              <label>
                Department
                <select value={branch} onChange={(event) => setBranch(event.target.value)}>
                  <option value="ECE">ECE</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="IT">IT</option>
                  <option value="ME">ME</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="AERO">AERO</option>
                  <option value="BME">BME</option>
                  <option value="BT">BT</option>
                </select>
              </label>
            </>
          )}

          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              required
              minLength={6}
            />
          </label>

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-submit" type="submit" disabled={submitting}>
            {submitting ? 'Please wait...' : isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  )
}
