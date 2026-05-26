import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

/* ── Tab button ── */
function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 18px',
        borderRadius: 999,
        border: 'none',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        background: active ? 'var(--purple-primary)' : '#f3f4f6',
        color: active ? '#fff' : 'var(--text-secondary)',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </button>
  )
}

/* ── Company list card ── */
function CompanyCard({ company, onClick, active }) {
  return (
    <div
      onClick={() => onClick(company)}
      style={{
        background: active ? 'var(--purple-xsoft)' : '#fff',
        border: `1.5px solid ${active ? 'var(--purple-primary)' : 'var(--card-border)'}`,
        borderRadius: 14,
        padding: '14px 18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        transition: 'all 0.2s',
        boxShadow: active ? '0 4px 16px rgba(108,60,225,0.12)' : '0 1px 3px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = '#c4b5fd' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = 'var(--card-border)' }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: company.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        flexShrink: 0,
      }}>
        {company.logo}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>
          {company.name}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{company.type}</div>
      </div>
      <div style={{
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--purple-primary)',
        background: 'var(--purple-soft)',
        padding: '3px 10px',
        borderRadius: 999,
        whiteSpace: 'nowrap',
      }}>
        {company.package}
      </div>
    </div>
  )
}

/* ── Detail panel ── */
function CompanyDetail({ company }) {
  const [tab, setTab] = useState('overview')

  const tabs = ['overview', 'rounds', 'aptitude', 'experiences', 'resources']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(120deg, ${company.bg}, #f5f3ff)`,
        borderRadius: '14px 14px 0 0',
        padding: '24px 28px',
        border: '1.5px solid var(--card-border)',
        borderBottom: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{
            width: 60,
            height: 60,
            borderRadius: 16,
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            {company.logo}
          </div>
          <div>
            <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--text-primary)', marginBottom: 3 }}>
              {company.fullName}
            </h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, background: '#fff', color: 'var(--text-secondary)', padding: '2px 10px', borderRadius: 999, fontWeight: 600, border: '1px solid var(--card-border)' }}>
                {company.type}
              </span>
              <span style={{ fontSize: 12, background: 'var(--purple-soft)', color: 'var(--purple-primary)', padding: '2px 10px', borderRadius: 999, fontWeight: 700 }}>
                💰 {company.package}
              </span>
              <span style={{ fontSize: 12, background: '#dcfce7', color: '#15803d', padding: '2px 10px', borderRadius: 999, fontWeight: 600 }}>
                📅 {company.deadline}
              </span>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {company.roles.map(r => (
            <span key={r} style={{
              fontSize: 12,
              background: '#fff',
              color: 'var(--text-primary)',
              padding: '4px 12px',
              borderRadius: 999,
              fontWeight: 600,
              border: '1px solid var(--card-border)',
            }}>
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: 6,
        padding: '12px 20px',
        background: '#fff',
        border: '1.5px solid var(--card-border)',
        borderTop: 'none',
        borderBottom: 'none',
        overflowX: 'auto',
      }}>
        {tabs.map(t => (
          <Tab key={t} label={t.charAt(0).toUpperCase() + t.slice(1)} active={tab === t} onClick={() => setTab(t)} />
        ))}
      </div>

      {/* Tab content */}
      <div style={{
        background: '#fff',
        border: '1.5px solid var(--card-border)',
        borderTop: 'none',
        borderRadius: '0 0 14px 14px',
        padding: '24px 28px',
        minHeight: 320,
      }}>
        {tab === 'overview' && <OverviewTab company={company} />}
        {tab === 'rounds' && <RoundsTab company={company} />}
        {tab === 'aptitude' && <AptitudeTab company={company} />}
        {tab === 'experiences' && <ExperiencesTab company={company} />}
        {tab === 'resources' && <ResourcesTab company={company} />}
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 15, color: 'var(--text-primary)', marginBottom: 14, marginTop: 4 }}>
      {children}
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, minWidth: 120 }}>{label}</div>
      <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600, flex: 1 }}>{value}</div>
    </div>
  )
}

function OverviewTab({ company }) {
  return (
    <div>
      <SectionTitle>📋 Eligibility Criteria</SectionTitle>
      <div style={{ background: 'var(--main-bg)', borderRadius: 12, padding: '4px 16px', marginBottom: 24 }}>
        <InfoRow label="Min CGPA" value={company.eligibility.cgpa} />
        <InfoRow label="Backlogs" value={company.eligibility.backlogs} />
        <InfoRow label="Branches" value={company.eligibility.branches} />
        <InfoRow label="Year Gap" value={company.eligibility.gap} />
        <InfoRow label="Visit Freq." value={company.visitFrequency} />
      </div>

      <SectionTitle>🛠️ Required Skills</SectionTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {company.skills.map(s => (
          <span key={s} style={{
            padding: '5px 14px',
            borderRadius: 999,
            background: 'var(--purple-xsoft)',
            color: 'var(--purple-primary)',
            fontSize: 13,
            fontWeight: 600,
            border: '1px solid var(--purple-soft)',
          }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function RoundsTab({ company }) {
  return (
    <div>
      <SectionTitle>🔄 Interview Rounds</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {company.rounds.map((r, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start',
            background: 'var(--main-bg)',
            borderRadius: 12,
            padding: '16px 18px',
            border: '1px solid var(--card-border)',
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'var(--purple-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              flexShrink: 0,
            }}>
              {r.icon}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                <span style={{
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  background: 'var(--purple-primary)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {i + 1}
                </span>
                <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{r.name}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AptitudeTab({ company }) {
  return (
    <div>
      <SectionTitle>🧠 Aptitude Pattern</SectionTitle>
      <div style={{
        background: 'var(--main-bg)',
        borderRadius: 12,
        padding: '18px 20px',
        fontSize: 14,
        color: 'var(--text-secondary)',
        lineHeight: 1.8,
        marginBottom: 24,
        border: '1px solid var(--card-border)',
      }}>
        {company.aptitude}
      </div>

      <SectionTitle>💻 Coding Round Details</SectionTitle>
      <div style={{
        background: '#f0fdf4',
        borderRadius: 12,
        padding: '18px 20px',
        fontSize: 14,
        color: '#166534',
        lineHeight: 1.8,
        border: '1px solid #bbf7d0',
      }}>
        {company.coding}
      </div>
    </div>
  )
}

function ExperiencesTab({ company }) {
  if (!company.experiences || company.experiences.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>📝</div>
        <div style={{ fontWeight: 600 }}>No experiences yet</div>
        <div style={{ fontSize: 13, marginTop: 4 }}>Be the first to share your interview experience!</div>
      </div>
    )
  }

  return (
    <div>
      <SectionTitle>💬 Interview Experiences</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {company.experiences.map((exp, i) => (
          <div key={i} style={{
            background: 'var(--main-bg)',
            borderRadius: 12,
            padding: '18px 20px',
            border: '1px solid var(--card-border)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                background: 'var(--purple-soft)',
                color: 'var(--purple-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 14,
              }}>
                {exp.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)' }}>{exp.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{exp.branch} · {exp.year}</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.7 }}>"{exp.text}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResourcesTab({ company }) {
  return (
    <div>
      <SectionTitle>📚 Preparation Resources</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {company.resources.map((res, i) => (
          <a
            key={i}
            href={res.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 18px',
              background: 'var(--main-bg)',
              borderRadius: 12,
              border: '1px solid var(--card-border)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              color: 'inherit',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--purple-primary)'
              e.currentTarget.style.background = 'var(--purple-xsoft)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--card-border)'
              e.currentTarget.style.background = 'var(--main-bg)'
            }}
          >
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'var(--purple-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              flexShrink: 0,
            }}>
              🔗
            </div>
            <div style={{ flex: 1, fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>
              {res.label}
            </div>
            <span style={{ color: 'var(--purple-primary)', fontSize: 18 }}>→</span>
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Main PlacementHub page ── */
export default function PlacementHub() {

  const [query, setQuery] = useState('')
  const [companies, setCompanies] = useState([])
  const [selected, setSelected] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)


  useEffect(() => {
    async function fetchCompanies() {

      const querySnapshot = await getDocs(
        collection(db, 'companies')
      )

      const data = querySnapshot.docs.map(doc => ({
  id: doc.id,

  logo: "🏢",
  bg: "#eef2ff",
  fullName: doc.data().name || "Company",
  type: "Service",
  deadline: "Usually Aug–Oct",

  eligibility: {
    cgpa: "6.0 and above",
    backlogs: "No active backlogs",
    branches: doc.data().departments || "All branches",
    gap: "Max 2 years"
  },

  visitFrequency: "Visits every year",

  rounds: [
    {
      icon: "📝",
      name: "Aptitude Round",
      desc: "Quantitative, Logical and Verbal questions"
    },
    {
      icon: "💻",
      name: "Technical Round",
      desc: "Programming and technical concepts"
    },
    {
      icon: "🎤",
      name: "HR Round",
      desc: "Communication and personal interview"
    }
  ],

  aptitude: "Quantitative aptitude + logical reasoning + verbal ability",

  coding: "Basic coding questions and DSA",

  experiences: [],

  resources: [
    {
      label: "GeeksforGeeks Preparation",
      link: "https://www.geeksforgeeks.org"
    }
  ],

  ...doc.data(),

  roles: doc.data().roles
    ? doc.data().roles.split(',')
    : [],

  skills: doc.data().skills
    ? doc.data().skills.split(',')
    : []
}))

      setCompanies(data)

      if (data.length > 0) {
        setSelected(data[0])
      }
    }

    fetchCompanies()

  }, [])


  function handleSearch(val) {

    setQuery(val)

    if (val.trim() === '') {

      setIsSearching(false)
      setSearchResults([])

    } else {

      setIsSearching(true)

      const filtered = companies.filter(company =>
        company.name
          ?.toLowerCase()
          .includes(val.toLowerCase())
      )

      setSearchResults(filtered)

    }
  }


  const displayList =
    isSearching ? searchResults : companies

    return (
  <div>

    <div>
      {/* Page header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 26, color: 'var(--text-primary)', marginBottom: 4 }}>
          🚀 Placement Hub
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Search any company — eligibility, package, interview pattern, experiences &amp; resources.
        </p>
      </div>

      {/* Search bar */}
      <div style={{ position: 'relative', marginBottom: 24, maxWidth: 520 }}>
        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: 'var(--text-muted)' }}>🔍</span>
        <input
          type="text"
          placeholder="Search TCS, Infosys, Amazon, Accenture..."
          value={query}
          onChange={e => handleSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 18px 12px 44px',
            border: '1.5px solid var(--card-border)',
            borderRadius: 999,
            fontSize: 14,
            fontFamily: 'inherit',
            outline: 'none',
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            transition: 'all 0.2s',
            color: 'var(--text-primary)',
          }}
          onFocus={e => {
            e.target.style.borderColor = 'var(--purple-primary)'
            e.target.style.boxShadow = '0 0 0 3px rgba(108,60,225,0.1)'
          }}
          onBlur={e => {
            e.target.style.borderColor = 'var(--card-border)'
            e.target.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
          }}
        />
      </div>

      {/* No results */}
      {isSearching && searchResults.length === 0 && (
        <div style={{
          background: '#fff',
          border: '1.5px solid var(--card-border)',
          borderRadius: 14,
          padding: '32px',
          textAlign: 'center',
          marginBottom: 24,
          color: 'var(--text-muted)',
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔎</div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>No company found for "{query}"</div>
          <div style={{ fontSize: 13 }}>Try: TCS, Infosys, Wipro, Accenture, Amazon, Cognizant</div>
        </div>
      )}

      {/* Two column layout */}
      {(!isSearching || searchResults.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20, alignItems: 'start' }}>
          {/* Left — company list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {isSearching && (
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </div>
            )}
            {displayList.map(c => (
              <CompanyCard
                key={c.id}
                company={c}
                onClick={setSelected}
                active={selected?.id === c.id}
              />
            ))}
          </div>

          {/* Right — detail */}
<div>
  {selected && <CompanyDetail company={selected} />}
</div>

        </div>
      )}
      
    </div>

  </div>
)
}