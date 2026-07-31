import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Bell, Menu, Moon, Sun, CheckCircle2, AlertTriangle, AlertCircle, Info, BookOpen, Video, Code, Briefcase, Cpu } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase/config'


function getNotifIcon(type) {
  switch (type) {
    case 'success':
      return <CheckCircle2 size={18} style={{ color: '#16a34a' }} />
    case 'warning':
      return <AlertTriangle size={18} style={{ color: '#ea580c' }} />
    case 'alert':
      return <AlertCircle size={18} style={{ color: '#ef4444' }} />
    case 'aptitude':
      return <BookOpen size={18} style={{ color: '#6c3ce1' }} />
    case 'interview':
      return <Video size={18} style={{ color: '#3b82f6' }} />
    case 'coding':
      return <Code size={18} style={{ color: '#7c3aed' }} />
    case 'company':
      return <Briefcase size={18} style={{ color: '#ea580c' }} />
    case 'core':
      return <Cpu size={18} style={{ color: '#0891b2' }} />
    case 'info':
    default:
      return <Info size={18} style={{ color: '#2563eb' }} />
  }
}


export default function Topbar({ onMenuToggle }) {
  const { user, profile, logout } = useAuth()
  const [dark, setDark]   = useState(() => localStorage.getItem('plx_theme') === 'dark')
  const displayName = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const branch = profile?.branch || 'Student'
  const initial = displayName.slice(0, 1).toUpperCase()

  const [showNotif, setShowNotif] = useState(false)
  const notifRef = useRef(null)

  const [dbNotifications, setDbNotifications] = useState([])
  const [readNotifIds, setReadNotifIds] = useState(() => {
    try {
      const saved = localStorage.getItem('plx_read_notifs')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  // Listen to global notifications
  useEffect(() => {
    const q = query(
      collection(db, 'notifications'), 
      orderBy('createdAt', 'desc'),
      limit(15)
    )
    const unsub = onSnapshot(q, snap => {
      setDbNotifications(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [])

  // Filter based on student's department/branch — memoised to prevent recalc on every render
  const userDept = profile?.branch || 'ALL'
  const { displayNotifs, unreadCount } = useMemo(() => {
    const activeNotifications = dbNotifications.filter(n =>
      n.targetDept === 'ALL' || n.targetDept === userDept
    )

    const mapped = activeNotifications.map(n => {
      let detectedType = n.type || 'info'
      if (detectedType === 'info' || !n.type) {
        const titleLower = (n.title || '').toLowerCase()
        const messageLower = (n.message || '').toLowerCase()
        if (titleLower.includes('aptitude') || messageLower.includes('aptitude')) {
          detectedType = 'aptitude'
        } else if (titleLower.includes('interview') || messageLower.includes('interview') || titleLower.includes('mock') || messageLower.includes('mock')) {
          detectedType = 'interview'
        } else if (titleLower.includes('welcome') || messageLower.includes('welcome')) {
          detectedType = 'success'
        } else if (titleLower.includes('coding') || messageLower.includes('coding') || titleLower.includes('dsa') || messageLower.includes('dsa') || titleLower.includes('contest') || messageLower.includes('contest') || titleLower.includes('practice') || messageLower.includes('practice')) {
          detectedType = 'coding'
        } else if (titleLower.includes('company') || messageLower.includes('company') || titleLower.includes('job') || messageLower.includes('job') || titleLower.includes('drive') || messageLower.includes('drive') || titleLower.includes('hiring') || messageLower.includes('hiring') || titleLower.includes('placement') || messageLower.includes('placement') || titleLower.includes('intern') || messageLower.includes('intern')) {
          detectedType = 'company'
        } else if (titleLower.includes('core') || messageLower.includes('core') || titleLower.includes('subject') || messageLower.includes('subject') || titleLower.includes('mcq') || messageLower.includes('mcq')) {
          detectedType = 'core'
        }
      }
      return {
        id: n.id,
        title: n.title,
        desc: n.message,
        type: detectedType
      }
    })

    return {
      displayNotifs: mapped,
      unreadCount: mapped.filter(n => !readNotifIds.includes(n.id)).length
    }
  }, [dbNotifications, userDept, readNotifIds])

  function handleMarkAllRead() {
    const allIds = displayNotifs.map(n => n.id)
    setReadNotifIds(allIds)
    localStorage.setItem('plx_read_notifs', JSON.stringify(allIds))
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotif(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleDark(e) {
    if (!document.startViewTransition) {
      const next = !dark
      setDark(next)
      localStorage.setItem('plx_theme', next ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
      return
    }

    const x = e?.clientX ?? window.innerWidth / 2
    const y = e?.clientY ?? window.innerHeight / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      const next = !dark
      setDark(next)
      localStorage.setItem('plx_theme', next ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
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
            {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
          </button>
          
          {showNotif && (
            <div className="topbar-notif-dropdown">
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 16 }}>Notifications</span>
                {unreadCount > 0 && (
                  <span onClick={handleMarkAllRead} style={{ fontSize: 11, color: 'var(--purple-primary)', fontWeight: 700, cursor: 'pointer' }}>Mark all read</span>
                )}
              </div>
              <div style={{ maxHeight: 360, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {displayNotifs.length === 0 ? (
                  <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    <Bell size={24} style={{ margin: '0 auto 10px', display: 'block', opacity: 0.5, stroke: 'var(--text-muted)' }} />
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>All caught up!</div>
                    <div style={{ fontSize: 11, marginTop: 4 }}>No notifications to show right now.</div>
                  </div>
                ) : (
                  displayNotifs.map((n, i) => {
                    const isUnread = !readNotifIds.includes(n.id)
                    return (
                      <div key={n.id} style={{ 
                        padding: '16px 20px', 
                        borderBottom: i < displayNotifs.length - 1 ? '1px solid var(--card-border)' : 'none', 
                        display: 'flex', 
                        gap: 14, 
                        cursor: 'pointer', 
                        transition: 'background 0.2s',
                        background: isUnread ? 'rgba(124, 58, 237, 0.02)' : 'transparent'
                      }} 
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-xsoft)'} 
                        onMouseLeave={e => e.currentTarget.style.background = isUnread ? 'rgba(124, 58, 237, 0.02)' : 'transparent'}
                      >
                        <div style={{ marginTop: 2 }}>{getNotifIcon(n.type)}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {n.title}
                            {isUnread && (
                              <span style={{ 
                                width: 6, 
                                height: 6, 
                                borderRadius: 999, 
                                background: 'var(--purple-primary)', 
                                display: 'inline-block',
                                marginLeft: 6
                              }} />
                            )}
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 6 }}>{n.desc}</div>

                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          )}
        </div>

        <button className="topbar-user" type="button" onClick={logout} title="Click to sign out" aria-label="Sign out">
          <div className="topbar-avatar" aria-hidden="true">{initial}</div>
          <span className="topbar-username">
            Hi {displayName}
            <small>{branch}</small>
          </span>
        </button>
      </div>
    </header>
  )
}
