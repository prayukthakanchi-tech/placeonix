import React, { useState, useEffect, useCallback } from 'react'

// ─── Question Bank ───────────────────────────────────────────────
const QUESTIONS = {
  quant: [
    { id: 1, q: 'A train 125m long passes a pole in 5 seconds. What is the speed of the train?', options: ['25 m/s', '30 m/s', '20 m/s', '15 m/s'], ans: 0, explanation: 'Speed = Distance / Time = 125 / 5 = 25 m/s' },
    { id: 2, q: 'If 20% of a number is 80, what is 35% of the number?', options: ['120', '140', '160', '180'], ans: 1, explanation: '20% = 80 → Number = 400. 35% of 400 = 140' },
    { id: 3, q: 'A shopkeeper buys an item for ₹800 and sells it for ₹1000. What is the profit percentage?', options: ['20%', '25%', '15%', '30%'], ans: 1, explanation: 'Profit = 200. Profit% = (200/800) × 100 = 25%' },
    { id: 4, q: 'The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?', options: ['12', '15', '18', '20'], ans: 2, explanation: 'Boys = (3/5) × 30 = 18' },
    { id: 5, q: 'What is the compound interest on ₹10,000 at 10% p.a. for 2 years?', options: ['₹2000', '₹2100', '₹1900', '₹2500'], ans: 1, explanation: 'CI = 10000 × (1.1)² - 10000 = 12100 - 10000 = ₹2100' },
    { id: 6, q: 'A can do a piece of work in 10 days, B can do it in 15 days. In how many days can they finish it together?', options: ['5 days', '6 days', '8 days', '12 days'], ans: 1, explanation: 'Combined rate = 1/10 + 1/15 = 1/6. Days = 6' },
    { id: 7, q: 'What is the LCM of 12, 18, and 24?', options: ['36', '48', '72', '144'], ans: 2, explanation: 'LCM(12,18,24) = 72' },
    { id: 8, q: 'The average of 5 numbers is 30. If one number is removed, the average becomes 25. What was the removed number?', options: ['50', '55', '45', '60'], ans: 0, explanation: 'Sum of 5 = 150. Sum of 4 = 100. Removed = 50' },
  ],
  logical: [
    { id: 1, q: 'In a certain code, MANGO is written as NBOHR. How is APPLE written in that code?', options: ['BQQMF', 'ARQMF', 'BQPMF', 'BRQNF'], ans: 0, explanation: 'Each letter is shifted by +1. A→B, P→Q, P→Q, L→M, E→F = BQQMF' },
    { id: 2, q: 'Find the missing number: 2, 6, 12, 20, 30, ?', options: ['40', '42', '44', '46'], ans: 1, explanation: 'Differences: 4,6,8,10,12. Next = 30+12 = 42' },
    { id: 3, q: 'If all cats are dogs and some dogs are rats, which conclusion is definite?', options: ['Some cats are rats', 'All dogs are cats', 'Some cats are not rats', 'Some cats are dogs'], ans: 3, explanation: 'Since all cats are dogs, some cats are definitely dogs.' },
    { id: 4, q: 'A is the father of B. B is the sister of C. C is the mother of D. What is A to D?', options: ['Uncle', 'Grandfather', 'Father', 'Cousin'], ans: 1, explanation: 'A→B→C→D. A is father of B (mother of D), so A is maternal grandfather of D.' },
    { id: 5, q: 'Which number replaces "?" in: 3, 7, 15, 31, ?', options: ['47', '53', '63', '61'], ans: 2, explanation: 'Pattern: ×2+1. 3→7→15→31→63' },
    { id: 6, q: 'Arrange in meaningful order: (1) Sentence (2) Letter (3) Word (4) Paragraph', options: ['2,3,1,4', '1,2,3,4', '3,2,1,4', '2,1,3,4'], ans: 0, explanation: 'Letter → Word → Sentence → Paragraph (2,3,1,4)' },
    { id: 7, q: 'If FRIEND is coded as HUMJTK, then CANDLE is coded as?', options: ['EDRPOI', 'EDRPNF', 'DCQPMI', 'FCPFNH'], ans: 0, explanation: 'Each letter is shifted by +2. C+2=E, A+2=C... = EDRPOI' },
    { id: 8, q: 'Pointing to a girl, Ram says "She is the daughter of my grandfather\'s only son." How is the girl related to Ram?', options: ['Sister', 'Cousin', 'Niece', 'Daughter'], ans: 0, explanation: 'Grandfather\'s only son = Ram\'s father. Father\'s daughter = Ram\'s sister.' },
  ],
  verbal: [
    { id: 1, q: 'Choose the word most similar in meaning to EPHEMERAL:', options: ['Eternal', 'Transient', 'Permanent', 'Robust'], ans: 1, explanation: 'Ephemeral means lasting for a very short time. Transient = passing quickly.' },
    { id: 2, q: 'Choose the ANTONYM of BENEVOLENT:', options: ['Kind', 'Generous', 'Malevolent', 'Charitable'], ans: 2, explanation: 'Benevolent = kind/generous. Antonym = Malevolent (wishing harm).' },
    { id: 3, q: 'Fill the blank: The manager was ______ about the team\'s performance.', options: ['elated', 'apathetic', 'dubious', 'skeptical'], ans: 0, explanation: '"Elated" means extremely happy/excited, fitting positive context.' },
    { id: 4, q: 'Identify the grammatically correct sentence:', options: ['She don\'t know the answer.', 'They was playing cricket.', 'He has been working since morning.', 'I goes to school daily.'], ans: 2, explanation: '"Has been working since" is the correct present perfect continuous form.' },
    { id: 5, q: 'Choose the word that best fits: The new policy was met with widespread _______ from employees.', options: ['approval', 'opposition', 'indifference', 'celebration'], ans: 1, explanation: '"Opposition" means resistance/disagreement, fitting "met with" negative context.' },
    { id: 6, q: 'PAUCITY means:', options: ['Abundance', 'Scarcity', 'Clarity', 'Simplicity'], ans: 1, explanation: 'Paucity = scarcity, lack of something.' },
    { id: 7, q: 'Choose the correct spelling:', options: ['Accomodation', 'Accommodation', 'Acommodation', 'Acomodation'], ans: 1, explanation: 'Correct: Accommodation (double c, double m).' },
    { id: 8, q: 'The idiom "bite the bullet" means:', options: ['To eat quickly', 'To endure a painful situation', 'To be aggressive', 'To make a quick decision'], ans: 1, explanation: 'To bite the bullet = to endure a painful or difficult situation bravely.' },
  ],
}

const SECTION_META = [
  { id: 'quant',   label: 'Quantitative',    icon: '🔢', color: '#6c3ce1', bg: '#ede9fe', desc: '8 questions on numbers, percentages, profit/loss, time & work, averages' },
  { id: 'logical', label: 'Logical Reasoning', icon: '🧩', color: '#f97316', bg: '#fff7ed', desc: '8 questions on coding-decoding, series, syllogisms, blood relations' },
  { id: 'verbal',  label: 'Verbal Ability',  icon: '📝', color: '#3b82f6', bg: '#eff6ff', desc: '8 questions on synonyms, antonyms, grammar, reading comprehension' },
]

// ─── Single question card ────────────────────────────────────────
function QuestionCard({ q, index, submitted, userAnswer, onAnswer }) {
  const isAnswered = userAnswer !== undefined
  const isCorrect = userAnswer === q.ans

  return (
    <div style={{
      background: '#fff',
      border: `1.5px solid ${submitted && isCorrect ? '#86efac' : submitted && isAnswered && !isCorrect ? '#fca5a5' : 'var(--card-border)'}`,
      borderRadius: 14,
      padding: '20px 22px',
      marginBottom: 16,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      transition: 'border-color 0.2s',
    }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
        <span style={{
          width: 26, height: 26, borderRadius: 999,
          background: submitted ? (isCorrect && isAnswered ? '#22c55e' : !isCorrect && isAnswered ? '#ef4444' : '#e5e7eb') : 'var(--purple-soft)',
          color: submitted ? (isAnswered ? '#fff' : 'var(--text-muted)') : 'var(--purple-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 800, flexShrink: 0,
        }}>
          {submitted && isAnswered ? (isCorrect ? '✓' : '✗') : index + 1}
        </span>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6 }}>{q.q}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {q.options.map((opt, i) => {
          let bg = '#f9fafb', border = '#e5e7eb', color = 'var(--text-primary)'
          if (submitted) {
            if (i === q.ans) { bg = '#dcfce7'; border = '#86efac'; color = '#166534' }
            else if (i === userAnswer && i !== q.ans) { bg = '#fee2e2'; border = '#fca5a5'; color = '#991b1b' }
          } else if (userAnswer === i) {
            bg = 'var(--purple-xsoft)'; border = 'var(--purple-primary)'; color = 'var(--purple-primary)'
          }
          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => onAnswer(q.id, i)}
              style={{
                padding: '9px 14px', border: `1.5px solid ${border}`,
                borderRadius: 10, background: bg, color, fontSize: 13.5,
                fontFamily: 'inherit', fontWeight: 500, cursor: submitted ? 'default' : 'pointer',
                textAlign: 'left', transition: 'all 0.15s', lineHeight: 1.4,
              }}
              onMouseEnter={e => { if (!submitted && userAnswer !== i) e.currentTarget.style.borderColor = 'var(--purple-primary)' }}
              onMouseLeave={e => { if (!submitted && userAnswer !== i) e.currentTarget.style.borderColor = '#e5e7eb' }}
            >
              <span style={{ fontWeight: 700, marginRight: 6 }}>{String.fromCharCode(65 + i)}.</span>{opt}
            </button>
          )
        })}
      </div>

      {submitted && (
        <div style={{
          marginTop: 12, padding: '10px 14px',
          background: '#f0fdf4', borderRadius: 10,
          border: '1px solid #bbf7d0', fontSize: 13, color: '#166534', lineHeight: 1.6,
        }}>
          💡 <strong>Explanation:</strong> {q.explanation}
        </div>
      )}
    </div>
  )
}

// ─── Practice section ────────────────────────────────────────────
function PracticeSection({ sectionId, onBack }) {
  const questions = QUESTIONS[sectionId]
  const meta = SECTION_META.find(s => s.id === sectionId)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(null)

  function handleAnswer(qid, optIdx) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qid]: optIdx }))
  }

  function handleSubmit() {
    const s = questions.reduce((acc, q) => acc + (answers[q.id] === q.ans ? 1 : 0), 0)
    setScore(s)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleReset() {
    setAnswers({})
    setSubmitted(false)
    setScore(null)
  }

  return (
    <div>
      {/* Back + header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{
          padding: '7px 16px', border: '1.5px solid var(--card-border)',
          borderRadius: 999, background: '#fff', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)',
        }}>← Back</button>
        <div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 20, color: 'var(--text-primary)' }}>
            {meta.icon} {meta.label}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{questions.length} questions</p>
        </div>
      </div>

      {/* Score banner */}
      {submitted && (
        <div style={{
          background: score >= 6 ? '#dcfce7' : score >= 4 ? '#fef3c7' : '#fee2e2',
          border: `1.5px solid ${score >= 6 ? '#86efac' : score >= 4 ? '#fde68a' : '#fca5a5'}`,
          borderRadius: 14, padding: '20px 24px', marginBottom: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div>
            <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', marginBottom: 3 }}>
              {score >= 6 ? '🎉 Great Job!' : score >= 4 ? '👍 Keep Practicing!' : '📚 Need More Practice'}
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
              You scored <strong>{score}/{questions.length}</strong> — {Math.round((score / questions.length) * 100)}% correct
            </div>
          </div>
          <button onClick={handleReset} style={{
            padding: '10px 22px', background: 'var(--purple-primary)', color: '#fff',
            border: 'none', borderRadius: 999, fontFamily: 'inherit', fontSize: 14,
            fontWeight: 700, cursor: 'pointer',
          }}>
            Try Again
          </button>
        </div>
      )}

      {/* Questions */}
      {questions.map((q, i) => (
        <QuestionCard
          key={q.id} q={q} index={i}
          submitted={submitted}
          userAnswer={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}

      {/* Submit */}
      {!submitted && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {Object.keys(answers).length} of {questions.length} answered
          </span>
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length === 0}
            style={{
              padding: '12px 32px', background: Object.keys(answers).length === 0 ? '#e5e7eb' : 'var(--purple-primary)',
              color: Object.keys(answers).length === 0 ? '#9ca3af' : '#fff',
              border: 'none', borderRadius: 999, fontFamily: 'inherit',
              fontSize: 15, fontWeight: 700, cursor: Object.keys(answers).length === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Submit Answers →
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Mock Test (timed, all sections) ─────────────────────────────
function MockTest({ onBack }) {
  const allQ = [
    ...QUESTIONS.quant.slice(0, 5),
    ...QUESTIONS.logical.slice(0, 5),
    ...QUESTIONS.verbal.slice(0, 5),
  ]
  const TOTAL_SECONDS = 15 * 60 // 15 min
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS)

  const handleSubmit = useCallback(() => {
    const s = allQ.reduce((acc, q) => acc + (answers[q.id + q.q.slice(0,3)] === q.ans ? 1 : 0), 0)
    setScore(s)
    setSubmitted(true)
  }, [answers, allQ])

  useEffect(() => {
    if (submitted) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); handleSubmit(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [submitted, handleSubmit])

  function handleAnswer(qid, key, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [key]: opt }))
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')
  const pct = (timeLeft / TOTAL_SECONDS) * 100
  const timerColor = timeLeft < 120 ? '#ef4444' : timeLeft < 300 ? '#f97316' : '#22c55e'

  const labels = ['Quantitative (Q1–5)', 'Logical Reasoning (Q6–10)', 'Verbal Ability (Q11–15)']

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <button onClick={onBack} style={{ padding: '7px 16px', border: '1.5px solid var(--card-border)', borderRadius: 999, background: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>← Back</button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 20, color: 'var(--text-primary)' }}>⏱️ Mock Test — 15 Questions</h2>
        </div>
        {/* Timer */}
        {!submitted && (
          <div style={{ textAlign: 'center', background: '#fff', border: `2px solid ${timerColor}`, borderRadius: 12, padding: '8px 18px', minWidth: 90 }}>
            <div style={{ fontSize: 20, fontFamily: 'Urbanist, sans-serif', fontWeight: 900, color: timerColor }}>{mins}:{secs}</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600 }}>remaining</div>
            <div style={{ height: 4, background: '#e5e7eb', borderRadius: 999, marginTop: 5, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: timerColor, borderRadius: 999, transition: 'width 1s linear' }} />
            </div>
          </div>
        )}
      </div>

      {submitted && (
        <div style={{ background: score >= 10 ? '#dcfce7' : score >= 7 ? '#fef3c7' : '#fee2e2', border: `1.5px solid ${score >= 10 ? '#86efac' : score >= 7 ? '#fde68a' : '#fca5a5'}`, borderRadius: 14, padding: '20px 24px', marginBottom: 20 }}>
          <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, marginBottom: 4 }}>
            {score >= 10 ? '🏆 Excellent!' : score >= 7 ? '👍 Good effort!' : '📚 Keep Practicing!'}
          </div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Score: <strong>{score}/15</strong> — {Math.round((score/15)*100)}%</div>
        </div>
      )}

      {allQ.map((q, i) => {
        const key = q.id + q.q.slice(0, 3)
        if (i === 0 || i === 5 || i === 10) {
          return (
            <React.Fragment key={key}>
              <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 14, color: 'var(--purple-primary)', background: 'var(--purple-xsoft)', padding: '8px 16px', borderRadius: 10, marginBottom: 12, marginTop: i > 0 ? 20 : 0 }}>
                {labels[Math.floor(i / 5)]}
              </div>
              <QuestionCard q={q} index={i} submitted={submitted} userAnswer={answers[key]} onAnswer={(_, opt) => handleAnswer(q.id, key, opt)} />
            </React.Fragment>
          )
        }
        return <QuestionCard key={key} q={q} index={i} submitted={submitted} userAnswer={answers[key]} onAnswer={(_, opt) => handleAnswer(q.id, key, opt)} />
      })}

      {!submitted && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
          <button onClick={handleSubmit} style={{ padding: '12px 32px', background: 'var(--purple-primary)', color: '#fff', border: 'none', borderRadius: 999, fontFamily: 'inherit', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
            Submit Test →
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Main Aptitude page ──────────────────────────────────────────
export default function Aptitude() {
  const [active, setActive] = useState(null) // null = home, 'quant'|'logical'|'verbal'|'mock'

  if (active === 'mock') return <MockTest onBack={() => setActive(null)} />
  if (active) return <PracticeSection sectionId={active} onBack={() => setActive(null)} />

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 26, color: 'var(--text-primary)', marginBottom: 4 }}>
          🧠 Aptitude Practice
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Practice quantitative, logical, and verbal aptitude — the way companies test it.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 28 }}>
        {[
          { icon: '📚', label: 'Total Questions', value: '24', color: '#ede9fe' },
          { icon: '🏢', label: 'Companies Covered', value: 'TCS · Infosys · Wipro · Accenture', color: '#dcfce7', small: true },
          { icon: '🎯', label: 'Topics', value: '3 Sections', color: '#dbeafe' },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontFamily: s.small ? 'inherit' : 'Urbanist, sans-serif', fontWeight: 800, fontSize: s.small ? 12 : 22, color: 'var(--text-primary)', lineHeight: 1.2 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 20 }}>
        {SECTION_META.map(s => (
          <div
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: '#fff', border: '1.5px solid var(--card-border)',
              borderRadius: 16, padding: '22px', cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = s.color
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}22`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--card-border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 14 }}>
              {s.icon}
            </div>
            <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 17, color: 'var(--text-primary)', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: s.color, background: s.bg, padding: '3px 10px', borderRadius: 999 }}>
                {QUESTIONS[s.id].length} Questions
              </span>
              <span style={{ color: s.color, fontWeight: 700, fontSize: 15 }}>Start →</span>
            </div>
          </div>
        ))}

        {/* Mock Test card */}
        <div
          onClick={() => setActive('mock')}
          style={{
            background: 'linear-gradient(135deg, #6c3ce1, #8b5cf6)',
            border: '1.5px solid #6c3ce1',
            borderRadius: 16, padding: '22px', cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(108,60,225,0.25)', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(108,60,225,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(108,60,225,0.25)'
          }}
        >
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 14 }}>⏱️</div>
          <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 6 }}>Full Mock Test</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 16 }}>
            15 questions across all sections with a 15-minute timer. Simulates real placement aptitude tests.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: 999 }}>
              15 min · 15 Q
            </span>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Start →</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, padding: '18px 22px' }}>
        <div style={{ fontWeight: 800, fontFamily: 'Urbanist, sans-serif', fontSize: 15, color: '#92400e', marginBottom: 10 }}>
          💡 Preparation Tips
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
          {[
            'Practice IndiaBix daily for aptitude',
            'Learn shortcut formulas for quant',
            'Read English newspapers for verbal',
            'Do puzzle solving for logical reasoning',
            'Time yourself — 1.5 min per question',
            'Review wrong answers carefully',
          ].map(t => (
            <div key={t} style={{ fontSize: 13, color: '#78350f', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span>•</span><span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}