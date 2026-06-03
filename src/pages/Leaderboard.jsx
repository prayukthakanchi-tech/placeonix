import React, { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'

const TABS = ['Overall', 'Aptitude', 'Coding', 'XP']

const MEDALS = ['🥇', '🥈', '🥉']

// Gradient backgrounds for top 3
const TOP3_STYLES = [
  { border: '#facc15', bg: 'linear-gradient(135deg, #fffbeb, #fef9c3)', shadow: '0 4px 20px rgba(250,204,21,0.25)' },
  { border: '#94a3b8', bg: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', shadow: '0 4px 20px rgba(148,163,184,0.2)' },
  { border: '#f97316', bg: 'linear-gradient(135deg, #fff7ed, #ffedd5)', shadow: '0 4px 20px rgba(249,115,22,0.2)' },
]

function getRankField(tab) {
  if (tab === 'Aptitude') return 'mockInterviewScore'
  if (tab === 'Coding')   return 'skillsCompleted'
  if (tab === 'XP')       return 'xp'
  return 'placementReadiness'
}

function getRankLabel(tab) {
  if (tab === 'Aptitude') return 'Score'
  if (tab === 'Coding')   return 'Problems'
  if (tab === 'XP')       return 'XP'
  return 'Readiness'
}

function getRankUnit(tab) {
  if (tab === 'Aptitude') return 'pts'
  if (tab === 'Coding')   return 'solved'
  if (tab === 'XP')       return 'xp'
  return '%'
}

function Avatar({ name, size = 40, rank }) {
  const colors = [
    ['#6c3ce1', '#8b5cf6'], ['#059669', '#34d399'], ['#dc2626', '#f87171'],
    ['#2563eb', '#60a5fa'], ['#d97706', '#fbbf24'], ['#7c3aed', '#a78bfa'],
  ]
  const idx = (name?.charCodeAt(0) || 0) % colors.length
  const [from, to] = colors[idx]
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <div style={{ width: size, height: size, borderRadius: 999, background: `linear-gradient(135deg, ${from}, ${to})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: size * 0.36, fontFamily: 'Urbanist, sans-serif' }}>
        {name?.slice(0, 1).toUpperCase() || '?'}
      </div>
      {rank !== undefined && rank < 3 && (
        <div style={{ position: 'absolute', bottom: -4, right: -4, fontSize: 14, lineHeight: 1 }}>{MEDALS[rank]}</div>
      )}
    </div>
  )
}

function PodiumCard({ user, rank, tab }) {
  const field = getRankField(tab)
  const unit  = getRankUnit(tab)
  const s     = TOP3_STYLES[rank]
  const displayName = user.email?.split('@')[0] || 'Student'

  return (
    <div style={{ textAlign: 'center', flex: 1, maxWidth: 200 }}>
      <div style={{ background: s.bg, border: `2px solid ${s.border}`, borderRadius: 20, padding: '24px 16px 20px', boxShadow: s.shadow, transition: 'transform 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
          <Avatar name={displayName} size={52} rank={rank} />
        </div>
        <div style={{ fontSize: 18, marginBottom: 6 }}>{MEDALS[rank]}</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#111827', marginBottom: 2 }}>{displayName}</div>
        <div style={{ fontSize: 11.5, color: '#9ca3af', marginBottom: 10 }}>{user.branch || 'Student'}</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: rank === 0 ? '#d97706' : rank === 1 ? '#64748b' : '#ea580c', fontFamily: 'Urbanist, sans-serif' }}>
          {user[field] ?? 0}<span style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af', marginLeft: 3 }}>{unit}</span>
        </div>
        <div style={{ fontSize: 10.5, color: '#9ca3af', marginTop: 2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{getRankLabel(tab)}</div>
      </div>
      <div style={{ marginTop: 10, fontSize: 12, color: '#6b7280', fontWeight: 700 }}>#{rank + 1}</div>
    </div>
  )
}

export default function Leaderboard() {
  const { user } = useAuth()
  const [tab, setTab]           = useState('Overall')
  const [users, setUsers]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [search, setSearch]     = useState('')

  useEffect(() => {
    const field = getRankField(tab)
    const q = query(collection(db, 'users'), orderBy(field, 'desc'), limit(50))
    const unsub = onSnapshot(q, snap => {
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }, () => setLoading(false))
    return unsub
  }, [tab])

  const field  = getRankField(tab)
  const unit   = getRankUnit(tab)

  const filtered = users.filter(u => {
    const name = u.email?.split('@')[0] || ''
    return !search || name.toLowerCase().includes(search.toLowerCase()) || u.branch?.toLowerCase().includes(search.toLowerCase())
  })

  const myRank = users.findIndex(u => u.id === user?.uid) + 1

  const top3    = filtered.slice(0, 3)
  const rest    = filtered.slice(3)

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 26, color: 'var(--text-primary)', marginBottom: 4 }}>🏆 Leaderboard</h1>
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>Top students ranked by placement readiness, aptitude, coding, and XP</p>
      </div>

      {/* Your rank banner */}
      {myRank > 0 && (
        <div style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', border: '1.5px solid #c4b5fd', borderRadius: 16, padding: '16px 22px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Avatar name={user?.email?.split('@')[0]} size={44} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>Your Ranking</div>
              <div style={{ fontSize: 12.5, color: '#6b7280' }}>{user?.email?.split('@')[0]} · {tab} Leaderboard</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: '#7c3aed', fontFamily: 'Urbanist, sans-serif' }}>#{myRank}</div>
              <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>RANK</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: '#7c3aed', fontFamily: 'Urbanist, sans-serif' }}>
                {users.find(u => u.id === user?.uid)?.[field] ?? 0}
                <span style={{ fontSize: 13, color: '#9ca3af' }}>{unit}</span>
              </div>
              <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>{getRankLabel(tab).toUpperCase()}</div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs + Search */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 4, background: '#f3f4f6', borderRadius: 12, padding: 4 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: '7px 16px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'inherit', transition: 'all 0.15s',
                background: tab === t ? '#fff' : 'transparent',
                color: tab === t ? 'var(--purple-primary)' : 'var(--text-muted)',
                boxShadow: tab === t ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              }}>{t}</button>
          ))}
        </div>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#9ca3af' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or branch..."
            style={{ width: '100%', padding: '8px 12px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 10, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: '#fff' }}
            onFocus={e => e.target.style.borderColor = '#7c3aed'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
        </div>
        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{filtered.length} students</span>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          <div style={{ width: 36, height: 36, border: '3px solid #e5e7eb', borderTopColor: '#7c3aed', borderRadius: 999, animation: 'spin 0.8s linear infinite', margin: '0 auto 14px' }} />
          Loading leaderboard...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>No students found</div>
        </div>
      ) : (
        <>
          {/* Podium — Top 3 */}
          {top3.length >= 1 && (
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap' }}>
              {/* Reorder: 2nd | 1st | 3rd */}
              {[
                top3[1] && { user: top3[1], rank: 1 },
                top3[0] && { user: top3[0], rank: 0 },
                top3[2] && { user: top3[2], rank: 2 },
              ].filter(Boolean).map(({ user: u, rank }) => (
                <PodiumCard key={u.id} user={u} rank={rank} tab={tab} />
              ))}
            </div>
          )}

          {/* Rest of leaderboard */}
          {rest.length > 0 && (
            <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
              {rest.map((u, i) => {
                const rank        = i + 4
                const isMe        = u.id === user?.uid
                const displayName = u.email?.split('@')[0] || 'Student'
                const val         = u[field] ?? 0
                const maxVal      = users[0]?.[field] ?? 1

                return (
                  <div key={u.id}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', borderBottom: i < rest.length - 1 ? '1px solid #f3f4f6' : 'none',
                      background: isMe ? 'linear-gradient(90deg, #f5f3ff, #fff)' : '#fff',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (!isMe) e.currentTarget.style.background = '#fafafa' }}
                    onMouseLeave={e => { if (!isMe) e.currentTarget.style.background = '#fff' }}>
                    {/* Rank */}
                    <div style={{ width: 32, textAlign: 'center', fontSize: 13, fontWeight: 800, color: isMe ? '#7c3aed' : '#9ca3af', flexShrink: 0 }}>
                      #{rank}
                    </div>
                    <Avatar name={displayName} size={36} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: isMe ? '#7c3aed' : '#111827' }}>{displayName}</span>
                        {isMe && <span style={{ fontSize: 10, fontWeight: 800, color: '#7c3aed', background: '#f5f3ff', padding: '1px 7px', borderRadius: 999, border: '1px solid #c4b5fd' }}>YOU</span>}
                      </div>
                      <div style={{ fontSize: 11.5, color: '#9ca3af' }}>{u.branch || 'Student'}</div>
                    </div>
                    {/* Bar */}
                    <div style={{ flex: 1, maxWidth: 160 }}>
                      <div style={{ height: 5, background: '#f3f4f6', borderRadius: 999, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(val / maxVal) * 100}%`, background: isMe ? 'linear-gradient(90deg, #7c3aed, #6366f1)' : 'linear-gradient(90deg, #e5e7eb, #d1d5db)', borderRadius: 999, transition: 'width 0.6s ease' }} />
                      </div>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 900, color: isMe ? '#7c3aed' : '#374151', fontFamily: 'Urbanist, sans-serif', minWidth: 60, textAlign: 'right' }}>
                      {val}<span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, marginLeft: 2 }}>{unit}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
