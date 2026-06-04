import React, { useEffect, useState } from 'react'
import { CheckCircle2, Copy, ExternalLink, Globe, Mail, Save, UserRound } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const departments = ['ECE', 'CSE', 'EEE', 'IT', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']

// ── Generate a URL-safe portfolio ID from name + uid ──────────────
function makePortfolioId(name, uid) {
  const slug = (name || 'student')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `${slug}-${uid.slice(0, 6)}`
}

const SITE_URL = 'https://placeonix-theta.vercel.app'

export default function Profile() {
  const { user, profile, updateUserProfile } = useAuth()
  const [name, setName]             = useState('')
  const [branch, setBranch]         = useState('ECE')
  const [careerGoal, setCareerGoal] = useState('Embedded Engineer')
  const [saving, setSaving]         = useState(false)
  const [message, setMessage]       = useState('')
  const [error, setError]           = useState('')

  // portfolio state
  const [portfolioEnabled, setPortfolioEnabled] = useState(false)
  const [portfolioId, setPortfolioId]           = useState('')
  const [toggling, setToggling]                 = useState(false)
  const [copied, setCopied]                     = useState(false)

  useEffect(() => {
    setName(profile?.name || '')
    setBranch(profile?.branch || 'ECE')
    setCareerGoal(profile?.careerGoal || 'Embedded Engineer')
    setPortfolioEnabled(profile?.portfolioEnabled || false)
    setPortfolioId(profile?.portfolioId || '')
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

  async function togglePortfolio() {
    if (!user) return
    setToggling(true)
    try {
      const newEnabled = !portfolioEnabled
      let pid = portfolioId

      // Generate a portfolio ID the first time they enable it
      if (newEnabled && !pid) {
        pid = makePortfolioId(name || profile?.name || 'student', user.uid)
        setPortfolioId(pid)
      }

      await updateDoc(doc(db, 'users', user.uid), {
        portfolioEnabled: newEnabled,
        portfolioId: pid,
      })
      setPortfolioEnabled(newEnabled)
    } catch (e) {
      alert('Failed to update portfolio settings. Please try again.')
    }
    setToggling(false)
  }

  function copyLink() {
    const link = `${SITE_URL}/?portfolio=${portfolioId}`
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const portfolioLink = portfolioId ? `${SITE_URL}/?portfolio=${portfolioId}` : ''

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
                <strong>{profile?.placementReadiness ?? 0}%</strong>
              </div>
            </div>

            <div className="profile-note">
              <CheckCircle2 size={19} aria-hidden="true" />
              <p>Your profile is stored in Firebase and updates automatically after saving.</p>
            </div>
          </section>

          {/* ── Public Portfolio Card ── */}
          <section className="profile-card card">
            <h2>
              <Globe size={21} aria-hidden="true" />
              Public Portfolio
            </h2>

            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 18 }}>
              Share a beautiful public page showing your Placement Readiness, Skill Scores, and Aptitude — no login needed for recruiters.
            </p>

            {/* Toggle */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px',
              background: portfolioEnabled ? '#f0fdf4' : 'var(--main-bg)',
              border: `1.5px solid ${portfolioEnabled ? '#86efac' : 'var(--card-border)'}`,
              borderRadius: 12, marginBottom: 16,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>
                  {portfolioEnabled ? '✅ Portfolio is Public' : '🔒 Portfolio is Private'}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                  {portfolioEnabled ? 'Anyone with the link can view your portfolio.' : 'Enable to generate a shareable link.'}
                </div>
              </div>
              <button
                onClick={togglePortfolio}
                disabled={toggling}
                style={{
                  width: 44, height: 24, borderRadius: 999, border: 'none',
                  cursor: toggling ? 'not-allowed' : 'pointer',
                  background: portfolioEnabled ? '#22c55e' : '#d1d5db',
                  position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute', top: 3,
                  left: portfolioEnabled ? 23 : 3,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }} />
              </button>
            </div>

            {/* Link area */}
            {portfolioEnabled && portfolioLink && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'var(--main-bg)', border: '1.5px solid var(--card-border)',
                  borderRadius: 10, padding: '10px 12px', overflow: 'hidden',
                }}>
                  <span style={{
                    fontSize: 12, color: 'var(--purple-primary)', fontWeight: 600,
                    flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {portfolioLink}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={copyLink}
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 6, padding: '10px', borderRadius: 10,
                      background: copied ? '#f0fdf4' : 'var(--purple-xsoft)',
                      border: `1.5px solid ${copied ? '#86efac' : 'var(--purple-soft)'}`,
                      color: copied ? '#16a34a' : 'var(--purple-primary)',
                      fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Copy size={14} />
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                  <a
                    href={portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 6, padding: '10px', borderRadius: 10,
                      background: 'var(--purple-primary)', color: '#fff',
                      fontWeight: 700, fontSize: 13, textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <ExternalLink size={14} />
                    Preview
                  </a>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
