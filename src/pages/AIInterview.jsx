import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { computeReadiness, parseInterviewScore } from '../utils/readiness.js'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts'
import { getUnlockedBadges } from '../utils/badges.js'

// ── Constants ─────────────────────────────────────────────────────
const DEPARTMENTS = ['CSE', 'ECE', 'EEE', 'IT', 'ME', 'CIVIL', 'AERO', 'BME', 'BT']
const ROLES = {
  CSE:   ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Engineer', 'DevOps Engineer'],
  ECE:   ['Embedded Systems Engineer', 'VLSI Engineer', 'RF Engineer', 'Signal Processing Engineer', 'IoT Engineer'],
  EEE:   ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer', 'Instrumentation Engineer'],
  IT:    ['IT Analyst', 'Network Engineer', 'System Administrator', 'Software Developer', 'Cloud Engineer'],
  ME:    ['Mechanical Design Engineer', 'Manufacturing Engineer', 'Thermal Engineer', 'Automobile Engineer'],
  CIVIL: ['Structural Engineer', 'Site Engineer', 'Project Engineer', 'Geotechnical Engineer'],
  AERO:  ['Aeronautical Engineer', 'Propulsion Engineer', 'Avionics Engineer'],
  BME:   ['Biomedical Engineer', 'Clinical Engineer', 'R&D Engineer', 'Quality Engineer'],
  BT:    ['Biotech Research Associate', 'Process Engineer', 'Quality Control Analyst'],
}
const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Amazon', 'Google', 'Microsoft', 'Qualcomm', 'Bosch', 'Medtronic', 'Biocon', 'L&T', 'ISRO', 'Other']
const LEVELS = ['Fresher (0 exp)', 'Intern', '1–2 years exp']
const FOCUS_TYPES = ['Technical & HR (Mixed)', 'HR & Behavioral Only', 'Technical Core Only']
const QUIZ_COUNT = 7 // questions in prepare quiz before plan

// ── Wandbox Compiler Settings ──────────────────────────────────────
const COMPILER_LANGUAGES = [
  { id: 71,  name: 'Python',     ext: 'py',   color: '#3b82f6', icon: '🐍' },
  { id: 62,  name: 'Java',       ext: 'java', color: '#f97316', icon: '☕' },
  { id: 54,  name: 'C++',        ext: 'cpp',  color: '#8b5cf6', icon: '🔷' },
  { id: 63,  name: 'JavaScript', ext: 'js',   color: '#eab308', icon: '🟨' },
  { id: 50,  name: 'C',          ext: 'c',    color: '#6b7280', icon: '⚙️' },
]

const WANDBOX_LANGS = {
  71: { compiler: 'cpython-3.13.8' },
  62: { compiler: 'openjdk-jdk-22+36' },
  54: { compiler: 'gcc-13.2.0' },
  63: { compiler: 'nodejs-20.17.0' },
  50: { compiler: 'gcc-13.2.0-c' },
}

const DEFAULT_CODE = {
  71: 'print("Hello, Python!")',
  62: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
  54: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
  63: 'console.log("Hello, JavaScript!");',
  50: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}'
}

const LANGUAGE_NAMES = {
  71: 'Python',
  62: 'Java',
  54: 'C++',
  63: 'JavaScript',
  50: 'C',
}

async function runCodeAI(sourceCode, languageId, stdin = '') {
  const language = LANGUAGE_NAMES[languageId] || 'Python'
  const prompt = `You are a secure, sandboxed code execution engine. Analyze the following source code and simulate its compilation and execution.

Language: ${language}
Stdin / Input:
${stdin}

Code to execute:
${sourceCode}

Instructions:
1. Check for any syntax errors or compilation errors.
2. If there are syntax or compilation errors:
   Return a JSON object with:
   {
     "success": false,
     "type": "Compile Error",
     "output": "<the compiler error/warning message>"
   }
3. If the code compiles, simulate its execution line-by-line using the provided stdin.
4. If there is a runtime error (e.g. division by zero, null pointer, index out of bounds, reference error):
   Return a JSON object with:
   {
     "success": false,
     "type": "Runtime Error",
     "output": "<the runtime exception message and traceback>"
   }
5. If the execution is successful:
   Return a JSON object with:
   {
     "success": true,
     "output": "<the exact output printed to stdout>"
   }

Return ONLY the raw JSON object. Do not include markdown code block formatting (like \`\`\`json). Do not include any other text.`

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt })
    })

    if (res.ok) {
      const data = await res.json()
      let text = data?.response || ''
      text = text.replace(/\`\`\`json/gi, '').replace(/\`\`\`/gi, '').trim()
      const parsed = JSON.parse(text)
      return {
        success: parsed.success,
        output: parsed.output,
        type: parsed.type || (parsed.success ? undefined : 'Runtime Error'),
      }
    }
  } catch (err) {
    // /api/chat proxy failed. Do not fall back to a direct browser-side Gemini call —
    // that would expose the API key in the client bundle.
    return {
      success: false,
      output: '⚠️ AI compiler service is temporarily unavailable. Please try again in a moment.',
      type: 'Execution Error'
    }
  }
}

async function runCode(sourceCode, languageId, retries = 3) {
  const langConfig = WANDBOX_LANGS[languageId]
  if (!langConfig) return { success: false, output: 'Language not supported', type: 'Error' }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: langConfig.compiler,
          code: sourceCode,
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      const data = await res.json()

      if (data.compiler_error || (data.status != 0 && !data.program_message)) {
        const compileOut = (data.compiler_error || data.compiler_message || 'Compile error').trim()
        if (compileOut.includes('Resource temporarily unavailable') || compileOut.includes('crun: clone')) {
          console.warn("Wandbox is overloaded. Falling back to AI compiler...");
          return await runCodeAI(sourceCode, languageId)
        }
        if (compileOut) return { success: false, output: compileOut, type: 'Compile Error' }
      }

      const stdout = (data.program_output || '').trim()
      const stderr = (data.program_error || '').trim()

      if (stderr.includes('Resource temporarily unavailable')) {
        console.warn("Wandbox process space exhausted. Falling back to AI compiler...");
        return await runCodeAI(sourceCode, languageId)
      }

      if (data.status != 0 && stderr) {
        return { success: false, output: stderr, type: 'Runtime Error' }
      }

      return {
        success: true,
        output: stdout || stderr || '(no output)',
      }
    } catch (err) {
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 1000))
        continue
      }
      console.warn(`Wandbox offline: ${err.message}. Falling back to AI compiler...`);
      return await runCodeAI(sourceCode, languageId)
    }
  }
}

// ── Gemini AI Proxy ───────────────────────────────────────────────
// Calls /api/chat (Vercel serverless function) — API key stays server-side.
async function callClaude(messages, systemPrompt) {
  const prompt =
    systemPrompt +
    "\n\n" +
    messages.map(m => `${m.role}: ${m.content}`).join("\n")

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    let errMsg = data?.detail || data?.error || 'AI service unavailable. Please try again.';
    if (response.status === 429) {
      errMsg = 'AI is busy due to high traffic. Please wait 10-15 seconds and try again.';
    }
    throw new Error(errMsg);
  }

  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    'No response generated.'
  )
}


// ── Shared UI ────────────────────────────────────────────────────
function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} style={{
        padding: '10px 14px', border: '1.5px solid var(--card-border)', borderRadius: 10,
        fontSize: 14, fontFamily: 'inherit', background: '#fff', color: 'var(--text-primary)',
        outline: 'none', cursor: 'pointer', transition: 'border-color 0.2s',
      }}
        onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
        onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function Btn({ onClick, disabled, loading, children, outline, small }) {
  const base = { fontFamily: 'inherit', fontWeight: 700, cursor: disabled || loading ? 'not-allowed' : 'pointer', borderRadius: 999, transition: 'all 0.2s', border: 'none' }
  const size = small ? { padding: '8px 18px', fontSize: 13 } : { padding: '12px 28px', fontSize: 14 }
  const color = outline
    ? { background: 'transparent', color: 'var(--purple-primary)', border: '1.5px solid var(--purple-primary)' }
    : disabled || loading
      ? { background: '#e5e7eb', color: '#9ca3af' }
      : { background: 'var(--purple-primary)', color: '#fff' }
  return (
    <button onClick={onClick} disabled={disabled || loading} style={{ ...base, ...size, ...color }}
      onMouseEnter={e => { if (!disabled && !loading) e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {loading ? '⏳ Thinking...' : children}
    </button>
  )
}

function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '7px 16px', border: '1.5px solid var(--card-border)', borderRadius: 999,
      background: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13,
      fontWeight: 600, color: 'var(--text-secondary)', transition: 'all 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--purple-primary)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--card-border)'}
    >
      ← Back
    </button>
  )
}

// Render AI markdown-lite text
function AIText({ text }) {
  return (
    <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
      {text.split('\n').map((line, i) => {
        if (line.startsWith('## '))  return <h2 key={i} style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 17, color: 'var(--text-primary)', margin: '16px 0 8px' }}>{line.slice(3)}</h2>
        if (line.startsWith('### ')) return <h3 key={i} style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 15, color: 'var(--text-primary)', margin: '14px 0 6px' }}>{line.slice(4)}</h3>
        if (line.startsWith('- ') || line.startsWith('• ')) return (
          <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
            <span style={{ color: 'var(--purple-primary)', fontWeight: 700, flexShrink: 0 }}>•</span>
            <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        )
        if (line.trim() === '') return <div key={i} style={{ height: 6 }} />
        return <p key={i} style={{ margin: '2px 0' }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      })}
    </div>
  )
}

function PageHeader({ title, subtitle, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
      <BackBtn onClick={onBack} />
      <div>
        <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.2 }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</p>}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// MODE 1 — PREPARE: Quiz → then full plan
// ══════════════════════════════════════════════════════════════════
function PrepareMode({ onBack }) {
  // stages: setup → quiz → plan
  const [stage, setStage] = useState('setup')
  const [form, setForm] = useState({ company: '', dept: '', role: '', level: 'Fresher (0 exp)' })

  // quiz state
  const [quizMessages, setQuizMessages] = useState([]) // {role, content}
  const [userAnswers, setUserAnswers] = useState([])   // plain strings
  const [currentQ, setCurrentQ] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false)

  // plan state
  const [plan, setPlan] = useState('')
  const [loadingPlan, setLoadingPlan] = useState(false)

  const chatEndRef = useRef(null)

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [quizMessages, loading])

  const quizSystem = `You are an interview preparation coach. You are running a ${QUIZ_COUNT}-question diagnostic quiz for a ${form.level} candidate preparing for ${form.company} interview for the role of ${form.role} (${form.dept} branch).

Rules:
- Ask ONE question at a time
- After the candidate answers, give a SHORT encouraging response (1 sentence), then ask the NEXT question
- Questions should cover: self-introduction, technical basics, projects, strengths/weaknesses, situational, company-specific
- After exactly ${QUIZ_COUNT} questions and answers, write exactly "QUIZ_DONE" on its own line and nothing else

Format: Just the question text, no numbering. Keep it conversational.`

  async function startQuiz() {
    if (!form.company || !form.dept || !form.role) return
    setLoading(true)
    setStage('quiz')
    setQuizMessages([])
    setUserAnswers([])
    setQuestionIndex(0)
    try {
      const q = await callClaude(
        [{ role: 'user', content: 'Start the quiz. Ask the first question.' }],
        quizSystem
      )
      setCurrentQ(q)
      setQuizMessages([{ role: 'assistant', content: q }])
      setQuestionIndex(1)
    } catch (err) {
      console.error("AI Start Error in startQuiz:", err);
      setCurrentQ(`Failed to start: ${err.message || err}`);
    }
    setLoading(false)
  }

  async function submitAnswer() {
    if (!userInput.trim() || loading) return
    const answer = userInput.trim()
    setUserInput('')
    const newAnswers = [...userAnswers, answer]
    setUserAnswers(newAnswers)
    const newMessages = [...quizMessages, { role: 'user', content: answer }]
    setQuizMessages(newMessages)
    setLoading(true)

    try {
      const apiMsgs = newMessages.map(m => ({ role: m.role, content: m.content }))
      const response = await callClaude(apiMsgs, quizSystem)

      if (response.includes('QUIZ_DONE')) {
        // Quiz complete — generate plan
        setQuizMessages(prev => [...prev, { role: 'assistant', content: '✅ Quiz complete! Generating your personalised prep plan now...' }])
        setStage('plan')
        await generatePlan(newAnswers)
      } else {
        setQuizMessages(prev => [...prev, { role: 'assistant', content: response }])
        setCurrentQ(response)
        setQuestionIndex(i => i + 1)
      }
    } catch (err) {
      setQuizMessages(prev => [...prev, { role: 'assistant', content: `⚠️ ${err.message || 'AI is busy. Please wait 10-15 seconds and try again.'}` }])
    }
    setLoading(false)
  }

  async function generatePlan(answers) {
    setLoadingPlan(true)
    setPlan('')
    try {
      const summary = answers.map((a, i) => `Q${i + 1}: ${a}`).join('\n')
      const prompt = `Based on this diagnostic quiz, generate a complete interview preparation plan.

Candidate profile:
- Company: ${form.company}
- Branch: ${form.dept}
- Role: ${form.role}
- Level: ${form.level}

Their quiz answers (${answers.length} questions):
${summary}

Generate a detailed, personalised prep plan with these sections:
## 🎯 Profile Assessment
## 📚 Topics to Study (prioritised based on their answers)
## ❓ Top 10 Questions They'll Likely Face
## 💻 Technical Prep (specific to ${form.dept} and ${form.role})
## 🎤 HR Round Strategy
## 📅 7-Day Study Schedule
## ⚡ ${form.company}-Specific Tips

Be specific to their answers — address their weak areas and build on their strengths.`

      const result = await callClaude([{ role: 'user', content: prompt }], 'You are an expert placement coach for Indian engineering students. Give practical, actionable, specific advice. Use ## for sections, - for bullets, **bold** for key terms.')
      setPlan(result)
    } catch (err) {
      setPlan(`Failed to generate plan: ${err.message || 'Please refresh and try again in 10-15 seconds.'}`)
    }
    setLoadingPlan(false)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitAnswer() }
  }

  // ── Setup ──
  if (stage === 'setup') return (
    <div>
      <PageHeader title="📚 Prepare for Interview" subtitle="Answer a short quiz — then get your full personalised prep plan" onBack={onBack} />
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '28px', maxWidth: 560, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 20 }}>
          <SelectField label="Company *" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} options={COMPANIES} placeholder="Select company" />
          <SelectField label="Your Branch *" value={form.dept} onChange={v => setForm(f => ({ ...f, dept: v, role: '' }))} options={DEPARTMENTS} placeholder="Select branch" />
          <SelectField label="Role *" value={form.role} onChange={v => setForm(f => ({ ...f, role: v }))} options={ROLES[form.dept] || []} placeholder={form.dept ? 'Select role' : 'Select branch first'} />
          <SelectField label="Level" value={form.level} onChange={v => setForm(f => ({ ...f, level: v }))} options={LEVELS} />
        </div>

        {/* How it works */}
        <div style={{ background: 'var(--purple-xsoft)', border: '1px solid var(--purple-soft)', borderRadius: 12, padding: '14px 16px', marginBottom: 22 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--purple-primary)', marginBottom: 8 }}>How this works</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              `1️⃣  AI asks you ${QUIZ_COUNT} quick questions about yourself`,
              '2️⃣  You answer naturally — no right or wrong answers',
              '3️⃣  AI generates a full personalised prep plan at the end',
            ].map(s => <div key={s} style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{s}</div>)}
          </div>
        </div>

        <Btn onClick={startQuiz} disabled={!form.company || !form.dept || !form.role} loading={loading}>
          🚀 Start Quiz
        </Btn>
      </div>
    </div>
  )

  // ── Plan ──
  if (stage === 'plan') return (
    <div>
      <PageHeader title="✨ Your Personalised Prep Plan" subtitle={`${form.company} · ${form.role} · ${form.dept}`} onBack={() => setStage('setup')} />
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        {loadingPlan ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🤖</div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: 'var(--text-primary)' }}>Building your personalised plan...</div>
            <div style={{ fontSize: 13, marginBottom: 20 }}>Analysing your quiz answers — takes about 15 seconds</div>
            <div style={{ height: 5, background: '#f3f4f6', borderRadius: 999, overflow: 'hidden', maxWidth: 300, margin: '0 auto' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--purple-primary), #8b5cf6)', borderRadius: 999, width: '70%', animation: 'shimmer 1.5s infinite alternate' }} />
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, paddingBottom: 16, borderBottom: '1px solid #f3f4f6' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--purple-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🤖</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>AI Prep Plan — {form.company} · {form.role}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Based on your {QUIZ_COUNT}-question diagnostic quiz</div>
              </div>
              <Btn small outline onClick={() => { setStage('setup'); setPlan(''); setQuizMessages([]); setUserAnswers([]) }}>
                🔄 Redo
              </Btn>
            </div>
            <AIText text={plan} />
          </div>
        )}
      </div>
      <style>{`@keyframes shimmer { from { width: 40% } to { width: 90% } }`}</style>
    </div>
  )

  // ── Quiz chat ──
  return (
    <div>
      <PageHeader
        title={`📝 Diagnostic Quiz — ${form.company}`}
        subtitle={`Question ${Math.min(questionIndex, QUIZ_COUNT)} of ${QUIZ_COUNT} · ${form.role}`}
        onBack={() => setStage('setup')}
      />

      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Quiz Progress</span>
          <span style={{ fontSize: 12, color: 'var(--purple-primary)', fontWeight: 700 }}>{Math.min(questionIndex, QUIZ_COUNT)}/{QUIZ_COUNT}</span>
        </div>
        <div style={{ height: 6, background: '#f3f4f6', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--purple-primary)', borderRadius: 999, width: `${(Math.min(questionIndex, QUIZ_COUNT) / QUIZ_COUNT) * 100}%`, transition: 'width 0.4s ease' }} />
        </div>
      </div>

      {/* Chat window */}
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: '16px 16px 0 0', padding: '20px', minHeight: 340, maxHeight: 420, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {quizMessages.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, flexDirection: m.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, flexShrink: 0, background: m.role === 'user' ? 'var(--purple-primary)' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>
              {m.role === 'user' ? '👤' : '🤖'}
            </div>
            <div style={{ maxWidth: '78%', padding: '11px 15px', borderRadius: m.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px', background: m.role === 'user' ? 'var(--purple-primary)' : '#f9fafb', border: m.role === 'user' ? 'none' : '1px solid var(--card-border)' }}>
              {m.role === 'user'
                ? <p style={{ margin: 0, fontSize: 14, color: '#fff', lineHeight: 1.6 }}>{m.content}</p>
                : <AIText text={m.content} />
              }
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>🤖</div>
            <div style={{ padding: '11px 16px', background: '#f9fafb', border: '1px solid var(--card-border)', borderRadius: '4px 16px 16px 16px', display: 'flex', gap: 5, alignItems: 'center' }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--purple-primary)', opacity: 0.6, animation: `bounce 1s infinite ${i*0.18}s` }} />)}
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div style={{ display: 'flex', gap: 10, padding: '14px 16px', background: '#fff', border: '1.5px solid var(--card-border)', borderTop: '1px solid #f3f4f6', borderRadius: '0 0 16px 16px' }}>
        <textarea value={userInput} onChange={e => setUserInput(e.target.value)} onKeyDown={handleKey} rows={2} disabled={loading} placeholder="Type your answer... (Enter to send)"
          style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--card-border)', borderRadius: 12, fontSize: 14, fontFamily: 'inherit', resize: 'none', outline: 'none', lineHeight: 1.5, color: 'var(--text-primary)', background: loading ? '#f9fafb' : '#fff', transition: 'border-color 0.2s' }}
          onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
          onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
        />
        <button onClick={submitAnswer} disabled={!userInput.trim() || loading} style={{ width: 46, height: 46, borderRadius: 12, border: 'none', alignSelf: 'flex-end', background: !userInput.trim() || loading ? '#e5e7eb' : 'var(--purple-primary)', color: !userInput.trim() || loading ? '#9ca3af' : '#fff', cursor: !userInput.trim() || loading ? 'not-allowed' : 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>↑</button>
      </div>

      <style>{`@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }`}</style>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// MODE 2A — LIVE INTERVIEW (AI asks, user answers, ongoing feedback)
// ══════════════════════════════════════════════════════════════════
function LiveInterview({ onBack }) {
  const [stage, setStage] = useState('setup')
  const [form, setForm] = useState({ company: '', dept: '', role: '', level: 'Fresher (0 exp)', focus: 'Technical & HR (Mixed)', rounds: 7 })
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [qCount, setQCount] = useState(0)
  const [finalFeedback, setFinalFeedback] = useState('')
  const chatEndRef = useRef(null)
  const { user, profile } = useAuth()

  // ── Voice mode state ──
  const [voiceMode, setVoiceMode] = useState(false)
  const [listening, setListening] = useState(false)
  const [aiSpeaking, setAiSpeaking] = useState(false)
  const [speechLang, setSpeechLang] = useState('en-IN')
  const [voiceStats, setVoiceStats] = useState({ totalMs: 0, fillerCount: 0 })
  const [interviewStats, setInterviewStats] = useState({ totalWords: 0, totalMs: 0, fillerCount: 0 })
  const recognitionRef = useRef(null)

  // ── Resume-tailoring & Compiler states ──
  const [tailorResume, setTailorResume] = useState(false)
  const [resumeText, setResumeText] = useState('')
  const [compilerLang, setCompilerLang] = useState(71)
  const [compilerCodeMap, setCompilerCodeMap] = useState({ ...DEFAULT_CODE })
  const [compilerOutput, setCompilerOutput] = useState(null)
  const [compilerRunning, setCompilerRunning] = useState(false)

  useEffect(() => {
    if (profile) {
      setResumeText(`Candidate Name: ${profile.name || 'Student'}\nBranch: ${profile.branch || 'ECE'}\nCareer Goal: ${profile.careerGoal || 'Embedded Engineer'}\nSkills & Projects: `)
    }
  }, [profile])

  // Speak text via SpeechSynthesis (used when voice mode is on)
  function speakText(text) {
    if (!voiceMode || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const clean = text.replace(/[#*_`~>]/g, '').replace(/\s+/g, ' ').trim()
    const utter = new SpeechSynthesisUtterance(clean)
    utter.rate = 0.95
    utter.pitch = 1
    
    utter.onstart = () => setAiSpeaking(true)
    utter.onend = () => setAiSpeaking(false)
    utter.onerror = () => setAiSpeaking(false)

    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
      || voices.find(v => v.lang.startsWith('en'))
    if (preferred) utter.voice = preferred
    window.speechSynthesis.speak(utter)
  }

  // ── Compiler Helper Functions ──
  const compilerCode = compilerCodeMap[compilerLang] || ''
  const setCompilerCode = (val) => setCompilerCodeMap(prev => ({ ...prev, [compilerLang]: val }))

  async function handleCompilerRun() {
    if (!compilerCode.trim()) return
    setCompilerRunning(true)
    setCompilerOutput(null)

    if (compilerLang === 63) {
      try {
        const logs = []
        const con = { log: (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) }
        new Function('console', compilerCode)(con)
        setCompilerOutput({ success: true, output: logs.join('\n') || '(no output)' })
      } catch (err) {
        setCompilerOutput({ success: false, output: err.message, type: 'Error' })
      }
      setCompilerRunning(false)
      return
    }

    const result = await runCode(compilerCode, compilerLang)
    setCompilerOutput(result)
    setCompilerRunning(false)
  }

  // Toggle microphone — fills textarea with recognised speech
  function toggleMic() {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      alert('Voice input is not supported in this browser. Please use Chrome.')
      return
    }
    if (listening) {
      recognitionRef.current?.stop(); setListening(false); return
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    const rec = new SR()
    
    // Enable continuous listening and real-time interim feedback
    rec.continuous = true
    rec.interimResults = true
    rec.lang = speechLang
    rec.maxAlternatives = 1
    
    const sessionStart = Date.now()
    const baseText = input

    rec.onresult = (e) => {
      let finalTranscript = ''
      let interimTranscript = ''
      
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          finalTranscript += e.results[i][0].transcript + ' '
        } else {
          interimTranscript += e.results[i][0].transcript
        }
      }

      if (finalTranscript) {
        const fillers = (finalTranscript.match(/\b(um|uh|like|literally|you know)\b/gi) || []).length
        setVoiceStats(prev => ({
          ...prev,
          fillerCount: prev.fillerCount + fillers
        }))
      }

      const fullText = (finalTranscript + interimTranscript).trim()
      setInput(baseText ? baseText + ' ' + fullText : fullText)
    }
    
    rec.onend = () => {
      const sessionMs = Date.now() - sessionStart
      setVoiceStats(prev => ({
        ...prev,
        totalMs: prev.totalMs + sessionMs
      }))
      setListening(false)
    }
    
    rec.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === 'not-allowed') {
        alert("Microphone permission denied. Please enable microphone permission in your browser's site settings next to the URL bar.");
      } else if (event.error === 'no-speech') {
        console.warn("No speech detected.");
      } else if (event.error === 'network') {
        alert("Network error occurred during speech recognition. Please check your internet connection.");
      } else {
        alert("Speech recognition error: " + event.error);
      }
      setListening(false)
    }
    recognitionRef.current = rec
    rec.start(); setListening(true)
  }

  // Speak new AI messages when voice mode is active
  const lastAIMsgRef = useRef('')
  useEffect(() => {
    const last = messages[messages.length - 1]
    if (last?.role === 'assistant' && last.content !== lastAIMsgRef.current) {
      lastAIMsgRef.current = last.content
      speakText(last.content)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, voiceMode])

  // Stop speech when component unmounts
  useEffect(() => () => { window.speechSynthesis?.cancel(); recognitionRef.current?.stop() }, [])


  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])

  const focusPrompt = 
    form.focus === 'HR & Behavioral Only' ? 'Focus strictly on behavioral, leadership, teamwork, handling failure, and culture-fit scenarios using the STAR method. DO NOT ask technical questions.' :
    form.focus === 'Technical Core Only' ? `Focus strictly on deep technical questions, architecture, and coding concepts relevant to ${form.role}. DO NOT ask HR/behavioral questions.` :
    `Mix technical and HR questions relevant to ${form.dept} and ${form.role}`;

  const resumePrompt = (tailorResume && resumeText.trim()) 
    ? `\nCandidate Resume & Skills profile:\n${resumeText.trim()}\nTailor your questions to verify the skills, projects, and experiences listed in this resume context.`
    : '';

  const sys = `You are a professional interviewer at ${form.company} for the role of ${form.role} (${form.dept}, ${form.level}).
${resumePrompt}

Rules:
- Ask ONE question at a time
- After each answer, give 1–2 sentence feedback (honest but encouraging), then ask next question  
- ${focusPrompt}
- After exactly ${form.rounds} questions and their answers, write "INTERVIEW_COMPLETE" on its own line, then give a detailed performance review with score /10 per category (Communication, Technical, Confidence, Overall). If pacing/filler word metrics are provided in [System Diagnostics], incorporate them into the Communication/Confidence feedback and penalize appropriately.

Format: feedback on answer (if any), then next question. Keep it professional and natural.`

  async function start() {
    setLoading(true); setStage('live'); setMessages([]); setQCount(0)
    setInterviewStats({ totalWords: 0, totalMs: 0, fillerCount: 0 })
    try {
      const r = await callClaude([{ role: 'user', content: `Start. Briefly introduce yourself as ${form.company} interviewer and ask your first question.` }], sys)
      setMessages([{ role: 'assistant', content: r }]); setQCount(1)
    } catch (err) {
      console.error("AI Start Error in start:", err);
      setMessages([{ role: 'assistant', content: `Failed to start: ${err.message || err}` }]);
    }
    setLoading(false)
  }

  async function send() {
    if (!input.trim() || loading) return
    const ans = input.trim(); setInput('')
    
    let hiddenMeta = ''
    if (voiceStats.totalMs > 0) {
       const minutes = voiceStats.totalMs / 60000
       const words = ans.split(/\s+/).filter(Boolean).length
       const wpm = Math.round(words / minutes)
       hiddenMeta = `\n[System Diagnostics: The candidate spoke at ${wpm} WPM (ideal 130-160) and used ${voiceStats.fillerCount} filler words. Factor this pacing and filler usage strictly into their feedback & Confidence/Communication scores.]`
       
       setInterviewStats(prev => ({
         totalWords: prev.totalWords + words,
         totalMs: prev.totalMs + voiceStats.totalMs,
         fillerCount: prev.fillerCount + voiceStats.fillerCount
       }))
    }
    setVoiceStats({ totalMs: 0, fillerCount: 0 })

    const newMsgs = [...messages, { role: 'user', content: ans, hiddenMeta }]
    setMessages(newMsgs); setLoading(true)
    try {
      const r = await callClaude(newMsgs.map(m => ({ role: m.role, content: m.content + (m.hiddenMeta || '') })), sys)
      if (r.includes('INTERVIEW_COMPLETE')) {
        const [before, after] = r.split('INTERVIEW_COMPLETE')
        setMessages(prev => [...prev, { role: 'assistant', content: before.trim() }])
        setFinalFeedback(after.trim()); setStage('result')

        // ── Write interview score to Firestore ──────────────────
        if (user) {
          try {
            const parsed = parseInterviewScore(after)
            const prevBest = profile?.mockInterviewScore ?? 0
            const newMockScore = Math.max(prevBest, parsed)
            const newReadiness = computeReadiness({
              aptitudeScore:      profile?.aptitudeScore ?? 0,
              mockInterviewScore: newMockScore,
              currentStreak:      profile?.currentStreak ?? 0,
              codingScore:        profile?.codingScore ?? 0,
            })
            
            const isTechCoreFocus = form.focus === 'Technical Core Only'
            const updatedProfileMock = {
              ...profile,
              mockInterviewScore: newMockScore,
              technicalInterviewCompleted: profile?.technicalInterviewCompleted || isTechCoreFocus
            }
            const prevBadges = profile?.unlockedBadges || []
            const currentUnlocked = getUnlockedBadges(updatedProfileMock)
            const newlyUnlocked = currentUnlocked.filter(b => !prevBadges.includes(b))
            const finalUnlocked = [...prevBadges, ...newlyUnlocked]

            if (newlyUnlocked.length > 0) {
              window.dispatchEvent(new CustomEvent('placeonix-badge-unlocked', { detail: { badgeIds: newlyUnlocked } }))
            }

            updateDoc(doc(db, 'users', user.uid), {
              mockInterviewScore: newMockScore,
              interviewsCompleted: (profile?.interviewsCompleted ?? 0) + 1,
              lastInterviewDate:   new Date(),
              placementReadiness:  newReadiness,
              technicalInterviewCompleted: profile?.technicalInterviewCompleted || isTechCoreFocus,
              unlockedBadges:      finalUnlocked
            }).catch(() => {})

            // Write to interviews collection for institutional admin analytics
            addDoc(collection(db, 'interviews'), {
              uid: user.uid,
              studentName: profile?.name || user.displayName || user.email.split('@')[0],
              studentEmail: user.email,
              branch: profile?.branch || 'CSE',
              category: isTechCoreFocus ? 'Technical Core' : 'Behavioral & Fit',
              score: Math.round(newMockScore / 10), // out of 10
              feedback: 'Completed live chat-based mock interview session.',
              createdAt: serverTimestamp()
            }).catch(() => {})
          } catch (_) {}
        }
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: r }]); setQCount(c => c + 1)
      }
    } catch (err) { setMessages(prev => [...prev, { role: 'assistant', content: `⚠️ ${err.message || 'AI is busy. Please wait 10-15 seconds and try again.'}` }]) }
    setLoading(false)
  }

  if (stage === 'setup') return (
    <div>
      <PageHeader title="🎙️ Live Mock Interview" subtitle="AI interviews you in real time, gives feedback after each answer" onBack={onBack} />
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '28px', maxWidth: 560 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 16 }}>
          <SelectField label="Company *" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} options={COMPANIES} placeholder="Select" />
          <SelectField label="Branch *" value={form.dept} onChange={v => setForm(f => ({ ...f, dept: v, role: '' }))} options={DEPARTMENTS} placeholder="Select" />
          <SelectField label="Role *" value={form.role} onChange={v => setForm(f => ({ ...f, role: v }))} options={ROLES[form.dept] || []} placeholder={form.dept ? 'Select role' : 'Pick branch first'} />
          <SelectField label="Interview Focus" value={form.focus} onChange={v => setForm(f => ({ ...f, focus: v }))} options={FOCUS_TYPES} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 18 }}>
          <div style={{ flex: 1 }}>
            <SelectField label="Level" value={form.level} onChange={v => setForm(f => ({ ...f, level: v }))} options={LEVELS} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Questions</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[5, 7, 10].map(n => (
                <button key={n} onClick={() => setForm(f => ({ ...f, rounds: n }))} style={{ padding: '8px 20px', borderRadius: 999, border: '1.5px solid', borderColor: form.rounds === n ? 'var(--purple-primary)' : 'var(--card-border)', background: form.rounds === n ? 'var(--purple-xsoft)' : '#fff', color: form.rounds === n ? 'var(--purple-primary)' : 'var(--text-secondary)', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  {n} Q
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 📋 Resume-Tailoring Panel */}
        <div style={{ marginBottom: 18, borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)', cursor: 'pointer', userSelect: 'none' }}>
            <input type="checkbox" checked={tailorResume} onChange={e => setTailorResume(e.target.checked)} style={{ width: 16, height: 16, accentColor: 'var(--purple-primary)', cursor: 'pointer' }} />
            📋 Tailor questions using my resume/skills details
          </label>
          {tailorResume && (
            <textarea value={resumeText} onChange={e => setResumeText(e.target.value)} rows={3}
              placeholder="Enter key skills, projects, work experience, or copy-paste resume text..."
              style={{ width: '100%', marginTop: 8, padding: '10px 12px', border: '1.5px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontFamily: 'inherit', resize: 'vertical', outline: 'none', color: 'var(--text-primary)' }}
              onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
            />
          )}
        </div>

        <Btn onClick={start} disabled={!form.company || !form.dept || !form.role} loading={loading}>🎙️ Start Interview</Btn>
      </div>
    </div>
  )

  if (stage === 'result') {
    const scores = parseCategoryScores(finalFeedback)
    const chartData = [
      { subject: 'Communication', score: scores.Communication * 10 },
      { subject: 'Technical Depth', score: scores.Technical * 10 },
      { subject: 'Confidence', score: scores.Confidence * 10 },
      { subject: 'Overall', score: scores.Overall * 10 }
    ]

    const pacingSeconds = interviewStats.totalMs / 1000
    const minutes = pacingSeconds / 60
    const wpm = minutes > 0 ? Math.round(interviewStats.totalWords / minutes) : 0
    
    let pacingStatus = 'N/A'
    let pacingColor = '#6b7280'
    let pacingTip = 'No speaking data recorded.'
    
    if (interviewStats.totalMs > 0) {
      if (wpm >= 110 && wpm <= 160) {
        pacingStatus = 'Excellent'
        pacingColor = '#16a34a'
        pacingTip = 'Great job! Your speaking rate is perfectly conversational and clear.'
      } else if (wpm > 160) {
        pacingStatus = 'Too Fast'
        pacingColor = '#dc2626'
        pacingTip = 'You are speaking a bit fast. Try to slow down, enunciate, and insert natural pauses.'
      } else {
        pacingStatus = 'Too Slow'
        pacingColor = '#ea580c'
        pacingTip = 'Speaking rate is a bit slow. Try to speak a bit more dynamically to keep engagement.'
      }
    }

    return (
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>
        <PageHeader title="🏆 Interview Complete" onBack={() => { setStage('setup'); setMessages([]); setFinalFeedback('') }} />
        
        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20, marginBottom: 20 }}>
          {/* Card 1: Score breakdown radar chart */}
          <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 16, color: 'var(--text-primary)', marginBottom: 4 }}>📈 Performance Breakdown</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Radar representation of your scored categories (/100%)</p>
            
            <div style={{ width: '100%', height: 220, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 9 }} />
                  <Radar name="Candidate" dataKey="score" stroke="var(--purple-primary)" fill="var(--purple-soft)" fillOpacity={0.6} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 10, marginTop: 12, borderTop: '1px solid #f3f4f6', paddingTop: 12 }}>
              {Object.entries(scores).map(([cat, val]) => (
                <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', background: '#f9fafb', borderRadius: 8 }}>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-secondary)' }}>{cat}</span>
                  <strong style={{ fontSize: 13, color: 'var(--purple-primary)' }}>{val}/10</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Voice Diagnostics & Speech Pacing */}
          <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 16, color: 'var(--text-primary)', marginBottom: 4 }}>🎙️ Speech Pacing & Diagnostics</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Analytics collected from your voice-recording sessions</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
              {/* WPM Speed */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px', borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: 28 }}>⚡</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Speaking Speed</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)' }}>{wpm}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 4 }}>WPM (Words/Min)</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11.5, fontWeight: 700, color: pacingColor, background: pacingColor + '15', padding: '2px 8px', borderRadius: 6 }}>{pacingStatus}</span>
                  </div>
                </div>
              </div>

              {/* Filler words count */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px', borderRadius: 12, background: '#fdf2f8', border: '1px solid #fbcfe8' }}>
                <div style={{ fontSize: 28 }}>🤫</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Filler Words Used</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: '#be185d' }}>{interviewStats.fillerCount}</span>
                    <span style={{ fontSize: 11, color: '#db2777', fontWeight: 600, marginLeft: 4 }}>fillers detected</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '12px', borderRadius: 8, background: '#f8fafc', fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Pacing Tip:</strong> {pacingTip}
                {interviewStats.fillerCount > 0 && <div style={{ marginTop: 6, borderTop: '1px solid #e2e8f0', paddingTop: 6 }}>Avoid using filler words like <em>"um"</em>, <em>"like"</em>, or <em>"you know"</em>. Pausing silently for a second is much more professional.</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed AI Performance Review text */}
        <div style={{ background: 'linear-gradient(135deg, #ede9fe, #f5f3ff)', border: '1.5px solid var(--purple-soft)', borderRadius: 16, padding: '28px', marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(108,60,225,0.15)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--purple-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🤖</div>
            <div>
              <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 17, color: 'var(--text-primary)' }}>Performance Review</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{form.company} · {form.role} · {form.rounds} questions</div>
            </div>
          </div>
          <AIText text={finalFeedback} />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Btn onClick={() => { setStage('setup'); setMessages([]); setFinalFeedback('') }}>🔄 Try Again</Btn>
          <Btn outline onClick={onBack}>← Back</Btn>
        </div>
      </div>
    )
  }

  const isTechnicalRound = form.focus === 'Technical Core Only'

  const chatPanel = (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Chat scrollable box */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14, padding: '20px', background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: '16px 16px 0 0' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, flexDirection: m.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, flexShrink: 0, background: m.role === 'user' ? 'var(--purple-primary)' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{m.role === 'user' ? '👤' : '🤖'}</div>
            <div style={{ maxWidth: '78%', padding: '11px 15px', borderRadius: m.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px', background: m.role === 'user' ? 'var(--purple-primary)' : '#f9fafb', border: m.role === 'user' ? 'none' : '1px solid var(--card-border)' }}>
              {m.role === 'user' ? <p style={{ margin: 0, fontSize: 14, color: '#fff', lineHeight: 1.6 }}>{m.content}</p> : <AIText text={m.content} />}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🤖</div>
            <div style={{ padding: '12px 16px', background: '#f9fafb', border: '1px solid var(--card-border)', borderRadius: '4px 16px 16px 16px', display: 'flex', gap: 5 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--purple-primary)', opacity: 0.6, animation: `bounce 1s infinite ${i*0.18}s` }} />)}
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input bar */}
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderTop: '1px solid #f3f4f6', borderRadius: '0 0 16px 16px', flexShrink: 0 }}>
        {/* Voice mode toggle bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px 0 16px', borderBottom: '1px solid #f3f4f6', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Mode:</span>
          {[['text','✏️ Text'], ['voice','🎙️ Voice']].map(([m, label]) => (
            <button key={m} onClick={() => { setVoiceMode(m === 'voice'); window.speechSynthesis?.cancel(); recognitionRef.current?.stop(); setListening(false); setAiSpeaking(false) }}
              style={{ padding: '3px 12px', borderRadius: 999, border: '1.5px solid', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                borderColor: (voiceMode ? 'voice' : 'text') === m ? 'var(--purple-primary)' : 'var(--card-border)',
                background:  (voiceMode ? 'voice' : 'text') === m ? 'var(--purple-xsoft)' : '#fff',
                color:       (voiceMode ? 'voice' : 'text') === m ? 'var(--purple-primary)' : 'var(--text-muted)',
              }}>{label}</button>
          ))}
          
          {voiceMode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 12 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Accent:</span>
              <select value={speechLang} onChange={e => setSpeechLang(e.target.value)}
                style={{ padding: '3px 8px', borderRadius: 8, border: '1.5px solid var(--card-border)', fontSize: 11.5, fontWeight: 600, outline: 'none', cursor: 'pointer', background: '#fff', color: 'var(--text-primary)' }}>
                <option value="en-IN">English (India)</option>
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
              </select>
            </div>
          )}

          {voiceMode && <span style={{ marginLeft: 'auto', fontSize: 11.5, color: '#6b7280' }}>AI will speak responses · Mic fills input field</span>}
        </div>

        {/* Actual input */}
        <div style={{ display: 'flex', gap: 10, padding: '10px 16px 14px 16px', alignItems: 'flex-end' }}>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }}}
            rows={2} disabled={loading}
            placeholder={listening ? 'Listening... Speak now.' : (voiceMode ? 'Click 🎙️ to speak, or type your answer...' : 'Type your answer... (Enter to send)')}
            style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--card-border)', borderRadius: 12, fontSize: 14, fontFamily: 'inherit', resize: 'none', outline: 'none', color: 'var(--text-primary)', background: loading ? '#f9fafb' : '#fff' }}
            onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
          {voiceMode && (
            <button onClick={toggleMic} disabled={loading}
              title={listening ? 'Stop recording' : 'Start voice input'}
              style={{ width: 46, height: 46, borderRadius: 12, border: 'none', alignSelf: 'flex-end', flexShrink: 0, cursor: loading ? 'not-allowed' : 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                background: listening ? '#fee2e2' : '#fce7f3',
                color: listening ? '#dc2626' : '#db2777',
                boxShadow: listening ? '0 0 0 4px rgba(239,68,68,0.2)' : 'none',
                animation: listening ? 'micPulse 1.2s ease-in-out infinite' : 'none',
              }}>{listening ? '⏹' : '🎙️'}</button>
          )}
          <button onClick={send} disabled={!input.trim() || loading}
            style={{ width: 46, height: 46, borderRadius: 12, border: 'none', alignSelf: 'flex-end', flexShrink: 0,
              background: !input.trim() || loading ? '#e5e7eb' : 'var(--purple-primary)',
              color: !input.trim() || loading ? '#9ca3af' : '#fff',
              cursor: !input.trim() || loading ? 'not-allowed' : 'pointer', fontSize: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>↑</button>
        </div>
      </div>
    </div>
  )

  const compilerPanel = isTechnicalRound && (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e1e2e', borderRadius: 16, border: '1.5px solid #2d2d3f', height: '100%', overflow: 'hidden' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#16162a', borderBottom: '1px solid #2d2d3f', flexShrink: 0, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28ca41'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: 999, background: c }} />)}
        </div>
        <span style={{ fontSize: 11, color: '#6b7280', fontFamily: 'monospace', marginLeft: 4 }}>
          sandbox.{COMPILER_LANGUAGES.find(l => l.id === compilerLang)?.ext}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {COMPILER_LANGUAGES.map(l => (
            <button key={l.id} onClick={() => { setCompilerLang(l.id); setCompilerOutput(null) }}
              style={{ padding: '2px 7px', borderRadius: 6, border: '1px solid', cursor: 'pointer', fontFamily: 'inherit', fontSize: 10, fontWeight: 700, transition: 'all 0.15s',
                borderColor: compilerLang === l.id ? l.color : '#2d2d3f',
                background:  compilerLang === l.id ? l.color + '22' : 'transparent',
                color:       compilerLang === l.id ? l.color : '#6b7280',
              }}>
              {l.icon} {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Area */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
        <textarea
          value={compilerCode}
          onChange={e => setCompilerCode(e.target.value)}
          spellCheck={false}
          style={{ width: '100%', height: '100%', padding: '14px', background: '#1e1e2e', color: '#cdd6f4', border: 'none', outline: 'none', fontFamily: 'monospace', fontSize: 13, lineHeight: '1.6', resize: 'none' }}
        />
      </div>

      {/* Action Bar */}
      <div style={{ display: 'flex', gap: 8, padding: '8px 14px', background: '#16162a', borderTop: '1px solid #2d2d3f', flexShrink: 0, alignItems: 'center' }}>
        <button onClick={() => { setCompilerCodeMap(prev => ({ ...prev, [compilerLang]: DEFAULT_CODE[compilerLang] })); setCompilerOutput(null) }}
          style={{ padding: '5px 12px', borderRadius: 7, border: '1px solid #2d2d3f', background: 'transparent', color: '#6b7280', fontSize: 11.5, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s' }}>
          Reset
        </button>
        <span style={{ flex: 1, fontSize: 10.5, color: '#3d3d5c' }}>Ctrl+Enter to run</span>
        <button onClick={handleCompilerRun} disabled={compilerRunning}
          style={{ padding: '6px 16px', borderRadius: 8, border: 'none', cursor: compilerRunning ? 'not-allowed' : 'pointer', fontSize: 12, fontWeight: 700, transition: 'all 0.2s', background: compilerRunning ? '#2d2d3f' : 'var(--purple-primary)', color: '#fff' }}>
          {compilerRunning ? 'Running...' : '▶ Run Code'}
        </button>
      </div>

      {/* Output terminal */}
      <div style={{ height: 130, background: '#11111f', borderTop: '1px solid #1a1a2e', padding: '10px 14px', overflowY: 'auto', flexShrink: 0 }}>
        <div style={{ fontSize: 9.5, color: '#3d3d5c', fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1.2 }}>Output</div>
        {compilerOutput === null
          ? <div style={{ fontSize: 11.5, color: '#3d3d5c', fontFamily: 'monospace' }}>Click "Run Code" to compile...</div>
          : <pre style={{ fontSize: 11.5, color: compilerOutput.success ? '#a6e3a1' : '#f38ba8', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{compilerOutput.output}</pre>
        }
      </div>
    </div>
  )

  return (
    <div className="responsive-chat-height" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexShrink: 0 }}>
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#22c55e', boxShadow: '0 0 0 3px #dcfce7' }} />
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>Live — {form.company} · {form.role}</span>
        <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--text-muted)', background: '#f3f4f6', padding: '3px 12px', borderRadius: 999, fontWeight: 600 }}>Q {Math.min(qCount, form.rounds)}/{form.rounds}</span>
      </div>

      {/* ── Voice mode active visualization bubble ── */}
      {voiceMode && (
        <div className="voice-visualizer-container" style={{
          background: 'linear-gradient(135deg, #16162a 0%, #0c0c1e 100%)',
          borderRadius: 14,
          padding: '12px 20px',
          marginBottom: 14,
          border: '1.5px solid #2d2d3f',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 8px 32px rgba(108, 60, 225, 0.08)',
          flexShrink: 0
        }}>
          {/* Status Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 8, height: 8, borderRadius: 999,
                background: listening ? '#dc2626' : (aiSpeaking ? '#22c55e' : '#6b7280'),
                boxShadow: (listening || aiSpeaking) ? `0 0 8px ${listening ? '#dc2626' : '#22c55e'}` : 'none',
                transition: 'all 0.3s'
              }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: listening ? '#f38ba8' : (aiSpeaking ? '#a6e3a1' : '#b4befe'), fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {listening ? 'Listening (Speak Now)' : (aiSpeaking ? 'AI Speaking' : 'Voice Mode Standby')}
              </span>
            </div>
            <span style={{ fontSize: 10.5, color: '#949cbb' }}>
              {listening ? 'Your speech is being transcribed...' : (aiSpeaking ? 'Listen to the interview questions' : 'Click the microphone or type to reply')}
            </span>
          </div>

          {/* Neon Soundwave visualizer */}
          <div style={{ flex: 1, display: 'flex', gap: 4, height: 28, alignItems: 'center', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => {
              const isActive = aiSpeaking || listening
              return (
                <div key={i} className={`voice-bar-${i} ${isActive ? 'voice-bar--pulse' : ''}`} style={{
                  width: 3,
                  height: isActive ? '100%' : '15%',
                  background: listening ? 'linear-gradient(to top, #f38ba8, #e78284)' : 'linear-gradient(to top, #7c3aed, #db2777)',
                  borderRadius: 999,
                  transition: 'height 0.15s ease'
                }} />
              )
            })}
          </div>
        </div>
      )}

      {/* Split screen content area */}
      <div style={{ flex: 1, display: 'flex', gap: isTechnicalRound ? 16 : 0, overflow: 'hidden', minHeight: 0 }}>
        {chatPanel}
        {compilerPanel}
      </div>

      <style>{`
        @keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
        @keyframes micPulse{0%,100%{box-shadow:0 0 0 4px rgba(239,68,68,0.2)}50%{box-shadow:0 0 0 8px rgba(239,68,68,0.1)}}
        @keyframes voicePulse-1 { 0%, 100% { height: 15%; } 50% { height: 75%; } }
        @keyframes voicePulse-2 { 0%, 100% { height: 20%; } 50% { height: 95%; } }
        @keyframes voicePulse-3 { 0%, 100% { height: 10%; } 50% { height: 85%; } }
        .voice-bar-1.voice-bar--pulse { animation: voicePulse-1 0.6s infinite ease-in-out; }
        .voice-bar-2.voice-bar--pulse { animation: voicePulse-2 0.8s infinite ease-in-out 0.1s; }
        .voice-bar-3.voice-bar--pulse { animation: voicePulse-3 0.7s infinite ease-in-out 0.2s; }
        .voice-bar-4.voice-bar--pulse { animation: voicePulse-1 0.6s infinite ease-in-out 0.3s; }
        .voice-bar-5.voice-bar--pulse { animation: voicePulse-2 0.8s infinite ease-in-out 0.15s; }
        .voice-bar-6.voice-bar--pulse { animation: voicePulse-3 0.7s infinite ease-in-out 0.25s; }
        .voice-bar-7.voice-bar--pulse { animation: voicePulse-1 0.6s infinite ease-in-out 0.05s; }
        .voice-bar-8.voice-bar--pulse { animation: voicePulse-2 0.8s infinite ease-in-out 0.2s; }
        .voice-bar-9.voice-bar--pulse { animation: voicePulse-3 0.7s infinite ease-in-out 0.1s; }
        .voice-bar-10.voice-bar--pulse { animation: voicePulse-1 0.6s infinite ease-in-out 0.35s; }
        .voice-bar-11.voice-bar--pulse { animation: voicePulse-2 0.8s infinite ease-in-out 0.15s; }
        .voice-bar-12.voice-bar--pulse { animation: voicePulse-3 0.7s infinite ease-in-out 0.3s; }
        @media (max-width: 520px) {
          .voice-visualizer-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 12px !important;
          }
          .voice-visualizer-container > div {
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// MODE 2B — SCORED MOCK TEST (all questions first, score at end)
// ══════════════════════════════════════════════════════════════════
function ScoredMock({ onBack }) {
  const [stage, setStage] = useState('setup')
  const [form, setForm] = useState({ company: '', dept: '', role: '', level: 'Fresher (0 exp)', focus: 'Technical & HR (Mixed)' })
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [loadingQ, setLoadingQ] = useState(false)
  const [loadingScore, setLoadingScore] = useState(false)
  const [scoreResult, setScoreResult] = useState('')
  const { user, profile } = useAuth()

  async function loadQuestions() {
    setLoadingQ(true); setStage('test'); setQuestions([]); setAnswers({})
    try {
      const focusPrompt = 
        form.focus === 'HR & Behavioral Only' ? 'Generate 8 behavioral/HR questions focusing on the STAR method, leadership, challenges, and teamwork.' :
        form.focus === 'Technical Core Only' ? 'Generate 8 deep technical questions, architecture queries, and coding theory.' :
        'Mix: 3 technical questions, 2 HR/behavioral, 2 situational, 1 company-specific.';

      const prompt = `Generate exactly 8 interview questions for a ${form.level} candidate applying to ${form.company} for the role of ${form.role} (${form.dept} branch).

${focusPrompt}

Return ONLY a JSON array of 8 strings like:
["Question 1?", "Question 2?", ..., "Question 8?"]

No explanation, no markdown, just the JSON array.`
      const raw = await callClaude([{ role: 'user', content: prompt }], 'Return only valid JSON. No markdown. No explanation.')
      const clean = raw.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(clean)
      setQuestions(Array.isArray(parsed) ? parsed.slice(0, 8) : [])
    } catch {
      setQuestions(['Tell me about yourself.', 'What are your strengths and weaknesses?', 'Why do you want to join ' + form.company + '?', 'Describe a challenging project you worked on.', 'Where do you see yourself in 5 years?', 'How do you handle pressure?', `What do you know about ${form.company}?`, 'Do you have any questions for us?'])
    }
    setLoadingQ(false)
  }

  async function submitTest() {
    setLoadingScore(true); setStage('result')
    try {
      const qa = questions.map((q, i) => `Q${i+1}: ${q}\nA${i+1}: ${answers[i] || '(No answer given)'}`).join('\n\n')
      const prompt = `You are evaluating a mock interview for ${form.company} — ${form.role} (${form.dept}, ${form.level}).

Questions and answers:
${qa}

Give a detailed evaluation:
## 📊 Overall Score: X/10

## ✅ What They Did Well

## ⚠️ Areas to Improve

## 🎯 Question-by-Question Feedback
(Brief feedback on each answer)

## 📚 Study Recommendations

## 💪 Final Verdict`
      const result = await callClaude([{ role: 'user', content: prompt }], 'You are an expert interview evaluator. Be honest, specific, and encouraging.')
      setScoreResult(result)

      // ── Write interview score to Firestore ──────────────────
      if (user) {
        try {
          const parsed = parseInterviewScore(result)
          const prevBest = profile?.mockInterviewScore ?? 0
          const newMockScore = Math.max(prevBest, parsed)
          const newReadiness = computeReadiness({
            aptitudeScore:      profile?.aptitudeScore ?? 0,
            mockInterviewScore: newMockScore,
            currentStreak:      profile?.currentStreak ?? 0,
            codingScore:        profile?.codingScore ?? 0,
          })
          updateDoc(doc(db, 'users', user.uid), {
            mockInterviewScore: newMockScore,
            interviewsCompleted: (profile?.interviewsCompleted ?? 0) + 1,
            lastInterviewDate:   new Date(),
            placementReadiness:  newReadiness,
          }).catch(() => {})

          // Write to interviews collection for institutional admin analytics
          addDoc(collection(db, 'interviews'), {
            uid: user.uid,
            studentName: profile?.name || user.displayName || user.email.split('@')[0],
            studentEmail: user.email,
            branch: profile?.branch || 'CSE',
            category: form.company + ' - ' + form.role,
            score: Math.round(parsed / 10), // out of 10
            feedback: result.slice(0, 1500), // store up to 1500 chars of detailed feedback
            createdAt: serverTimestamp()
          }).catch(() => {})
        } catch (_) {}
      }
    } catch (err) { setScoreResult(`Failed to generate score: ${err.message || 'Please wait 10-15 seconds and try again.'}`) }
    setLoadingScore(false)
  }

  const answered = Object.values(answers).filter(a => a?.trim()).length

  if (stage === 'setup') return (
    <div>
      <PageHeader title="📋 Scored Mock Test" subtitle="Answer all questions, then get a detailed score and feedback" onBack={onBack} />
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '28px', maxWidth: 560 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 22 }}>
          <SelectField label="Company *" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} options={COMPANIES} placeholder="Select" />
          <SelectField label="Branch *" value={form.dept} onChange={v => setForm(f => ({ ...f, dept: v, role: '' }))} options={DEPARTMENTS} placeholder="Select" />
          <SelectField label="Role *" value={form.role} onChange={v => setForm(f => ({ ...f, role: v }))} options={ROLES[form.dept] || []} placeholder={form.dept ? 'Select role' : 'Pick branch first'} />
          <SelectField label="Interview Focus" value={form.focus} onChange={v => setForm(f => ({ ...f, focus: v }))} options={FOCUS_TYPES} />
          <SelectField label="Level" value={form.level} onChange={v => setForm(f => ({ ...f, level: v }))} options={LEVELS} />
        </div>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '12px 16px', marginBottom: 22, fontSize: 13, color: '#166534' }}>
          💡 8 questions generated by AI for your specific company + role. Answer all of them, submit, and get scored.
        </div>
        <Btn onClick={loadQuestions} disabled={!form.company || !form.dept || !form.role} loading={loadingQ}>📋 Generate Questions</Btn>
      </div>
    </div>
  )

  if (stage === 'test') return (
    <div>
      <PageHeader title={`📋 Mock Test — ${form.company}`} subtitle={`${form.role} · ${answered}/${questions.length} answered`} onBack={() => setStage('setup')} />

      {loadingQ ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🤖</div>
          <div style={{ fontWeight: 600 }}>Generating questions for {form.company}...</div>
        </div>
      ) : (
        <div>
          {questions.map((q, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 14, padding: '20px 22px', marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 999, background: answers[i]?.trim() ? 'var(--purple-primary)' : 'var(--purple-soft)', color: answers[i]?.trim() ? '#fff' : 'var(--purple-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>{q}</p>
              </div>
              <textarea
                value={answers[i] || ''}
                onChange={e => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                placeholder="Type your answer here..."
                rows={3}
                style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--card-border)', borderRadius: 10, fontSize: 13.5, fontFamily: 'inherit', resize: 'vertical', outline: 'none', lineHeight: 1.6, color: 'var(--text-primary)', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
              />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{answered} of {questions.length} answered</span>
            <Btn onClick={submitTest} disabled={answered === 0}>Submit & Get Score →</Btn>
          </div>
        </div>
      )}
    </div>
  )

  // result
  return (
    <div>
      <PageHeader title="📊 Your Score & Feedback" onBack={() => { setStage('setup'); setScoreResult('') }} />
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '28px', marginBottom: 20 }}>
        {loadingScore ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🤖</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', marginBottom: 4 }}>Evaluating your answers...</div>
            <div style={{ fontSize: 13 }}>Takes about 15 seconds</div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid #f3f4f6' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--purple-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🤖</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>Evaluation — {form.company} · {form.role}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{form.dept} · {form.level}</div>
              </div>
            </div>
            <AIText text={scoreResult} />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Btn onClick={() => { setStage('setup'); setScoreResult('') }}>🔄 Try Again</Btn>
        <Btn outline onClick={onBack}>← Back</Btn>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// ATTEND HOME — choose between Live or Scored
// ══════════════════════════════════════════════════════════════════
function AttendHome({ onBack }) {
  const [sub, setSub] = useState(null)
  if (sub === 'live')   return <LiveInterview onBack={() => setSub(null)} />
  if (sub === 'scored') return <ScoredMock    onBack={() => setSub(null)} />

  return (
    <div>
      <PageHeader title="🎤 Attend Interview" subtitle="Choose how you want to practice" onBack={onBack} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 18, maxWidth: 720 }}>
        {/* Live card */}
        <div onClick={() => setSub('live')} style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: '28px 24px', cursor: 'pointer', transition: 'all 0.22s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--purple-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(108,60,225,0.12)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)' }}
        >
          <div style={{ width: 54, height: 54, borderRadius: 16, background: 'var(--purple-xsoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16 }}>🎙️</div>
          <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: 'var(--text-primary)', marginBottom: 8 }}>Live Interview</h3>
          <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 18 }}>AI asks questions one by one. You answer. AI gives brief feedback after each answer, then a full review at the end.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
            {['Real-time feedback', 'Conversational', 'Score /10'].map(t => <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'var(--purple-soft)', color: 'var(--purple-primary)', padding: '3px 9px', borderRadius: 999 }}>{t}</span>)}
          </div>
          <div style={{ color: 'var(--purple-primary)', fontWeight: 700, fontSize: 14 }}>Start Live →</div>
        </div>

        {/* Scored card */}
        <div onClick={() => setSub('scored')} style={{ background: 'linear-gradient(145deg, #6c3ce1, #8b5cf6)', border: '1.5px solid #6c3ce1', borderRadius: 18, padding: '28px 24px', cursor: 'pointer', transition: 'all 0.22s', boxShadow: '0 4px 18px rgba(108,60,225,0.22)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(108,60,225,0.32)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(108,60,225,0.22)' }}
        >
          <div style={{ width: 54, height: 54, borderRadius: 16, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16 }}>📋</div>
          <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 18, color: '#fff', marginBottom: 8 }}>Scored Mock Test</h3>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 18 }}>AI generates 8 questions for your role. You answer all of them. Submit at the end to get a full score and detailed feedback.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
            {['8 Questions', 'Full score', 'Q-by-Q feedback'].map(t => <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '3px 9px', borderRadius: 999 }}>{t}</span>)}
          </div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Start Test →</div>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════
export default function AIInterview() {
  const [mode, setMode] = useState(null)
  if (mode === 'prepare') return <PrepareMode onBack={() => setMode(null)} />
  if (mode === 'attend')  return <AttendHome  onBack={() => setMode(null)} />

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: 'var(--text-primary)', marginBottom: 6 }}>🤖 AI Interview</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
          Smart Interview Practice For Placements
        </p>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20, maxWidth: 820, marginBottom: 36 }}>
        {/* Prepare */}
        <div onClick={() => setMode('prepare')} style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 20, padding: '32px 28px', cursor: 'pointer', transition: 'all 0.25s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--purple-primary)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(108,60,225,0.13)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)' }}
        >
          <div style={{ width: 64, height: 64, borderRadius: 18, background: 'var(--purple-xsoft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 18 }}>📚</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 21, color: 'var(--text-primary)', marginBottom: 8 }}>Prepare for Interview</h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 18 }}>
            AI asks you a <strong style={{ color: 'var(--text-primary)' }}>quick quiz</strong> first to understand you, then generates a <strong style={{ color: 'var(--text-primary)' }}>full personalised prep plan</strong> with topics, questions, and a 7-day schedule.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
            {['Quiz first', 'Then full plan', '7-Day schedule', 'Company-specific'].map(t => <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'var(--purple-soft)', color: 'var(--purple-primary)', padding: '3px 10px', borderRadius: 999 }}>{t}</span>)}
          </div>
          <div style={{ color: 'var(--purple-primary)', fontWeight: 700, fontSize: 14 }}>Start Preparing →</div>
        </div>

        {/* Attend */}
        <div onClick={() => setMode('attend')} style={{ background: 'linear-gradient(145deg, #6c3ce1, #8b5cf6)', border: '1.5px solid #6c3ce1', borderRadius: 20, padding: '32px 28px', cursor: 'pointer', transition: 'all 0.25s', boxShadow: '0 4px 20px rgba(108,60,225,0.25)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(108,60,225,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,60,225,0.25)' }}
        >
          <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 18 }}>🎤</div>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 21, color: '#fff', marginBottom: 8 }}>Attend Interview</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 18 }}>
            Choose <strong style={{ color: '#fff' }}>Live</strong> (AI interviews in real time with per-answer feedback) or <strong style={{ color: '#fff' }}>Scored Mock</strong> (answer all questions, get full score at end).
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
            {['Live Interview', 'Scored Mock', 'Score /10', 'Any Company'].map(t => <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '3px 10px', borderRadius: 999 }}>{t}</span>)}
          </div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Choose Mode →</div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: '24px 28px' }}>
        <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--text-primary)', marginBottom: 18 }}>⚡ What happens in each mode</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
          {[
            { icon: '📚', title: 'Prepare', steps: ['Select company, branch, role', `AI quizzes you (${QUIZ_COUNT} quick questions)`, 'AI builds personalised prep plan', 'Topics, likely Qs, 7-day schedule'] },
            { icon: '🎤', title: 'Attend', steps: ['Choose Live or Scored Mock', 'For Live: answer one Q at a time', 'For Scored: answer all 8 Qs, then submit', 'Get score, feedback, and improvement tips'] },
          ].map(s => (
            <div key={s.title}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{s.title}</span>
              </div>
              {s.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
                  <span style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--purple-soft)', color: 'var(--purple-primary)', fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Helper to parse individual scores from final AI feedback ──
export function parseCategoryScores(text) {
  const categories = {
    Communication: 5,
    Technical: 5,
    Confidence: 5,
    Overall: 5
  }

  if (!text) return categories

  const patterns = {
    Communication: /(?:Communication|Comm)\s*(?:Score)?:?\s*(\d+(?:\.\d+)?)\s*\/\s*10/i,
    Technical: /(?:Technical|Tech|Technical Depth)\s*(?:Score)?:?\s*(\d+(?:\.\d+)?)\s*\/\s*10/i,
    Confidence: /(?:Confidence|Conf)\s*(?:Score)?:?\s*(\d+(?:\.\d+)?)\s*\/\s*10/i,
    Overall: /(?:Overall|Overall Score)\s*:?\s*(\d+(?:\.\d+)?)\s*\/\s*10/i
  }

  for (const [key, regex] of Object.entries(patterns)) {
    const match = text.match(regex)
    if (match) {
      categories[key] = Math.min(10, Math.max(0, parseFloat(match[1])))
    }
  }

  return categories
}