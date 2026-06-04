import React, { useState, lazy, Suspense } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Footer from './components/Footer.jsx'
import AuthPage from './pages/AuthPage.jsx'
import PublicPortfolio from './pages/PublicPortfolio.jsx'
import { useAuth } from './context/AuthContext.jsx'

// ── Lazy page imports — each page loads only when first visited ─────
// This splits the bundle from ~1MB down to a small initial chunk.
const Dashboard       = lazy(() => import('./pages/Dashboard.jsx'))
const Resources       = lazy(() => import('./pages/Resources.jsx'))
const Aptitude        = lazy(() => import('./pages/Aptitude.jsx'))
const CodingPractice  = lazy(() => import('./pages/CodingPractice.jsx'))
const ResumeATS       = lazy(() => import('./pages/ResumeATS.jsx'))
const AIInterview     = lazy(() => import('./pages/AIInterview.jsx'))
const Profile         = lazy(() => import('./pages/Profile.jsx'))
const Settings        = lazy(() => import('./pages/Settings.jsx'))
const AdminDashboard  = lazy(() => import('./pages/AdminDashboard.jsx'))
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage.jsx'))
const OnlineCompiler  = lazy(() => import('./pages/OnlineCompiler.jsx'))

// ── Check for public portfolio URL param ─────────────────────────
const urlParams = new URLSearchParams(window.location.search)
const PORTFOLIO_ID = urlParams.get('portfolio')

// ── Error Boundary ─────────────────────────────────────────────────
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '60vh', gap: 16, padding: 32,
          fontFamily: 'Inter, sans-serif',
        }}>
          <div style={{ fontSize: 48 }}>⚠️</div>
          <h2 style={{ fontWeight: 800, fontSize: 20, color: '#111827', margin: 0 }}>
            Something went wrong
          </h2>
          <p style={{ color: '#6b7280', fontSize: 14, textAlign: 'center', maxWidth: 400 }}>
            An unexpected error occurred in this section. Your progress is safe.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '10px 24px', background: '#6c3ce1', color: '#fff',
              border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer',
              fontSize: 14, fontFamily: 'inherit',
            }}
          >
            Try Again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// ── Page suspend fallback ──────────────────────────────────────────
function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', flexDirection: 'column', gap: 14,
    }}>
      <div style={{
        width: 36, height: 36,
        border: '3px solid #ede9fe', borderTopColor: '#6c3ce1',
        borderRadius: 999, animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ fontSize: 13.5, color: '#9ca3af', fontWeight: 600 }}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

const PAGE_META = {
  dashboard: { title: 'Dashboard',       icon: '🏠' },
  resources:  { title: 'Placement Hub',   icon: '📚', desc: 'Department-specific placement prep, core engineering subject roadmaps, aptitude and technical coding.' },
  aptitude:   { title: 'Aptitude',        icon: '🧠' },
  coding:     { title: 'Coding Practice', icon: '💻', desc: 'Built-in online code editor with DSA problems and Judge0-powered execution.' },
  interview:  { title: 'AI Interview',    icon: '🤖' },
  resume:     { title: 'Resume & ATS',    icon: '📄', desc: 'Upload your resume to get an ATS score, keyword analysis, and formatting suggestions.' },
  profile:    { title: 'Profile',         icon: '👤', desc: 'Manage your student profile, achievements, and placement preferences.' },
  settings:   { title: 'Settings',        icon: '⚙️', desc: 'Manage your account, notifications, and platform preferences.' },
  compiler:   { title: 'Online Compiler', icon: '⚡', desc: 'Write and execute code instantly in 5 languages.' },
}

export default function App() {
  const { user, loading } = useAuth()
  const [activePage, setActivePage] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  const meta = PAGE_META[activePage] || PAGE_META.dashboard

  // ── Public portfolio bypass — no auth needed ──────────────────
  if (PORTFOLIO_ID) {
    return <PublicPortfolio portfolioId={PORTFOLIO_ID} />
  }

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
    <ErrorBoundary>
      <div className="app-shell">
        {mobileOpen && (
          <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
        )}
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
        <div className="main-area">
          <Topbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />
          <main className="page-content">
            <ErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                {activePage === 'dashboard' ? (
                  <Dashboard setActivePage={setActivePage} />
                ) : activePage === 'resources' ? (
                  <Resources />
                ) : activePage === 'aptitude' ? (
                  <Aptitude />
                ) : activePage === 'coding' ? (
                  <CodingPractice />
                ) : activePage === 'resume' ? (
                  <ResumeATS />
                ) : activePage === 'admin' ? (
                  <AdminDashboard />
                ) : activePage === 'interview' ? (
                  <AIInterview />
                ) : activePage === 'profile' ? (
                  <Profile />
                ) : activePage === 'settings' ? (
                  <Settings />
                ) : activePage === 'compiler' ? (
                  <OnlineCompiler />
                ) : (
                  <PlaceholderPage
                    title={meta.title}
                    icon={meta.icon}
                    description={meta.desc}
                  />
                )}
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
