import React from 'react'

/* ── Circular Progress ── */
function CircularProgress({ value, size = 52 }) {
  const r = 20
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg viewBox="0 0 52 52" width={size} height={size}>
        <circle className="track" cx="26" cy="26" r={r} />
        <circle
          className="fill"
          cx="26" cy="26" r={r}
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circular-label">{value}%</div>
    </div>
  )
}

/* ── Department card colours ── */
const depts = [
  { icon: '💻', name: 'CSE',   bg: '#eff6ff', iconBg: '#dbeafe' },
  { icon: '📡', name: 'ECE',   bg: '#f0fdf4', iconBg: '#dcfce7' },
  { icon: '⚡', name: 'EEE',   bg: '#fffbeb', iconBg: '#fef3c7' },
  { icon: '🖥️', name: 'IT',    bg: '#f0fdf4', iconBg: '#dcfce7' },
  { icon: '⚙️', name: 'ME',    bg: '#f9fafb', iconBg: '#f3f4f6' },
  { icon: '🏗️', name: 'CIVIL', bg: '#fff7ed', iconBg: '#ffedd5' },
  { icon: '✈️', name: 'AERO',  bg: '#eff6ff', iconBg: '#dbeafe' },
  { icon: '🫀', name: 'BME',   bg: '#fdf2f8', iconBg: '#fce7f3' },
  { icon: '🧬', name: 'BT',    bg: '#f0fdf4', iconBg: '#d1fae5' },
]

const quickItems = [
  { icon: '📖', label: 'Resources', sub: 'Study Materials', bg: '#ede9fe', iconBg: '#ddd6fe' },
  { icon: '🧠', label: 'Aptitude',  sub: 'Practice Now',   bg: '#fce7f3', iconBg: '#fbcfe8' },
  { icon: '🎤', label: 'Interview', sub: 'Prep Smart',     bg: '#fef3c7', iconBg: '#fde68a' },
  { icon: '💻', label: 'Coding',    sub: 'Practice Code',  bg: '#dbeafe', iconBg: '#bfdbfe' },
]

const recommended = [
  { icon: '📘', title: 'Digital Electronics', sub: 'ECE Notes',           tag: 'Notes',     tagClass: 'notes',     bg: '#ede9fe' },
  { icon: '🎙️', title: 'Embedded Systems',    sub: 'Interview Questions', tag: 'Interview', tagClass: 'interview', bg: '#fce7f3' },
  { icon: '🧠', title: 'Aptitude Shortcuts',  sub: 'Tips & Tricks',        tag: 'Aptitude',  tagClass: 'aptitude',  bg: '#ede9fe' },
]

const todayPlan = [
  { task: 'Quantitative Aptitude',     time: '30 min', done: true },
  { task: 'DSA Practice',              time: '45 min', done: true },
  { task: 'Digital Electronics Revision', time: '60 min', done: true },
]

const calendarEvents = [
  { month: 'May', day: '20', title: 'TCS Ninja',   sub: 'Aptitude Test' },
  { month: 'May', day: '24', title: 'Infosys',     sub: 'Virtual Interview' },
]

const skills = [
  { name: 'Data Structures & Algorithms', pct: 80, color: '#6c3ce1' },
  { name: 'Aptitude',                      pct: 65, color: '#f97316' },
  { name: 'System Design',                 pct: 45, color: '#3b82f6' },
  { name: 'Communication Skills',          pct: 70, color: '#22c55e' },
]

export default function Dashboard() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Hi Student 👋</h1>
          <p>Let's learn, prepare and get your dream job!</p>
          <button className="btn-primary">
            Start Learning →
          </button>
        </div>
        <HeroIllustration />
      </section>

      {/* ── Stats ── */}
      <div className="stats-grid">
        {/* Placement Readiness */}
        <div className="stat-card">
          <CircularProgress value={72} />
          <div className="stat-info">
            <div className="stat-label">Placement Readiness</div>
            <div className="stat-value">72%</div>
            <div className="stat-sub purple">Keep improving!</div>
          </div>
        </div>

        {/* Skills Completed */}
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#dcfce7' }}>📗</div>
          <div className="stat-info">
            <div className="stat-label">Skills Completed</div>
            <div className="stat-value">8 / 15</div>
            <div style={{ marginTop: 6 }}>
              <div style={{ height: 6, background: '#e5e7eb', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: '53%', height: '100%', background: '#22c55e', borderRadius: 999 }} />
              </div>
              <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3 }}>53% Completed</div>
            </div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#fff7ed' }}>🔥</div>
          <div className="stat-info">
            <div className="stat-label">Current Streak</div>
            <div className="stat-value">12 Days</div>
            <div className="stat-sub orange">Best: 18 Days</div>
          </div>
        </div>

        {/* Mock Interview Score */}
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#eff6ff' }}>🎙️</div>
          <div className="stat-info">
            <div className="stat-label">Mock Interview Score</div>
            <div className="stat-value">80%</div>
            <div className="stat-sub green">Great Performance!</div>
          </div>
        </div>
      </div>

      {/* ── Departments ── */}
      <div className="section-header">
        <span className="section-title">Explore By Department</span>
        <span className="view-all-link">View All</span>
      </div>
      <div className="departments-grid" style={{ marginBottom: 28 }}>
        {depts.map(d => (
          <div key={d.name} className="dept-card" style={{ background: d.bg }}>
            <div className="dept-icon-wrap" style={{ background: d.iconBg }}>
              {d.icon}
            </div>
            <div className="dept-name">{d.name}</div>
          </div>
        ))}
      </div>

      {/* ── Quick Access + Recommended ── */}
      <div className="bottom-grid">
        {/* Quick Access */}
        <div>
          <div className="section-header">
            <span className="section-title">Quick Access</span>
          </div>
          <div className="quick-access-grid">
            {quickItems.map(q => (
              <div key={q.label} className="quick-card" style={{ background: q.bg }}>
                <div className="quick-icon" style={{ background: q.iconBg }}>{q.icon}</div>
                <div className="quick-label">{q.label}</div>
                <div className="quick-sub">{q.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div>
          <div className="section-header">
            <span className="section-title">Recommended For You</span>
            <span className="view-all-link">View All</span>
          </div>
          <div className="recommended-list">
            {recommended.map(r => (
              <div key={r.title} className="rec-card">
                <div className="rec-thumb" style={{ background: r.bg }}>{r.icon}</div>
                <div className="rec-info">
                  <div className="rec-title">{r.title}</div>
                  <div className="rec-sub">{r.sub}</div>
                  <span className={`rec-tag ${r.tagClass}`}>{r.tag}</span>
                </div>
                <span style={{ color: '#9ca3af', fontSize: 16 }}>›</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Today's Plan / Calendar / Skills ── */}
      <div className="triple-grid">
        {/* Today's Plan */}
        <div className="plan-card">
          <div className="section-header" style={{ marginBottom: 14 }}>
            <span className="section-title">Today's Plan</span>
            <span className="view-all-link">View Plan</span>
          </div>
          {todayPlan.map(p => (
            <div key={p.task} className="plan-item">
              <div className="plan-check">{p.done ? '✓' : ''}</div>
              <div className="plan-text">{p.task}</div>
              <div className="plan-time">{p.time}</div>
            </div>
          ))}
        </div>

        {/* Placement Calendar */}
        <div className="calendar-card">
          <div className="section-header" style={{ marginBottom: 14 }}>
            <span className="section-title">Placement Calendar</span>
            <span className="view-all-link">View All</span>
          </div>
          {calendarEvents.map(e => (
            <div key={e.title} className="cal-item">
              <div className="cal-date-box">
                <div className="cal-month">{e.month}</div>
                <div className="cal-day">{e.day}</div>
              </div>
              <div className="cal-info">
                <div className="cal-title">{e.title}</div>
                <div className="cal-sub">{e.sub}</div>
              </div>
              <span className="cal-arrow">›</span>
            </div>
          ))}
          {/* Add event prompt */}
          <div style={{ marginTop: 14, textAlign: 'center' }}>
            <button style={{
              width: '100%',
              padding: '9px',
              border: '1.5px dashed #d1d5db',
              borderRadius: 10,
              background: 'none',
              color: '#9ca3af',
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s',
            }}
              onMouseOver={e => e.target.style.borderColor = '#6c3ce1'}
              onMouseOut={e => e.target.style.borderColor = '#d1d5db'}
            >
              + Add Event
            </button>
          </div>
        </div>

        {/* Skill Progress */}
        <div className="skill-card">
          <div className="section-header" style={{ marginBottom: 14 }}>
            <span className="section-title">Skill Progress</span>
            <span className="view-all-link">View All</span>
          </div>
          {skills.map(s => (
            <div key={s.name} className="skill-item">
              <div className="skill-item-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${s.pct}%`, background: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── SVG Hero Illustration (inline, no external deps) ── */
function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop */}
        <rect x="80" y="90" width="130" height="82" rx="8" fill="#6c3ce1" opacity="0.15"/>
        <rect x="86" y="96" width="118" height="70" rx="5" fill="#6c3ce1" opacity="0.25"/>
        <rect x="92" y="102" width="106" height="58" rx="3" fill="white" opacity="0.9"/>
        {/* Screen content lines */}
        <rect x="100" y="112" width="60" height="5" rx="2" fill="#6c3ce1" opacity="0.4"/>
        <rect x="100" y="121" width="80" height="4" rx="2" fill="#9ca3af" opacity="0.4"/>
        <rect x="100" y="129" width="70" height="4" rx="2" fill="#9ca3af" opacity="0.3"/>
        <rect x="100" y="137" width="50" height="4" rx="2" fill="#6c3ce1" opacity="0.3"/>
        {/* Laptop base */}
        <rect x="70" y="172" width="150" height="6" rx="3" fill="#6c3ce1" opacity="0.2"/>
        {/* Person silhouette */}
        <circle cx="220" cy="60" r="22" fill="#6c3ce1" opacity="0.2"/>
        <circle cx="220" cy="55" r="14" fill="#6c3ce1" opacity="0.35"/>
        <path d="M196 110 Q210 90 220 88 Q230 90 244 110" stroke="#6c3ce1" strokeWidth="3" fill="none" opacity="0.3"/>
        {/* Floating chart */}
        <rect x="240" y="30" width="68" height="52" rx="8" fill="white" opacity="0.85" filter="drop-shadow(0 2px 8px rgba(108,60,225,0.15))"/>
        <polyline points="250,65 260,52 270,58 280,42 290,48 300,36" stroke="#6c3ce1" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="300" cy="36" r="3" fill="#6c3ce1"/>
        {/* Floating badges */}
        <rect x="14" y="50" width="52" height="22" rx="11" fill="white" opacity="0.85" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))"/>
        <text x="40" y="65" textAnchor="middle" fontSize="10" fill="#6c3ce1" fontWeight="700" fontFamily="DM Sans">✓ DSA</text>
        <rect x="22" y="120" width="48" height="22" rx="11" fill="white" opacity="0.85" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))"/>
        <text x="46" y="135" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="700" fontFamily="DM Sans">🔥 12d</text>
        {/* Rocket emoji area */}
        <text x="188" y="30" fontSize="22">🚀</text>
        {/* Plant */}
        <ellipse cx="60" cy="168" rx="18" ry="8" fill="#22c55e" opacity="0.2"/>
        <path d="M60 165 Q55 148 50 140" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M60 165 Q65 148 70 140" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.5"/>
        <path d="M60 165 Q60 150 60 138" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.5"/>
        <ellipse cx="50" cy="140" rx="8" ry="5" fill="#22c55e" opacity="0.4" transform="rotate(-20,50,140)"/>
        <ellipse cx="70" cy="140" rx="8" ry="5" fill="#22c55e" opacity="0.4" transform="rotate(20,70,140)"/>
        <ellipse cx="60" cy="137" rx="7" ry="5" fill="#22c55e" opacity="0.4"/>
      </svg>
    </div>
  )
}
