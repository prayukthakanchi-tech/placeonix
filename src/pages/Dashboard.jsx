import React from 'react'
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  Building2,
  CalendarPlus,
  Code2,
  Cpu,
  Flame,
  Gauge,
  GraduationCap,
  Headphones,
  Laptop,
  Mic2,
  Plane,
  Radio,
  Rocket,
  Stethoscope,
  Trophy,
  Wrench,
  Zap,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

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
          cx="26"
          cy="26"
          r={r}
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circular-label">{value}%</div>
    </div>
  )
}

const depts = [
  { icon: Cpu, name: 'CSE', bg: '#eff6ff', iconBg: '#dbeafe' },
  { icon: Radio, name: 'ECE', bg: '#f0fdf4', iconBg: '#dcfce7' },
  { icon: Zap, name: 'EEE', bg: '#fffbeb', iconBg: '#fef3c7' },
  { icon: Laptop, name: 'IT', bg: '#f0fdf4', iconBg: '#dcfce7' },
  { icon: Wrench, name: 'ME', bg: '#f9fafb', iconBg: '#f3f4f6' },
  { icon: Building2, name: 'CIVIL', bg: '#fff7ed', iconBg: '#ffedd5' },
  { icon: Plane, name: 'AERO', bg: '#eff6ff', iconBg: '#dbeafe' },
  { icon: Stethoscope, name: 'BME', bg: '#fdf2f8', iconBg: '#fce7f3' },
  { icon: Brain, name: 'BT', bg: '#f0fdf4', iconBg: '#d1fae5' },
]

const quickItems = [
  { icon: BookOpen, label: 'Resources', sub: 'Study Materials', bg: '#ede9fe', iconBg: '#ddd6fe' },
  { icon: Brain, label: 'Aptitude', sub: 'Practice Now', bg: '#fce7f3', iconBg: '#fbcfe8' },
  { icon: Mic2, label: 'Interview', sub: 'Prep Smart', bg: '#fef3c7', iconBg: '#fde68a' },
  { icon: Code2, label: 'Coding', sub: 'Practice Code', bg: '#dbeafe', iconBg: '#bfdbfe' },
]

const recommended = [
  { icon: Cpu, title: 'Digital Electronics', sub: 'ECE Notes', tag: 'Notes', tagClass: 'notes', bg: '#ede9fe' },
  { icon: Bot, title: 'Embedded Systems', sub: 'Interview Questions', tag: 'Interview', tagClass: 'interview', bg: '#fce7f3' },
  { icon: Brain, title: 'Aptitude Shortcuts', sub: 'Tips & Tricks', tag: 'Aptitude', tagClass: 'aptitude', bg: '#ede9fe' },
]

const todayPlan = [
  { task: 'Quantitative Aptitude', time: '30 min', done: true },
  { task: 'DSA Practice', time: '45 min', done: true },
  { task: 'Digital Electronics Revision', time: '60 min', done: true },
]

const calendarEvents = [
  { month: 'May', day: '20', title: 'TCS Ninja', sub: 'Aptitude Test' },
  { month: 'May', day: '24', title: 'Infosys', sub: 'Virtual Interview' },
]

const skills = [
  { name: 'Data Structures & Algorithms', pct: 80, color: '#6c3ce1' },
  { name: 'Aptitude', pct: 65, color: '#f97316' },
  { name: 'System Design', pct: 45, color: '#3b82f6' },
  { name: 'Communication Skills', pct: 70, color: '#22c55e' },
]

export default function Dashboard() {
  const { user, profile } = useAuth()
  const displayName = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const readiness = profile?.placementReadiness ?? 78
  const skillsCompleted = profile?.skillsCompleted ?? 0
  const skillsTarget = profile?.skillsTarget ?? 15
  const skillsPercent = skillsTarget ? Math.round((skillsCompleted / skillsTarget) * 100) : 0
  const currentStreak = profile?.currentStreak ?? 0
  const bestStreak = profile?.bestStreak ?? 0
  const mockInterviewScore = profile?.mockInterviewScore ?? 0
  const xp = profile?.xp ?? 0
  const interviewsCompleted = profile?.interviewsCompleted ?? 0

  return (
    <div>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Hi {displayName}</h1>
          <p>Let's learn, prepare and get your dream job!</p>
          <button className="btn-primary" type="button">
            Start Learning
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <HeroIllustration />
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#ede9fe' }}>
            <Gauge size={24} aria-hidden="true" />
          </div>
          <CircularProgress value={readiness} />
          <div className="stat-info">
            <div className="stat-label">Placement Readiness</div>
            <div className="stat-value">{readiness}%</div>
            <div className="stat-sub purple">Keep improving!</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#dcfce7' }}>
            <GraduationCap size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Skills Completed</div>
            <div className="stat-value">{skillsCompleted} / {skillsTarget}</div>
            <div style={{ marginTop: 6 }}>
              <div style={{ height: 6, background: '#e5e7eb', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${skillsPercent}%`, height: '100%', background: '#22c55e', borderRadius: 999 }} />
              </div>
              <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3 }}>{skillsPercent}% Completed</div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#fff7ed' }}>
            <Flame size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Current Streak</div>
            <div className="stat-value">{currentStreak} Days</div>
            <div className="stat-sub orange">Best: {bestStreak} Days</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#eff6ff' }}>
            <Trophy size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Mock Interview Score</div>
            <div className="stat-value">{mockInterviewScore}%</div>
            <div className="stat-sub green">{interviewsCompleted} interviews completed</div>
          </div>
        </div>
      </div>

      <div className="user-progress-strip">
        <div>
          <span>Department</span>
          <strong>{profile?.branch || 'ECE'}</strong>
        </div>
        <div>
          <span>Account</span>
          <strong>{user?.email}</strong>
        </div>
      </div>

      <div className="section-header">
        <span className="section-title">Explore By Department</span>
        <span className="view-all-link">View All</span>
      </div>
      <div className="departments-grid" style={{ marginBottom: 28 }}>
        {depts.map(d => {
          const Icon = d.icon
          return (
          <div key={d.name} className="dept-card" style={{ background: d.bg }}>
            <div className="dept-icon-wrap" style={{ background: d.iconBg }}>
              <Icon size={22} aria-hidden="true" />
            </div>
            <div className="dept-name">{d.name}</div>
          </div>
        )})}
      </div>

      <div className="bottom-grid">
        <div>
          <div className="section-header">
            <span className="section-title">Quick Access</span>
          </div>
          <div className="quick-access-grid">
            {quickItems.map(q => {
              const Icon = q.icon
              return (
              <div key={q.label} className="quick-card" style={{ background: q.bg }}>
                <div className="quick-icon" style={{ background: q.iconBg }}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="quick-label">{q.label}</div>
                <div className="quick-sub">{q.sub}</div>
              </div>
            )})}
          </div>
        </div>

        <div>
          <div className="section-header">
            <span className="section-title">Recommended For You</span>
            <span className="view-all-link">View All</span>
          </div>
          <div className="recommended-list">
            {recommended.map(r => {
              const Icon = r.icon
              return (
              <div key={r.title} className="rec-card">
                <div className="rec-thumb" style={{ background: r.bg }}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="rec-info">
                  <div className="rec-title">{r.title}</div>
                  <div className="rec-sub">{r.sub}</div>
                  <span className={`rec-tag ${r.tagClass}`}>{r.tag}</span>
                </div>
                <ArrowRight size={16} color="#9ca3af" aria-hidden="true" />
              </div>
            )})}
          </div>
        </div>
      </div>

      <div className="triple-grid">
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
              <ArrowRight className="cal-arrow" size={16} aria-hidden="true" />
            </div>
          ))}
          <div style={{ marginTop: 14, textAlign: 'center' }}>
            <button className="add-event-btn" type="button">
              <CalendarPlus size={16} aria-hidden="true" />
              + Add Event
            </button>
          </div>
        </div>

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

function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="90" width="130" height="82" rx="8" fill="#6c3ce1" opacity="0.15" />
        <rect x="86" y="96" width="118" height="70" rx="5" fill="#6c3ce1" opacity="0.25" />
        <rect x="92" y="102" width="106" height="58" rx="3" fill="white" opacity="0.9" />
        <rect x="100" y="112" width="60" height="5" rx="2" fill="#6c3ce1" opacity="0.4" />
        <rect x="100" y="121" width="80" height="4" rx="2" fill="#9ca3af" opacity="0.4" />
        <rect x="100" y="129" width="70" height="4" rx="2" fill="#9ca3af" opacity="0.3" />
        <rect x="100" y="137" width="50" height="4" rx="2" fill="#6c3ce1" opacity="0.3" />
        <rect x="70" y="172" width="150" height="6" rx="3" fill="#6c3ce1" opacity="0.2" />
        <circle cx="220" cy="60" r="22" fill="#6c3ce1" opacity="0.2" />
        <circle cx="220" cy="55" r="14" fill="#6c3ce1" opacity="0.35" />
        <path d="M196 110 Q210 90 220 88 Q230 90 244 110" stroke="#6c3ce1" strokeWidth="3" fill="none" opacity="0.3" />
        <rect x="240" y="30" width="68" height="52" rx="8" fill="white" opacity="0.85" />
        <polyline points="250,65 260,52 270,58 280,42 290,48 300,36" stroke="#6c3ce1" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="300" cy="36" r="3" fill="#6c3ce1" />
        <foreignObject x="178" y="18" width="34" height="34">
          <Rocket size={26} color="#6c3ce1" />
        </foreignObject>
        <foreignObject x="20" y="48" width="54" height="28">
          <Headphones size={24} color="#f97316" />
        </foreignObject>
      </svg>
    </div>
  )
}
