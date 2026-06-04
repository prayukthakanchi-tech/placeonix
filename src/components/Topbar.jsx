import React, { useState, useEffect, useRef } from 'react'
import { Bell, Menu, Moon, Sun, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Topbar({ onSearch, onMenuToggle }) {
  const { user, profile, logout } = useAuth()
  const [dark, setDark]   = useState(() => localStorage.getItem('plx_theme') === 'dark')
  const displayName = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const branch = profile?.branch || 'Student'
  const initial = displayName.slice(0, 1).toUpperCase()

  const [showNotif, setShowNotif] = useState(false)
  const notifRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotif(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleDark() {
    const next = !dark
    setDark(next)
    localStorage.setItem('plx_theme', next ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  return (
    <header className="topbar">
      {/* Mobile hamburger */}
      <button className="topbar-hamburger" onClick={onMenuToggle} aria-label="Open menu" type="button">
        <Menu size={22} />
      </button>

      {/* Removed Search Bar */}


      <div className="topbar-right">
        <button className="topbar-icon-btn" title="Toggle theme" type="button" onClick={toggleDark}>
          {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>

        <div style={{ position: 'relative' }} ref={notifRef}>
          <button className="topbar-icon-btn" title="Notifications" type="button" onClick={() => setShowNotif(!showNotif)}>
            <Bell size={18} aria-hidden="true" />
            <span className="notif-badge">3</span>
          </button>
          
          {showNotif && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, marginTop: 12, width: 320,
              background: 'var(--card-bg)', border: '1.5px solid var(--card-border)',
              borderRadius: 16, boxShadow: 'var(--shadow-hover)', zIndex: 50,
              overflow: 'hidden', animation: 'fadeIn 0.2s ease-out'
            }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 16 }}>Notifications</span>
                <span onClick={() => setShowNotif(false)} style={{ fontSize: 11, color: 'var(--purple-primary)', fontWeight: 700, cursor: 'pointer' }}>Mark all read</span>
              </div>
              <div style={{ maxHeight: 360, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {[
                  { title: 'Welcome to Placeonix!', time: 'Just now', desc: 'Complete your profile to unlock all placement tools.' },
                  { title: 'Take your first Mock Interview', time: '2 hours ago', desc: 'AI interviews are now available for your department.' },
                  { title: 'New Aptitude Questions added', time: '1 day ago', desc: 'Check out the new dynamic questions in the Aptitude section.' },
                ].map((n, i) => (
                  <div key={i} style={{ padding: '16px 20px', borderBottom: i < 2 ? '1px solid var(--card-border)' : 'none', display: 'flex', gap: 14, cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-xsoft)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ color: 'var(--purple-primary)', marginTop: 2 }}><CheckCircle2 size={18} /></div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{n.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 6 }}>{n.desc}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="topbar-user" type="button" onClick={logout} title="Logout">
          <div className="topbar-avatar">{initial}</div>
          <span className="topbar-username">
            Hi {displayName}
            <small>{branch}</small>
          </span>
        </button>
      </div>
    </header>
  )
}
