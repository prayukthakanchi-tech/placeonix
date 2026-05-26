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
  UserRound,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Resources', id: 'resources' },
  { icon: Brain, label: 'Aptitude', id: 'aptitude' },
  { icon: Code2, label: 'Coding Practice', id: 'coding' },
  { icon: Bot, label: 'AI Interview', id: 'interview' },
  { icon: FileText, label: 'Resume & ATS', id: 'resume' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: UserRound, label: 'Profile', id: 'profile' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar({ activePage, setActivePage }) {
  const { logout } = useAuth()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="rocket">P</div>
        <span className="sidebar-logo-text">Placeonix</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            active={activePage === item.id}
            onClick={() => setActivePage(item.id)}
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
          <div className="sidebar-progress-bar-fill" style={{ width: '72%' }} />
        </div>
        <div className="sidebar-progress-pct">72%</div>
      </div>

      <div className="sidebar-bottom">
        <button className="sidebar-logout" type="button" onClick={logout}>
          <LogOut className="nav-icon" size={17} aria-hidden="true" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
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
