import React, { useState, useEffect, useRef } from 'react'
import {
  collection, onSnapshot, doc, updateDoc, serverTimestamp, query, orderBy, addDoc, deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'
import { BADGES } from '../utils/badges.js'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend
} from 'recharts'
import { Bell, CheckCircle2, AlertTriangle, AlertCircle, Info, BookOpen, Video, Code, Briefcase, Cpu } from 'lucide-react'

// ── Admin email whitelist (add your email here) ───────────────────
const ADMIN_EMAILS = ['prayukthakanchi@gmail.com']

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

  async function handleDeleteOrder() {
    if (window.confirm('Are you sure you want to permanently delete this order? This action cannot be undone.')) {
      setSaving(true)
      try {
        await deleteDoc(doc(db, 'orders', order.id))
        if (order.userId) {
          await updateDoc(doc(db, 'users', order.userId), {
            resumeStatus: null,
            resumeNotes: null,
            deliveredResumeUrl: null,
            deliveredResumeName: null,
            resumeFileName: null,
            resumeUrl: null,
            updatedAt: serverTimestamp(),
          })
        }
        onClose()
      } catch (e) {
        alert('Delete failed: ' + e.message)
      } finally {
        setSaving(false)
      }
    }
  }

  const [deliveredFile, setDeliveredFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef()

  const statusIndex = ORDER_STATUSES.findIndex(s => s.key === status)

  async function handleSave() {
    setSaving(true)
    let finalDeliveredUrl = order.deliveredResumeUrl || null
    let finalDeliveredName = order.deliveredResumeName || null
    let finalStatus = status

    try {
      if (deliveredFile) {
        setUploading(true)
        const formData = new FormData()
        formData.append('file', deliveredFile)
        formData.append('upload_preset', 'placeonix_resumes')

        const res = await fetch(`https://api.cloudinary.com/v1_1/dcrllhmii/upload`, {
          method: 'POST',
          body: formData
        })
        if (!res.ok) throw new Error('Cloudinary upload failed')
        const data = await res.json()
        finalDeliveredUrl = data.secure_url
        finalDeliveredName = deliveredFile.name
        finalStatus = 'delivered' // Auto-deliver
      }

      await updateDoc(doc(db, 'orders', order.id), {
        status: finalStatus,
        adminNotes: notes,
        deliveredResumeUrl: finalDeliveredUrl,
        deliveredResumeName: finalDeliveredName,
        updatedAt: serverTimestamp(),
      })

      if (order.userId) {
        await updateDoc(doc(db, 'users', order.userId), {
          resumeStatus: finalStatus,
          resumeNotes: notes,
          deliveredResumeUrl: finalDeliveredUrl,
          deliveredResumeName: finalDeliveredName,
          resumeFileName: order.resumeFileName || null,
          resumeUrl: order.resumeUrl || null,
          updatedAt: serverTimestamp(),
        })
      }

      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      alert('Save failed: ' + e.message)
    } finally {
      setSaving(false)
      setUploading(false)
    }
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
                ['Payment UTR', order.paymentId],
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
          <div style={{ marginBottom: 24, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>📄</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8' }}>Resume Submitted</div>
              <div style={{ fontSize: 12, color: '#2563eb' }}>{order.resumeFileName}</div>
            </div>
            {order.resumeUrl && (
              <a href={order.resumeUrl} target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', padding: '8px 16px', background: '#2563eb', color: '#fff', fontSize: 12, fontWeight: 700, borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s' }}
                 onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
                 onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}>
                View Resume
              </a>
            )}
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

          {/* In-app file delivery */}
          <div style={{ marginBottom: 24, padding: 16, background: '#f5f3ff', border: '1.5px solid #c4b5fd', borderRadius: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#5b21b6', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>🚀 In-App File Delivery</div>
            {order.deliveredResumeUrl && (
              <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 12px' }}>
                <span style={{ fontSize: 18 }}>📄</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#111827', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {order.deliveredResumeName || 'Delivered File'}
                  </div>
                  <a href={order.deliveredResumeUrl} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: '#7c3aed', fontWeight: 600, textDecoration: 'none' }}>
                    View Current Delivery
                  </a>
                </div>
              </div>
            )}
            <label style={{ fontSize: 11.5, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6 }}>
              {order.deliveredResumeUrl ? 'Deliver a new optimized resume (replaces current):' : 'Upload optimized resume / report:'}
            </label>
            <div onClick={() => fileInputRef.current?.click()} style={{ border: '2px dashed #a78bfa', borderRadius: 10, padding: '12px', textAlign: 'center', cursor: 'pointer', background: '#fff', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#7c3aed'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#a78bfa'}>
              <div style={{ fontSize: 12.5, color: deliveredFile ? '#16a34a' : '#6b7280', fontWeight: 600 }}>
                {deliveredFile ? `✅ Selected: ${deliveredFile.name}` : '📄 Click to select finished PDF/DOCX'}
              </div>
              <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => setDeliveredFile(e.target.files[0])} />
            </div>
            {uploading && <div style={{ fontSize: 12, color: '#7c3aed', fontWeight: 700, marginTop: 8, textAlign: 'center' }}>Uploading file to Cloudinary...</div>}
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
            <button onClick={handleDeleteOrder} disabled={saving}
              style={{ padding: '12px 20px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
              Delete Order
            </button>
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

// ── Admin Notification & Resource Panels ────────────────────────
const DEPARTMENTS = ['COMMON', 'CSE', 'IT', 'ECE', 'EEE', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']
const CATEGORIES = ['aptitude', 'coding', 'core', 'interview', 'company']

const defaultAlertsSeed = [
  { 
    title: 'Welcome to Placeonix!', 
    message: 'Complete your profile to unlock all placement tools.', 
    type: 'success', 
    targetDept: 'ALL' 
  },
  { 
    title: 'Take your first Mock Interview', 
    message: 'AI interviews are now available for your department.', 
    type: 'interview', 
    targetDept: 'ALL' 
  },
  { 
    title: 'New Aptitude Questions added', 
    message: 'Check out the new dynamic questions in the Aptitude section.', 
    type: 'aptitude', 
    targetDept: 'ALL' 
  }
]

function NotificationsPanel() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ title: '', message: '', targetDept: 'ALL', type: 'info' })
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState(null)
  
  const [seeding, setSeeding] = useState(false)
  const [previewBranch, setPreviewBranch] = useState('ALL')
  const [previewOpen, setPreviewOpen] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, snap => {
      setNotifications(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    })
    return unsub
  }, [])

  async function handleAdd(e) {
    e.preventDefault()
    setSaving(true)
    try {
      if (editingId) {
        await updateDoc(doc(db, 'notifications', editingId), {
          ...form,
          updatedAt: serverTimestamp()
        })
        setEditingId(null)
      } else {
        await addDoc(collection(db, 'notifications'), {
          ...form,
          createdAt: serverTimestamp()
        })
      }
      setForm({ title: '', message: '', targetDept: 'ALL', type: 'info' })
    } catch(err) {
      alert(err.message)
    }
    setSaving(false)
  }

  async function handleDelete(id) {
    if (window.confirm('Delete this notification?')) {
      await deleteDoc(doc(db, 'notifications', id))
      if (editingId === id) {
        setEditingId(null)
        setForm({ title: '', message: '', targetDept: 'ALL', type: 'info' })
      }
    }
  }

  async function handleSeedDefaults() {
    setSeeding(true)
    try {
      for (const alertObj of defaultAlertsSeed) {
        await addDoc(collection(db, 'notifications'), {
          ...alertObj,
          createdAt: serverTimestamp()
        })
      }
    } catch (err) {
      alert('Failed to seed defaults: ' + err.message)
    }
    setSeeding(false)
  }

  async function handleClearAll() {
    if (window.confirm('Are you sure you want to delete ALL notifications from the database?')) {
      setSeeding(true)
      try {
        for (const n of notifications) {
          await deleteDoc(doc(db, 'notifications', n.id))
        }
      } catch (err) {
        alert('Failed to clear: ' + err.message)
      }
      setSeeding(false)
    }
  }

  // Preview data filtering
  const previewSource = notifications.length > 0 
    ? notifications 
    : defaultAlertsSeed.map((n, idx) => ({ id: `default-seed-${idx}`, ...n, createdAt: null }))

  const filteredPreviewNotifs = previewSource.filter(n => {
    return n.targetDept === 'ALL' || n.targetDept === previewBranch
  }).map(n => {
    let detectedType = n.type || 'info'
    if (detectedType === 'info' || !n.type) {
      const titleLower = (n.title || '').toLowerCase()
      const messageLower = (n.message || '').toLowerCase()
      if (titleLower.includes('aptitude') || messageLower.includes('aptitude')) {
        detectedType = 'aptitude'
      } else if (titleLower.includes('interview') || messageLower.includes('interview') || titleLower.includes('mock') || messageLower.includes('mock')) {
        detectedType = 'interview'
      } else if (titleLower.includes('welcome') || messageLower.includes('welcome')) {
        detectedType = 'success'
      } else if (titleLower.includes('coding') || messageLower.includes('coding') || titleLower.includes('dsa') || messageLower.includes('dsa') || titleLower.includes('contest') || messageLower.includes('contest') || titleLower.includes('practice') || messageLower.includes('practice')) {
        detectedType = 'coding'
      } else if (titleLower.includes('company') || messageLower.includes('company') || titleLower.includes('job') || messageLower.includes('job') || titleLower.includes('drive') || messageLower.includes('drive') || titleLower.includes('hiring') || messageLower.includes('hiring') || titleLower.includes('placement') || messageLower.includes('placement') || titleLower.includes('intern') || messageLower.includes('intern')) {
        detectedType = 'company'
      } else if (titleLower.includes('core') || messageLower.includes('core') || titleLower.includes('subject') || messageLower.includes('subject') || titleLower.includes('mcq') || messageLower.includes('mcq')) {
        detectedType = 'core'
      }
    }
    return { ...n, type: detectedType }
  })

  const mappedActiveNotifs = notifications.map(n => {
    let detectedType = n.type || 'info'
    if (detectedType === 'info' || !n.type) {
      const titleLower = (n.title || '').toLowerCase()
      const messageLower = (n.message || '').toLowerCase()
      if (titleLower.includes('aptitude') || messageLower.includes('aptitude')) {
        detectedType = 'aptitude'
      } else if (titleLower.includes('interview') || messageLower.includes('interview') || titleLower.includes('mock') || messageLower.includes('mock')) {
        detectedType = 'interview'
      } else if (titleLower.includes('welcome') || messageLower.includes('welcome')) {
        detectedType = 'success'
      } else if (titleLower.includes('coding') || messageLower.includes('coding') || titleLower.includes('dsa') || titleLower.includes('dsa') || titleLower.includes('contest') || messageLower.includes('contest') || titleLower.includes('practice') || messageLower.includes('practice')) {
        detectedType = 'coding'
      } else if (titleLower.includes('company') || messageLower.includes('company') || titleLower.includes('job') || messageLower.includes('job') || titleLower.includes('drive') || messageLower.includes('drive') || titleLower.includes('hiring') || messageLower.includes('hiring') || titleLower.includes('placement') || messageLower.includes('placement') || titleLower.includes('intern') || messageLower.includes('intern')) {
        detectedType = 'company'
      } else if (titleLower.includes('core') || messageLower.includes('core') || titleLower.includes('subject') || messageLower.includes('subject') || titleLower.includes('mcq') || messageLower.includes('mcq')) {
        detectedType = 'core'
      }
    }
    return { ...n, type: detectedType }
  })

  function getPreviewTimeAgo(createdAt) {
    if (!createdAt) return 'Just now'
    const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt)
    const seconds = Math.floor((new Date() - date) / 1000)
    if (seconds < 60) return 'Just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  function getPreviewIcon(type) {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={16} style={{ color: '#16a34a' }} />
      case 'warning':
        return <AlertTriangle size={16} style={{ color: '#ea580c' }} />
      case 'alert':
        return <AlertCircle size={16} style={{ color: '#ef4444' }} />
      case 'aptitude':
        return <BookOpen size={16} style={{ color: '#6c3ce1' }} />
      case 'interview':
        return <Video size={16} style={{ color: '#3b82f6' }} />
      case 'coding':
        return <Code size={16} style={{ color: '#7c3aed' }} />
      case 'company':
        return <Briefcase size={16} style={{ color: '#ea580c' }} />
      case 'core':
        return <Cpu size={16} style={{ color: '#0891b2' }} />
      case 'info':
      default:
        return <Info size={16} style={{ color: '#2563eb' }} />
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr 1.2fr', gap: 20, marginTop: 24, alignItems: 'start' }}>
      {/* Column 1: Broadcast form */}
      <div style={{ background: 'var(--card-bg)', border: editingId ? '1.5px solid #7c3aed' : '1.5px solid var(--card-border)', borderRadius: 16, padding: 20 }}>
        <h3 style={{ marginBottom: 16, fontSize: 15, fontWeight: 800, color: editingId ? '#7c3aed' : 'inherit' }}>
          {editingId ? '✏️ Edit Broadcast Alert' : '📢 Broadcast Notification'}
        </h3>
        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input required placeholder="Notification Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', fontSize: 13 }} />
          <textarea required placeholder="Message content..." value={form.message} onChange={e=>setForm({...form, message: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', height: 80, resize: 'vertical', fontSize: 13 }} />
          <div style={{ display: 'flex', gap: 12 }}>
            <select value={form.type} onChange={e=>setForm({...form, type: e.target.value})} style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', fontSize: 12, cursor: 'pointer' }}>
              <option value="info">Info (Blue)</option>
              <option value="success">Success (Green)</option>
              <option value="warning">Warning (Yellow)</option>
              <option value="alert">Alert (Red)</option>
              <option value="aptitude">Aptitude (Book Icon)</option>
              <option value="interview">Interview (Video Icon)</option>
              <option value="coding">Coding (Code Icon)</option>
              <option value="company">Company/Job (Briefcase Icon)</option>
              <option value="core">Core Subjects (CPU Icon)</option>
            </select>
            <select value={form.targetDept} onChange={e=>setForm({...form, targetDept: e.target.value})} style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', fontSize: 12, cursor: 'pointer' }}>
              <option value="ALL">All Departments</option>
              {DEPARTMENTS.filter(d=>d!=='COMMON').map(d=><option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button type="submit" disabled={saving} style={{ padding: 12, background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>
              {saving ? 'Saving...' : (editingId ? 'Save Changes' : 'Send Broadcast')}
            </button>
            {editingId && (
              <button type="button" onClick={() => {
                setEditingId(null)
                setForm({ title: '', message: '', targetDept: 'ALL', type: 'info' })
              }} style={{ padding: 10, background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: 12 }}>
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Column 2: Active list */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 20 }}>
        <h3 style={{ marginBottom: 16, fontSize: 15, fontWeight: 800 }}>Active Notifications</h3>
        {loading ? <p>Loading...</p> : notifications.length === 0 ? (
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: '0 0 16px' }}>No active notifications in the database.</p>
            <div style={{ padding: 16, border: '1.5px dashed var(--card-border)', borderRadius: 12, textAlign: 'center', background: 'rgba(124, 58, 237, 0.01)' }}>
              <span style={{ fontSize: 24, display: 'block', marginBottom: 8 }}>🌱</span>
              <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', margin: '0 0 12px' }}>
                You can seed the database with the default welcome notifications to make them editable.
              </p>
              <button onClick={handleSeedDefaults} disabled={seeding} style={{ padding: '8px 16px', background: 'var(--purple-soft)', color: 'var(--purple-primary)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}>
                {seeding ? 'Seeding...' : 'Seed Defaults'}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 400, overflow: 'auto' }}>
            {mappedActiveNotifs.map(n => (
              <div key={n.id} style={{
                border: editingId === n.id ? '1.5px solid #7c3aed' : '1.5px solid var(--card-border)',
                background: editingId === n.id ? 'rgba(124, 58, 237, 0.04)' : 'var(--card-bg)',
                borderRadius: 10,
                padding: 14,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                    {n.title}
                    <span style={{ fontSize: 10, background: 'var(--purple-soft)', color: 'var(--purple-primary)', padding: '3px 8px', borderRadius: 6 }}>{n.targetDept}</span>
                    <span style={{ fontSize: 10, background: n.type === 'alert' ? '#fee2e2' : n.type === 'warning' ? '#fef3c7' : n.type === 'success' ? '#dcfce7' : n.type === 'aptitude' ? '#ede9fe' : n.type === 'coding' ? '#ede9fe' : n.type === 'company' ? '#ffedd5' : n.type === 'core' ? '#ecfeff' : '#eff6ff', color: n.type === 'alert' ? '#ef4444' : n.type === 'warning' ? '#d97706' : n.type === 'success' ? '#16a34a' : n.type === 'aptitude' ? '#6c3ce1' : n.type === 'coding' ? '#7c3aed' : n.type === 'company' ? '#ea580c' : n.type === 'core' ? '#0891b2' : '#2563eb', padding: '3px 8px', borderRadius: 6 }}>{n.type?.toUpperCase()}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, wordBreak: 'break-word' }}>{n.message}</div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <button onClick={() => {
                    setEditingId(n.id)
                    setForm({ title: n.title, message: n.message, type: n.type || 'info', targetDept: n.targetDept || 'ALL' })
                  }} style={{ padding: '6px 12px', background: '#eff6ff', color: '#2563eb', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: 12 }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(n.id)} style={{ padding: '6px 12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: 12 }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Column 3: Live Student Dropdown Preview */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ fontSize: 15, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
          <span>✨ Student Preview</span>
        </h3>
        <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: 0 }}>
          Review what notifications students in each department actually receive.
        </p>

        {/* Branch selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Simulate Branch</label>
          <select value={previewBranch} onChange={e => setPreviewBranch(e.target.value)}
            style={{ padding: 8, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', outline: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
            <option value="ALL">ALL (Global Alerts)</option>
            {DEPARTMENTS.filter(d => d !== 'COMMON').map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {/* Mock Topbar segment */}
        <div style={{ 
          background: 'var(--main-bg)', 
          border: '1px solid var(--card-border)', 
          borderRadius: 12, 
          padding: '10px 14px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'relative'
        }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)' }}>Mock Topbar</span>
          
          <button onClick={() => setPreviewOpen(!previewOpen)} style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--card-border)', 
            borderRadius: 8, 
            width: 32, 
            height: 32, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer',
            position: 'relative',
            color: 'var(--text-primary)'
          }}>
            <Bell size={15} />
            {filteredPreviewNotifs.length > 0 && (
              <span style={{ 
                position: 'absolute', top: -3, right: -3, 
                background: 'var(--purple-primary)', color: '#fff', 
                fontSize: 9, fontWeight: 800, 
                width: 14, height: 14, borderRadius: 999, 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {filteredPreviewNotifs.length}
              </span>
            )}
          </button>
        </div>

        {/* Dropdown UI Mockup */}
        {previewOpen && (
          <div style={{ 
            background: 'var(--card-bg)', 
            border: '1.5px solid var(--card-border)', 
            borderRadius: 12, 
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{ 
              padding: '10px 14px', 
              borderBottom: '1px solid var(--card-border)', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              background: 'rgba(124, 58, 237, 0.01)'
            }}>
              <span style={{ fontWeight: 800, fontSize: 12.5, color: 'var(--text-primary)' }}>Notifications</span>
              {filteredPreviewNotifs.length > 0 && (
                <span style={{ fontSize: 9.5, color: 'var(--purple-primary)', fontWeight: 700 }}>Mark all read</span>
              )}
            </div>

            <div style={{ maxHeight: 220, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {filteredPreviewNotifs.length === 0 ? (
                <div style={{ padding: '24px 14px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <Bell size={18} style={{ margin: '0 auto 6px', display: 'block', opacity: 0.4 }} />
                  <div style={{ fontSize: 11.5, fontWeight: 700 }}>All caught up!</div>
                </div>
              ) : (
                filteredPreviewNotifs.map((n, i) => (
                  <div key={n.id} style={{ 
                    padding: '10px 14px', 
                    borderBottom: i < filteredPreviewNotifs.length - 1 ? '1px solid var(--card-border)' : 'none', 
                    display: 'flex', 
                    gap: 10, 
                    transition: 'background 0.2s',
                    background: 'rgba(124, 58, 237, 0.01)'
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-xsoft)'} 
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(124, 58, 237, 0.01)'}
                  >
                    <div style={{ marginTop: 2 }}>{getPreviewIcon(n.type)}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.title}</span>
                        <span style={{ width: 4.5, height: 4.5, borderRadius: 999, background: 'var(--purple-primary)', flexShrink: 0, marginLeft: 6 }} />
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: 4 }}>{n.message}</div>
                      <div style={{ fontSize: 9.5, color: 'var(--text-muted)', fontWeight: 600 }}>{getPreviewTimeAgo(n.createdAt)}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Database Clear/Seeding actions inside Preview panel for convenience */}
        {notifications.length > 0 && (
          <button onClick={handleClearAll} disabled={seeding} style={{
            padding: '8px 12px',
            background: 'transparent',
            color: '#ef4444',
            border: '1px solid #fee2e2',
            borderRadius: 8,
            fontSize: 11, fontWeight: 700, cursor: seeding ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#fee2e2'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Clear Database Alerts
          </button>
        )}
      </div>
    </div>
  )
}

function ResourcesPanel() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ title: '', url: '', category: 'core', department: 'CSE', subject: '', description: '' })

  useEffect(() => {
    const q = query(collection(db, 'resources'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, snap => {
      setResources(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    })
    return unsub
  }, [])

  async function handleAdd(e) {
    e.preventDefault()
    setSaving(true)
    try {
      await addDoc(collection(db, 'resources'), {
        ...form,
        tags: ['#admin_added'],
        createdAt: serverTimestamp()
      })
      setForm({ title: '', url: '', category: 'core', department: 'CSE', subject: '', description: '' })
    } catch(err) {
      alert(err.message)
    }
    setSaving(false)
  }

  async function handleDelete(id) {
    if (window.confirm('Delete this resource?')) {
      await deleteDoc(doc(db, 'resources', id))
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, marginTop: 24 }}>
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 24 }}>
        <h3 style={{ marginBottom: 16, fontSize: 16, fontWeight: 800 }}>Upload New Resource</h3>
        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input required placeholder="Resource Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)' }} />
          <input required placeholder="URL / Link" value={form.url} onChange={e=>setForm({...form, url: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)' }} />
          <input required placeholder="Subject / Topic" value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)' }} />
          <textarea required placeholder="Short Description..." value={form.description} onChange={e=>setForm({...form, description: e.target.value})} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)', height: 60, resize: 'vertical' }} />
          <div style={{ display: 'flex', gap: 12 }}>
            <select value={form.category} onChange={e=>setForm({...form, category: e.target.value})} style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)' }}>
              {CATEGORIES.map(c=><option key={c} value={c}>{c.toUpperCase()}</option>)}
            </select>
            <select value={form.department} onChange={e=>setForm({...form, department: e.target.value})} style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--main-bg)', color: 'var(--text-primary)' }}>
              {DEPARTMENTS.map(d=><option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <button type="submit" disabled={saving} style={{ padding: 12, background: '#16a34a', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>{saving ? 'Saving...' : 'Add Resource'}</button>
        </form>
      </div>
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 24 }}>
        <h3 style={{ marginBottom: 16, fontSize: 16, fontWeight: 800 }}>Manage Resources</h3>
        {loading ? <p>Loading...</p> : resources.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No resources uploaded yet.</p> : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 600, overflow: 'auto' }}>
            {resources.map(r => (
              <div key={r.id} style={{ border: '1.5px solid var(--card-border)', borderRadius: 10, padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)' }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}><span style={{fontWeight: 600, color: '#16a34a'}}>{r.category?.toUpperCase()}</span> • {r.department} • <a href={r.url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 600 }}>Link</a></div>
                </div>
                <button onClick={()=>handleDelete(r.id)} style={{ padding: '6px 12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 700 }}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function AnalyticsPanel({ orders, users }) {
  const totalRevenue = orders.reduce((s, o) => s + (o.price || 0), 0)
  const aov = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0
  const totalUsers = users.length
  const deliveredCount = orders.filter(o => o.status === 'delivered').length
  const deliveredRate = orders.length > 0 ? Math.round((deliveredCount / orders.length) * 100) : 0

  // 1. Sales Trend Area Chart
  const salesMap = new Map()
  orders.forEach(o => {
    const d = o.createdAt?.toDate ? o.createdAt.toDate() : null
    if (!d) return
    const key = d.toISOString().split('T')[0] // YYYY-MM-DD
    salesMap.set(key, (salesMap.get(key) || 0) + (o.price || 0))
  })
  const chartData = Array.from(salesMap.entries())
    .map(([key, value]) => {
      const parts = key.split('-')
      const name = new Date(parts[0], parts[1]-1, parts[2]).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
      return { key, name, value }
    })
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(({ name, value }) => ({ name, value }))
    .slice(-10)

  // 2. Plan Distribution Pie Chart
  const planCounts = { starter: 0, upgrade: 0, success: 0 }
  orders.forEach(o => {
    if (planCounts[o.planId] !== undefined) planCounts[o.planId]++
  })
  const pieData = [
    { name: 'Starter ATS', value: planCounts.starter, color: '#6366f1' },
    { name: 'Resume Upgrade', value: planCounts.upgrade, color: '#7c3aed' },
    { name: 'Success Pack', value: planCounts.success, color: '#059669' },
  ].filter(d => d.value > 0)

  return (
    <div style={{ marginTop: 20 }}>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Total Sales Revenue', value: `₹${totalRevenue}`, icon: '💰', color: '#16a34a' },
          { label: 'Avg Order Value (AOV)', value: `₹${aov}`, icon: '📈', color: '#6366f1' },
          { label: 'Registered Students', value: totalUsers, icon: '👥', color: '#7c3aed' },
          { label: 'Fulfillment Rate', value: `${deliveredRate}%`, icon: '📦', color: '#059669' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 20, display: 'flex', gap: 14, alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 950, color: s.color, fontFamily: 'Urbanist, sans-serif', lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, marginTop: 4 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, flexWrap: 'wrap' }}>
        {/* Sales Trend */}
        <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px 20px' }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 15.5, fontWeight: 900, fontFamily: 'Urbanist, sans-serif' }}>📈 Revenue Progress Timeline</h3>
          <p style={{ margin: '0 0 20px', fontSize: 12, color: 'var(--text-muted)' }}>Daily visual trends of packages sold</p>
          {chartData.length > 0 ? (
            <div style={{ width: '100%', height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="adminSalesColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v) => [`₹${v}`, 'Sales']} contentStyle={{ background: '#111', border: 'none', borderRadius: 8, color: '#fff', fontSize: 12 }} />
                  <Area type="monotone" dataKey="value" stroke="#7c3aed" strokeWidth={2.5} fillOpacity={1} fill="url(#adminSalesColor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px dashed var(--card-border)', borderRadius: 12, color: 'var(--text-muted)' }}>No sales recorded.</div>
          )}
        </div>

        {/* Plan Distribution */}
        <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 15.5, fontWeight: 900, fontFamily: 'Urbanist, sans-serif' }}>🍰 Plan Distribution</h3>
          <p style={{ margin: '0 0 20px', fontSize: 12, color: 'var(--text-muted)' }}>Proportion of resume services purchased</p>
          {pieData.length > 0 ? (
            <div style={{ width: '100%', height: 180, position: 'relative', flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3}>
                    {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip formatter={(v) => [v, 'Orders']} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 10px' }}>
                {pieData.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: d.color }} />
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{d.name}:</span>
                    <strong style={{ marginLeft: 'auto', color: 'var(--text-primary)' }}>{d.value} orders</strong>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px dashed var(--card-border)', borderRadius: 12, color: 'var(--text-muted)' }}>No plan sales recorded.</div>
          )}
        </div>
      </div>
    </div>
  )
}

function UserOnlineStatus({ lastVisited }) {
  if (!lastVisited) return <span style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>⚫ Offline</span>

  const lastActiveDate = lastVisited.toDate ? lastVisited.toDate() : new Date(lastVisited)
  const diffMs = new Date() - lastActiveDate
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  const isOnline = diffMins < 5

  if (isOnline) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span style={{ fontSize: 10.5, fontWeight: 700, color: '#22c55e' }}>Online</span>
      </div>
    )
  }

  let timeString = 'Offline'
  if (diffMins < 60) {
    timeString = `Active ${diffMins}m ago`
  } else if (diffHours < 24) {
    timeString = `Active ${diffHours}h ago`
  } else {
    timeString = `Active ${diffDays}d ago`
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#9ca3af', display: 'inline-block' }} />
      <span style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{timeString}</span>
    </div>
  )
}

function StudentDetailModal({ student, onClose, interviews }) {
  const displayEmail = student.email || '—'
  const displayName = student.name || displayEmail.split('@')[0]
  const listHistory = student.aptitudeHistory || []
  const initial = displayName.slice(0, 1).toUpperCase()
  
  // Filter interview logs for this specific student
  const studentInterviews = interviews.filter(i => i.studentEmail === student.email || i.uid === student.id)

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 20, width: '100%', maxWidth: 680, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--main-bg)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 999, background: 'linear-gradient(135deg, #6c3ce1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 900 }}>
              {initial}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)', fontFamily: 'Urbanist, sans-serif' }}>{displayName}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 2 }}>{displayEmail}</div>
              <UserOnlineStatus lastVisited={student.lastVisited} />
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--text-muted)' }}>×</button>
        </div>

        {/* Scroll Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
            {[
              ['Branch / Dept', student.branch || '—'],
              ['Graduation Year', student.graduationYear || '—'],
              ['Phone Number', student.phone || '—'],
              ['Placement Readiness', `${student.placementReadiness ?? 0}%`],
              ['Best Aptitude Accuracy', `${student.aptitudeScore ?? 0}%`],
              ['Best Coding Practice', `${student.codingScore ?? 0}%`],
              ['Best Mock Interview', `${student.mockInterviewScore ?? 0}%`],
              ['LinkedIn URL', student.linkedin ? <a href={student.linkedin} target="_blank" rel="noreferrer" style={{ color: '#7c3aed', fontWeight: 600 }}>Link</a> : '—']
            ].map(([k, v]) => (
              <div key={k} style={{ background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 13, fontWeight: 900, margin: '0 0 10px', textTransform: 'uppercase', color: 'var(--text-primary)' }}>🏆 Badges & Achievements</h4>
            {student.unlockedBadges && student.unlockedBadges.length > 0 ? (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {student.unlockedBadges.map(bid => {
                  const b = BADGES.find(x => x.id === bid)
                  return b ? (
                    <span key={bid} style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple-primary)', background: 'var(--purple-soft)', border: '1px solid var(--purple-soft)', padding: '4px 10px', borderRadius: 8 }} title={b.desc}>
                      {b.emoji} {b.name}
                    </span>
                  ) : null
                })}
              </div>
            ) : (
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>No badges unlocked yet.</div>
            )}
          </div>

          {/* Aptitude Attempt History */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 13, fontWeight: 900, margin: '0 0 10px', textTransform: 'uppercase', color: 'var(--text-primary)' }}>📈 Quiz History ({listHistory.length})</h4>
            {listHistory.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {listHistory.map((h, i) => {
                  const dateStr = h.date?.toDate ? h.date.toDate().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'
                  return (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '10px 14px' }}>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text-primary)' }}>{h.sectionId?.toUpperCase()} Test</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{dateStr}</span>
                      <strong style={{ fontSize: 13, color: '#16a34a' }}>{h.score}%</strong>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>No aptitude quiz attempts logged.</div>
            )}
          </div>

          {/* Mock Interview Logs */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 900, margin: '0 0 10px', textTransform: 'uppercase', color: 'var(--text-primary)' }}>🎙️ Mock Interview Logs ({studentInterviews.length})</h4>
            {studentInterviews.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {studentInterviews.map((iLog, idx) => {
                  const dateStr = iLog.createdAt?.toDate ? iLog.createdAt.toDate().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) : '—'
                  return (
                    <div key={idx} style={{ background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, padding: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>{iLog.category}</span>
                        <span style={{ fontSize: 10, background: '#ede9fe', color: '#7c3aed', padding: '2px 8px', borderRadius: 6, fontWeight: 700 }}>{iLog.score}/10</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, fontStyle: 'italic' }}>"{iLog.feedback?.slice(0, 150)}..."</div>
                      <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 8 }}>Date: {dateStr}</div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>No mock interview attempts logged.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function StudentDirectoryPanel({ users, interviews }) {
  const [search, setSearch] = useState('')
  const [filterBranch, setFilterBranch] = useState('all')
  const [selectedStudent, setSelectedStudent] = useState(null)

  const filteredUsers = users.filter(u => {
    const email = u.email || ''
    const name = u.name || email.split('@')[0]
    const branch = u.branch || ''
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) || email.toLowerCase().includes(search.toLowerCase())
    const matchBranch = filterBranch === 'all' || branch.toLowerCase() === filterBranch.toLowerCase()
    return matchSearch && matchBranch
  })

  // Calculations for registry KPIs
  const avgReadiness = users.length > 0 ? Math.round(users.reduce((s, u) => s + (u.placementReadiness || 0), 0) / users.length) : 0
  const activeCount = users.length
  const totalInterviews = users.reduce((s, u) => s + (u.interviewsCompleted || 0), 0)
  const totalBadges = users.reduce((s, u) => s + (u.unlockedBadges?.length || 0), 0)

  const branchesList = ['CSE', 'IT', 'ECE', 'EEE', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']

  return (
    <div style={{ marginTop: 20 }}>
      {/* Registry KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Avg Readiness', value: `${avgReadiness}%`, icon: '🎯', color: '#7c3aed' },
          { label: 'Total Registered', value: activeCount, icon: '👥', color: '#6366f1' },
          { label: 'Interviews Taken', value: totalInterviews, icon: '🎙️', color: '#d97706' },
          { label: 'Unlocked Badges', value: totalBadges, icon: '🏆', color: '#059669' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: s.color, fontFamily: 'Urbanist, sans-serif' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '16px 18px', marginBottom: 18, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#9ca3af' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students by name or email..."
            style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
            onFocus={e => e.target.style.borderColor = '#7c3aed'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>
        <select value={filterBranch} onChange={e => setFilterBranch(e.target.value)}
          style={{ padding: '8px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', color: 'var(--text-secondary)', background: 'var(--card-bg)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Departments</option>
          {branchesList.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filteredUsers.length} students</span>
      </div>

      {/* Directory Table */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
        {filteredUsers.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>No students match selection.</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr style={{ background: 'var(--main-bg)', borderBottom: '1px solid var(--card-border)' }}>
                  {['Student Details', 'Branch', 'Year', 'Readiness', 'Aptitude', 'Coding', 'Interview', 'Badges', 'Role', 'Action'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', fontSize: 11.5, fontWeight: 700, color: 'var(--text-muted)', textAlign: 'left', textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u, i) => {
                  const email = u.email || ''
                  const name = u.name || email.split('@')[0]
                  const initial = name.slice(0, 1).toUpperCase()
                  const isUserAdmin = u.role === 'admin' || ADMIN_EMAILS.includes(email)
                  return (
                    <tr key={u.id} style={{ borderBottom: i < filteredUsers.length - 1 ? '1px solid var(--card-border)' : 'none' }}>
                      <td style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 999, background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 800 }}>{initial}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{name}</div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{email}</div>
                          <UserOnlineStatus lastVisited={u.lastVisited} />
                        </div>
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: 12.5, fontWeight: 700 }}>{u.branch || '—'}</td>
                      <td style={{ padding: '12px 16px', fontSize: 12.5 }}>{u.graduationYear || '—'}</td>
                      <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 800, color: '#7c3aed' }}>{u.placementReadiness ?? 0}%</td>
                      <td style={{ padding: '12px 16px', fontSize: 12.5 }}>{u.aptitudeScore ?? 0}%</td>
                      <td style={{ padding: '12px 16px', fontSize: 12.5 }}>{u.codingScore ?? 0}%</td>
                      <td style={{ padding: '12px 16px', fontSize: 12.5 }}>{u.mockInterviewScore ?? 0}%</td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ display: 'flex', gap: 2 }}>
                          {u.unlockedBadges && u.unlockedBadges.slice(0, 3).map(bid => {
                            const b = BADGES.find(x => x.id === bid)
                            return b ? <span key={bid} style={{ fontSize: 13 }} title={b.name}>{b.emoji}</span> : null
                          })}
                          {u.unlockedBadges && u.unlockedBadges.length > 3 && (
                            <span style={{ fontSize: 10, background: '#f3f4f6', padding: '1px 5px', borderRadius: 4, fontWeight: 700, color: '#6b7280' }}>+{u.unlockedBadges.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          fontSize: 10.5,
                          fontWeight: 800,
                          background: isUserAdmin ? 'var(--purple-soft)' : '#f3f4f6',
                          color: isUserAdmin ? 'var(--purple-primary)' : '#6b7280',
                          padding: '3px 8px',
                          borderRadius: 6,
                          textTransform: 'uppercase'
                        }}>
                          {isUserAdmin ? 'Admin' : 'Student'}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', display: 'flex', gap: 6 }}>
                        <button onClick={() => setSelectedStudent(u)}
                          style={{ padding: '6px 12px', background: 'var(--purple-xsoft)', color: '#7c3aed', border: '1.5px solid #c4b5fd', borderRadius: 8, fontSize: 11.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                          Details
                        </button>
                        {!ADMIN_EMAILS.includes(email) && (
                          <button
                            onClick={async () => {
                              const newRole = u.role === 'admin' ? 'student' : 'admin'
                              if (window.confirm(`Are you sure you want to make this user a ${newRole}?`)) {
                                try {
                                  await updateDoc(doc(db, 'users', u.id), { role: newRole })
                                } catch (err) {
                                  alert('Failed to update role: ' + err.message)
                                }
                              }
                            }}
                            style={{
                              padding: '6px 12px',
                              background: isUserAdmin ? '#fee2e2' : '#ecfdf5',
                              color: isUserAdmin ? '#ef4444' : '#10b981',
                              border: `1.5px solid ${isUserAdmin ? '#fca5a5' : '#a7f3d0'}`,
                              borderRadius: 8,
                              fontSize: 11.5,
                              fontWeight: 700,
                              cursor: 'pointer',
                              fontFamily: 'inherit'
                            }}
                          >
                            {isUserAdmin ? 'Revoke' : 'Promote'}
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedStudent && (
        <StudentDetailModal student={selectedStudent} onClose={() => setSelectedStudent(null)} interviews={interviews} />
      )}
    </div>
  )
}

function InterviewsPanel({ interviews }) {
  const [search, setSearch] = useState('')
  const [filterBranch, setFilterBranch] = useState('all')
  const [expandedInterviewId, setExpandedInterviewId] = useState(null)

  const filteredInterviews = interviews.filter(i => {
    const student = i.studentName || ''
    const email = i.studentEmail || ''
    const branch = i.branch || ''
    const matchSearch = student.toLowerCase().includes(search.toLowerCase()) || email.toLowerCase().includes(search.toLowerCase())
    const matchBranch = filterBranch === 'all' || branch.toLowerCase() === filterBranch.toLowerCase()
    return matchSearch && matchBranch
  })

  // Calculate high-level diagnostics
  const totalInterviews = interviews.length
  const avgScore = totalInterviews > 0 ? (interviews.reduce((s, i) => s + (i.score || 0), 0) / totalInterviews).toFixed(1) : '0'
  const highestScore = totalInterviews > 0 ? Math.max(...interviews.map(i => i.score || 0)) : 0

  // Calculate best performing branch
  const branchScores = {}
  const branchCounts = {}
  interviews.forEach(i => {
    if (i.branch) {
      branchScores[i.branch] = (branchScores[i.branch] || 0) + (i.score || 0)
      branchCounts[i.branch] = (branchCounts[i.branch] || 0) + 1
    }
  })
  let bestBranch = '—'
  let bestBranchAvg = 0
  Object.keys(branchCounts).forEach(b => {
    const avg = branchScores[b] / branchCounts[b]
    if (avg > bestBranchAvg) {
      bestBranchAvg = avg
      bestBranch = b
    }
  })

  const branchesList = ['CSE', 'IT', 'ECE', 'EEE', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']

  return (
    <div style={{ marginTop: 20 }}>
      {/* Statistics Header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Average Score', value: `${avgScore}/10`, icon: '🧠', color: '#7c3aed' },
          { label: 'Total Scored', value: totalInterviews, icon: '🎙️', color: '#6366f1' },
          { label: 'Highest Score', value: `${highestScore}/10`, icon: '🏆', color: '#059669' },
          { label: 'Top Department', value: `${bestBranch} (${bestBranchAvg.toFixed(1)})`, icon: '⚡', color: '#d97706' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: s.color, fontFamily: 'Urbanist, sans-serif' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '16px 18px', marginBottom: 18, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#9ca3af' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search student name or email..."
            style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
            onFocus={e => e.target.style.borderColor = '#7c3aed'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>
        <select value={filterBranch} onChange={e => setFilterBranch(e.target.value)}
          style={{ padding: '8px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', color: 'var(--text-secondary)', background: 'var(--card-bg)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Departments</option>
          {branchesList.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filteredInterviews.length} logs found</span>
      </div>

      {/* Live Audit Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filteredInterviews.length === 0 ? (
          <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>No mock interviews taken yet.</div>
        ) : (
          filteredInterviews.map(iLog => {
            const isExpanded = expandedInterviewId === iLog.id
            const dateStr = iLog.createdAt?.toDate ? iLog.createdAt.toDate().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'
            return (
              <div key={iLog.id} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 10, transition: 'all 0.2s', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: 14.5, fontWeight: 900, color: 'var(--text-primary)' }}>{iLog.studentName}</h4>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{iLog.studentEmail} • <span style={{ fontWeight: 700, color: '#7c3aed' }}>{iLog.branch}</span></div>
                  </div>
                  <div style={{ textDirection: 'right' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{dateStr}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                      <span style={{ fontSize: 11.5, background: 'var(--purple-soft)', color: 'var(--purple-primary)', padding: '2px 8px', borderRadius: 6, fontWeight: 800 }}>{iLog.category}</span>
                      <strong style={{ fontSize: 13, background: iLog.score >= 8 ? '#dcfce7' : iLog.score >= 5 ? '#fef3c7' : '#fee2e2', color: iLog.score >= 8 ? '#166534' : iLog.score >= 5 ? '#b45309' : '#991b1b', padding: '2px 8px', borderRadius: 6 }}>{iLog.score}/10</strong>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, padding: 12, cursor: 'pointer' }} onClick={() => setExpandedInterviewId(isExpanded ? null : iLog.id)}>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-secondary)', marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
                    <span>💡 EVALUATION REPORT SUMMARY</span>
                    <span style={{ fontSize: 10, color: 'var(--purple-primary)' }}>{isExpanded ? '▲ Collapse Report' : '▼ Expand Full Review'}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 12.5, color: 'var(--text-primary)', lineHeight: 1.6, whiteSpace: isExpanded ? 'pre-line' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {iLog.feedback}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

function FeedbackPanel() {
  const [feedbackList, setFeedbackList] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterRating, setFilterRating] = useState('all')

  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setFeedbackList(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }, (err) => {
      console.error(err)
      setLoading(false)
    })
    return unsub
  }, [])

  async function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        await deleteDoc(doc(db, 'feedback', id))
      } catch (err) {
        alert('Failed to delete: ' + err.message)
      }
    }
  }

  const filteredFeedback = feedbackList.filter(fb => {
    const name = fb.name || ''
    const email = fb.email || ''
    const content = fb.content || ''
    const tags = fb.tags || []
    
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) || 
                        email.toLowerCase().includes(search.toLowerCase()) || 
                        content.toLowerCase().includes(search.toLowerCase()) ||
                        tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
                        
    const matchRating = filterRating === 'all' || fb.rating === Number(filterRating)
    return matchSearch && matchRating
  })

  const totalSubmissions = feedbackList.length
  const avgRating = totalSubmissions > 0 
    ? (feedbackList.reduce((sum, item) => sum + (item.rating || 0), 0) / totalSubmissions).toFixed(1) 
    : '0.0'

  const bugReportsCount = feedbackList.filter(item => item.tags?.includes('🐛 Bug Report') || item.content?.toLowerCase().includes('bug') || item.rating <= 2).length
  const excellentReviewsCount = feedbackList.filter(item => item.rating === 5).length

  return (
    <div style={{ marginTop: 20 }}>
      {/* Feedback KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Avg Rating', value: `${avgRating} / 5.0`, icon: '⭐', color: '#f59e0b' },
          { label: 'Total Submissions', value: totalSubmissions, icon: '💬', color: '#06b6d4' },
          { label: '5-Star Reviews', value: excellentReviewsCount, icon: '🔥', color: '#ec4899' },
          { label: 'Critical Reviews (≤2★)', value: bugReportsCount, icon: '⚠️', color: '#ef4444' }
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 20, display: 'flex', gap: 14, alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 950, color: s.color, fontFamily: 'Urbanist, sans-serif', lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, marginTop: 4 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '16px 18px', marginBottom: 18, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: '#9ca3af' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search feedback content, tags, student name or email..."
            style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
            onFocus={e => e.target.style.borderColor = '#7c3aed'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>
        <select value={filterRating} onChange={e => setFilterRating(e.target.value)}
          style={{ padding: '8px 12px', border: '1.5px solid var(--card-border)', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', color: 'var(--text-secondary)', background: 'var(--card-bg)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filteredFeedback.length} submissions found</span>
      </div>

      {/* Feedback Card List */}
      {loading ? (
        <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading student feedback...</div>
      ) : filteredFeedback.length === 0 ? (
        <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16 }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>No feedback found</div>
          <div style={{ fontSize: 13, marginTop: 4 }}>Either no students have reviewed yet or none match filters.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {filteredFeedback.map((fb) => {
            const dateStr = fb.createdAt?.toDate 
              ? fb.createdAt.toDate().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) 
              : '—'
            const initial = (fb.name || fb.email || 'S').slice(0, 1).toUpperCase()
            return (
              <div key={fb.id} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div>
                  {/* Rating Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ fontSize: 18, color: i < (fb.rating || 0) ? '#f59e0b' : '#e5e7eb' }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{dateStr}</span>
                  </div>

                  {/* Student Info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 999, background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 800 }}>
                      {initial}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{fb.name || fb.email.split('@')[0]}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{fb.email} · <strong style={{ color: 'var(--purple-primary)' }}>{fb.branch}</strong></div>
                    </div>
                  </div>

                  {/* Tags */}
                  {fb.tags && fb.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                      {fb.tags.map(t => (
                        <span key={t} style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--purple-primary)', background: 'var(--purple-soft)', padding: '2px 8px', borderRadius: 6 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  {fb.content ? (
                    <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                      "{fb.content}"
                    </p>
                  ) : (
                    <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      No descriptive review text provided.
                    </p>
                  )}
                </div>

                {/* Footer Action */}
                <div style={{ borderTop: '1px solid var(--card-border)', marginTop: 16, paddingTop: 12, display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => handleDelete(fb.id)} style={{ padding: '6px 12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 11.5, fontWeight: 700, transition: 'background 0.2s' }}
                     onMouseEnter={e => e.currentTarget.style.background = '#fca5a5'}
                     onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}>
                    Delete Review
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function AdminDashboard() {
  const { user, profile } = useAuth()
  const [orders, setOrders]           = useState([])
  const [users, setUsers]             = useState([])
  const [interviews, setInterviews]   = useState([])
  const [loading, setLoading]         = useState(true)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [filterStatus, setFilterStatus]   = useState('all')
  const [filterPlan, setFilterPlan]       = useState('all')
  const [search, setSearch]               = useState('')
  const [activeTab, setActiveTab]         = useState('orders')

  // Promote to admin in DB if whitelisted but not set in profile
  useEffect(() => {
    if (user && ADMIN_EMAILS.includes(user.email) && profile && profile.role !== 'admin') {
      updateDoc(doc(db, 'users', user.uid), { role: 'admin' })
        .then(() => {})
        .catch(err => console.error('Failed to promote to admin in DB:', err));
    }
  }, [user, profile])

  // Access control
  const isAdmin = user && (ADMIN_EMAILS.includes(user.email) || profile?.role === 'admin')

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

  // Sync users
  useEffect(() => {
    if (!isAdmin) return
    const q = query(collection(db, 'users'))
    const unsub = onSnapshot(q, (snap) => {
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [isAdmin])

  // Sync interviews
  useEffect(() => {
    if (!isAdmin) return
    const q = query(collection(db, 'interviews'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setInterviews(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
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
      {/* Header & Tabs */}
      <div style={{ marginBottom: 24, borderBottom: '2px solid var(--card-border)', paddingBottom: 16 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 24, color: 'var(--text-primary)', marginBottom: 16 }}>🛠️ Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            { key: 'orders', label: '📦 Orders', bg: 'var(--purple-soft)', color: 'var(--purple-primary)' },
            { key: 'resources', label: '📚 Resources', bg: '#dcfce7', color: '#16a34a' },
            { key: 'notifications', label: '🔔 Alerts', bg: '#fef3c7', color: '#d97706' },
            { key: 'analytics', label: '📊 Analytics', bg: '#eff6ff', color: '#2563eb' },
            { key: 'students', label: '👥 Students', bg: '#fdf2f8', color: '#db2777' },
            { key: 'interviews', label: '🎙️ Mock Interviews', bg: '#f5f3ff', color: '#7c3aed' },
            { key: 'feedback', label: '💬 Feedback', bg: '#ecfeff', color: '#0891b2' }
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              style={{ padding: '8px 16px', background: activeTab === tab.key ? tab.bg : 'transparent', color: activeTab === tab.key ? tab.color : 'var(--text-secondary)', border: 'none', borderRadius: 8, fontWeight: 800, cursor: 'pointer', fontSize: 13, transition: 'all 0.15s' }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'notifications' && <NotificationsPanel />}
      {activeTab === 'resources' && <ResourcesPanel />}
      {activeTab === 'analytics' && <AnalyticsPanel orders={orders} users={users} />}
      {activeTab === 'students' && <StudentDirectoryPanel users={users} interviews={interviews} />}
      {activeTab === 'interviews' && <InterviewsPanel interviews={interviews} />}
      {activeTab === 'feedback' && <FeedbackPanel />}

      {activeTab === 'orders' && (
        <>
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
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button onClick={() => setSelectedOrder(order)}
                              style={{ padding: '6px 14px', background: 'var(--purple-xsoft)', color: '#7c3aed', border: '1.5px solid #c4b5fd', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                              Manage
                            </button>
                            <button onClick={async () => {
                              if (window.confirm('Delete this order permanently?')) {
                                try {
                                  await deleteDoc(doc(db, 'orders', order.id))
                                  if (order.userId) {
                                    await updateDoc(doc(db, 'users', order.userId), {
                                      resumeStatus: null,
                                      resumeNotes: null,
                                      deliveredResumeUrl: null,
                                      deliveredResumeName: null,
                                      resumeFileName: null,
                                      resumeUrl: null,
                                      updatedAt: serverTimestamp(),
                                    })
                                  }
                                } catch(e) {
                                  alert('Failed: ' + e.message)
                                }
                              }
                            }}
                              style={{ padding: '6px 10px', background: '#fee2e2', color: '#ef4444', border: '1.5px solid #fca5a5', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {selectedOrder && <OrderDetail order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  )
}
