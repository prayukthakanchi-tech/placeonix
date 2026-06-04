import React, { useState, useEffect, useRef } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'

// ── Razorpay Key (replace with your live key) ─────────────────────
const RAZORPAY_KEY = 'rzp_test_REPLACE_WITH_YOUR_KEY'

// ── Plans ─────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'starter',
    name: 'Starter ATS Review',
    price: 50,
    badge: null,
    color: '#6366f1',
    delivery: '24 hours',
    features: [
      'Detailed ATS Report',
      'Resume Mistake Analysis',
      'Keyword Gap Analysis',
      'Placement Readiness Score',
      'Improvement Suggestions',
    ],
    cta: 'Get Detailed Report',
  },
  {
    id: 'upgrade',
    name: 'Resume Upgrade',
    price: 199,
    badge: 'Most Popular',
    badgeColor: '#7c3aed',
    color: '#7c3aed',
    delivery: '48 hours',
    features: [
      'Everything in Starter',
      'Full ATS Optimization',
      'Complete Resume Rewrite',
      'Professional Formatting',
      'Industry-Specific Keywords',
      'Stronger Project Descriptions',
      'Skills Section Enhancement',
    ],
    cta: 'Upgrade My Resume',
  },
  {
    id: 'success',
    name: 'Placement Success Pack',
    price: 499,
    badge: 'Best Value',
    badgeColor: '#059669',
    color: '#059669',
    delivery: '72 hours',
    features: [
      'Everything in Resume Upgrade',
      'LinkedIn Profile Optimization',
      'Personalized Improvement Report',
      'Resume & LinkedIn Consistency Check',
      'Placement-Focused Recommendations',
      'Priority Resume Processing',
    ],
    cta: 'Maximize My Chances',
  },
]

const ORDER_STATUSES = [
  { key: 'payment_received',        label: 'Payment Received' },
  { key: 'resume_received',         label: 'Resume Received' },
  { key: 'under_review',            label: 'Under Review' },
  { key: 'ats_complete',            label: 'ATS Analysis Complete' },
  { key: 'optimization_in_progress',label: 'Optimization In Progress' },
  { key: 'final_review',            label: 'Final Review' },
  { key: 'delivered',               label: 'Delivered' },
]

function generateOrderId() {
  return 'PLX-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase()
}

// ── Load Razorpay script ──────────────────────────────────────────
function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

// ── Simulated ATS Score ───────────────────────────────────────────
function simulateATSScore(fileName) {
  const seed = fileName.length
  return Math.min(85, Math.max(35, 38 + (seed % 30)))
}

// ─────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    { icon: '🔒', text: 'ATS-Friendly Analysis' },
    { icon: '🎓', text: 'Student-Focused' },
    { icon: '🎯', text: 'Placement-Oriented' },
    { icon: '💸', text: 'Affordable Pricing' },
    { icon: '🛡️', text: 'Secure Payments' },
  ]
  return (
    <div style={{ background: 'var(--card-bg)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)', padding: '12px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', padding: '0 24px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text-secondary)', fontWeight: 600 }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ATSChecker({ onUpgrade }) {
  const [file, setFile] = useState(null)
  const [score, setScore] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef()

  function handleFile(f) {
    if (!f) return
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(f.type) && !f.name.match(/\.(pdf|doc|docx)$/i)) {
      alert('Please upload a PDF, DOC, or DOCX file.')
      return
    }
    setFile(f)
    setScore(null)
    setAnalyzing(true)
    setTimeout(() => {
      setScore(simulateATSScore(f.name))
      setAnalyzing(false)
    }, 2200)
  }

  const scoreColor = score < 50 ? '#ef4444' : score < 70 ? '#f97316' : '#16a34a'
  const scoreLabel = score < 50 ? 'Needs Urgent Work' : score < 70 ? 'Below Average' : 'Decent — But Can Be Better'

  return (
    <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #e5e7eb', padding: '32px 32px 28px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 22 }}>📄</span>
        <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 20, color: '#111827' }}>Free ATS Score Checker</h2>
        <span style={{ fontSize: 11, fontWeight: 700, background: '#dcfce7', color: '#16a34a', padding: '2px 10px', borderRadius: 999, border: '1px solid #86efac' }}>FREE</span>
      </div>
      <p style={{ fontSize: 13.5, color: '#6b7280', marginBottom: 22, lineHeight: 1.6 }}>
        Upload your resume and see how it performs against ATS filters. Most resumes fail before a human ever reads them.
      </p>

      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]) }}
        style={{ border: `2px dashed ${dragging ? '#7c3aed' : '#d1d5db'}`, borderRadius: 14, padding: '28px 20px', textAlign: 'center', cursor: 'pointer', background: dragging ? '#f5f3ff' : '#fafafa', transition: 'all 0.2s', marginBottom: 16 }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 4 }}>
          {file ? `✅ ${file.name}` : 'Drop your resume here or click to upload'}
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af' }}>PDF, DOC, DOCX • Max 5MB</div>
        <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
      </div>

      {analyzing && (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ display: 'inline-block', width: 32, height: 32, border: '3px solid #e5e7eb', borderTopColor: '#7c3aed', borderRadius: 999, animation: 'spin 0.8s linear infinite', marginBottom: 10 }} />
          <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 600 }}>Analyzing your resume against ATS filters...</div>
        </div>
      )}

      {score !== null && !analyzing && (
        <div>
          {/* Score ring */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#f9fafb', borderRadius: 14, padding: '20px 24px', marginBottom: 20, border: '1px solid #e5e7eb' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <svg width={90} height={90} viewBox="0 0 90 90">
                <circle cx={45} cy={45} r={38} fill="none" stroke="#e5e7eb" strokeWidth={9} />
                <circle cx={45} cy={45} r={38} fill="none" stroke={scoreColor} strokeWidth={9}
                  strokeDasharray={`${(score / 100) * 238.76} 238.76`}
                  strokeLinecap="round" transform="rotate(-90 45 45)" style={{ transition: 'stroke-dasharray 1s ease' }} />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 900, color: scoreColor }}>{score}</span>
                <span style={{ fontSize: 9, color: '#9ca3af', fontWeight: 700 }}>/ 100</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#111827', marginBottom: 4 }}>ATS Score: <span style={{ color: scoreColor }}>{scoreLabel}</span></div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>
                {score < 50
                  ? '⚠️ Your resume is likely being filtered out before recruiters see it. Immediate optimization needed.'
                  : score < 70
                    ? '⚠️ Your resume passes some ATS filters but misses critical keywords and formatting standards.'
                    : '⚠️ Your resume has potential but still misses key optimization points that top candidates have.'}
              </div>
            </div>
          </div>

          {/* Free insights */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 10 }}>✅ Basic Issues Found:</div>
            {['Missing quantified achievements', 'Weak action verbs detected', 'Formatting may cause ATS parse errors'].map((issue, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', fontSize: 13, color: '#374151' }}>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>✗</span> {issue}
              </div>
            ))}
          </div>

          {/* Locked premium insights */}
          <div style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', border: '1.5px solid #c4b5fd', borderRadius: 14, padding: '18px 20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(3px)', background: 'rgba(245,243,255,0.5)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ fontSize: 28 }}>🔒</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#4c1d95', textAlign: 'center' }}>Unlock Full Analysis</div>
              <div style={{ fontSize: 12, color: '#6d28d9', textAlign: 'center', maxWidth: 240 }}>See exactly what's holding your resume back and how to fix it</div>
              <button onClick={() => onUpgrade(PLANS[0])}
                style={{ padding: '9px 22px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(109,40,217,0.4)' }}>
                Unlock for ₹50 →
              </button>
            </div>
            <div style={{ opacity: 0.25 }}>
              {['Missing Keywords', 'ATS Improvement Suggestions', 'Recruiter Red Flags', 'Skills Optimization', 'Project Description Improvements', 'Placement Readiness Report'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', fontSize: 13 }}>
                  <span>🔑</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

function RejectionSection() {
  const reasons = [
    { icon: '📐', title: 'Poor Formatting & Layout' },
    { icon: '🔑', title: 'Missing Industry Keywords' },
    { icon: '💬', title: 'Weak Impact Metrics' },
    { icon: '📋', title: 'Generic & Vague Phrasing' },
    { icon: '🤖', title: 'Hidden ATS Parse Errors' },
    { icon: '📎', title: 'Irrelevant Filler Content' },
  ]
  return (
    <div style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: '#dc2626', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid #fca5a5', marginBottom: 12 }}>WHY STUDENTS GET REJECTED</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: 'var(--text-primary)', marginBottom: 12 }}>6 Reasons Your Resume Gets Filtered Out</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto' }}>Recruiters spend an average of 7 seconds on a resume. ATS systems spend even less. Here's what's killing your chances.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {reasons.map((r, i) => (
            <div key={i} style={{ padding: '16px 20px', background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: 24 }}>{r.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>{r.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BeforeAfter() {
  const items = [
    { before: 'Generic Resume', after: 'ATS-Optimized Resume' },
    { before: 'Low ATS Score (40-55)', after: 'High ATS Score (80+)' },
    { before: 'Weak Project Descriptions', after: 'Impact-Driven Projects with Numbers' },
    { before: 'Few Interview Calls', after: 'More Shortlisting Opportunities' },
    { before: 'Missing Industry Keywords', after: 'Role-Specific Keywords Included' },
    { before: 'Generic Skills Section', after: 'Targeted Skills for Your Domain' },
  ]
  return (
    <div style={{ padding: '60px 0', background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.2)', color: '#a78bfa', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid rgba(167,139,250,0.3)', marginBottom: 12 }}>TRANSFORMATION</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: '#fff', marginBottom: 12 }}>Before vs After Optimization</h2>
          <p style={{ fontSize: 15, color: '#94a3b8' }}>See the difference a professionally optimized resume makes.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Before */}
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1.5px solid rgba(239,68,68,0.25)', borderRadius: 16, padding: '24px 22px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#f87171', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#ef4444', display: 'inline-block' }} />
              BEFORE
            </div>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12, fontSize: 13, color: '#f87171' }}>
                <span style={{ marginTop: 2, flexShrink: 0 }}>✗</span>
                <span>{item.before}</span>
              </div>
            ))}
          </div>
          {/* After */}
          <div style={{ background: 'rgba(22,163,74,0.08)', border: '1.5px solid rgba(22,163,74,0.25)', borderRadius: 16, padding: '24px 22px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#4ade80', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#22c55e', display: 'inline-block' }} />
              AFTER
            </div>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12, fontSize: 13, color: '#4ade80' }}>
                <span style={{ marginTop: 2, flexShrink: 0 }}>✓</span>
                <span>{item.after}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function RecruiterWants() {
  const wants = [
    { icon: '⚡', title: 'Relevant Skills', desc: 'Specific technical and soft skills that match the job description exactly.' },
    { icon: '🏗️', title: 'Strong Projects', desc: 'Projects with clear outcomes, technologies used, and measurable results.' },
    { icon: '🤖', title: 'ATS-Friendly Structure', desc: 'Simple layouts with standard headings that parse cleanly through automated filters.' },
    { icon: '📈', title: 'Clear Achievements', desc: 'Numbers and percentages that show what you actually accomplished, not just what you did.' },
    { icon: '✨', title: 'Professional Presentation', desc: 'Clean, consistent formatting that reads well in 7 seconds and makes a strong first impression.' },
  ]
  return (
    <div style={{ padding: '60px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', background: '#f0fdf4', color: '#16a34a', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid #86efac', marginBottom: 12 }}>RECRUITER INSIGHTS</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: '#111827', marginBottom: 12 }}>What Recruiters Actually Want</h2>
          <p style={{ fontSize: 15, color: '#6b7280' }}>We've studied what hiring managers look for. Here's exactly what makes them shortlist a candidate.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {wants.map((w, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, padding: '18px 22px', background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 14, alignItems: 'flex-start', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: 42, height: 42, background: '#f5f3ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{w.icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#111827', marginBottom: 4 }}>{w.title}</div>
                <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PricingSection({ onSelect, purchasedPlan }) {
  return (
    <div style={{ padding: '60px 0', background: '#fff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#f5f3ff', color: '#7c3aed', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid #c4b5fd', marginBottom: 12 }}>CHOOSE YOUR PLAN</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 30, color: '#111827', marginBottom: 12 }}>Affordable Pricing. Real Results.</h2>
          <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>All plans are handled by our placement experts. No AI-only solutions — real, manual, personalized reviews.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
          {PLANS.map((plan) => (
            <div key={plan.id} style={{ position: 'relative', borderRadius: 20, border: `2px solid ${plan.badge === 'Most Popular' ? plan.color : '#e5e7eb'}`, padding: '28px 24px', background: '#fff', boxShadow: plan.badge === 'Most Popular' ? `0 8px 32px rgba(124,58,237,0.15)` : '0 2px 8px rgba(0,0,0,0.04)', transition: 'transform 0.2s', transform: plan.badge === 'Most Popular' ? 'scale(1.03)' : 'scale(1)' }}>
              {plan.badge && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: plan.badgeColor, color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 16px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                  {plan.badge}
                </div>
              )}
              <div style={{ fontSize: 16, fontWeight: 800, color: '#111827', marginBottom: 6 }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 900, color: plan.color }}>₹{plan.price}</span>
                <span style={{ fontSize: 13, color: '#9ca3af' }}>one-time</span>
              </div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>⏱ Delivered in {plan.delivery}</div>
              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 18, marginBottom: 20 }}>
                {plan.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 9, fontSize: 13, color: '#374151' }}>
                    <span style={{ color: plan.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => onSelect(plan)}
                disabled={purchasedPlan === plan.id}
                style={{ width: '100%', padding: '12px', borderRadius: 12, border: 'none', cursor: purchasedPlan === plan.id ? 'default' : 'pointer', fontSize: 14, fontWeight: 700, fontFamily: 'inherit', transition: 'all 0.2s',
                  background: purchasedPlan === plan.id ? '#f3f4f6' : `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)`,
                  color: purchasedPlan === plan.id ? '#9ca3af' : '#fff',
                  boxShadow: purchasedPlan === plan.id ? 'none' : `0 4px 14px ${plan.color}44`,
                }}>
                {purchasedPlan === plan.id ? '✅ Purchased' : plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: '#9ca3af' }}>
          🔒 Secure Payment · Your resume stays private · No spam
        </div>
      </div>
    </div>
  )
}

function UpsellBanner({ purchasedPlan, onSelect }) {
  if (!purchasedPlan) return null
  const nextPlan = purchasedPlan === 'starter' ? PLANS[1] : purchasedPlan === 'upgrade' ? PLANS[2] : null
  if (!nextPlan) return null

  return (
    <div style={{ padding: '24px', background: 'linear-gradient(135deg, #7c3aed11, #6366f111)', border: '1.5px solid #c4b5fd', borderRadius: 16, margin: '0 0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 13, color: '#7c3aed', fontWeight: 700, marginBottom: 4 }}>🚀 Your resume still has room to grow!</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#111827', marginBottom: 4 }}>Upgrade to {nextPlan.name}</div>
          <div style={{ fontSize: 13, color: '#6b7280' }}>{nextPlan.features.slice(1, 4).join(' · ')}</div>
        </div>
        <button onClick={() => onSelect(nextPlan)}
          style={{ padding: '11px 24px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(109,40,217,0.35)', whiteSpace: 'nowrap' }}>
          Upgrade for ₹{nextPlan.price} →
        </button>
      </div>
    </div>
  )
}

// ── 4-Step Payment Modal ──────────────────────────────────────────
function PaymentModal({ plan, onClose, onSuccess }) {
  const [step, setStep]     = useState(1)
  const [paying, setPaying] = useState(false)
  const [paymentId, setPaymentId] = useState(null)
  const [orderId, setOrderId]   = useState(null)
  const { user }                = useAuth()

  const [form, setForm] = useState({
    name: '', email: user?.email || '', mobile: '', file: null,
    jobRole: '', branch: '', graduationYear: new Date().getFullYear() + 1,
    linkedin: '', notes: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const fileRef = useRef()

  const upd = (k, v) => setForm(p => ({ ...p, [k]: v }))

  // Step 2 — Manual UPI
  function handleUPIPayment() {
    if (!paymentId || paymentId.length < 8) {
      alert('Please enter a valid 12-digit UTR or Transaction ID.')
      return
    }
    const generatedOrderId = generateOrderId()
    setOrderId(generatedOrderId)
    setStep(3)
  }

  // Step 3 → 4 — Submit to Firestore
  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.mobile || !form.file || !form.jobRole || !form.branch) {
      alert('Please fill in all required fields and upload your resume.')
      return
    }
    setSubmitting(true)
    try {
      // 1. Upload to Cloudinary
      const formData = new FormData()
      formData.append('file', form.file)
      formData.append('upload_preset', 'placeonix_resumes')
      
      const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/dcrllhmii/upload`, {
        method: 'POST',
        body: formData
      })
      if (!cloudinaryRes.ok) throw new Error('Failed to upload file to Cloudinary')
      const uploadResult = await cloudinaryRes.json()

      // 2. Save Order to Firestore
      const docRef = await addDoc(collection(db, 'orders'), {
        orderId,
        planId: plan.id,
        planName: plan.name,
        price: plan.price,
        paymentId,
        status: 'resume_received',
        customerName: form.name,
        customerEmail: form.email,
        customerMobile: form.mobile,
        resumeFileName: form.file.name,
        resumeUrl: uploadResult.secure_url,
        jobRole: form.jobRole,
        branch: form.branch,
        graduationYear: form.graduationYear,
        linkedin: form.linkedin,
        notes: form.notes,
        userId: user?.uid || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        deliveryDays: plan.delivery,
      })
      setSubmitted(true)
      setStep(4)
      onSuccess && onSuccess({ orderId, planName: plan.name, docId: docRef.id })
    } catch (err) {
      alert('Submission failed: ' + err.message)
    }
    setSubmitting(false)
  }

  const stepLabels = ['Select Package', 'Payment', 'Submit Resume', 'Confirmation']

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: 22, width: '100%', maxWidth: 560, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
        {/* Modal header */}
        <div style={{ padding: '22px 24px 16px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: '#111827' }}>{plan.name}</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9ca3af', lineHeight: 1 }}>×</button>
        </div>

        {/* Step indicator */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6' }}>
          <div style={{ display: 'flex', gap: 0 }}>
            {stepLabels.map((label, i) => {
              const n = i + 1
              const active = step === n
              const done = step > n
              return (
                <React.Fragment key={i}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800,
                      background: done ? '#7c3aed' : active ? '#7c3aed' : '#f3f4f6',
                      color: done || active ? '#fff' : '#9ca3af',
                    }}>{done ? '✓' : n}</div>
                    <div style={{ fontSize: 9.5, fontWeight: 600, color: active ? '#7c3aed' : done ? '#7c3aed' : '#9ca3af', textAlign: 'center', lineHeight: 1.3 }}>{label}</div>
                  </div>
                  {i < 3 && <div style={{ flex: 1, height: 2, background: step > n ? '#7c3aed' : '#f3f4f6', marginTop: 13, transition: 'background 0.3s' }} />}
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Step 1 — Confirm plan */}
          {step === 1 && (
            <div>
              <div style={{ background: '#f9fafb', border: '1.5px solid #e5e7eb', borderRadius: 14, padding: '20px', marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#111827', marginBottom: 12 }}>{plan.name}</div>
                {plan.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 7, fontSize: 13, color: '#374151' }}>
                    <span style={{ color: '#7c3aed' }}>✓</span><span>{f}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid #e5e7eb', marginTop: 14, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#6b7280' }}>Total Amount</span>
                  <span style={{ fontSize: 22, fontWeight: 900, color: '#7c3aed' }}>₹{plan.price}</span>
                </div>
              </div>
              <button onClick={() => setStep(2)} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(109,40,217,0.4)' }}>
                Proceed to Payment →
              </button>
            </div>
          )}

          {/* Step 2 — Payment */}
          {step === 2 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#7c3aed', marginBottom: 4 }}>₹{plan.price}</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>for {plan.name}</div>
              </div>

              {/* PhonePe QR Card */}
              <div style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fff 100%)', border: '2px solid #7c3aed', borderRadius: 18, padding: '24px 20px', marginBottom: 20, textAlign: 'center', boxShadow: '0 8px 32px rgba(124,58,237,0.12)' }}>
                {/* PhonePe Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#5f259f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 16, fontFamily: 'serif' }}>Pe</div>
                  <span style={{ fontWeight: 900, fontSize: 20, color: '#1a1a2e', letterSpacing: 0.5 }}>PhonePe</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#5f259f', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>ACCEPTED HERE</div>
                <div style={{ fontSize: 12.5, color: '#6b7280', marginBottom: 18 }}>Scan &amp; Pay Using PhonePe App</div>

                {/* QR Code Image */}
                <div style={{ display: 'inline-block', background: '#fff', border: '3px solid #e5e7eb', borderRadius: 14, padding: 10, marginBottom: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                  <img
                    src="/phonepe-qr.png"
                    alt="PhonePe QR Code - Kanchi Prayuktha"
                    style={{ width: 220, height: 'auto', objectFit: 'contain', display: 'block', borderRadius: 8 }}
                    onError={e => {
                      // Fallback if image not found
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div style="width:190px;height:190px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;color:#9ca3af"><span style="font-size:40px">📱</span><span style="font-size:11px;font-weight:600">QR Loading...</span></div>'
                    }}
                  />
                </div>

                {/* Account Name */}
                <div style={{ fontWeight: 800, fontSize: 15, color: '#111827', marginBottom: 14 }}>Kanchi Prayuktha</div>

                {/* Amount reminder */}
                <div style={{ background: '#ede9fe', border: '1.5px solid #c4b5fd', borderRadius: 10, padding: '10px 16px', marginBottom: 4, display: 'inline-block' }}>
                  <span style={{ fontSize: 13, color: '#5b21b6', fontWeight: 700 }}>Pay exactly </span>
                  <span style={{ fontSize: 16, color: '#7c3aed', fontWeight: 900 }}>₹{plan.price}</span>
                  <span style={{ fontSize: 13, color: '#5b21b6', fontWeight: 700 }}> via PhonePe / GPay / Paytm</span>
                </div>
              </div>

              {/* UTR Input */}
              <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 14, padding: '18px', marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#111827', marginBottom: 4 }}>After paying, enter your Transaction ID</div>
                <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 12 }}>Find the 12-digit UTR number in your PhonePe / GPay transaction history</div>
                <label style={{ fontSize: 12.5, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 5 }}>Transaction ID / UTR Number *</label>
                <input type="text" value={paymentId || ''} onChange={e => setPaymentId(e.target.value)} placeholder="e.g. 312345678901" required
                  style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #e5e7eb', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = '#7c3aed'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <button onClick={handleUPIPayment}
                style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                Confirm Payment & Proceed →
              </button>
            </div>
          )}

          {/* Step 3 — Resume Form */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <div style={{ fontSize: 13, color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '10px 14px', borderRadius: 10, marginBottom: 20, display: 'flex', gap: 8 }}>
                ✅ Payment successful! Now submit your details.
              </div>
              {[
                { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Mobile Number *', key: 'mobile', type: 'tel', placeholder: '10-digit mobile number' },
                { label: 'Target Job Role *', key: 'jobRole', type: 'text', placeholder: 'e.g. Software Engineer, Data Analyst' },
                { label: 'Branch / Degree *', key: 'branch', type: 'text', placeholder: 'e.g. B.Tech CSE, MBA' },
                { label: 'Graduation Year *', key: 'graduationYear', type: 'number', placeholder: 'e.g. 2025' },
                { label: 'LinkedIn URL (Optional)', key: 'linkedin', type: 'url', placeholder: 'https://linkedin.com/in/yourprofile' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 5 }}>{label}</label>
                  <input type={type} value={form[key]} onChange={e => upd(key, e.target.value)} placeholder={placeholder} required={!label.includes('Optional')}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #e5e7eb', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#7c3aed'}
                    onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              ))}

              {/* Resume Upload */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12.5, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 5 }}>Upload Resume *</label>
                <div onClick={() => fileRef.current?.click()} style={{ border: '2px dashed #d1d5db', borderRadius: 10, padding: '16px', textAlign: 'center', cursor: 'pointer', background: '#fafafa', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#7c3aed'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d5db'}>
                  <div style={{ fontSize: 13, color: form.file ? '#16a34a' : '#6b7280', fontWeight: 600 }}>
                    {form.file ? `✅ ${form.file.name}` : '📄 Click to upload your resume (PDF/DOC/DOCX)'}
                  </div>
                  <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => upd('file', e.target.files[0])} />
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 12.5, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 5 }}>Additional Notes (Optional)</label>
                <textarea value={form.notes} onChange={e => upd('notes', e.target.value)} placeholder="Any specific areas you'd like us to focus on..."
                  style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #e5e7eb', borderRadius: 9, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', height: 80, resize: 'vertical' }} />
              </div>

              <button type="submit" disabled={submitting}
                style={{ width: '100%', padding: '14px', background: submitting ? '#f3f4f6' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: submitting ? '#9ca3af' : '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                {submitting ? 'Submitting...' : 'Submit & Confirm Order →'}
              </button>
            </form>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: '#111827', marginBottom: 10 }}>Order Confirmed!</h3>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24, lineHeight: 1.7 }}>
                Your order has been received successfully. Resume review will begin shortly.
              </p>
              <div style={{ background: '#f9fafb', border: '1.5px solid #e5e7eb', borderRadius: 14, padding: '20px', marginBottom: 24, textAlign: 'left' }}>
                {[
                  ['Order ID', orderId],
                  ['Package', plan.name],
                  ['Payment', `₹${plan.price} — Paid`],
                  ['Estimated Delivery', plan.delivery],
                  ['Support', 'prayukthakanchi@gmail.com'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f3f4f6', fontSize: 13 }}>
                    <span style={{ color: '#6b7280', fontWeight: 600 }}>{k}</span>
                    <span style={{ color: '#111827', fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Order tracking */}
              <div style={{ textAlign: 'left', marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 12 }}>📦 Order Tracking</div>
                {ORDER_STATUSES.map((s, i) => {
                  const active = i <= 1 // payment received + resume received
                  return (
                    <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 999, background: active ? '#7c3aed' : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: active ? '#fff' : '#9ca3af', fontWeight: 800, flexShrink: 0 }}>
                        {active ? '✓' : i + 1}
                      </div>
                      <div style={{ fontSize: 13, color: active ? '#111827' : '#9ca3af', fontWeight: active ? 700 : 400 }}>{s.label}</div>
                      {i === 1 && <span style={{ fontSize: 10, background: '#dcfce7', color: '#16a34a', padding: '1px 7px', borderRadius: 999, fontWeight: 700, marginLeft: 'auto' }}>CURRENT</span>}
                    </div>
                  )
                })}
              </div>

              <button onClick={onClose} style={{ width: '100%', padding: '12px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

function WhyPlaceonix() {
  const points = [
    { icon: '🎓', title: 'Built for Students', desc: 'Designed specifically for freshers, final-year students, and internship seekers — not professionals.' },
    { icon: '🎯', title: 'Placement Focused', desc: 'Every recommendation is oriented towards getting you shortlisted in campus placements and off-campus drives.' },
    { icon: '💸', title: 'Affordable Pricing', desc: 'Starting at just ₹50 — because every student deserves access to professional resume guidance.' },
    { icon: '🤖', title: 'ATS-Oriented', desc: 'We understand how applicant tracking systems work and optimize your resume accordingly.' },
    { icon: '✏️', title: 'Manual Review', desc: 'Real people review your resume — not automated tools that miss nuance.' },
    { icon: '🔒', title: 'Privacy First', desc: 'Your resume data is never shared with third parties. Strict data handling policies apply.' },
  ]
  return (
    <div style={{ padding: '60px 0', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', background: '#f5f3ff', color: '#7c3aed', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid #c4b5fd', marginBottom: 12 }}>WHY PLACEONIX</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: '#111827', marginBottom: 12 }}>Honest. Affordable. Student-First.</h2>
          <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>We don't make inflated claims. We focus on what matters — getting you shortlisted.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 18 }}>
          {points.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '18px', background: '#fafafa', border: '1.5px solid #f3f4f6', borderRadius: 14 }}>
              <div style={{ fontSize: 24, flexShrink: 0 }}>{p.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#111827', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'What is an ATS score?', a: 'An ATS (Applicant Tracking System) score measures how well your resume matches what automated hiring software is looking for. Most companies use ATS to filter resumes before a human ever sees them. A low score means your resume gets rejected automatically.' },
    { q: 'Why is ATS optimization important?', a: 'Over 75% of resumes are rejected by ATS before reaching a recruiter. Without proper keyword usage, formatting, and structure, even a strong candidate can be filtered out. ATS optimization ensures your resume actually gets in front of a human.' },
    { q: 'Will this guarantee me a job?', a: 'No — and we won\'t claim that. What we can do is significantly improve your chances of getting shortlisted for interviews by making your resume ATS-compatible, keyword-optimized, and professionally structured. The rest depends on your interview performance.' },
    { q: 'How long does delivery take?', a: 'Starter ATS Review: 24 hours. Resume Upgrade: 48 hours. Placement Success Pack: 72 hours. These are maximum timeframes — we often deliver sooner.' },
    { q: 'Which file formats are accepted?', a: 'We accept PDF, DOC, and DOCX formats. We recommend uploading a PDF to preserve formatting, but any of the three formats will work.' },
    { q: 'Can freshers use this service?', a: 'Absolutely — this service is specifically designed for freshers, final-year students, and early career professionals. All recommendations are tailored to placement-focused resumes, not experienced professional CVs.' },
    { q: 'Is my resume reviewed manually?', a: 'Yes. All plans include a manual review by a real person, not just an automated tool. This is what makes our insights actionable and context-aware.' },
    { q: 'Can I request changes after delivery?', a: 'For the Resume Upgrade and Placement Success Pack, we offer one round of revision if you feel something doesn\'t match your expectations. Contact us at prayukthakanchi@gmail.com.' },
    { q: 'Is my information secure?', a: 'Yes. Your resume and personal details are stored securely and are never shared with third parties. We use encrypted storage and access control on all submitted data.' },
    { q: 'What happens after payment?', a: 'After payment, you\'ll be asked to submit your resume and details through a secure form. You\'ll receive an order confirmation with a unique Order ID. Our team will begin the review and deliver results within the promised timeframe.' },
    { q: 'Have more questions?', a: 'Contact us anytime at prayukthakanchi@gmail.com.' },
  ]
  return (
    <div style={{ padding: '60px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', background: '#f5f3ff', color: '#7c3aed', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999, border: '1px solid #c4b5fd', marginBottom: 12 }}>FAQ</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: '#111827' }}>Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: 10, borderRadius: 14, border: `1.5px solid ${open === i ? '#c4b5fd' : '#e5e7eb'}`, overflow: 'hidden', transition: 'border-color 0.2s' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: open === i ? '#f5f3ff' : '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', gap: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: open === i ? '#7c3aed' : '#111827', lineHeight: 1.4 }}>{faq.q}</span>
              <span style={{ fontSize: 18, color: '#9ca3af', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: '4px 20px 18px', fontSize: 13.5, color: '#6b7280', lineHeight: 1.8, borderTop: '1px solid #e9d5ff', background: '#fff' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────
export default function ResumeATS() {
  const [selectedPlan, setSelectedPlan]   = useState(null)
  const [purchasedPlan, setPurchasedPlan] = useState(null)
  const pricingRef = useRef()

  function scrollToPricing() {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handlePlanSuccess({ orderId, planName }) {
    setPurchasedPlan(selectedPlan?.id)
  }

  return (
    <div style={{ marginLeft: -24, marginRight: -24, marginTop: -24 }}>

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0d0d1a 100%)', padding: '64px 24px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: 999, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: '#a78bfa', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa' }}>Resume & ATS Optimization</span>
          </div>
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', lineHeight: 1.15, marginBottom: 18 }}>
            Your Resume Gets<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>One Chance. Make It Count.</span>
          </h1>
          <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 580, margin: '0 auto 32px', lineHeight: 1.75 }}>
            Most students never realize why their resumes get rejected. Get ATS insights, resume improvements, and placement-focused recommendations that help you stand out from hundreds of applicants.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToPricing}
              style={{ padding: '13px 28px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 6px 20px rgba(109,40,217,0.5)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Check My Resume
            </button>
            <button onClick={() => setSelectedPlan(PLANS[1])}
              style={{ padding: '13px 28px', background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}>
              Upgrade My Resume
            </button>
          </div>

          {/* Fear trigger */}
          <div style={{ marginTop: 32, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['75% of resumes never reach a recruiter', 'Recruiters spend 7 seconds per resume', 'ATS rejects before humans even see it'].map((stat, i) => (
              <div key={i} style={{ fontSize: 12, color: '#64748b', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#f87171' }}>⚠</span>{stat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrustBar />

      {/* ── Free ATS Checker ── */}
      <div style={{ padding: '52px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <ATSChecker onUpgrade={(plan) => setSelectedPlan(plan)} />
        </div>
      </div>

      <RejectionSection />
      <BeforeAfter />
      <RecruiterWants />

      {/* ── Pricing ── */}
      <div ref={pricingRef}>
        <UpsellBanner purchasedPlan={purchasedPlan} onSelect={setSelectedPlan} />
        <PricingSection onSelect={setSelectedPlan} purchasedPlan={purchasedPlan} />
      </div>

      <WhyPlaceonix />
      <FAQSection />

      {/* ── Footer CTA ── */}
      <div style={{ padding: '52px 24px', background: 'linear-gradient(135deg, #0f0f1a, #1a1a2e)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: '#fff', marginBottom: 12 }}>Ready to Stand Out?</h2>
        <p style={{ fontSize: 15, color: '#94a3b8', marginBottom: 28, maxWidth: 460, margin: '0 auto 28px' }}>Don't let a poorly optimized resume cost you your dream placement. Get started for just ₹50.</p>
        <button onClick={scrollToPricing}
          style={{ padding: '14px 36px', background: 'linear-gradient(135deg, #6c3ce1, #7c3aed)', color: '#fff', border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 24px rgba(109,40,217,0.5)' }}>
          View Plans & Get Started
        </button>
      </div>

      {/* ── Payment Modal ── */}
      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onSuccess={(data) => { handlePlanSuccess(data); }}
        />
      )}

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes spin  { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
