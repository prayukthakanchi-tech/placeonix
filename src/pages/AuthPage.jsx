import React, { useState } from 'react'
import { Eye, EyeOff, GraduationCap, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function AuthPage() {
  const { login, signup, resetPassword } = useAuth()
  const [mode, setMode] = useState('login')
  const [branch, setBranch] = useState('ECE')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isSignup = mode === 'signup'

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      if (isSignup) {
        await signup({
          branch,
          email: email.trim(),
          password,
        })
        setSuccess('Account created successfully. Opening your dashboard...')
      } else {
        await login(email.trim(), password)
      }
    } catch (authError) {
      setError(authError.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleForgotPassword() {
    setError('')
    setSuccess('')

    if (!email.trim()) {
      setError('Enter your email first, then click forgot password.')
      return
    }

    try {
      await resetPassword(email.trim())
      setSuccess('Password reset link sent. Please check your email.')
    } catch (authError) {
      setError(authError.message)
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-hero">
        <div className="auth-logo" aria-label="Placeonix">
          <GraduationCap size={34} aria-hidden="true" />
          <Sparkles className="auth-logo-spark" size={15} aria-hidden="true" />
        </div>
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
              setSuccess('')
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
              setSuccess('')
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
            <span className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                required
                minLength={6}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={19} aria-hidden="true" /> : <Eye size={19} aria-hidden="true" />}
              </button>
            </span>
          </label>

          {!isSignup && (
            <button className="forgot-password" type="button" onClick={handleForgotPassword}>
              Forgot password?
            </button>
          )}

          {error && <div className="auth-error">{error}</div>}
          {success && <div className="auth-success">{success}</div>}

          <button className="auth-submit" type="submit" disabled={submitting}>
            {submitting ? 'Please wait...' : isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  )
}
