import React, { useEffect, useState } from 'react'
import { CheckCircle2, Mail, Save, UserRound } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { BADGES } from '../utils/badges.js'

const departments = ['ECE', 'CSE', 'EEE', 'IT', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']


export default function Profile() {
  const { user, profile, updateUserProfile } = useAuth()
  const [name, setName]             = useState('')
  const [branch, setBranch]         = useState('ECE')
  const [careerGoal, setCareerGoal] = useState('Embedded Engineer')
  const [saving, setSaving]         = useState(false)
  const [message, setMessage]       = useState('')
  const [error, setError]           = useState('')

  // Review / Feedback states
  const [rating, setRating] = useState(0)
  const [selectedTags, setSelectedTags] = useState([])
  const [reviewText, setReviewText] = useState('')
  const [loadingReview, setLoadingReview] = useState(true)
  const [hasExistingReview, setHasExistingReview] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [submittingReview, setSubmittingReview] = useState(false)
  const [reviewMessage, setReviewMessage] = useState('')

  useEffect(() => {
    if (!user) return
    async function fetchReview() {
      try {
        const reviewRef = doc(db, 'feedback', user.uid)
        const docSnap = await getDoc(reviewRef)
        if (docSnap.exists()) {
          const data = docSnap.data()
          setRating(data.rating || 0)
          setSelectedTags(data.tags || [])
          setReviewText(data.content || '')
          setHasExistingReview(true)
        }
      } catch (err) {
        console.error('Error fetching review:', err)
      } finally {
        setLoadingReview(false)
      }
    }
    fetchReview()
  }, [user])

  async function handleReviewSubmit() {
    if (!user || rating === 0) return
    setSubmittingReview(true)
    setReviewMessage('')
    try {
      await setDoc(doc(db, 'feedback', user.uid), {
        uid: user.uid,
        name: profile?.name || user?.email?.split('@')[0] || 'Anonymous',
        email: user.email,
        branch: profile?.branch || 'ECE',
        rating,
        tags: selectedTags,
        content: reviewText.trim(),
        createdAt: serverTimestamp(),
      })
      setHasExistingReview(true)
      setIsEditing(false)
      setReviewMessage('Thank you! Your review has been saved.')
      setTimeout(() => setReviewMessage(''), 4000)
    } catch (err) {
      console.error('Error saving review:', err)
      alert('Could not submit review: ' + err.message)
    }
    setSubmittingReview(false)
  }

  const RATING_LABELS = {
    1: 'Hated it',
    2: 'Disliked it',
    3: "It's okay",
    4: 'Liked it',
    5: 'Loved it!'
  }

  function getPlaceholder(r) {
    if (r <= 2) return 'What went wrong? We would love to know how we can improve your experience...'
    if (r === 3) return 'How can we make Placeonix better? We are listening...'
    return 'Awesome! What did you love most about the platform? Any small suggestions?'
  }

  const reviewChips = ['💻 Coding IDE', '🧠 Aptitude Prep', '🎙️ AI Interviews', '📄 Resume Services', '🎨 UI Design']


  useEffect(() => {
    setName(profile?.name || '')
    setBranch(profile?.branch || 'ECE')
    setCareerGoal(profile?.careerGoal || 'Embedded Engineer')
  }, [profile])

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setError('')
    setSaving(true)

    try {
      await updateUserProfile({
        name: name.trim(),
        branch,
        careerGoal: careerGoal.trim(),
      })
      setMessage('Profile saved. Your dashboard is now updated.')
    } catch (profileError) {
      setError(profileError.message || 'Could not save profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }


  return (
    <div className="profile-page">
      <section className="profile-hero card">
        <div className="profile-avatar-large">
          {(profile?.name || user?.email || 'S').slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="profile-kicker">Student Profile</p>
          <h1>{profile?.name || user?.email?.split('@')[0] || 'Placeonix Student'}</h1>
          <p>Manage the account details used across your dashboard, progress cards, and recommendations.</p>
        </div>
      </section>

      <div className="profile-grid">
        <section className="profile-card card">
          <h2>
            <UserRound size={21} aria-hidden="true" />
            Profile Details
          </h2>

          <form className="profile-form" onSubmit={handleSubmit}>
            <label>
              Display Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Department
              <select value={branch} onChange={(event) => setBranch(event.target.value)}>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </label>

            <label>
              Career Goal
              <input
                value={careerGoal}
                onChange={(event) => setCareerGoal(event.target.value)}
                placeholder="Embedded Engineer"
              />
            </label>

            {message && <div className="profile-success">{message}</div>}
            {error && <div className="profile-error">{error}</div>}

            <button className="profile-save-btn" type="submit" disabled={saving}>
              <Save size={17} aria-hidden="true" />
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        </section>

        {/* Play Store-style Review Section */}
        <section className="profile-card card" style={{ marginTop: 20 }}>
          <h2>
            <span style={{ fontSize: 20 }}>💬</span>
            Rate Placeonix
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 15 }}>
            How is your preparation experience so far?
          </p>

          {/* 5-Star Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '15px 0 5px' }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  if (isEditing || !hasExistingReview) {
                    setRating(num)
                  }
                }}
                disabled={hasExistingReview && !isEditing}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 32,
                  cursor: (hasExistingReview && !isEditing) ? 'default' : 'pointer',
                  color: num <= rating ? '#f59e0b' : '#d1d5db',
                  transition: 'transform 0.15s, color 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!hasExistingReview || isEditing) {
                    e.currentTarget.style.transform = 'scale(1.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!hasExistingReview || isEditing) {
                    e.currentTarget.style.transform = 'scale(1)'
                  }
                }}
              >
                ★
              </button>
            ))}
          </div>

          {rating > 0 && (
            <div style={{
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 800,
              color: '#f59e0b',
              marginBottom: 15
            }} >
              {RATING_LABELS[rating]}
            </div>
          )}

          {/* Tag Chips */}
          <div style={{ marginBottom: 15 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Select what you are reviewing:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {reviewChips.map((chip) => {
                const isSelected = selectedTags.includes(chip)
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      if (hasExistingReview && !isEditing) return
                      if (isSelected) {
                        setSelectedTags(selectedTags.filter(t => t !== chip))
                      } else {
                        setSelectedTags([...selectedTags, chip])
                      }
                    }}
                    disabled={hasExistingReview && !isEditing}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 20,
                      border: '1.5px solid',
                      borderColor: isSelected ? 'var(--purple-primary)' : 'var(--card-border)',
                      background: isSelected ? 'var(--purple-xsoft)' : 'var(--main-bg)',
                      color: isSelected ? 'var(--purple-primary)' : 'var(--text-secondary)',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: (hasExistingReview && !isEditing) ? 'default' : 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.15s',
                    }}
                  >
                    {chip}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Review text */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
              Tell us more (optional):
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              disabled={hasExistingReview && !isEditing}
              placeholder={getPlaceholder(rating)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1.5px solid var(--card-border)',
                borderRadius: 10,
                fontSize: 13,
                fontFamily: 'inherit',
                outline: 'none',
                boxSizing: 'border-box',
                height: 80,
                resize: 'vertical',
                background: 'var(--main-bg)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          {reviewMessage && (
            <div style={{
              marginBottom: 15,
              padding: '10px 12px',
              background: '#f0fdf4',
              border: '1px solid #86efac',
              color: '#16a34a',
              borderRadius: 8,
              fontSize: 12.5,
              fontWeight: 700
            }}>
              {reviewMessage}
            </div>
          )}

          {/* Submit/Edit Buttons */}
          {hasExistingReview && !isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              style={{
                width: '100%',
                padding: 12,
                background: 'var(--purple-xsoft)',
                border: '1.5px solid var(--purple-soft)',
                color: 'var(--purple-primary)',
                borderRadius: 10,
                fontSize: 13.5,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              ✏️ Edit Review
            </button>
          ) : (
            <div style={{ display: 'flex', gap: 10 }}>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false)
                    if (user) {
                      getDoc(doc(db, 'feedback', user.uid)).then(snap => {
                        if (snap.exists()) {
                          const data = snap.data()
                          setRating(data.rating || 0)
                          setSelectedTags(data.tags || [])
                          setReviewText(data.content || '')
                        }
                      })
                    }
                  }}
                  style={{
                    padding: '12px 20px',
                    background: '#f3f4f6',
                    border: 'none',
                    color: '#374151',
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Cancel
                </button>
              )}
              <button
                type="button"
                onClick={handleReviewSubmit}
                disabled={submittingReview || rating === 0}
                style={{
                  flex: 1,
                  padding: 12,
                  background: rating === 0 ? '#e5e7eb' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)',
                  color: rating === 0 ? '#9ca3af' : '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: 13.5,
                  fontWeight: 700,
                  cursor: rating === 0 ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                {submittingReview ? 'Submitting...' : isEditing ? 'Update Review' : 'Submit Review'}
              </button>
            </div>
          )}
        </section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <section className="profile-card card">
            <h2>
              <Mail size={21} aria-hidden="true" />
              Account Summary
            </h2>

            <div className="profile-summary-list">
              <div>
                <span>Email</span>
                <strong>{user?.email}</strong>
              </div>
              <div>
                <span>Department</span>
                <strong>{profile?.branch || 'ECE'}</strong>
              </div>
              <div>
                <span>Career Goal</span>
                <strong>{profile?.careerGoal || 'Embedded Engineer'}</strong>
              </div>
              <div>
                <span>Placement Readiness</span>
                <strong>{profile?.placementReadiness ?? 0}%</strong>
              </div>
            </div>

            <div className="profile-note">
              <CheckCircle2 size={19} aria-hidden="true" />
              <p>Your profile is stored in Firebase and updates automatically after saving.</p>
            </div>
          </section>



          {/* ── Achievements Hub Card ── */}
          <section className="profile-card card" style={{ padding: '24px 28px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16.5, fontWeight: 900, color: 'var(--text-primary)', borderBottom: '1.5px solid var(--card-border)', paddingBottom: 12, marginBottom: 14 }}>
              <span style={{ fontSize: 20 }}>🏆</span>
              Achievements & Badges
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 18 }}>
              Complete placement preparation milestones to unlock badges. Your active badges display next to your rank on the Leaderboard.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 10 }}>
              {BADGES.map(badge => {
                const isUnlocked = profile?.unlockedBadges?.includes(badge.id) || false
                return (
                  <div key={badge.id} style={{
                    padding: '14px 10px', borderRadius: 16, border: '1.5px solid',
                    borderColor: isUnlocked ? 'var(--purple-soft)' : 'var(--card-border)',
                    background: isUnlocked ? 'var(--purple-xsoft)' : '#fafafa',
                    textAlign: 'center', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', transition: 'all 0.2s', position: 'relative',
                    cursor: 'default', filter: isUnlocked ? 'none' : 'grayscale(100%) opacity(55%)'
                  }}
                  title={badge.desc}
                  onMouseEnter={e => {
                    if (isUnlocked) {
                      e.currentTarget.style.borderColor = 'var(--purple-primary)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (isUnlocked) {
                      e.currentTarget.style.borderColor = 'var(--purple-soft)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}>
                    {/* Badge Emoji */}
                    <div style={{
                      fontSize: 26, width: 44, height: 44, borderRadius: '50%',
                      background: isUnlocked ? '#fff' : '#e5e7eb',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 8, border: isUnlocked ? '1.5px solid var(--purple-soft)' : 'none',
                      boxShadow: isUnlocked ? '0 4px 10px rgba(108,60,225,0.1)' : 'none'
                    }}>
                      {badge.emoji}
                    </div>
                    
                    {/* Badge name */}
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: isUnlocked ? 'var(--purple-primary)' : 'var(--text-muted)' }}>
                      {badge.name}
                    </span>
                    <span style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 4, display: 'block', lineHeight: 1.3 }}>
                      {isUnlocked ? '✓ Unlocked' : 'Locked'}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
