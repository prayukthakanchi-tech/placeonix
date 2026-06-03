import React, { useState, useEffect } from 'react'
import {
  collection, onSnapshot, doc, updateDoc, serverTimestamp, query, orderBy
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'

// ── Admin email whitelist (add your email here) ───────────────────
const ADMIN_EMAILS = ['admin@placeonix.com', 'prayukthakanchi@gmail.com']

const ORDER_STATUSES = [
  { key: 'payment_received',         label: 'Payment Received',          color: '#6366f1' },
  { key: 'resume_received',          label: 'Resume Received',           color: '#8b5cf6' },
  { key: 'under_review',             label: 'Under Review',              color: '#f97316' },
  { key: 'ats_complete',             label: 'ATS Analysis Complete',     color: '#eab308' },
  { key: 'optimization_in_progress', label: 'Optimization In Progress',  color: '#3b82f6' },
  { key: 'final_review',             label: 'Final Review',              color: '#a855f7' },
  { key: 'delivered',                label: 'Delivered',                 color: '#16a34a' },
]

const PLAN_COLORS = {
  starter: '#6366f1',
  upgrade: '#7c3aed',
  success: '#059669',
}

function StatusBadge({ status }) {
  const s = ORDER_STATUSES.find(o => o.key === status) || { label: status, color: '#9ca3af' }
  return (
    <span style={{ fontSize: 11, fontWeight: 700, color: s.color, background: s.color + '18', border: `1px solid ${s.color}44`, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap' }}>
      {s.label}
    </span>
  )
}

function OrderDetail({ order, onClose }) {
  const [status, setStatus]   = useState(order.status)
  const [notes, setNotes]     = useState(order.adminNotes || '')
  const [saving, setSaving]   = useState(false)
  const [saved,  setSaved]    = useState(false)

  const statusIndex = ORDER_STATUSES.findIndex(s => s.key === status)

  async function handleSave() {
    setSaving(true)
    try {
      await updateDoc(doc(db, 'orders', order.id), {
        status,
        adminNotes: notes,
        updatedAt: serverTimestamp(),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      alert('Save failed: ' + e.message)
    }
    setSaving(false)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 640, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.25)' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fafafa' }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, color: '#111827', fontFamily: 'Urbanist, sans-serif' }}>{order.orderId}</div>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{order.planName} · ₹{order.price}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#9ca3af' }}>×</button>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Customer info */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Customer Details</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                ['Name', order.customerName],
                ['Email', order.customerEmail],
                ['Mobile', order.customerMobile],
                ['Job Role', order.jobRole],
                ['Branch', order.branch],
                ['Graduation', order.graduationYear],
                ['LinkedIn', order.linkedin || '—'],
                ['Payment ID', order.paymentId],
              ].map(([k, v]) => (
                <div key={k} style={{ background: '#f9fafb', borderRadius: 10, padding: '10px 14px' }}>
                  <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 700, marginBottom: 2 }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#111827', fontWeight: 600, wordBreak: 'break-all' }}>{v}</div>
                </div>
              ))}
            </div>
            {order.notes && (
              <div style={{ marginTop: 12, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ fontSize: 11, color: '#92400e', fontWeight: 700, marginBottom: 2 }}>Customer Notes</div>
                <div style={{ fontSize: 13, color: '#78350f' }}>{order.notes}</div>
              </div>
            )}
          </div>

          {/* Resume file */}
          <div style={{ marginBottom: 24, background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>📄</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#15803d' }}>Resume Submitted</div>
              <div style={{ fontSize: 12, color: '#16a34a' }}>{order.resumeFileName}</div>
            </div>
          </div>

          {/* Progress tracker */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 14, textTransform: 'uppercase', letterSpacing: 0.5 }}>Order Progress</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {ORDER_STATUSES.map((s, i) => (
                <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 999, background: i <= statusIndex ? s.color : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: i <= statusIndex ? '#fff' : '#9ca3af', fontWeight: 800, flexShrink: 0, transition: 'all 0.3s' }}>
                    {i < statusIndex ? '✓' : i + 1}
                  </div>
                  <div style={{ fontSize: 13, color: i <= statusIndex ? '#111827' : '#9ca3af', fontWeight: i === statusIndex ? 700 : 400 }}>{s.label}</div>
                  {i === statusIndex && <span style={{ fontSize: 10, background: s.color + '22', color: s.color, padding: '1px 8px', borderRadius: 999, fontWeight: 700, border: `1px solid ${s.color}44` }}>CURRENT</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Update status */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Update Status</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ORDER_STATUSES.map(s => (
                <button key={s.key} onClick={() => setStatus(s.key)}
                  style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${status === s.key ? s.color : '#e5e7eb'}`, background: status === s.key ? s.color + '15' : '#fff', color: status === s.key ? s.color : '#6b7280', fontSize: 11.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Admin notes */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>Admin Notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Add internal notes, observations, or next steps..."
              style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', height: 90, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#7c3aed'}
              onBlur={e => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={handleSave} disabled={saving}
              style={{ flex: 1, padding: '12px', background: saving ? '#f3f4f6' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: saving ? '#9ca3af' : '#fff', border: 'none', borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
              {saved ? '✅ Saved!' : saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button onClick={onClose}
              style={{ padding: '12px 20px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const { user, profile } = useAuth()
  const [orders, setOrders]           = useState([])
  const [loading, setLoading]         = useState(true)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [filterStatus, setFilterStatus]   = useState('all')
  const [filterPlan, setFilterPlan]       = useState('all')
  const [search, setSearch]               = useState('')

  // Promote to admin in DB if whitelisted but not set in profile
  useEffect(() => {
    if (user && ADMIN_EMAILS.includes(user.email) && profile && profile.role !== 'admin') {
      updateDoc(doc(db, 'users', user.uid), { role: 'admin' })
        .then(() => console.log('Successfully promoted to admin in DB'))
        .catch(err => console.error('Failed to promote to admin in DB:', err));
    }
  }, [user, profile])

  // Access control
  const isAdmin = user && ADMIN_EMAILS.includes(user.email)

  // Sync orders
  useEffect(() => {
    if (!isAdmin) return
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setOrders(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }, () => setLoading(false))
    return unsub
  }, [isAdmin])

  if (!user) return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🔐</div>
      <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)' }}>Please log in to access the admin dashboard.</h2>
    </div>
  )

  if (!isAdmin) return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🚫</div>
      <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)' }}>Access Denied</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8 }}>You don't have admin access. Contact the platform owner.</p>
    </div>
  )

  const filtered = orders.filter(o => {
    const statusOk = filterStatus === 'all' || o.status === filterStatus
    const planOk   = filterPlan === 'all' || o.planId === filterPlan
    const srchOk   = !search || o.customerName?.toLowerCase().includes(search.toLowerCase()) || o.orderId?.toLowerCase().includes(search.toLowerCase()) || o.customerEmail?.toLowerCase().includes(search.toLowerCase())
    return statusOk && planOk && srchOk
  })

  const stats = [
    { label: 'Total Orders',   value: orders.length,                                            icon: '📦', color: '#6366f1' },
    { label: 'Pending Orders', value: orders.filter(o => o.status !== 'delivered').length,      icon: '⏳', color: '#f97316' },
    { label: 'Delivered',      value: orders.filter(o => o.status === 'delivered').length,      icon: '✅', color: '#7c3aed' },
    { label: 'Revenue',        value: `₹${orders.reduce((s, o) => s + (o.price || 0), 0)}`,    icon: '💰', color: '#16a34a' },
  ]

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 24, color: 'var(--text-primary)', marginBottom: 4 }}>🛠️ Admin Dashboard</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Resume orders & customer service management · {user.email}</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '18px 18px', display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: s.color, fontFamily: 'Urbanist, sans-serif' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '16px 18px', marginBottom: 18, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#9ca3af' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, email, or order ID..."
            style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
            onFocus={e => e.target.style.borderColor = '#7c3aed'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>
        <select value={filterPlan} onChange={e => setFilterPlan(e.target.value)}
          style={{ padding: '8px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', color: 'var(--text-secondary)', background: 'var(--card-bg)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Plans</option>
          <option value="starter">Starter ATS Review</option>
          <option value="upgrade">Resume Upgrade</option>
          <option value="success">Placement Success Pack</option>
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          style={{ padding: '8px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', color: 'var(--text-secondary)', background: 'var(--card-bg)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Statuses</option>
          {ORDER_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
        </select>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filtered.length} orders</span>
      </div>

      {/* Orders table */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading orders...</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>No orders yet</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Orders will appear here once students make a purchase.</div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr style={{ background: 'var(--main-bg)', borderBottom: '1px solid var(--card-border)' }}>
                  {['Order ID', 'Student', 'Plan', 'Amount', 'Status', 'Resume', 'Date', 'Action'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', fontSize: 11.5, fontWeight: 700, color: 'var(--text-muted)', textAlign: 'left', textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((order, i) => (
                  <tr key={order.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--card-border)' : 'none', transition: 'background 0.15s' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed', fontFamily: 'monospace' }}>{order.orderId}</div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{order.customerName}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--text-secondary)' }}>{order.customerEmail}</div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: PLAN_COLORS[order.planId] || '#6b7280', background: (PLAN_COLORS[order.planId] || '#6b7280') + '15', padding: '3px 9px', borderRadius: 999 }}>
                        {order.planId === 'starter' ? 'Starter' : order.planId === 'upgrade' ? 'Upgrade' : 'Success Pack'}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>₹{order.price}</td>
                    <td style={{ padding: '12px 16px' }}><StatusBadge status={order.status} /></td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: 11.5, color: 'var(--text-secondary)', background: 'var(--main-bg)', padding: '2px 8px', borderRadius: 6, fontFamily: 'monospace' }}>{order.resumeFileName?.slice(0, 18) || '—'}…</span>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('en-IN') : '—'}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <button onClick={() => setSelectedOrder(order)}
                        style={{ padding: '6px 14px', background: 'var(--purple-xsoft)', color: '#7c3aed', border: '1.5px solid #c4b5fd', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedOrder && <OrderDetail order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  )
}
