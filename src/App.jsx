import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import Aptitude from './pages/Aptitude.jsx'
import AIInterview from './pages/AIInterview.jsx'
import AuthPage from './pages/AuthPage.jsx'
import { useAuth } from './context/AuthContext.jsx'

const PAGE_META = {
  dashboard: { title: 'Dashboard',       icon: '🏠' },
  resources:  { title: 'Resources',       icon: '📚', desc: 'Study materials, notes, and resources organized by department and subject.' },
  aptitude:   { title: 'Aptitude',        icon: '🧠' },
  coding:     { title: 'Coding Practice', icon: '💻', desc: 'Built-in online code editor with DSA problems and Judge0-powered execution.' },
  interview:  { title: 'AI Interview',    icon: '🤖' },
  resume:     { title: 'Resume & ATS',    icon: '📄', desc: 'Upload your resume to get an ATS score, keyword analysis, and formatting suggestions.' },
  analytics:  { title: 'Analytics',       icon: '📊', desc: 'Placement trends, package data, recruiter stats, and your performance analytics.' },
  profile:    { title: 'Profile',         icon: '👤', desc: 'Manage your student profile, achievements, and placement preferences.' },
  settings:   { title: 'Settings',        icon: '⚙️', desc: 'Manage your account, notifications, and platform preferences.' },
}

export default function App() {
  const { user, loading } = useAuth()
  const [activePage, setActivePage] = useState('dashboard')
  const meta = PAGE_META[activePage] || PAGE_META.dashboard

  if (loading) {
    return (
      <div className="auth-loading">
        <div className="auth-loader" />
        <p>Loading Placeonix...</p>
      </div>
    )
  }

  if (!user) {
    return <AuthPage />
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-area">
        <Topbar />
        <main className="page-content">
          {activePage === 'dashboard' ? (
            <Dashboard />
          ) : activePage === 'aptitude' ? (
            <Aptitude />
          ) : activePage === 'interview' ? (
            <AIInterview />
          ) : (
            <PlaceholderPage
              title={meta.title}
              icon={meta.icon}
              description={meta.desc}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}
