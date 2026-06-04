import React from 'react'
import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Code2,
  FileText,
  Home,
  LogOut,
  Settings,
  Target,
  Shield,
  UserRound,
  X,
  Sparkles,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

// Admin status is derived from Firestore profile.role — never from a client-side email list.

const navItems = [
  { icon: Home,      label: 'Dashboard',      id: 'dashboard' },
  { icon: BookOpen,  label: 'Placement Hub',   id: 'resources' },
  { icon: Brain,     label: 'Aptitude',        id: 'aptitude' },
  { icon: Code2,     label: 'Coding Practice', id: 'coding' },
  { icon: Sparkles,  label: 'Online Compiler', id: 'compiler' },
  { icon: Bot,       label: 'AI Interview',    id: 'interview' },
  { icon: FileText,  label: 'Resume & ATS',    id: 'resume' },
  { icon: UserRound, label: 'Profile',         id: 'profile' },
  { icon: Settings,  label: 'Settings',        id: 'settings' },
]

export default function Sidebar({ activePage, setActivePage, mobileOpen, onMobileClose }) {
  const { user, profile, logout } = useAuth()
  const readiness = profile?.placementReadiness ?? 0
  const isAdmin = profile?.role === 'admin'

  const visibleNavItems = [...navItems]
  if (isAdmin) {
    visibleNavItems.push({ icon: Shield, label: 'Admin Dashboard', id: 'admin' })
  }

  function handleNav(id) {
    setActivePage(id)
    if (onMobileClose) onMobileClose()
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={onMobileClose} />
      )}
      <aside className={`sidebar${mobileOpen ? ' sidebar-mobile-open' : ''}`}>
        <div className="sidebar-logo">
          <div className="sidebar-brand-icon" style={{ fontSize: 22, width: 40, height: 40 }}>
            <Sparkles className="sidebar-brand-spark" size={16} fill="currentColor" />
            P
          </div>
          <span className="sidebar-logo-text" style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Urbanist, sans-serif', letterSpacing: -0.5 }}>Placeonix</span>
          {/* Mobile close button */}
          <button className="sidebar-close-btn" onClick={onMobileClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {visibleNavItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={activePage === item.id}
              onClick={() => handleNav(item.id)}
            />
          ))}
        </nav>

        <div className="sidebar-progress-card">
          <div className="sidebar-progress-header">
            <div className="sidebar-progress-icon">
              <Target size={16} aria-hidden="true" />
            </div>
            <div>
              <div className="sidebar-progress-title">Keep Going!</div>
            </div>
          </div>
          <div className="sidebar-progress-sub">
            Consistency today<br />Success tomorrow
          </div>
          <div className="sidebar-progress-bar-wrap">
            <div className="sidebar-progress-bar-fill" style={{ width: `${readiness}%` }} />
          </div>
          <div className="sidebar-progress-pct">{readiness}%</div>
        </div>

        <div className="sidebar-bottom">
          <button className="sidebar-logout" type="button" onClick={logout}>
            <LogOut className="nav-icon" size={17} aria-hidden="true" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

function NavButton({ item, active, onClick }) {
  const Icon = item.icon

  return (
    <button
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <Icon className="nav-icon" size={17} aria-hidden="true" />
      <span>{item.label}</span>
    </button>
  )
}
