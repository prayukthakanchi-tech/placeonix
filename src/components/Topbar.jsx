import React, { useState } from 'react'
import { Bell, LogOut, Moon, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Topbar({ onSearch }) {
  const { user, logout } = useAuth()
  const [query, setQuery] = useState('')
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Student'
  const initial = displayName.slice(0, 1).toUpperCase()

  return (
    <header className="topbar">
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
        <button className="topbar-icon-btn" title="Toggle theme" type="button">
          <Moon size={18} aria-hidden="true" />
        </button>

        <button className="topbar-icon-btn" title="Notifications" type="button">
          <Bell size={18} aria-hidden="true" />
          <span className="notif-badge">3</span>
        </button>

        <button className="topbar-user" type="button" onClick={logout} title="Logout">
          <div className="topbar-avatar">{initial}</div>
          <span className="topbar-username">Hi {displayName}</span>
          <LogOut className="topbar-logout-text" size={15} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
