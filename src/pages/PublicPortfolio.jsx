import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

// ── Department labels ──────────────────────────────────────────────
const DEPT_LABELS = {
  CSE:   'Computer Science Engineering',
  IT:    'Information Technology',
  ECE:   'Electronics & Communication',
  EEE:   'Electrical & Electronics',
  ME:    'Mechanical Engineering',
  CIVIL: 'Civil Engineering',
  AERO:  'Aerospace Engineering',
  BME:   'Biomedical Engineering',
  BT:    'Biotechnology',
}

const DEPT_COLORS = {
  CSE: '#2563eb', IT: '#0891b2', ECE: '#16a34a', EEE: '#d97706',
  ME: '#4b5563', CIVIL: '#ea580c', AERO: '#7c3aed', BME: '#db2777', BT: '#059669',
}

// ── Circular readiness ring ────────────────────────────────────────
function ReadinessRing({ value }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  const color = value >= 80 ? '#22c55e' : value >= 50 ? '#f97316' : '#6c3ce1'

  return (
    <div style={{ position: 'relative', width: 140, height: 140, flexShrink: 0 }}>
      <svg viewBox="0 0 128 128" width={140} height={140} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="64" cy="64" r={r} fill="none" stroke="#e9d5ff" strokeWidth={10} />
        <circle
          cx="64" cy="64" r={r} fill="none"
          stroke={color} strokeWidth={10}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ fontSize: 28, fontWeight: 900, color, fontFamily: 'Urbanist, sans-serif' }}>{value}%</div>
        <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 700, textAlign: 'center', lineHeight: 1.2 }}>Placement<br />Ready</div>
      </div>
    </div>
  )
}

// ── Skill bar ──────────────────────────────────────────────────────
function SkillBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 800, color }}>{value}%</span>
      </div>
      <div style={{ height: 8, background: '#f3f4f6', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${value}%`, background: color,
          borderRadius: 999, transition: 'width 1.4s ease',
        }} />
      </div>
    </div>
  )
}

// ── Stat chip ─────────────────────────────────────────────────────
function StatChip({ icon, label, value, color, bg }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: bg, border: `1.5px solid ${color}22`,
      borderRadius: 14, padding: '14px 18px', flex: 1, minWidth: 140,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: color + '18', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 20, fontWeight: 900, color, fontFamily: 'Urbanist, sans-serif' }}>{value}</div>
        <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>{label}</div>
      </div>
    </div>
  )
}

// ── Main public portfolio ──────────────────────────────────────────
export default function PublicPortfolio({ portfolioId }) {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState('')

  useEffect(() => {
    async function load() {
      try {
        const q = query(
          collection(db, 'users'),
          where('portfolioId', '==', portfolioId),
          where('portfolioEnabled', '==', true),
        )
        const snap = await getDocs(q)
        if (snap.empty) {
          setError('Portfolio not found or sharing has been disabled.')
        } else {
          setData(snap.docs[0].data())
        }
      } catch (e) {
        setError('Failed to load portfolio. Please try again later.')
      }
      setLoading(false)
    }
    load()
  }, [portfolioId])

  if (loading) return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #f7f4ff, #eef7ff)',
      gap: 14,
    }}>
      <div style={{
        width: 44, height: 44, border: '4px solid #e5dcff',
        borderTopColor: '#6c3ce1', borderRadius: '50%',
        animation: 'spin 0.85s linear infinite',
      }} />
      <p style={{ color: '#9ca3af', fontWeight: 600, fontFamily: 'inherit' }}>Loading portfolio...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )

  if (error) return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32,
      background: 'linear-gradient(135deg, #f7f4ff, #eef7ff)',
    }}>
      <div style={{ fontSize: 56 }}>🔒</div>
      <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 22, fontWeight: 900, color: '#111827', margin: 0 }}>
        Portfolio Unavailable
      </h2>
      <p style={{ color: '#6b7280', fontSize: 14, textAlign: 'center', maxWidth: 380, lineHeight: 1.6 }}>
        {error}
      </p>
      <a href="/" style={{
        padding: '11px 28px', background: '#6c3ce1', color: '#fff',
        borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none',
      }}>
        Go to Placeonix →
      </a>
    </div>
  )

  const branch        = data.branch || 'CSE'
  const deptLabel     = DEPT_LABELS[branch] || branch
  const deptColor     = DEPT_COLORS[branch] || '#6c3ce1'
  const name          = data.name || 'Placeonix Student'
  const careerGoal    = data.careerGoal || 'Software Engineer'
  const readiness     = data.placementReadiness ?? 0
  const aptitude      = data.aptitudeScore ?? 0
  const mockScore     = data.mockInterviewScore ?? 0
  const streak        = data.bestStreak ?? 0
  const interviews    = data.interviewsCompleted ?? 0
  const codingScore   = data.codingScore ?? 0
  const initials      = name.trim().split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #f5f3ff 0%, #eef7ff 50%, #f0fff4 100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#111827',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Urbanist:wght@700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .port-card { animation: fadeUp 0.5s ease forwards; }
      `}</style>

      {/* ── Top banner ── */}
      <div style={{
        background: `linear-gradient(135deg, ${deptColor}ee, #6c3ce1cc)`,
        padding: '52px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative blobs */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />

        {/* Avatar */}
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: 'rgba(255,255,255,0.25)',
          border: '3px solid rgba(255,255,255,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Urbanist, sans-serif', fontSize: 32, fontWeight: 900,
          color: '#fff', margin: '0 auto 16px', backdropFilter: 'blur(8px)',
        }}>
          {initials}
        </div>

        <h1 style={{
          fontFamily: 'Urbanist, sans-serif', fontSize: 'clamp(28px, 6vw, 44px)',
          fontWeight: 900, color: '#fff', marginBottom: 8, letterSpacing: '-1px',
        }}>{name}</h1>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 999, padding: '6px 16px', marginBottom: 8, backdropFilter: 'blur(6px)',
        }}>
          <span style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>🎯 {careerGoal}</span>
        </div>

        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
          {deptLabel} · Verified on Placeonix
        </div>
      </div>

      {/* ── Content area ── */}
      <div style={{ maxWidth: 860, margin: '-48px auto 0', padding: '0 20px 60px' }}>

        {/* Readiness + Stats row */}
        <div className="port-card" style={{
          background: '#fff', borderRadius: 20, padding: '28px',
          boxShadow: '0 8px 40px rgba(108,60,225,0.12)',
          display: 'flex', alignItems: 'center', gap: 28,
          flexWrap: 'wrap', marginBottom: 20,
        }}>
          <ReadinessRing value={readiness} />
          <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <StatChip icon="🧠" label="Best Aptitude" value={`${aptitude}%`} color="#db2777" bg="#fdf2f8" />
            <StatChip icon="🤖" label="Best Mock Score" value={`${mockScore}%`} color="#d97706" bg="#fffbeb" />
            <StatChip icon="🔥" label="Best Streak" value={`${streak}d`} color="#f97316" bg="#fff7ed" />
            <StatChip icon="🎙️" label="Interviews Done" value={interviews} color="#2563eb" bg="#eff6ff" />
          </div>
        </div>

        {/* Skills progress */}
        <div className="port-card" style={{
          background: '#fff', borderRadius: 20, padding: '28px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: 20,
          animationDelay: '0.1s',
        }}>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: '#111827', marginBottom: 20 }}>
            📊 Skill Scores
          </h2>
          <SkillBar label="Aptitude & Reasoning" value={aptitude}      color="#db2777" />
          <SkillBar label="Mock Interview Score"  value={mockScore}     color="#d97706" />
          <SkillBar label="Coding Practice"       value={codingScore}   color="#2563eb" />
          <SkillBar label="Overall Readiness"     value={readiness}     color="#6c3ce1" />
        </div>

        {/* About / career goal */}
        <div className="port-card" style={{
          background: '#fff', borderRadius: 20, padding: '28px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: 20,
          animationDelay: '0.15s',
        }}>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: '#111827', marginBottom: 16 }}>
            👤 About
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Department', value: deptLabel },
              { label: 'Career Goal', value: careerGoal },
              { label: 'Mock Interviews', value: `${interviews} completed` },
              { label: 'Best Study Streak', value: `${streak} days` },
            ].map(item => (
              <div key={item.label} style={{
                background: '#f9fafb', borderRadius: 12, padding: '14px 16px',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Powered by footer */}
        <div style={{ textAlign: 'center', paddingTop: 12 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', border: '1.5px solid #ede9fe',
              borderRadius: 999, padding: '10px 22px',
              boxShadow: '0 2px 12px rgba(108,60,225,0.1)',
            }}>
              <span style={{ fontSize: 16 }}>🎓</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#6c3ce1' }}>
                Powered by Placeonix
              </span>
              <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>
                · Create your free portfolio
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
