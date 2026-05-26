// Company database for Placement Hub
// Add more companies here as needed

export const companies = [
  {
    id: 'tcs',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    logo: '🔵',
    color: '#0066cc',
    bg: '#eff6ff',
    type: 'Service',
    package: '3.36 LPA',
    roles: ['Software Engineer', 'Assistant System Engineer'],
    eligibility: {
      cgpa: '6.0 and above',
      backlogs: 'No active backlogs',
      branches: 'CSE, ECE, EEE, IT, ME, CIVIL and all branches',
      gap: 'Max 2 years gap allowed',
    },
    skills: ['C / C++', 'Java', 'Python', 'Data Structures', 'DBMS', 'OS Concepts', 'Networking Basics'],
    rounds: [
      { name: 'TCS NQT (Aptitude)', icon: '🧠', desc: 'Numerical ability, verbal, reasoning, programming logic. Duration: 3 hrs.' },
      { name: 'Technical Interview', icon: '💻', desc: 'Core CS fundamentals — DS, DBMS, OS, OOPs, one programming language.' },
      { name: 'HR Interview', icon: '🎤', desc: 'Behavioral questions, company knowledge, career goals, salary discussion.' },
    ],
    aptitude: 'TCS NQT — Numerical Ability, Verbal Ability, Reasoning, Programming Logic (C/Java/Python), Coding Section (2 problems, 30 min)',
    coding: '2 coding problems — easy to medium level. Focus on arrays, strings, basic DP.',
    experiences: [
      { name: 'Priya R.', branch: 'CSE', year: '2024', text: 'TCS NQT was straightforward. Verbal was easy, coding had one array problem and one string reversal. Technical round asked about DBMS normalization and OOPs concepts. HR was friendly.' },
      { name: 'Arun K.', branch: 'ECE', year: '2024', text: 'Got through NQT easily. Technical focused on C basics and data structures. They asked to write a linked list program. HR asked about TCS values and why I want to join.' },
    ],
    resources: [
      { label: 'TCS NQT Prep Guide', link: 'https://www.tcsion.com' },
      { label: 'Previous Year Questions', link: '#' },
      { label: 'IndiaBix Aptitude', link: 'https://www.indiabix.com' },
    ],
    visitFrequency: 'Visits VelTech every year',
    deadline: 'Usually August–October',
  },
  {
    id: 'infosys',
    name: 'Infosys',
    fullName: 'Infosys Limited',
    logo: '🟢',
    color: '#007dc1',
    bg: '#f0fdf4',
    type: 'Service',
    package: '3.6 – 6.5 LPA',
    roles: ['Systems Engineer', 'Digital Specialist Engineer'],
    eligibility: {
      cgpa: '6.5 and above',
      backlogs: 'No active backlogs at time of joining',
      branches: 'All branches eligible',
      gap: 'Max 2 years gap',
    },
    skills: ['Python', 'Java', 'SQL', 'Data Structures', 'Algorithms', 'Problem Solving', 'Communication'],
    rounds: [
      { name: 'Infosys HackWithInfy / Online Test', icon: '🧠', desc: 'Aptitude + Reasoning + Verbal + Pseudocode. Duration: 95 min.' },
      { name: 'Technical Interview', icon: '💻', desc: 'DSA, projects, programming language of choice, DBMS basics.' },
      { name: 'HR Interview', icon: '🎤', desc: 'Introduction, strengths/weaknesses, relocation willingness, company values.' },
    ],
    aptitude: 'HackWithInfy: Quantitative, Logical, Verbal, Pseudocode analysis. Strong focus on reasoning.',
    coding: '2–3 coding problems. Medium difficulty. Focus on arrays, sorting, recursion.',
    experiences: [
      { name: 'Sneha M.', branch: 'IT', year: '2024', text: 'Online test had tricky pseudocode section. Technical asked about my Python project and then moved to SQL queries. HR was very relaxed and conversational.' },
      { name: 'Karthik V.', branch: 'ECE', year: '2023', text: 'Cleared aptitude easily with IndiaBix prep. Technical round focused on OOPS in Java. They asked me to explain polymorphism with a real example. HR asked about 5-year plan.' },
    ],
    resources: [
      { label: 'Infosys Careers Portal', link: 'https://www.infosys.com/careers' },
      { label: 'HackWithInfy Practice', link: '#' },
      { label: 'GeeksForGeeks DSA', link: 'https://www.geeksforgeeks.org' },
    ],
    visitFrequency: 'Regular recruiter at VelTech',
    deadline: 'September–November',
  },
  {
    id: 'wipro',
    name: 'Wipro',
    fullName: 'Wipro Limited',
    logo: '🟡',
    color: '#8b5cf6',
    bg: '#faf5ff',
    type: 'Service',
    package: '3.5 LPA',
    roles: ['Project Engineer', 'Software Developer'],
    eligibility: {
      cgpa: '6.0 and above',
      backlogs: 'No backlogs',
      branches: 'CSE, ECE, EEE, IT, MCA',
      gap: 'Max 1 year gap',
    },
    skills: ['C', 'Java', 'Python', 'DSA', 'SQL', 'Communication Skills'],
    rounds: [
      { name: 'WILP Online Test', icon: '🧠', desc: 'Aptitude, Verbal, Logical reasoning, Written Communication test.' },
      { name: 'Technical Interview', icon: '💻', desc: 'Core subjects, programming concepts, project discussion.' },
      { name: 'HR Interview', icon: '🎤', desc: 'Behavioral, culture fit, background verification discussion.' },
    ],
    aptitude: 'WILP Test: Quantitative (25Q), Verbal (20Q), Logical (20Q), Written Communication (essay). 60 min total.',
    coding: '1–2 coding problems. Focus on basic logic building, string operations.',
    experiences: [
      { name: 'Divya S.', branch: 'CSE', year: '2024', text: 'Wipro test was moderate. Written communication section was different — had to write a short essay. Technical was basic — they asked about sorting algorithms and SQL joins.' },
    ],
    resources: [
      { label: 'Wipro NLTH Prep', link: 'https://www.wipro.com/careers' },
      { label: 'PrepInsta Wipro', link: 'https://prepinsta.com/wipro' },
    ],
    visitFrequency: 'Annual campus drive',
    deadline: 'October–December',
  },
  {
    id: 'accenture',
    name: 'Accenture',
    fullName: 'Accenture',
    logo: '🔷',
    color: '#a100ff',
    bg: '#fdf4ff',
    type: 'Consulting/IT',
    package: '4.5 – 8 LPA',
    roles: ['ASE (Associate Software Engineer)', 'Advanced App Engineering'],
    eligibility: {
      cgpa: '6.0 and above',
      backlogs: 'No active backlogs',
      branches: 'All engineering branches',
      gap: 'Max 2 years',
    },
    skills: ['Java', 'Python', 'JavaScript', 'DSA', 'Agile', 'Communication', 'Problem Solving'],
    rounds: [
      { name: 'Cognitive & Technical Assessment', icon: '🧠', desc: 'Abstract reasoning, attention to detail, technical (pseudo code, MS Office basics). 90 min.' },
      { name: 'Coding Round', icon: '💻', desc: '2 coding problems — easy to medium. Any language of your choice.' },
      { name: 'Communication Assessment', icon: '🗣️', desc: 'AI-evaluated spoken English test. Read passages, answer questions verbally.' },
      { name: 'HR Interview', icon: '🎤', desc: 'Strengths, weaknesses, situational questions, internship/projects discussion.' },
    ],
    aptitude: 'Cognitive test: Abstract reasoning patterns, attention to detail. Technical: pseudocode, basic CS. 90 min.',
    coding: '2 problems. Easy-medium. Focus on loops, arrays, basic math logic.',
    experiences: [
      { name: 'Riya T.', branch: 'CSE', year: '2024', text: 'Accenture communication test was the trickiest part for me. The AI evaluates your spoken English, so practice reading aloud. Coding was easy — one reverse string, one factorial. HR was very friendly.' },
      { name: 'Manoj P.', branch: 'IT', year: '2024', text: 'Abstract reasoning needs pattern practice. Technical section had pseudocode tracing. Got ASE role. Overall process was smooth and results came fast.' },
    ],
    resources: [
      { label: 'Accenture Careers', link: 'https://www.accenture.com/in-en/careers' },
      { label: 'PrepInsta Accenture', link: 'https://prepinsta.com/accenture' },
      { label: 'Abstract Reasoning Practice', link: 'https://www.practiceaptitudetests.com' },
    ],
    visitFrequency: 'Frequent at VelTech',
    deadline: 'August–November',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    fullName: 'Amazon India',
    logo: '🟠',
    color: '#ff9900',
    bg: '#fffbeb',
    type: 'Product/FAANG',
    package: '20 – 40 LPA',
    roles: ['SDE-1', 'SDE Intern', 'Operations'],
    eligibility: {
      cgpa: '7.0 and above (SDE roles)',
      backlogs: 'No backlogs',
      branches: 'CSE, IT preferred; ECE with strong CS background',
      gap: 'Case by case',
    },
    skills: ['DSA (must be strong)', 'System Design (basics)', 'Java/Python/C++', 'OOPs', 'OS', 'DBMS', 'Leadership Principles'],
    rounds: [
      { name: 'Online Assessment', icon: '🧠', desc: '2 DSA problems (medium–hard) + work simulation / reasoning questions. 90 min.' },
      { name: 'Technical Round 1', icon: '💻', desc: 'DSA problems on whiteboard/screen. LeetCode medium–hard level. Live coding.' },
      { name: 'Technical Round 2', icon: '💻', desc: 'More DSA + system design basics + project deep dive.' },
      { name: 'Bar Raiser / HR', icon: '🎤', desc: 'Amazon Leadership Principles (14 LPs) — must prepare STAR format answers.' },
    ],
    aptitude: 'Amazon focuses on DSA, not traditional aptitude. Online assessment is purely coding + work simulation.',
    coding: 'LeetCode medium to hard. Focus: Trees, Graphs, DP, Sliding Window, Two Pointers, BFS/DFS.',
    experiences: [
      { name: 'Aman G.', branch: 'CSE', year: '2024', text: 'Amazon OA had a graph problem and a DP problem. Both were LeetCode medium. Cleared with 2/2. Tech rounds were intense — they want you to think out loud. Bar raiser asked about a conflict situation using LP "Have Backbone".' },
    ],
    resources: [
      { label: 'Amazon Leadership Principles', link: 'https://www.amazon.jobs/content/en/our-workplace/leadership-principles' },
      { label: 'LeetCode Top Amazon Questions', link: 'https://leetcode.com/company/amazon/' },
      { label: 'Striver DSA Sheet', link: 'https://takeuforward.org/strivers-a2z-dsa-course' },
    ],
    visitFrequency: 'Off-campus primarily; occasional referral drives',
    deadline: 'Rolling / internship season Jan–March',
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions',
    logo: '🔵',
    color: '#1252a3',
    bg: '#eff6ff',
    type: 'Service',
    package: '4 – 5 LPA',
    roles: ['Programmer Analyst Trainee', 'GenC / GenC Elevate'],
    eligibility: {
      cgpa: '6.0 and above',
      backlogs: 'No active backlogs',
      branches: 'All branches',
      gap: 'Max 2 years',
    },
    skills: ['C', 'Java', 'Python', 'DSA Basics', 'SQL', 'Communication'],
    rounds: [
      { name: 'SVAR (English Test)', icon: '🗣️', desc: 'Spoken English AI assessment. Read sentences, answer questions.' },
      { name: 'Aptitude Test', icon: '🧠', desc: 'Quant, Reasoning, Verbal. Moderate difficulty. 75 min.' },
      { name: 'Technical Interview', icon: '💻', desc: 'Core subjects, programming basics, project discussion.' },
      { name: 'HR Interview', icon: '🎤', desc: 'Culture fit, relocation, strengths, goals.' },
    ],
    aptitude: 'GenC: Standard aptitude — quant, reasoning, verbal. GenC Elevate: Higher difficulty with coding section.',
    coding: '1–2 problems for GenC Elevate track. Easy level — arrays, strings.',
    experiences: [
      { name: 'Lakshmi N.', branch: 'ECE', year: '2024', text: 'Cognizant SVAR was easy if you speak clearly and confidently. Aptitude was standard IndiaBix level. Technical asked about my final year project and some basic Java OOPs. Very smooth process.' },
    ],
    resources: [
      { label: 'Cognizant GenC Prep', link: 'https://www.cognizant.com/in/en/careers' },
      { label: 'PrepInsta Cognizant', link: 'https://prepinsta.com/cognizant' },
    ],
    visitFrequency: 'Regular at VelTech',
    deadline: 'September–December',
  },
]

export function searchCompanies(query) {
  if (!query || query.trim() === '') return []
  const q = query.toLowerCase().trim()
  return companies.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.fullName.toLowerCase().includes(q) ||
    c.roles.some(r => r.toLowerCase().includes(q)) ||
    c.type.toLowerCase().includes(q)
  )
}