import React, { useState, lazy, Suspense, useEffect, useMemo } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Footer from './components/Footer.jsx'
import AuthPage from './pages/AuthPage.jsx'
import PublicPortfolio from './pages/PublicPortfolio.jsx'
import { useAuth } from './context/AuthContext.jsx'
import { BADGES } from './utils/badges.js'

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

  componentDidCatch(error, info) {
    // In production, pipe to your error reporting service (e.g. Sentry)
    console.error('[ErrorBoundary] Caught error:', error, info)
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

function VerifyEmailPage() {
  const { user, logout, sendVerification, checkVerification } = useAuth()
  const [checking, setChecking] = useState(false)
  const [resending, setResending] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleCheck = async () => {
    setChecking(true)
    setError('')
    setMessage('')
    try {
      const verified = await checkVerification()
      if (verified) {
        setMessage('🎉 Success! Your email has been verified. Redirecting...')
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else {
        setError("We couldn't verify your email yet. Please check your inbox and click the activation link.")
      }
    } catch (err) {
      setError(err.message || 'Verification check failed. Please try again.')
    } finally {
      setChecking(false)
    }
  }

  const handleResend = async () => {
    setResending(true)
    setError('')
    setMessage('')
    try {
      await sendVerification()
      setMessage('📬 Verification email resent! Please check your spam folder if you do not see it.')
    } catch (err) {
      setError(err.message || 'Failed to resend email. Please wait a moment and try again.')
    } finally {
      setResending(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      padding: 24,
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.85)',
        border: '1.5px solid rgba(108, 60, 225, 0.2)',
        borderRadius: 24,
        padding: '40px 32px',
        maxWidth: 440,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(108, 60, 225, 0.1)',
        backdropFilter: 'blur(16px)'
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          margin: '0 auto 24px',
          border: '1.5px solid #a78bfa',
          boxShadow: '0 8px 16px rgba(124, 58, 237, 0.15)'
        }}>
          📬
        </div>

        <h2 style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 950, fontSize: 22, color: '#111827', margin: '0 0 10px' }}>
          Verify Your Email
        </h2>
        
        <p style={{ fontSize: 13.5, color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px' }}>
          We have sent a verification link to <strong style={{ color: '#111827' }}>{user?.email}</strong>. 
          Please check your inbox and click the link to activate your Placeonix account.
        </p>

        <p style={{ fontSize: 12, color: 'var(--text-secondary)', background: 'var(--main-bg)', padding: '10px 14px', borderRadius: 12, margin: '0 0 24px', border: '1px dashed var(--card-border)', lineHeight: 1.4, textAlign: 'left' }}>
          💡 <strong>Tip:</strong> If you do not see the email in your inbox, please check your <strong>Spam</strong> or <strong>Promotions</strong> folder and mark it as <strong>"Not Spam"</strong>. This will ensure future alerts and interview feedback go straight to your primary inbox!
        </p>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '12px 16px', color: '#dc2626', fontSize: 13, fontWeight: 700, textAlign: 'left', marginBottom: 20, lineHeight: 1.4 }}>
            ⚠️ {error}
          </div>
        )}

        {message && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '12px 16px', color: '#166534', fontSize: 13, fontWeight: 700, textAlign: 'left', marginBottom: 20, lineHeight: 1.4 }}>
            {message}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button 
            onClick={handleCheck} 
            disabled={checking}
            style={{
              width: '100%',
              padding: '13px',
              background: 'linear-gradient(135deg, #6c3ce1 0%, #7c3aed 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 14,
              cursor: checking ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 14px rgba(108,60,225,0.25)',
              transition: 'all 0.2s',
              fontFamily: 'inherit'
            }}
            onMouseEnter={e => { if(!checking) e.currentTarget.style.opacity = 0.9 }}
            onMouseLeave={e => { if(!checking) e.currentTarget.style.opacity = 1 }}
          >
            {checking ? 'Checking Status...' : '✅ I Have Verified My Email'}
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
            <button 
              onClick={handleResend} 
              disabled={resending}
              style={{
                padding: '11px',
                background: 'transparent',
                border: '1.5px solid var(--card-border)',
                borderRadius: 12,
                color: 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: 12.5,
                cursor: resending ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={e => { if(!resending) e.currentTarget.style.background = 'rgba(0,0,0,0.02)' }}
              onMouseLeave={e => { if(!resending) e.currentTarget.style.background = 'transparent' }}
            >
              {resending ? 'Resending...' : '🔄 Resend Email'}
            </button>

            <button 
              onClick={logout}
              style={{
                padding: '11px',
                background: 'transparent',
                border: '1.5px solid #fecaca',
                borderRadius: 12,
                color: '#dc2626',
                fontWeight: 700,
                fontSize: 12.5,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const { user, loading, profile } = useAuth()
  const [activePage, setActivePage] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  const meta = PAGE_META[activePage] || PAGE_META.dashboard

  // Resolve portfolio ID safely inside the component (avoids SSR issues)
  const PORTFOLIO_ID = useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get('portfolio')
    } catch {
      return null
    }
  }, [])

  const [unlockedBadge, setUnlockedBadge] = useState(null)

  useEffect(() => {
    if (!user) return
    const handleBadgeUnlockEvent = (e) => {
      const badgeIds = e.detail?.badgeIds || []
      if (badgeIds.length > 0) {
        const firstBadge = BADGES.find(b => b.id === badgeIds[0])
        if (firstBadge) {
          setUnlockedBadge(firstBadge)
          
          // Native browser push alert on unlock (if enabled)
          if (profile?.notifs?.pushAlerts !== false && 'Notification' in window && Notification.permission === 'granted') {
            new Notification('Badge Unlocked! 🏆', {
              body: `${firstBadge.emoji} ${firstBadge.name} - ${firstBadge.desc}`,
              icon: '/favicon.ico'
            })
          }
        }
      }
    }
    window.addEventListener('placeonix-badge-unlocked', handleBadgeUnlockEvent)
    return () => window.removeEventListener('placeonix-badge-unlocked', handleBadgeUnlockEvent)
  }, [user, profile])

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

  // Option B: Email Verification Shield
  if (!user.emailVerified) {
    return <VerifyEmailPage />
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
      {unlockedBadge && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15,15,26,0.7)',
          backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          animation: 'fadeInOverlay 0.3s ease-out'
        }}>
          {/* CSS Confetti elements */}
          <div className="css-confetti-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {Array.from({ length: 45 }).map((_, i) => {
              const colors = ['#a78bfa', '#fbcfe8', '#fde68a', '#bfdbfe', '#bbf7d0']
              // Use index-seeded values to avoid re-randomising on each render
              const randColor = colors[i % colors.length]
              const left = `${(i * 7 + 3) % 100}vw`
              const delay = `${(i * 0.08) % 1.5}s`
              const duration = `${2.0 + (i * 0.05) % 1.5}s`
              return (
                <div key={i} className="css-confetti-particle" style={{
                  position: 'absolute', top: -20, left, background: randColor,
                  width: `${6 + (i % 8)}px`, height: `${8 + (i % 10)}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                  transform: `rotate(${(i * 19) % 360}deg)`,
                  animation: `fall ${duration} linear ${delay} infinite`
                }} />
              )
            })}
          </div>

          <div style={{
            background: '#fff', border: '3.5px solid #7c3aed', borderRadius: 24,
            padding: '36px 32px', maxWidth: 380, width: '90%', textAlign: 'center',
            boxShadow: '0 20px 50px rgba(108,60,225,0.4)',
            animation: 'scaleUpBadge 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative', zIndex: 10000
          }}>
            <div style={{
              fontSize: 48, width: 84, height: 84, borderRadius: '50%',
              background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', border: '2px solid #a78bfa',
              boxShadow: '0 8px 20px rgba(124,58,237,0.2)'
            }}>
              {unlockedBadge.emoji}
            </div>
            <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 950, fontSize: 21, color: '#111827', margin: '0 0 6px' }}>
              Badge Unlocked! 🎉
            </h2>
            <h3 style={{ fontSize: 17, color: '#7c3aed', fontWeight: 800, margin: '0 0 10px' }}>
              {unlockedBadge.name}
            </h3>
            <p style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6, margin: '0 0 24px' }}>
              {unlockedBadge.desc}
            </p>
            <button onClick={() => setUnlockedBadge(null)}
              style={{
                width: '100%', padding: '12px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)',
                color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700,
                fontSize: 14, cursor: 'pointer', boxShadow: '0 4px 14px rgba(124,58,237,0.3)',
                transition: 'opacity 0.2s', fontFamily: 'inherit'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              Awesome, Thanks!
            </button>
          </div>

          <style>{`
            @keyframes fadeInOverlay { from { opacity: 0 } to { opacity: 1 } }
            @keyframes scaleUpBadge { from { transform: scale(0.85); opacity: 0 } to { transform: scale(1); opacity: 1 } }
            @keyframes fall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1 }
              100% { transform: translateY(105vh) rotate(720deg); opacity: 0.2 }
            }
          `}</style>
        </div>
      )}
    </ErrorBoundary>
  )
}
