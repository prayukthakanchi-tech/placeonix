import React, { useEffect, useRef } from 'react'
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  BarChart3,
  Building2,
  Code2,
  Cpu,
  FileText,
  Flame,
  Gauge,
  Laptop,
  MessageSquare,
  Plane,
  Radio,
  Rocket,
  Star,
  Stethoscope,
  Trophy,
  Wrench,
  Zap,
  Activity,
  Clock,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { computeReadiness } from '../utils/readiness.js'

// ── Dept label map ─────────────────────────────────────────────
const DEPT_LABELS = {
  CSE:   'Computer Science Engineering',
  IT:    'Information Technology',
  ECE:   'Electronics & Communication',
  EEE:   'Electrical & Electronics',
  ME:    'Mechanical Engineering',
  CIVIL: 'Civil Engineering',
  AERO:  'Aerospace Engineering',
  BME:   'Biomedical Engineering',
  BT:    'Biotechnology',
}

// ── Department card config ─────────────────────────────────────
const DEPTS = [
  { key: 'CSE',   icon: Cpu,         bg: '#eff6ff', iconBg: '#dbeafe',  color: '#2563eb' },
  { key: 'IT',    icon: Laptop,      bg: '#f0fdf4', iconBg: '#dcfce7',  color: '#0891b2' },
  { key: 'ECE',   icon: Radio,       bg: '#f0fdf4', iconBg: '#dcfce7',  color: '#16a34a' },
  { key: 'EEE',   icon: Zap,         bg: '#fffbeb', iconBg: '#fef3c7',  color: '#d97706' },
  { key: 'ME',    icon: Wrench,      bg: '#f9fafb', iconBg: '#f3f4f6',  color: '#4b5563' },
  { key: 'CIVIL', icon: Building2,   bg: '#fff7ed', iconBg: '#ffedd5',  color: '#ea580c' },
  { key: 'AERO',  icon: Plane,       bg: '#eff6ff', iconBg: '#dbeafe',  color: '#7c3aed' },
  { key: 'BME',   icon: Stethoscope, bg: '#fdf2f8', iconBg: '#fce7f3',  color: '#db2777' },
  { key: 'BT',    icon: Brain,       bg: '#f0fdf4', iconBg: '#d1fae5',  color: '#059669' },
]

// ── Quick nav items ────────────────────────────────────────────
const QUICK_NAV = [
  { icon: BookOpen,  label: 'Placement Hub',   sub: 'Roadmaps & Q&As',   page: 'resources',  bg: '#ede9fe', iconBg: '#ddd6fe', color: '#6c3ce1' },
  { icon: Brain,     label: 'Aptitude',        sub: 'Practice Tests',    page: 'aptitude',   bg: '#fce7f3', iconBg: '#fbcfe8', color: '#db2777' },
  { icon: Bot,       label: 'AI Interview',    sub: 'Mock Rounds',       page: 'interview',  bg: '#fef3c7', iconBg: '#fde68a', color: '#d97706' },
  { icon: Code2,     label: 'Coding',          sub: 'DSA + Compiler',    page: 'coding',     bg: '#dbeafe', iconBg: '#bfdbfe', color: '#2563eb' },
  { icon: FileText,  label: 'Resume & ATS',    sub: 'ATS Score',         page: 'resume',     bg: '#dcfce7', iconBg: '#bbf7d0', color: '#16a34a' },
]

// ── Dept-specific skill pillars ────────────────────────────────
// Each pillar maps to a REAL Firestore field or a derived value.
// Pillar 1: Aptitude     → profile.aptitudeScore  (written by Aptitude page on submit)
// Pillar 2: Coding       → profile.codingScore    (written by CodingPractice in future)
// Pillar 3: Core Subjects→ streak-based proxy     (consistent daily study indicator)
// Pillar 4: Interview    → profile.mockInterviewScore (written by AI Interview on complete)
const DEPT_PILLARS = {
  CSE:   ['Aptitude & Reasoning', 'Data Structures & Algorithms', 'OS, DBMS & Networks',         'Interview Readiness'],
  IT:    ['Aptitude & Reasoning', 'Web Dev & SQL Coding',          'System Design & Cloud',        'Interview Readiness'],
  ECE:   ['Aptitude & Reasoning', 'C / Verilog / MATLAB',          'Analog & Digital Circuits',    'Interview Readiness'],
  EEE:   ['Aptitude & Reasoning', 'MATLAB / C Scripting',          'Electrical Machines & Power',  'Interview Readiness'],
  ME:    ['Aptitude & Reasoning', 'CAD & Python Scripting',         'Thermodynamics & Fluid',       'Interview Readiness'],
  CIVIL: ['Aptitude & Reasoning', 'Excel / VBA Scripting',         'Structural & Geotech Design',  'Interview Readiness'],
  AERO:  ['Aptitude & Reasoning', 'MATLAB / Simulation Tools',     'Aerodynamics & Propulsion',    'Interview Readiness'],
  BME:   ['Aptitude & Reasoning', 'Python / MATLAB',               'Bio-instrumentation & Imaging','Interview Readiness'],
  BT:    ['Aptitude & Reasoning', 'Bioinformatics & Python',       'Molecular Biology & Genetics', 'Interview Readiness'],
}

const PILLAR_COLORS = ['#6c3ce1', '#f97316', '#3b82f6', '#22c55e']

// ── Department-aware daily student messages ────────────────────
// 7 messages per dept — indexed by (dayOfYear % 7), so each day = new message.
// Messages are substantive: motivational, technical insight, career guidance, interview wisdom.
const DAILY_MESSAGES = {
  CSE: [
    { title: 'Think Before You Code', body: 'The best DSA solutions come from clarity, not cleverness. Before writing a single line, spend 3 minutes understanding the problem fully. Most interview failures are born in rushed comprehension.' },
    { title: 'Consistency Over Intensity', body: 'One focused LeetCode problem every day, without exception, is more powerful than a 10-hour marathon once a week. Show up today. Future you will thank present you.' },
    { title: 'Explain Your Thinking Out Loud', body: 'Top tech companies don\'t just test your code — they test how you think. Practise narrating your approach while solving problems. Communication is half the interview.' },
    { title: 'Three Pillars of Every CS Interview', body: 'OS, DBMS, and Computer Networks appear in nearly every service company interview. If you revise one concept from each today, you\'ve covered more ground than most candidates will this week.' },
    { title: 'The System Design Mindset', body: 'System design questions have no single right answer. What interviewers assess is whether you ask the right clarifying questions, make reasoned trade-offs, and communicate your assumptions clearly.' },
    { title: 'Simulate Real Pressure', body: 'Set a timer for 20 minutes and solve one problem — no hints, no looking it up. Simulating time pressure during practice is the only way to be ready for the real thing.' },
    { title: 'Your Degree Is a Foundation', body: 'CS education teaches you how computers work. Placement preparation teaches you to demonstrate that under pressure. Both matter. Keep building on the foundation your degree gave you.' },
  ],
  IT: [
    { title: 'SQL Is Still King', body: 'SQL remains the most widely used technical skill across all IT roles. Write one complex query today — joins, subqueries, aggregation — and make sure you understand every clause you use.' },
    { title: 'Cloud Is No Longer Optional', body: 'AWS, Azure, and GCP fluency are now baseline expectations for IT roles. You don\'t need to know everything — start with one core service today: EC2, Lambda, or Storage basics.' },
    { title: 'Networking Questions Are Universal', body: 'TCP/IP, DNS, HTTP, firewalls, and subnetting appear in 80% of IT campus interviews. These are not optional topics — revise them deliberately and you\'ll separate yourself from the crowd.' },
    { title: 'The Art of Technical Communication', body: 'Take a concept you know deeply and explain it to a non-technical person today. The ability to translate complexity into clarity is what separates good engineers from great ones.' },
    { title: 'System Design: Start With Constraints', body: 'When faced with a system design question, the first thing to do is clarify constraints — scale, consistency, latency. Your answer quality depends entirely on asking the right questions first.' },
    { title: 'Adaptability Is Your Career Superpower', body: 'Technology stacks change every 3 years. The most valuable skill you can build isn\'t knowing a specific tool — it\'s the ability to learn new tools quickly and apply them well.' },
    { title: 'Security Thinking Pays Off', body: 'Understanding OWASP Top 10, secure coding practices, and basic network security sets IT candidates apart. Even one hour of reading on XSS or SQL injection today adds lasting value.' },
  ],
  ECE: [
    { title: 'Circuits Come Alive With Context', body: 'Every circuit you analyse exists in a real device — a phone, a satellite, a medical monitor. When a concept feels abstract, ask: where is this used in the world? That question makes everything click faster.' },
    { title: 'Three Core ECE Interview Topics', body: 'Analog electronics, digital design, and signal processing appear in virtually every ECE campus interview at Texas Instruments, Qualcomm, and ISRO. Deep knowledge in all three is non-negotiable.' },
    { title: 'Draw It, Don\'t Just Describe It', body: 'For any circuit or system you\'re revising today, draw the diagram from memory without looking. Hand-drawing a CMOS inverter or an op-amp configuration reinforces understanding far more than re-reading notes.' },
    { title: 'C and Verilog Are Your Technical Edge', body: 'Most ECE candidates know the theory. Fewer can write clean embedded C or basic Verilog. Even 20 minutes of syntax practice today gives you a meaningful edge in embedded and VLSI roles.' },
    { title: 'Communication Is the Final Circuit', body: 'No matter how strong your technical foundation, if you can\'t clearly explain your final year project — what problem it solves, what you built, what you\'d do differently — you\'ll lose interviews you should win.' },
    { title: 'Master the Frequency Domain', body: 'Fourier series, Laplace transforms, and the z-transform are the language of signal processing. If these feel uncertain, spend time on them today. They connect every communication and control system concept.' },
    { title: 'ISRO and Semiconductor Roles Demand Depth', body: 'ISRO, DRDO, and semiconductor companies reward candidates who genuinely care about engineering. Let your passion for electronics come through in your answers — not just your resume.' },
  ],
  EEE: [
    { title: 'Power, Machines, and Control — The Core Three', body: 'Induction motor slip, transformer efficiency, and Routh-Hurwitz stability criterion appear in nearly every EEE campus placement. If you revise all three this week, you\'ve covered the highest-yield ground.' },
    { title: 'Solve Numerically, Not Just Theoretically', body: 'EEE interviews at L&T, BHEL, and power companies test numerical problem solving. Pick one machine or circuit problem today and solve it completely — from setup to answer — without looking at solutions.' },
    { title: 'Renewable Energy Is Your Future', body: 'Smart grids, EV drivetrains, and solar inverters are where EEE roles are growing fastest. Understanding even the basics of power electronics and renewable systems positions you for the next decade.' },
    { title: 'MATLAB Changes Everything', body: 'Candidates who can simulate a control system or run a power flow analysis in MATLAB stand out immediately. Even a simple script today — a Bode plot or step response — keeps those skills sharp.' },
    { title: 'Control Systems Are Everywhere', body: 'From a drone stabiliser to a grid voltage regulator, control theory is everywhere. Visualise the real application of every concept you study — it turns abstract transfer functions into meaningful engineering.' },
    { title: 'Structured Problem Solving Is Your Interview Edge', body: 'EEE interviewers reward candidates who break complex problems into manageable steps and explain their reasoning. Practise this structure today: define → model → solve → verify.' },
    { title: 'Your Depth Is Your Differentiator', body: 'Many candidates study broadly for placements. The ones who succeed are those who know their core electrical subjects deeply enough to answer follow-up questions confidently. Go deeper today, not wider.' },
  ],
  ME: [
    { title: 'Derive, Don\'t Just Memorise', body: 'Thermodynamics equations learned by derivation stick far longer than those memorised cold. Today, derive one key relationship — the Otto cycle efficiency or Carnot\'s theorem — from first principles.' },
    { title: 'CAD Skills Separate Good from Great', body: 'Knowing mechanical principles is expected. Candidates who can translate those principles into solid models and explain their design decisions in an interview have a distinct advantage in design and R&D roles.' },
    { title: 'Manufacturing Is Underrated', body: 'Manufacturing processes — casting, forging, machining tolerances — seem dry until you realise they underpin every product in the world. Deep knowledge here consistently impresses interviewers at Bosch, Tata Motors, and L&T.' },
    { title: 'The "Why" Is More Valuable Than the "How"', body: 'The best ME interviewers ask "Why does it work this way?" not just "How?" When revising any concept today, build the habit of asking why — why this material, why this process, why this constraint.' },
    { title: 'Practise Core Numerical Problems Without Aids', body: 'Mohr\'s Circle, beam bending moments, and thermodynamic cycle calculations are shortlist filters in most campus drives. Solve one of these today without aids to gauge your real preparation level.' },
    { title: 'Mechatronics Is the Frontier', body: 'Mechanical engineering is increasingly interdisciplinary. Automation, robotics, and thermal management require engineers who bridge mechanics and electronics. Exploring one adjacent field today broadens your career options significantly.' },
    { title: 'Every Machine Started as a Sketch', body: 'Whether you pursue design, production, or R&D, your analytical depth and problem-solving mindset are your most transferable assets. Sharpen them daily — not just before placements.' },
  ],
  CIVIL: [
    { title: 'Structural Integrity Has Human Stakes', body: 'Every beam you design, every foundation you specify, every retaining wall you calculate — these will be real structures that real people depend on. Approach your preparation with that weight of responsibility.' },
    { title: 'Three High-Yield Topics for Civil Placements', body: 'Soil classification, Darcy\'s law, and IS code provisions for structural design appear repeatedly across GATE and infrastructure company placements. Nail these fundamentals before moving to advanced topics.' },
    { title: 'Software Skills Are Now Core, Not Bonus', body: 'AutoCAD, STAAD Pro, and MATLAB proficiency are increasingly required alongside core subject knowledge. Even 30 minutes of software practice today — creating a drawing or running a simple analysis — adds lasting value.' },
    { title: 'Know Your IS Codes', body: 'IS 456, IS 800, and IS 1893 aren\'t just for exams — they are what practising engineers reference every working day. Knowing them signals to interviewers that you\'re already thinking like a professional.' },
    { title: 'Specialise Before Generalising', body: 'Geotechnical, structural, and construction management are very different civil engineering paths. Which excites you most? Focused preparation in your area of interest is far more effective than broad revision of everything.' },
    { title: 'Infrastructure Is Civilisation', body: 'Civil engineers build what the world runs on — roads, bridges, water systems, hospitals. Let this awareness shape how you discuss your field in interviews. Passion for impact is noticed and remembered.' },
    { title: 'Strong Foundations, Built Layer by Layer', body: 'Consistency in preparation is itself a civil engineering principle. The strongest structures are built methodically — layer by layer, with quality at every stage. Apply the same discipline to your study habits today.' },
  ],
  AERO: [
    { title: 'Master the Four Forces', body: 'Lift, drag, thrust, and weight are the four pillars of flight — and the four pillars of your aeronautical understanding. Know them deeply enough to derive the governing equations and explain every assumption behind them.' },
    { title: 'Stay Current on Real Programmes', body: 'ISRO\'s space missions, HAL\'s fighter platforms, and Airbus\'s regional aircraft development are the world your degree prepares you for. Read one article today about a current aerospace programme. Industry awareness is noticed in interviews.' },
    { title: 'Gas Dynamics: Hard But High Value', body: 'Compressible flow and gas dynamics challenge most students — which is exactly why mastery here impresses interviewers. Spend focused time on isentropic relations or nozzle flow today. High difficulty, high reward.' },
    { title: 'Simulate the Pressure', body: 'Explain the working of a turbojet engine to yourself, out loud, in under 3 minutes — without notes. If you struggle, that\'s where to study next. Verbal clarity under time pressure is a core interview skill in technical engineering roles.' },
    { title: 'MATLAB Is the Language of Analysis', body: 'Aerospace analysis — trajectory simulation, structural FEM, aerodynamic modelling — happens in MATLAB and similar tools. Running even a simple simulation script today keeps those skills active and interview-ready.' },
    { title: 'Precision Is the Discipline', body: 'Aerospace is an industry where precision matters at every scale — from material selection to trajectory calculations. Develop the same precision in your verbal answers. Vague responses in technical interviews fail where specific ones succeed.' },
    { title: 'The Boundary Is Disappearing', body: 'The line between aerospace and space technology is blurring fast. Engineers who understand both propulsion systems and orbital mechanics are in growing demand. Keep expanding your knowledge — the field rewards breadth built on a deep core.' },
  ],
  BME: [
    { title: 'Engineering That Saves Lives', body: 'Every biosignal processing algorithm, every imaging modality, every implantable device you learn about has a direct patient impact. Understanding this transforms studying from an obligation into a mission.' },
    { title: 'Know Your Biosignals', body: 'ECG, EEG, and EMG — understanding how these are generated, captured, and interpreted is foundational for biomedical roles at Siemens Healthineers, Philips, and Medtronic. Revise one of these signals deeply today.' },
    { title: 'Imaging Is a Favourite Topic', body: 'Medical imaging (X-ray, CT, MRI, Ultrasound) is a consistent interview topic. Study one modality today — the underlying physics, the clinical use case, and its key limitations. Go deeper than surface definitions.' },
    { title: 'Code Is Now a Core BME Skill', body: 'Python and MATLAB for signal processing are becoming essential in biomedical engineering roles. Writing a simple FIR filter or loading a biosignal dataset today practises skills that set you apart from candidates who only studied theory.' },
    { title: 'Regulatory Knowledge Signals Maturity', body: 'The FDA, BIS, and ISO 13485 shape every biomedical product development cycle. Knowing the regulatory environment — even at a basic level — signals to interviewers that you\'re thinking beyond the lab.' },
    { title: 'Explain It Without Jargon', body: 'Explain one biomedical device you know well — how it works, how it\'s used, how it fails safely. The ability to communicate complex technology clearly to clinical users is your most marketable professional skill.' },
    { title: 'A Field That Is Only Growing', body: 'Hospitals, R&D labs, medical startups, and device companies all need engineers who understand both technology and human biology. You\'re preparing for one of the most meaningful career paths in engineering. Keep going.' },
  ],
  BT: [
    { title: 'PCR: Know It Cold', body: 'PCR is the foundational technique of modern biotechnology. Be able to explain denaturation, annealing, and extension with specific temperatures, explain why each step matters, and list three applications. This comes up in almost every biotech interview.' },
    { title: 'Balance Molecular Biology With Process Thinking', body: 'Biocon, Dr. Reddy\'s, and Serum Institute interview for both molecular depth and bioprocess understanding. Today, revise one concept from each side — a technique from cell biology and a step in upstream or downstream processing.' },
    { title: 'Draw the Fermentation Process', body: 'From inoculum preparation to final product recovery — draw a complete bioreactor process flow from memory. Upstream and downstream bioprocessing are consistently tested topics that many candidates underestimate.' },
    { title: 'CRISPR Is the Conversation Everyone Is Having', body: 'Being able to explain the CRISPR-Cas9 mechanism clearly, discuss its therapeutic applications, and engage thoughtfully with its ethical dimensions will impress interviewers at research-focused companies and institutions.' },
    { title: 'Bioinformatics Is No Longer Optional', body: 'Even for wet-lab roles, familiarity with NCBI databases, BLAST alignment, or basic Python for biological data analysis is increasingly expected. One hour of exploration today is a meaningful investment in your career flexibility.' },
    { title: 'GMP Thinking Separates Industry-Ready Candidates', body: 'Good Manufacturing Practice, Standard Operating Procedures, and quality control documentation are the backbone of biotech manufacturing. Knowing these signals to interviewers that you\'re ready to work in a regulated environment from day one.' },
    { title: 'Curiosity Is Your Core Competency', body: 'Biotechnology bridges living systems and engineering principles. Whether you pursue research, production, or quality assurance — your genuine curiosity about how biological systems work is your most powerful and durable career advantage.' },
  ],
}

// ── Helpers ────────────────────────────────────────────────────
function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth()    === d2.getMonth()    &&
         d1.getDate()     === d2.getDate()
}

function isYesterday(d1, today) {
  const y = new Date(today)
  y.setDate(today.getDate() - 1)
  return isSameDay(d1, y)
}

// ── Circular progress ring ─────────────────────────────────────
function CircularProgress({ value, size = 52 }) {
  const r = 20
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg viewBox="0 0 52 52" width={size} height={size}>
        <circle className="track" cx="26" cy="26" r={r} />
        <circle className="fill" cx="26" cy="26" r={r}
          strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <div className="circular-label">{value}%</div>
    </div>
  )
}

// ── Dashboard ──────────────────────────────────────────────────
export default function Dashboard({ setActivePage }) {
  const { user, profile } = useAuth()

  // ── Read all real Firestore fields ───────────────────────────
  const displayName       = profile?.name || user?.displayName || user?.email?.split('@')[0] || 'Student'
  const branch            = profile?.branch || 'CSE'
  const deptLabel         = DEPT_LABELS[branch] || branch

  const readiness         = profile?.placementReadiness ?? 0
  const aptitudeScore     = profile?.aptitudeScore     ?? 0   // written by Aptitude page
  const codingScore       = profile?.codingScore       ?? 0   // written by Coding page (future)
  const mockScore         = profile?.mockInterviewScore ?? 0  // written by AI Interview
  const interviewsDone    = profile?.interviewsCompleted ?? 0
  const currentStreak     = profile?.currentStreak ?? 0
  const bestStreak        = profile?.bestStreak    ?? 0

  // ── Streak auto-increment on daily visit ─────────────────────
  const streakUpdated = useRef(false)
  useEffect(() => {
    if (!user || !profile || streakUpdated.current) return
    streakUpdated.current = true

    const today = new Date()
    const last  = profile.lastVisited?.toDate?.() || null
    if (last && isSameDay(last, today)) return  // already logged today

    try {
      const ref = doc(db, 'users', user.uid)
      const newStreak = !last || isYesterday(last, today)
        ? (profile.currentStreak ?? 0) + 1
        : 1

      // Recompute readiness with new streak
      const newReadiness = computeReadiness({
        aptitudeScore:      profile.aptitudeScore     ?? 0,
        mockInterviewScore: profile.mockInterviewScore ?? 0,
        currentStreak:      newStreak,
        codingScore:        profile.codingScore       ?? 0,
      })

      updateDoc(ref, {
        currentStreak:      newStreak,
        bestStreak:         Math.max(profile.bestStreak ?? 0, newStreak),
        lastVisited:        new Date(),
        placementReadiness: newReadiness,
      }).catch(() => {})
    } catch (_) {}
  }, [user, profile])

  // ── Skill pillars — each maps to a REAL Firestore field ──────
  const streakBonus = Math.min(100, currentStreak * 10) // 10 days = 100% core study proxy
  const pillars = (DEPT_PILLARS[branch] || DEPT_PILLARS.CSE).map((name, i) => {
    const values = [aptitudeScore, codingScore, streakBonus, mockScore]
    return { name, pct: Math.min(100, values[i] ?? 0), color: PILLAR_COLORS[i] }
  })

  const noProgress = aptitudeScore === 0 && mockScore === 0 && currentStreak === 0

  // ── Daily message (dept-aware, rotates by day of week) ───────
  const dayOfWeek    = new Date().getDay()   // 0 = Sun … 6 = Sat
  const messages     = DAILY_MESSAGES[branch] || DAILY_MESSAGES.CSE
  const todayMessage = messages[dayOfWeek % messages.length]

  // ── Recent activity feed ─────────────────────────────────────
  const activities = [
    profile?.lastAptitudeAttempt && {
      icon: Brain, label: `Aptitude Quiz — ${aptitudeScore}% best score`, sub: 'Aptitude Practice',
      page: 'aptitude', color: '#db2777', bg: '#fce7f3',
    },
    profile?.lastInterviewDate && {
      icon: Bot, label: `AI Interview — ${mockScore}% best score`, sub: `${interviewsDone} session${interviewsDone !== 1 ? 's' : ''} completed`,
      page: 'interview', color: '#d97706', bg: '#fef3c7',
    },
    profile?.lastCodingSession && {
      icon: Code2, label: 'Coding Session', sub: 'Coding Practice',
      page: 'coding', color: '#2563eb', bg: '#dbeafe',
    },
    currentStreak > 0 && {
      icon: Flame, label: `${currentStreak}-day streak active`, sub: `Best: ${bestStreak} days`,
      page: null, color: '#f97316', bg: '#fff7ed',
    },
  ].filter(Boolean)

  function go(page) { if (setActivePage && page) setActivePage(page) }

  const activeDept = DEPTS.find(d => d.key === branch)

  return (
    <div>

      {/* ── Hero ── */}
      <section className="hero-section hero-aurora" style={{ marginBottom: 28 }}>
        <div className="hero-text">
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple-primary)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {getGreeting()} 👋
          </p>
          <h1>{displayName}</h1>
          <p>Your <strong>{deptLabel}</strong> placement hub is ready.</p>
          <button className="btn-primary" type="button" onClick={() => go('resources')}>
            Open Placement Hub <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>

        <div className="hero-ring-group" aria-hidden="true">
          <div className="hero-ring-card">
            <CircularProgress value={readiness} size={72} />
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--purple-primary)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Readiness</div>
          </div>
          <div className="hero-ring-card hero-ring-card--sm">
            <div style={{ fontSize: 26, fontWeight: 900, fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', lineHeight: 1 }}>
              {currentStreak}
            </div>
            <Flame size={18} color="#f97316" />
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}>Day Streak</div>
          </div>
          <div className="hero-ring-card hero-ring-card--sm">
            <div style={{ fontSize: 26, fontWeight: 900, fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', lineHeight: 1 }}>
              {bestStreak}
            </div>
            <Star size={18} color="#6c3ce1" />
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}>Best Streak</div>
          </div>
        </div>
      </section>

      {/* ── Stat Cards ── */}
      <div className="stats-grid" style={{ marginBottom: 28 }}>
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#ede9fe' }}>
            <Gauge size={24} aria-hidden="true" />
          </div>
          <CircularProgress value={readiness} />
          <div className="stat-info">
            <div className="stat-label">Placement Readiness</div>
            <div className="stat-value">{readiness}%</div>
            <div className="stat-sub purple">{readiness === 0 ? 'Start practicing!' : readiness < 50 ? 'Getting started' : readiness < 80 ? 'Keep improving!' : 'Almost there!'}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#fce7f3' }}>
            <Brain size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Best Aptitude Score</div>
            <div className="stat-value">{aptitudeScore}%</div>
            <div style={{ marginTop: 6 }}>
              <div style={{ height: 6, background: '#e5e7eb', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${aptitudeScore}%`, height: '100%', background: '#db2777', borderRadius: 999, transition: 'width 1s ease' }} />
              </div>
              <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3 }}>
                {aptitudeScore === 0 ? 'Take your first aptitude test →' : `${aptitudeScore}% correct across attempts`}
              </div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#fff7ed' }}>
            <Flame size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Daily Streak</div>
            <div className="stat-value">{currentStreak} <span style={{ fontSize: 14 }}>🔥</span></div>
            <div className="stat-sub orange">Best: {bestStreak} day{bestStreak !== 1 ? 's' : ''}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: '#eff6ff' }}>
            <Trophy size={24} aria-hidden="true" />
          </div>
          <div className="stat-info">
            <div className="stat-label">Best Interview Score</div>
            <div className="stat-value">{mockScore}%</div>
            <div className="stat-sub green">
              {interviewsDone === 0 ? 'No sessions yet' : `${interviewsDone} session${interviewsDone !== 1 ? 's' : ''} completed`}
            </div>
          </div>
        </div>
      </div>

      {/* ── Readiness formula note ── */}
      <div style={{
        marginBottom: 28, padding: '12px 18px',
        background: '#f5f3ff', border: '1px solid #e9d5ff',
        borderRadius: 12, fontSize: 12.5, color: '#6c3ce1',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <Gauge size={14} />
        <span>
          <strong>Readiness</strong> is computed from your real scores: Aptitude ({Math.round(aptitudeScore * 0.30)}%) + Interview ({Math.round(mockScore * 0.40)}%) + Daily Streak ({Math.round(Math.min(100, currentStreak * 10) * 0.20)}%). It updates automatically after each session.
        </span>
      </div>

      {/* ── User info strip ── */}
      <div className="user-progress-strip" style={{ marginBottom: 28 }}>
        <div>
          <span>Department</span>
          <strong style={{ color: activeDept?.color || 'var(--purple-primary)' }}>{deptLabel}</strong>
        </div>
        <div>
          <span>Account</span>
          <strong style={{ fontSize: 13 }}>{user?.email}</strong>
        </div>
        <div>
          <span>Mock Score</span>
          <strong>{mockScore > 0 ? `${mockScore}% — ${interviewsDone} interview${interviewsDone !== 1 ? 's' : ''}` : 'No interviews yet'}</strong>
        </div>
      </div>

      {/* ── Quick Access ── */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <span className="section-title">Quick Access</span>
      </div>
      <div className="quick-nav-grid" style={{ marginBottom: 28 }}>
        {QUICK_NAV.map(q => {
          const Icon = q.icon
          return (
            <button key={q.page} type="button" className="quick-nav-card"
              style={{ background: q.bg }} onClick={() => go(q.page)}>
              <div className="quick-nav-icon" style={{ background: q.iconBg, color: q.color }}>
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="quick-nav-label">{q.label}</div>
              <div className="quick-nav-sub">{q.sub}</div>
              <div className="quick-nav-arrow" style={{ color: q.color }}>
                <ArrowRight size={14} />
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Explore by Dept ── */}
      <div className="section-header" style={{ marginBottom: 14 }}>
        <span className="section-title">Explore By Department</span>
        <span className="view-all-link" onClick={() => go('resources')}>Go to Placement Hub</span>
      </div>
      <div className="departments-grid" style={{ marginBottom: 28 }}>
        {DEPTS.map(d => {
          const Icon = d.icon
          const isActive = d.key === branch
          return (
            <div key={d.key} className="dept-card"
              style={{
                background: d.bg,
                border: isActive ? `2px solid ${d.color}` : '1px solid var(--card-border)',
                boxShadow: isActive ? `0 4px 14px ${d.color}22` : undefined,
              }}
              onClick={() => go('resources')}
            >
              <div className="dept-icon-wrap" style={{ background: d.iconBg, color: d.color }}>
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="dept-name" style={{ color: isActive ? d.color : undefined }}>{d.key}</div>
            </div>
          )
        })}
      </div>

      {/* ── Daily Message + Activity ── */}
      <div className="dashboard-two-col" style={{ marginBottom: 28 }}>

        {/* Daily student message */}
        <div className="tip-card">
          <div className="tip-card__header">
            <div className="tip-card__icon">
              <MessageSquare size={20} color="#6c3ce1" style={{ flexShrink: 0 }} />
            </div>
            <div>
              <div className="tip-card__title">{todayMessage.title}</div>
              <div className="tip-card__dept" style={{ color: activeDept?.color || '#6c3ce1' }}>{deptLabel}</div>
            </div>
          </div>
          <p className="tip-card__body">{todayMessage.body}</p>
          <div className="tip-card__footer">
            <div className="tip-card__date" style={{ color: 'var(--text-muted)' }}>
              <Clock size={13} />
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}
            </div>
            <button type="button" className="tip-card__cta"
              style={{ background: activeDept?.color || '#6c3ce1' }}
              onClick={() => go('resources')}>
              Study Now <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <div className="section-header" style={{ marginBottom: 14 }}>
            <span className="section-title">Recent Activity</span>
            <Activity size={18} color="var(--text-muted)" />
          </div>
          {activities.length > 0 ? (
            <div className="activity-list">
              {activities.slice(0, 4).map((a, i) => {
                const Icon = a.icon
                return (
                  <div key={i} className={`activity-item${a.page ? ' activity-item--link' : ''}`}
                    onClick={() => go(a.page)}>
                    <div className="activity-icon" style={{ background: a.bg, color: a.color }}>
                      <Icon size={16} />
                    </div>
                    <div className="activity-info">
                      <div className="activity-label">{a.label}</div>
                      <div className="activity-sub">{a.sub}</div>
                    </div>
                    {a.page && <ArrowRight size={14} color="var(--text-muted)" />}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="activity-empty">
              <Rocket size={32} color="var(--purple-primary)" style={{ opacity: 0.5 }} />
              <p>No activity yet — start your first session!</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[['aptitude','Aptitude'],['coding','Coding'],['interview','Interview']].map(([p, l]) => (
                  <button key={p} type="button" className="activity-cta-btn" onClick={() => go(p)}>{l}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Skill Progress — real Firestore fields ── */}
      <div className="skill-card">
        <div className="section-header" style={{ marginBottom: 6 }}>
          <span className="section-title">Skill Progress — {deptLabel}</span>
          <span className="view-all-link" onClick={() => go('resources')}>View Syllabus</span>
        </div>

        {/* Sources legend */}
        <div style={{ marginBottom: 16, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Aptitude updates after each quiz · Interview updates after each AI session · Core Subjects reflects your daily streak · Coding updates when you complete coding sessions
        </div>

        {noProgress && (
          <div style={{ marginBottom: 16, padding: '10px 14px', background: '#f5f3ff', borderRadius: 10, border: '1px solid #e9d5ff', fontSize: 13, color: '#6c3ce1' }}>
            💡 All bars start at 0% and fill with real data as you complete sessions — no simulated values.
          </div>
        )}

        <div className="skill-progress-grid">
          {pillars.map(s => (
            <div key={s.name} className="skill-item">
              <div className="skill-item-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct" style={{ color: s.color }}>{s.pct}%</span>
              </div>
              <div className="skill-bar-wrap">
                <div className="skill-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
