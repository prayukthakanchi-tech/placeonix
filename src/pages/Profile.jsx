import React, { useEffect, useState } from 'react'
import { CheckCircle2, Mail, Save, UserRound } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const departments = ['ECE', 'CSE', 'EEE', 'IT', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']

export default function Profile() {
  const { user, profile, updateUserProfile } = useAuth()
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('ECE')
  const [careerGoal, setCareerGoal] = useState('Embedded Engineer')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setName(profile?.name || '')
    setBranch(profile?.branch || 'ECE')
    setCareerGoal(profile?.careerGoal || 'Embedded Engineer')
  }, [profile])

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setError('')
    setSaving(true)

    try {
      await updateUserProfile({
        name: name.trim(),
        branch,
        careerGoal: careerGoal.trim(),
      })
      setMessage('Profile saved. Your dashboard is now updated.')
    } catch (profileError) {
      setError(profileError.message || 'Could not save profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="profile-page">
      <section className="profile-hero card">
        <div className="profile-avatar-large">
          {(profile?.name || user?.email || 'S').slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="profile-kicker">Student Profile</p>
          <h1>{profile?.name || user?.email?.split('@')[0] || 'Placeonix Student'}</h1>
          <p>Manage the account details used across your dashboard, progress cards, and recommendations.</p>
        </div>
      </section>

      <div className="profile-grid">
        <section className="profile-card card">
          <h2>
            <UserRound size={21} aria-hidden="true" />
            Profile Details
          </h2>

          <form className="profile-form" onSubmit={handleSubmit}>
            <label>
              Display Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Department
              <select value={branch} onChange={(event) => setBranch(event.target.value)}>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </label>

            <label>
              Career Goal
              <input
                value={careerGoal}
                onChange={(event) => setCareerGoal(event.target.value)}
                placeholder="Embedded Engineer"
              />
            </label>

            {message && <div className="profile-success">{message}</div>}
            {error && <div className="profile-error">{error}</div>}

            <button className="profile-save-btn" type="submit" disabled={saving}>
              <Save size={17} aria-hidden="true" />
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        </section>

        <section className="profile-card card">
          <h2>
            <Mail size={21} aria-hidden="true" />
            Account Summary
          </h2>

          <div className="profile-summary-list">
            <div>
              <span>Email</span>
              <strong>{user?.email}</strong>
            </div>
            <div>
              <span>Department</span>
              <strong>{profile?.branch || 'ECE'}</strong>
            </div>
            <div>
              <span>Career Goal</span>
              <strong>{profile?.careerGoal || 'Embedded Engineer'}</strong>
            </div>
            <div>
              <span>Placement Readiness</span>
              <strong>{profile?.placementReadiness ?? 78}%</strong>
            </div>
          </div>

          <div className="profile-note">
            <CheckCircle2 size={19} aria-hidden="true" />
            <p>Your profile is stored in Firebase and updates automatically after saving.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
