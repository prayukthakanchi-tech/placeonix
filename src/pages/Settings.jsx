import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

const BRANCHES = ['ECE', 'CSE', 'EEE', 'IT', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']
const GRAD_YEARS = [2024, 2025, 2026, 2027, 2028, 2029, 2030]

const NOTIFICATION_OPTIONS = [
  { key: 'emailUpdates',   label: 'Email updates',            desc: 'Receive order & feature updates via email' },
  { key: 'practiceReminder', label: 'Daily practice reminder', desc: 'Get a reminder to practice coding & aptitude' },
  { key: 'pushAlerts',       label: 'Platform push alerts',     desc: 'Get native browser alerts for badge unlocks and mock tests' },
]

function Toggle({ checked, onChange }) {
  return (
    <div onClick={(e) => onChange(!checked, e)}
      style={{ width: 44, height: 24, borderRadius: 999, background: checked ? '#7c3aed' : '#d1d5db', cursor: 'pointer', position: 'relative', transition: 'background 0.25s', flexShrink: 0 }}>
      <div style={{ width: 18, height: 18, borderRadius: 999, background: '#fff', position: 'absolute', top: 3, left: checked ? 23 : 3, transition: 'left 0.25s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
    </div>
  )
}

function Section({ title, subtitle, children }) {
  return (
    <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px', marginBottom: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>{subtitle}</div>}
      </div>
      {children}
    </div>
  )
}

export default function Settings() {
  const { user, profile, updateUserProfile, logout } = useAuth()

  // Profile form state
  const [name,         setName]         = useState(profile?.name || user?.displayName || '')
  const [branch,       setBranch]       = useState(profile?.branch || 'CSE')
  const [graduationYear, setGradYear]   = useState(profile?.graduationYear || 2025)
  const [linkedin,     setLinkedin]     = useState(profile?.linkedin || '')
  const [phone,        setPhone]        = useState(profile?.phone || '')
  const [saving,       setSaving]       = useState(false)
  const [saved,        setSaved]        = useState(false)

  // Notification prefs
  const [notifs, setNotifs] = useState({
    emailUpdates:     profile?.notifs?.emailUpdates    ?? true,
    practiceReminder: profile?.notifs?.practiceReminder ?? true,
    pushAlerts:       profile?.notifs?.pushAlerts      ?? true,
  })

  // Sync profile details when loaded
  useEffect(() => {
    if (profile) {
      setName(profile.name || user?.displayName || '')
      setBranch(profile.branch || 'CSE')
      setGradYear(profile.graduationYear || 2025)
      setLinkedin(profile.linkedin || '')
      setPhone(profile.phone || '')
      setNotifs({
        emailUpdates:     profile.notifs?.emailUpdates    ?? true,
        practiceReminder: profile.notifs?.practiceReminder ?? true,
        pushAlerts:       profile.notifs?.pushAlerts      ?? true,
      })
    }
  }, [profile, user])

  // Dark mode — stored in localStorage, applied via class
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('plx_theme') === 'dark')

  function applyTheme(dark, e) {
    if (!document.startViewTransition) {
      setDarkMode(dark)
      localStorage.setItem('plx_theme', dark ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      return
    }

    const x = e?.clientX ?? window.innerWidth / 2
    const y = e?.clientY ?? window.innerHeight / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      setDarkMode(dark)
      localStorage.setItem('plx_theme', dark ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 450,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
  }

  async function handleSaveProfile(e) {
    e.preventDefault()
    setSaving(true)
    try {
      await updateUserProfile({ name, branch, graduationYear: Number(graduationYear), linkedin, phone, notifs, updatedAt: serverTimestamp() })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch (err) {
      alert('Failed to save: ' + err.message)
    }
    setSaving(false)
  }

  const displayName = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const initial = displayName.slice(0, 1).toUpperCase()

  return (
    <div style={{ maxWidth: 680, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 26, color: 'var(--text-primary)', marginBottom: 4 }}>⚙️ Settings</h1>
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>Manage your account, preferences, and notifications</p>
      </div>

      {/* Avatar */}
      <div style={{ background: 'var(--purple-xsoft)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '22px 24px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, background: 'linear-gradient(135deg, #6c3ce1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 26, fontWeight: 900, fontFamily: 'Urbanist, sans-serif', flexShrink: 0 }}>
          {initial}
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)' }}>{displayName}</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{user?.email}</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{branch} · Graduating {graduationYear}</div>
        </div>
      </div>

      {/* Profile Settings */}
      <Section title="Profile Information" subtitle="Update your personal details visible across Placeonix">
        <form onSubmit={handleSaveProfile}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 14, marginBottom: 14 }}>
            {[
              { label: 'Display Name', value: name, setter: setName, type: 'text', placeholder: 'Your name' },
              { label: 'Phone Number', value: phone, setter: setPhone, type: 'tel', placeholder: '10-digit number' },
            ].map(({ label, value, setter, type, placeholder }) => (
              <div key={label}>
                <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>{label}</label>
                <input type={type} value={value} onChange={e => setter(e.target.value)} placeholder={placeholder}
                  style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                  onFocus={e => e.target.style.borderColor = '#7c3aed'}
                  onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Branch</label>
              <select value={branch} onChange={e => setBranch(e.target.value)}
                style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', background: 'var(--card-bg)', color: 'var(--text-primary)', cursor: 'pointer' }}>
                {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Graduation Year</label>
              <select value={graduationYear} onChange={e => setGradYear(Number(e.target.value))}
                style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', background: 'var(--card-bg)', color: 'var(--text-primary)', cursor: 'pointer' }}>
                {GRAD_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>LinkedIn URL</label>
            <input type="url" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/yourprofile"
              style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
              onFocus={e => e.target.style.borderColor = '#7c3aed'}
              onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
          </div>

          <div style={{ marginBottom: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Email Address</label>
            <input type="email" value={user?.email || ''} disabled
              style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', background: 'var(--main-bg)', color: 'var(--text-muted)', boxSizing: 'border-box' }} />
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 4 }}>Email cannot be changed after account creation</div>
          </div>

          <div style={{ marginTop: 20 }}>
            <button type="submit" disabled={saving}
              style={{ padding: '10px 28px', background: saving ? 'var(--main-bg)' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: saving ? 'var(--text-muted)' : '#fff', border: 'none', borderRadius: 10, fontSize: 13.5, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}>
              {saved ? '✅ Saved!' : saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </Section>

      {/* Appearance */}
      <Section title="Appearance" subtitle="Customize how Placeonix looks for you">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>Dark Mode</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>Switch between light and dark interface</div>
          </div>
          <Toggle checked={darkMode} onChange={applyTheme} />
        </div>
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          {[{ label: '☀️ Light', value: false }, { label: '🌙 Dark', value: true }].map(opt => (
            <button key={opt.label} onClick={(e) => applyTheme(opt.value, e)}
              style={{ flex: 1, padding: '10px', borderRadius: 10, border: `1.5px solid ${darkMode === opt.value ? '#7c3aed' : 'var(--card-border)'}`, background: darkMode === opt.value ? 'var(--purple-xsoft)' : 'var(--card-bg)', color: darkMode === opt.value ? '#7c3aed' : 'var(--text-secondary)', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
              {opt.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notifications" subtitle="Control which notifications you receive">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {NOTIFICATION_OPTIONS.map(opt => (
            <div key={opt.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{opt.label}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>{opt.desc}</div>
              </div>
              <Toggle checked={notifs[opt.key]} onChange={val => {
                const updated = { ...notifs, [opt.key]: val }
                setNotifs(updated)
                if (user) {
                  updateDoc(doc(db, 'users', user.uid), { notifs: updated, updatedAt: serverTimestamp() }).catch(() => {})
                }

                // Native browser push alerts validation & confirmation
                if (val && 'Notification' in window) {
                  Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                      new Notification('Notifications Enabled!', {
                        body: `You will now get alerts for: ${opt.label}`,
                        icon: '/favicon.ico'
                      })
                    }
                  })
                }
              }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Security */}
      <Section title="Account & Security" subtitle="Manage your login and account settings">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--main-bg)', borderRadius: 12, border: '1px solid var(--card-border)' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>Password</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>Use the Reset Password email flow to change your password</div>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--card-bg)', padding: '3px 10px', borderRadius: 999 }}>Via Email</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#fef2f2', borderRadius: 12, border: '1px solid #fecaca' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#dc2626' }}>Sign Out</div>
              <div style={{ fontSize: 12.5, color: '#ef4444' }}>Log out of your Placeonix account</div>
            </div>
            <button onClick={logout}
              style={{ padding: '7px 18px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              Sign Out
            </button>
          </div>
        </div>
      </Section>

      {/* Version info */}
      <div style={{ textAlign: 'center', padding: '8px 0 24px', fontSize: 12, color: '#d1d5db' }}>
        Placeonix v1.0.0 · Built for students · 🔒 Your data is private
      </div>
    </div>
  )
}
