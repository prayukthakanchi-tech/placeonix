import React, { useState } from 'react'
import { Bell, Menu, Moon, Search, Sun } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Topbar({ onSearch, onMenuToggle }) {
  const { user, profile, logout } = useAuth()
  const [query, setQuery] = useState('')
  const [dark, setDark]   = useState(() => localStorage.getItem('plx_theme') === 'dark')
  const displayName = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const branch = profile?.branch || 'Student'
  const initial = displayName.slice(0, 1).toUpperCase()

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

      <div className="search-bar">
        <Search className="search-icon" size={17} aria-hidden="true" />
        <input
          type="text"
          placeholder="Search notes, skills, jobs, companies..."
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            onSearch && onSearch(e.target.value)
          }}
        />
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn" title="Toggle theme" type="button" onClick={toggleDark}>
          {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>

        <button className="topbar-icon-btn" title="Notifications" type="button">
          <Bell size={18} aria-hidden="true" />
          <span className="notif-badge">3</span>
        </button>

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
