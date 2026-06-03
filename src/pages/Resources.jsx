import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot, updateDoc, doc, increment, addDoc, getDocs, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext.jsx'
import { 
  Search, 
  BookOpen, 
  Brain, 
  Code2, 
  Cpu, 
  Briefcase, 
  FileText, 
  ExternalLink, 
  Award, 
  X,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react'
import { PLACEMENT_PREP_DATA } from '../data/placementPrepData'


const DEPARTMENTS = [
  { key: 'CSE', name: 'Computer Science', icon: '💻' },
  { key: 'IT', name: 'Information Technology', icon: '🌐' },
  { key: 'ECE', name: 'Electronics & Communication', icon: '⚡' },
  { key: 'EEE', name: 'Electrical & Electronics', icon: '🔋' },
  { key: 'ME', name: 'Mechanical', icon: '⚙️' },
  { key: 'CIVIL', name: 'Civil', icon: '🧱' },
  { key: 'AERO', name: 'Aeronautical', icon: '✈️' },
  { key: 'BME', name: 'Biomedical', icon: '🏥' },
  { key: 'BT', name: 'Biotechnology', icon: '🧬' }
]

const DEPT_COLORS = {
  CSE: { text: '#0284c7', bg: 'rgba(2,132,199,0.08)', border: '1px solid rgba(2,132,199,0.2)' },
  IT: { text: '#2563eb', bg: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' },
  ECE: { text: '#ea580c', bg: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.2)' },
  EEE: { text: '#e11d48', bg: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.2)' },
  ME: { text: '#16a34a', bg: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)' },
  CIVIL: { text: '#ca8a04', bg: 'rgba(202,138,4,0.08)', border: '1px solid rgba(202,138,4,0.2)' },
  AERO: { text: '#9333ea', bg: 'rgba(147,51,234,0.08)', border: '1px solid rgba(147,51,234,0.2)' },
  BME: { text: '#db2777', bg: 'rgba(219,39,119,0.08)', border: '1px solid rgba(219,39,119,0.2)' },
  BT: { text: '#0d9488', bg: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)' }
}

const SEED_DATA = [
  // ── GENERAL APTITUDE & REASONING ─────────────────────────────────
  { title: "IndiaBIX Quantitative Aptitude Practice", url: "https://www.indiabix.com/aptitude/questions-and-answers/", category: "aptitude", department: "COMMON", subject: "Quantitative Aptitude", description: "Practice online test questions in quantitative aptitude with formulas and shortcut explanations.", tags: ["#aptitude", "#quant", "#indiabix"] },
  { title: "PrepInsta Placement Aptitude Masterclass", url: "https://prepinsta.com/", category: "aptitude", department: "COMMON", subject: "Placement Assessment", description: "Complete assessment portal for quantitative, logical, and verbal reasoning rounds.", tags: ["#aptitude", "#reasoning", "#prepinsta"] },
  { title: "IndiaBIX Logical Reasoning Tests", url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/", category: "aptitude", department: "COMMON", subject: "Logical Reasoning", description: "Verbal and non-verbal logical reasoning questions with solutions for placement exams.", tags: ["#reasoning", "#indiabix", "#prep"] },

  // ── COMPANY ASSESSMENT MOCK PAPERS ───────────────────────────────
  { title: "GeeksforGeeks SDE Prep Roadmap", url: "https://www.geeksforgeeks.org/lmns-gq-gfg/", category: "company", department: "CSE", subject: "SDE Interviews", description: "Company-wise software engineer interview question sheets and SDE placement roadmap.", tags: ["#sde", "#gfg", "#placementprep"] },
  { title: "PrepInsta Company Mock Papers", url: "https://prepinsta.com/company-prep/", category: "company", department: "COMMON", subject: "Recruiter Mock Papers", description: "Mock tests and past placement papers for TCS, Infosys, Cognizant, Wipro, and Accenture.", tags: ["#companyprep", "#mocktests", "#tcs"] },

  // ── COMPUTER SCIENCE ENGINEERING (CSE) ───────────────────────────
  { title: "Striver's DSA A-to-Z Placement Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course-sheet-preview-2/", category: "coding", department: "CSE", subject: "Data Structures & Algorithms", description: "The most structured coding sheet for software engineering placements.", tags: ["#dsa", "#coding", "#striversheet"] },
  { title: "NeetCode 150 - Coding Practice Map", url: "https://neetcode.io/practice", category: "coding", department: "CSE", subject: "Coding Practice", description: "150 curated LeetCode problems with full video walk-throughs and structural maps.", tags: ["#leetcode", "#coding", "#dsa"] },
  { title: "Abdul Bari's Algorithms Lectures", url: "https://www.youtube.com/playlist?list=PLDN4rRL5gy4UzoN7Apx-w5G37WPo68e59", category: "coding", department: "CSE", subject: "Algorithms", description: "Gold standard video tutorials explaining algorithm design techniques (Greedy, DP, Divide & Conquer).", tags: ["#algorithms", "#dsa", "#youtube"] },
  { title: "Jenny's Lectures - Data Structures Course", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8JH", category: "coding", department: "CSE", subject: "Data Structures", description: "Detailed whiteboard lectures explaining arrays, stacks, trees, and linked list implementations.", tags: ["#datastructures", "#cse", "#youtube"] },
  { title: "Gate Smashers - Operating Systems Course", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p", category: "core", department: "CSE", subject: "Operating Systems", description: "Clear and popular lectures covering CPU Scheduling, Semaphores, Deadlocks, and Memory.", tags: ["#os", "#gate", "#youtube"] },
  { title: "Operating Systems: Three Easy Pieces (OSTEP)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/", category: "core", department: "CSE", subject: "OS Internals", description: "Highly acclaimed free textbook explaining virtualization, concurrency, and persistence internals.", tags: ["#os", "#concurrency", "#ostep", "#internals"] },
  { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", category: "core", department: "CSE", subject: "Cybersecurity", description: "Free interactive labs covering security vulnerabilities, injection attacks, and encryption.", tags: ["#security", "#cybersecurity", "#portswigger"] },
  { title: "Gate Smashers - Database Management System (DBMS)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGGtVqgLYuJaqyLl74I_641", category: "core", department: "CSE", subject: "DBMS", description: "Foundational DBMS topics covering SQL, normalization, transactions, and ER modeling.", tags: ["#dbms", "#sql", "#gate"] },
  { title: "Gate Smashers - Computer Networks (CN)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_", category: "core", department: "CSE", subject: "Computer Networks", description: "OSI Layer dynamics, TCP/IP protocols, subnetting calculations, and routing algorithms.", tags: ["#networks", "#cn", "#gate"] },
  { title: "GeeksforGeeks CSE Technical Interview Questions", url: "https://www.geeksforgeeks.org/computer-science-interview-questions/", category: "interview", department: "CSE", subject: "CSE Foundations", description: "Top 100+ computer science foundational interview questions covering OOPs, OS, SQL, and networks.", tags: ["#csequestions", "#interviewprep", "#gfg"] },

  // ── INFORMATION TECHNOLOGY (IT) ──────────────────────────────────
  { title: "freeCodeCamp - Web Development & JavaScript", url: "https://www.freecodecamp.org/", category: "coding", department: "IT", subject: "Web Development", description: "Massive project-based learning platform for modern web technologies and frontend/backend certificates.", tags: ["#webdev", "#javascript", "#fullstack"] },
  { title: "Gate Smashers - System Design Basics", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHaeSkOPofz7IpS3u9kS0Oq", category: "core", department: "IT", subject: "System Design", description: "Fundamentals of horizontal/vertical scaling, load balancers, caching, CDN, and system architecture.", tags: ["#systemdesign", "#scaling", "#it"] },
  { title: "GeeksforGeeks Cybersecurity Tutorial", url: "https://www.geeksforgeeks.org/cyber-security-tutorial/", category: "core", department: "IT", subject: "Cybersecurity", description: "Foundational cybersecurity articles covering network security, threat models, and crypto.", tags: ["#security", "#cybersecurity", "#gfg"] },
  { title: "JavaTpoint - Software Engineering Principles", url: "https://www.javatpoint.com/software-engineering-tutorial", category: "core", department: "IT", subject: "Software Engineering", description: "Reference guide for software lifecycles, Agile methodology, testing, and design models.", tags: ["#agile", "#sdlc", "#engineering"] },
  { title: "GeeksforGeeks IT Specialist Foundational Interview Questions", url: "https://www.geeksforgeeks.org/it-interview-questions/", category: "interview", department: "IT", subject: "IT Foundations", description: "Foundational interview questions for IT graduates covering SQL queries, cloud basics, and Linux scripting.", tags: ["#itquestions", "#cloud", "#linux"] },

  // ── ELECTRONICS & COMMUNICATION ENGINEERING (ECE) ────────────────
  { title: "Neso Academy - Digital Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm", category: "core", department: "ECE", subject: "Digital Electronics", description: "Top video course covering logic gates, Karnaugh maps, sequential flip-flops, and hardware registers.", tags: ["#digital", "#logic", "#vlsi"] },
  { title: "Neso Academy - Analog Electronics Lectures", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhPG3QI33UYAd5V0aTOaFnK", category: "core", department: "ECE", subject: "Analog Electronics", description: "Detailed tutorials on diode physics, transistor modeling, Op-Amps, and active filters.", tags: ["#analog", "#circuits", "#opamps"] },
  { title: "Behzad Razavi - Microelectronics Lectures", url: "https://www.youtube.com/playlist?list=PLyYRy1NwsKafyvE0p3tvsX8xI6mH43Wcr", category: "core", department: "ECE", subject: "Microelectronics Design", description: "World-renowned professor's lectures on integrated analog circuit design and fabrication physics.", tags: ["#circuits", "#razavi", "#vlsi"] },
  { title: "Embedded Systems Shape the World Course", url: "https://users.ece.utexas.edu/~valvano/embed/toc1.htm", category: "core", department: "ECE", subject: "Embedded Systems", description: "Open courseware teaching microcontroller architectures, RTOS timers, and sensor interfaces.", tags: ["#embedded", "#microcontrollers", "#ece", "#valvano"] },
  { title: "MIT Signals and Systems Course", url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/", category: "core", department: "ECE", subject: "Signal Processing", description: "Core signal processing fundamentals, Fourier transforms, Laplace domains, and filtering applications.", tags: ["#signals", "#dsp", "#mit"] },
  { title: "Verilog HDL Hardware Description Guide", url: "https://www.asic-world.com/verilog/index.html", category: "core", department: "ECE", subject: "VLSI Coding", description: "Syntax lists and design templates for writing Verilog code for hardware roles.", tags: ["#verilog", "#vlsi", "#coding"] },
  { title: "VLSI Encyclopedia Curation Space", url: "http://www.vlsiencyclopedia.com/", category: "core", department: "ECE", subject: "VLSI Design", description: "Excellent reference articles covering physical design, ASIC design flows, and CMOS circuits.", tags: ["#vlsi", "#asic", "#cmos"] },
  { title: "Sanfoundry Digital Electronics & ECE Foundational Questions", url: "https://www.sanfoundry.com/1000-digital-circuits-questions-answers/", category: "interview", department: "ECE", subject: "ECE Foundations", description: "1000+ MCQs and technical interview questions on digital electronics and circuit design.", tags: ["#ecequestions", "#digitalcircuits", "#sanfoundry"] },

  // ── ELECTRICAL & ELECTRONICS ENGINEERING (EEE) ───────────────────
  { title: "Electrical4U - Core Prep Portal", url: "https://www.electrical4u.com/", category: "core", department: "EEE", subject: "Electrical Engineering", description: "Theoretical database and quiz engine for electrical machines, grid stability, and electrical formulas.", tags: ["#electrical", "#machines", "#eee"] },
  { title: "NPTEL Electrical Machines Playlist", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_y9V3Q41-Yv_m2L3k5Tf3t", category: "core", department: "EEE", subject: "Electrical Machines", description: "Academic lecture series explaining transformers, DC motors, and AC induction dynamics.", tags: ["#machines", "#acmotors", "#eee"] },
  { title: "NPTEL Power Systems Engineering Lectures", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Qj-7-Sbe7z4y0v6qFzQ2l", category: "core", department: "EEE", subject: "Power Systems", description: "Advanced grid design stability, transmission equations, and load protection systems.", tags: ["#powersystems", "#grid", "#eee"] },
  { title: "Control Systems Crash Course", url: "https://www.youtube.com/playlist?list=PLgwJf8NHJnNFgJ1uR8h986x3yQfI0_cZ6", category: "core", department: "EEE", subject: "Control Systems", description: "GATE and core interview questions solved in control engineering, transfer functions, and root locus.", tags: ["#controlsystems", "#gate", "#circuits"] },
  { title: "Electrical Technology Core Prep Library", url: "https://www.electricaltechnology.org/", category: "core", department: "EEE", subject: "Basic Electrical", description: "Comprehensive formulas, calculator lists, and electrical design cheat sheets.", tags: ["#formulas", "#eee", "#calculators"] },
  { title: "GeeksforGeeks Electrical Engineering Foundational Questions", url: "https://www.geeksforgeeks.org/electrical-engineering-interview-questions/", category: "interview", department: "EEE", subject: "EEE Foundations", description: "Foundational interview questions for EEE students covering AC/DC motors, grid distribution, and generators.", tags: ["#eeequestions", "#grid", "#motors"] },

  // ── MECHANICAL ENGINEERING (ME) ──────────────────────────────────
  { title: "Lesics 3D Concepts - Thermal Design", url: "https://www.youtube.com/c/Lesics", category: "core", department: "ME", subject: "Thermodynamics & Design", description: "Clear 3D animations visualising mechanical assemblies, engine pistons, and thermodynamics.", tags: ["#mechanics", "#thermo", "#engines"] },
  { title: "Autodesk CAD/CAM Learning Academy", url: "https://academy.autodesk.com/", category: "core", department: "ME", subject: "CAD/CAM", description: "Professional visual tutorials covering computer-aided design, manufacturing modeling, and machining.", tags: ["#cad", "#cam", "#modeling", "#me"] },
  { title: "GrabCAD Community Tutorial Portal", url: "https://grabcad.com/tutorials", category: "core", department: "ME", subject: "CAD Modeling & FEA", description: "Huge interactive portal for CAD modeling practice, Finite Element Analysis (FEA), and SolidWorks tips.", tags: ["#cad", "#solidworks", "#fea"] },
  { title: "NPTEL Strength of Materials Course", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Jb_5lB_WlXGZ2uM1jU5N3", category: "core", department: "ME", subject: "Strength of Materials", description: "Advanced mechanics equations, stress-strain calculations, and beam loading analysis.", tags: ["#materials", "#stress", "#mechanics"] },
  { title: "IndiaBIX Core Mechanical MCQs", url: "https://www.indiabix.com/mechanical-engineering/questions-and-answers/", category: "core", department: "ME", subject: "Mechanical MCQ Prep", description: "Placement mock assessment database for core mechanical engineering placement papers.", tags: ["#indiabix", "#mcqs", "#mechanical"] },
  { title: "Sanfoundry Strength of Materials & Mechanical Foundational Questions", url: "https://www.sanfoundry.com/strength-materials-questions-answers/", category: "interview", department: "ME", subject: "Mechanical Foundations", description: "Detailed foundational Q&As in material strength, thermodynamics, fluid dynamics, and CAD modeling.", tags: ["#mequestions", "#thermo", "#solidworks"] },

  // ── CIVIL ENGINEERING (CIVIL) ────────────────────────────────────
  { title: "Civil Engineering Academy Portal", url: "https://civilengineeringacademy.com/", category: "core", department: "CIVIL", subject: "Structural Design", description: "Study resources, mock tests, and article guides for structural civil engineering and concretes.", tags: ["#structural", "#concrete", "#civil"] },
  { title: "GATE Academy Civil Lectures", url: "https://www.youtube.com/playlist?list=PL-k6G5rLqD7P-Tpx7aI0tPj_jC_J7wL9D", category: "core", department: "CIVIL", subject: "Surveying & Materials", description: "Curated video playlist focusing on civil construction materials, soils, and surveying formulas.", tags: ["#surveying", "#civil", "#materials"] },
  { title: "NPTEL Structural Analysis Playlist", url: "https://www.youtube.com/playlist?list=PL43E087796791E479", category: "core", department: "CIVIL", subject: "Structural Analysis", description: "Detailed academic video series covering frame vectors, shear distributions, and deflection calculations.", tags: ["#structures", "#civil", "#mechanics"] },
  { title: "GATE Academy Strength of Materials (Civil)", url: "https://www.youtube.com/playlist?list=PL-k6G5rLqD7O116gT_hA6j-U8J9A4a0v6", category: "core", department: "CIVIL", subject: "Structural Analysis", description: "Top videos solving structural concrete loading, bending moments, and sheer force diagrams.", tags: ["#structural", "#stress", "#concrete"] },
  { title: "GeeksforGeeks Civil Engineering Foundational Questions", url: "https://www.geeksforgeeks.org/civil-engineering-interview-questions/", category: "interview", department: "CIVIL", subject: "Civil Foundations", description: "Comprehensive interview questions covering concrete grades, soil bearing, beam design, and hydrology.", tags: ["#civilquestions", "#structural", "#concrete"] },

  // ── AERONAUTICAL ENGINEERING (AERO) ──────────────────────────────
  { title: "MIT OpenCourseWare - Aerodynamics", url: "https://ocw.mit.edu/courses/aeronautics-and-astronautics/", category: "core", department: "AERO", subject: "Aerodynamics & Propulsion", description: "Direct access to MIT lecture sheets covering flight mechanics, aerospace structures, and rocket engineering.", tags: ["#aerodynamics", "#mit", "#rockets"] },
  { title: "NASA Glenn Research Center - Aerodynamics Portal", url: "https://www.grc.nasa.gov/www/k-12/airplane/index.html", category: "core", department: "AERO", subject: "Aerospace Basics", description: "Official learning portal explaining engine thrust, lift, drag, and gas turbine mechanics.", tags: ["#nasa", "#lift", "#drag", "#propulsion"] },
  { title: "Flight Mechanics & Aircraft Dynamics (NPTEL)", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_S5p3q_SNDsV1e0zXWwz1", category: "core", department: "AERO", subject: "Flight Mechanics", description: "Advanced academic aerospace lectures focusing on stability, drag coefficients, and control vectors.", tags: ["#flight", "#stability", "#nptel"] },
  { title: "Propulsion & Rocket Science Playlist", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_xS5p3q_SNDsV1e0zXWwz1", category: "core", department: "AERO", subject: "Propulsion", description: "Jet engine operations, nozzle designs, combustion physics, and aerospace propulsion lectures.", tags: ["#propulsion", "#rockets", "#aerospace"] },
  { title: "Sanfoundry Aerodynamics & Flight Mechanics Foundational Questions", url: "https://www.sanfoundry.com/aerodynamics-questions-answers/", category: "interview", department: "AERO", subject: "Aerospace Foundations", description: "Top Q&As covering lift, drag, aerodynamics coefficients, gas dynamics, and propulsion configurations.", tags: ["#aeroquestions", "#lift", "#propulsion"] },

  // ── BIOMEDICAL ENGINEERING (BME) ─────────────────────────────────
  { title: "NIH Biomedical Engineering Science Portal", url: "https://www.nibib.nih.gov/science-education/science-topics", category: "core", department: "BME", subject: "Biomedical Instrumentation", description: "Official science topics covering medical imaging physics (MRI, CT, ultrasound) and prosthetic bio-design.", tags: ["#imaging", "#nih", "#instrumentation"] },
  { title: "Introduction to Biomedical Engineering (Yale OCW)", url: "https://oyc.yale.edu/biomedical-engineering/beng-100", category: "core", department: "BME", subject: "Bio-design & Devices", description: "Yale open course materials covering artificial organs, cardiac pacing, and biomechanics formulas.", tags: ["#yale", "#biomechanics", "#organs"] },
  { title: "Biomedical Signal Processing Videos", url: "https://www.youtube.com/playlist?list=PLTfCJuq2YtB0j3Hh9QZ8Wn3yU_eK_gYn3", category: "core", department: "BME", subject: "Signal Processing", description: "Biosignals details covering ECG filtering, EEG wave analysis, and digital biometric signal filters.", tags: ["#signals", "#ecg", "#biometrics"] },
  { title: "NIH Genomics & Genome Assembly Program", url: "https://www.genome.gov/about-genomics/educational-resources", category: "core", department: "BME", subject: "Genomics", description: "Foundational education on DNA base sequencing models, genomic databases, and bioinformatics tools.", tags: ["#genomics", "#dna", "#nih"] },
  { title: "Sanfoundry Biomedical Instrumentation Foundational Questions", url: "https://www.sanfoundry.com/biomedical-instrumentation-questions-answers/", category: "interview", department: "BME", subject: "Biomedical Foundations", description: "Foundational interview Q&As covering physiological sensors, clinical imaging machines, and biological transducers.", tags: ["#bmequestions", "#sensors", "#imaging"] },

  // ── BIOTECHNOLOGY (BT) ───────────────────────────────────────────
  { title: "BiotechTimes - Entrance & Placements", url: "https://biotechtimes.org/", category: "core", department: "BT", subject: "Biochemistry & Genetics", description: "Career guides, biotechnology study notes, molecular biology MCQs, and industry news feeds.", tags: ["#biotech", "#genetics", "#molecular"] },
  { title: "Shomu's Biology (Biotech & Life Sciences)", url: "https://www.youtube.com/c/ShomusBiologyOfficial", category: "core", department: "BT", subject: "Biotechnology & Bioinformatics", description: "The premier YouTube channel explaining biochemistry, cell genetics, DNA sequencing, and bioprocess engineering.", tags: ["#biology", "#biochem", "#youtube"] },
  { title: "NPTEL Pharmaceutical Biotechnology Course", url: "https://archive.nptel.ac.in/courses/102/105/102105058/", category: "core", department: "BT", subject: "Pharmaceutical Biotech", description: "Foundational lectures on immunotoxins, biopharmaceuticals, drug development cycles, and vaccine structures.", tags: ["#pharmaceutical", "#biotech", "#drugs", "#nptel"] },
  { title: "NCBI Bookshelf Curation Portal", url: "https://www.ncbi.nlm.nih.gov/books", category: "core", department: "BT", subject: "Genomics & Bio-textbooks", description: "Access to free medical and biotech textbooks covering molecular biology, genetics, and bioinformatics.", tags: ["#textbooks", "#ncbi", "#molecular"] },
  { title: "Rosalind Bioinformatics Coding Portal", url: "https://rosalind.info/problems/locations/", category: "coding", department: "BT", subject: "Bioinformatics Coding", description: "Rosalind problem solving hub matching coding exercises with DNA/genomics sequencing algorithms.", tags: ["#bioinformatics", "#rosalind", "#coding"] },
  { title: "Sanfoundry Molecular Biology & Biotechnology Foundational Questions", url: "https://www.sanfoundry.com/biotechnology-questions-answers/", category: "interview", department: "BT", subject: "Biotech Foundations", description: "Technical placement questions covering molecular replication, protein design, cell structures, and fermentation chemistry.", tags: ["#btquestions", "#dna", "#fermentation"] }
]

function getYoutubeThumbnail(url) {
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/mqdefault.jpg`
    }
  } catch (e) {}
  return 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80'
}

export default function Resources() {
  const { user, profile } = useAuth()
  const [resources, setResources] = useState(() => 
    SEED_DATA.map((item, idx) => ({ id: `local-${idx}`, clicks: 0, ...item }))
  )
  const [selectedDept, setSelectedDept] = useState('CSE')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('resources') // 'resources' | 'syllabus'
  const [expandedQuestions, setExpandedQuestions] = useState({})


  // Initialize to user branch if available
  useEffect(() => {
    if (profile?.branch) {
      setSelectedDept(profile.branch)
    }
  }, [profile])

  // Sync resources from database & auto-migrate/seed
  useEffect(() => {
    let active = true
    let unsubscribe = null

    async function checkAndSeed() {
      try {
        const querySnapshot = await getDocs(collection(db, 'resources'))
        const list = []
        querySnapshot.forEach((doc) => {
          list.push(doc.data())
        })

        if (list.length > 0) {
          const hasEmbeddedSystems = list.some(res => res.subject === 'Embedded Systems')
          if (!hasEmbeddedSystems) {
            console.log("Firestore resources outdated. Upgrading database...")
            // Clean existing unmatching resources to prevent duplicates
            for (const docSnap of querySnapshot.docs) {
              await deleteDoc(doc(db, 'resources', docSnap.id))
            }
            
            for (const item of SEED_DATA) {
              await addDoc(collection(db, 'resources'), {
                ...item,
                submittedBy: 'System Curator',
                status: 'approved',
                clicks: 0,
                createdAt: serverTimestamp()
              })
            }
            console.log("Database update & seeding completed.")
          }
        }
      } catch (e) {
        console.error("Database migration check failed or quota exceeded:", e)
      }
    }

    checkAndSeed().then(() => {
      if (!active) return
      const q = collection(db, 'resources')
      unsubscribe = onSnapshot(q, (snapshot) => {
        const list = []
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        if (active && list.length > 0) {
          setResources(list)
        }
      }, (err) => {
        console.error("Snapshot read error or quota exceeded:", err)
      })
    })

    return () => {
      active = false
      if (unsubscribe) unsubscribe()
    }
  }, [])

  // Dynamic increment tracker
  async function handleResourceClick(id, url) {
    try {
      await updateDoc(doc(db, 'resources', id), {
        clicks: increment(1)
      })
    } catch (e) {}
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Unified filtering logic
  const filtered = resources.filter(res => {
    // Search filter
    const matchesSearch = !searchQuery || 
      res.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Branch filter: matches selected branch OR is COMMON to all engineering branches
    const matchesBranch = res.department === 'COMMON' || res.department === selectedDept

    return matchesSearch && matchesBranch
  })

  // Subgroups by Placement Prep Topic
  const aptitudeResources = filtered.filter(res => res.category === 'aptitude')
  const codingResources   = filtered.filter(res => res.category === 'coding')
  const coreResources     = filtered.filter(res => res.category === 'core')
  const interviewResources = filtered.filter(res => res.category === 'interview')
  const companyResources  = filtered.filter(res => res.category === 'company')
  
  const toggleQuestion = (key) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const prep = PLACEMENT_PREP_DATA[selectedDept]
  const dStyle = DEPT_COLORS[selectedDept] || { text: 'var(--purple-primary)', bg: 'var(--purple-soft)', border: '1px solid var(--card-border)' }

  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 28, color: 'var(--text-primary)', marginBottom: 4 }}>📚 Placement Prep Hub</h1>
        <p style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>
          Curated learning roadmaps, core subject preparation, and placement materials tailored for engineering students.
        </p>
      </div>

      {/* Modern Search bar */}
      <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 16, padding: 18, marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, padding: '10px 14px' }}>
          <Search size={20} color="var(--text-secondary)" />
          <input 
            type="text" 
            placeholder="Search keywords, coding sheets, mock papers, playlists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', fontSize: 14, fontFamily: 'inherit' }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}><X size={18} /></button>
          )}
        </div>
      </div>

      {/* Dynamic Department Tabs Selector */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 900, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Select Your Branch</h2>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: dStyle.text, background: dStyle.bg, border: dStyle.border, padding: '3px 10px', borderRadius: 6 }}>
            Found {filtered.length} verified resource{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 10, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {DEPARTMENTS.map(dept => {
            const isSelected = selectedDept === dept.key
            const colorConfig = DEPT_COLORS[dept.key] || { text: 'var(--purple-primary)', bg: 'var(--purple-soft)', border: '1px solid var(--card-border)' }
            
            return (
              <button
                key={dept.key}
                onClick={() => setSelectedDept(dept.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  borderRadius: 14,
                  border: isSelected ? `2px solid ${colorConfig.text}` : '1.5px solid var(--card-border)',
                  background: isSelected ? colorConfig.bg : 'var(--card-bg)',
                  color: isSelected ? colorConfig.text : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                <span style={{ fontSize: 16 }}>{dept.icon}</span>
                {dept.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tabs Switcher */}
      <div style={{ display: 'flex', gap: 12, borderBottom: '2px solid var(--card-border)', marginBottom: 28 }}>
        <button 
          onClick={() => setActiveTab('resources')}
          style={{
            padding: '12px 20px',
            fontSize: 14.5,
            fontWeight: 800,
            color: activeTab === 'resources' ? dStyle.text : 'var(--text-secondary)',
            borderBottom: activeTab === 'resources' ? `3px solid ${dStyle.text}` : '3px solid transparent',
            marginBottom: -2,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <BookOpen size={18} /> Curated Playlists & Links
        </button>
        <button 
          onClick={() => setActiveTab('syllabus')}
          style={{
            padding: '12px 20px',
            fontSize: 14.5,
            fontWeight: 800,
            color: activeTab === 'syllabus' ? dStyle.text : 'var(--text-secondary)',
            borderBottom: activeTab === 'syllabus' ? `3px solid ${dStyle.text}` : '3px solid transparent',
            marginBottom: -2,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <CheckCircle2 size={18} /> Structured Prep & Q&A Syllabus
        </button>
      </div>

      {activeTab === 'resources' ? (
        /* Topic Subsections Container (Resources View) */
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          
          {/* Section 1: Aptitude */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1.5px solid var(--card-border)', marginBottom: 20 }}>
              <Brain size={22} color={dStyle.text} /> Aptitude & Reasoning Prep
            </h2>
            {aptitudeResources.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: 13.5, background: 'var(--card-bg)', padding: 20, borderRadius: 14 }}>No aptitude preparation resources matching active search query.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {aptitudeResources.map(res => <ResourceCard key={res.id} res={res} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

          {/* Section 2: Technical Coding */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1.5px solid var(--card-border)', marginBottom: 20 }}>
              <Code2 size={22} color={dStyle.text} /> Coding & Algorithmic Problem Solving
            </h2>
            {codingResources.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: 13.5, background: 'var(--card-bg)', padding: 20, borderRadius: 14 }}>No programming sheets or coding platforms matching active search query.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {codingResources.map(res => <ResourceCard key={res.id} res={res} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

          {/* Section 3: Core Subjects */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1.5px solid var(--card-border)', marginBottom: 20 }}>
              <Cpu size={22} color={dStyle.text} /> Core {selectedDept} Subjects Preparation
            </h2>
            {coreResources.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: 13.5, background: 'var(--card-bg)', padding: 20, borderRadius: 14 }}>No core subjects reference guides or playlists available yet.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {coreResources.map(res => <ResourceCard key={res.id} res={res} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

          {/* Section 4: Foundational Interview Q&A */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1.5px solid var(--card-border)', marginBottom: 20 }}>
              <HelpCircle size={22} color={dStyle.text} /> Foundational Interview Q&A Guides
            </h2>
            {interviewResources.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: 13.5, background: 'var(--card-bg)', padding: 20, borderRadius: 14 }}>No foundational interview questions available yet for this branch.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {interviewResources.map(res => <ResourceCard key={res.id} res={res} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

          {/* Section 5: Company Mock papers */}
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1.5px solid var(--card-border)', marginBottom: 20 }}>
              <Briefcase size={22} color={dStyle.text} /> Recruit Assessment & Mock Papers
            </h2>
            {companyResources.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: 13.5, background: 'var(--card-bg)', padding: 20, borderRadius: 14 }}>No mock assessments or assessment sheets found.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {companyResources.map(res => <ResourceCard key={res.id} res={res} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

        </div>
      ) : (
        /* New Structured Prep Syllabus & Q&A View */
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          
          {/* Three Prep Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Aptitude Pillar */}
            {prep?.aptitude && (
              <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ background: 'var(--purple-soft)', color: 'var(--purple-primary)', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Brain size={20} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Aptitude & Reasoning Prep</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{prep.aptitude.description}</p>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                    <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {prep.aptitude.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
                {prep.aptitude.playlists && prep.aptitude.playlists.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Portals</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {prep.aptitude.playlists.map((pl, i) => (
                        <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{pl.title}</span>
                          <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Coding Pillar */}
            {prep?.coding && (
              <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ background: 'rgba(2,132,199,0.08)', color: '#0284c7', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Code2 size={20} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Coding & Algorithmic Prep</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{prep.coding.description}</p>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                    <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {prep.coding.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
                {prep.coding.playlists && prep.coding.playlists.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Sheets</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {prep.coding.playlists.map((pl, i) => (
                        <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{pl.title}</span>
                          <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Core Subjects Pillar */}
            {prep?.core && (
              <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ background: 'rgba(234,88,12,0.08)', color: '#ea580c', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cpu size={20} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Core Subjects Prep</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{prep.core.description}</p>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                    <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {prep.core.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
                {prep.core.playlists && prep.core.playlists.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Portals</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {prep.core.playlists.map((pl, i) => (
                        <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{pl.title}</span>
                          <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Interactive Q&A Explorer Section */}
          <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 20, padding: 24, boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, paddingBottom: 12, borderBottom: '1.5px solid var(--card-border)' }}>
              <HelpCircle size={24} color={dStyle.text} />
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: 'var(--text-primary)' }}>Foundational Interview Q&A Guides</h3>
                <p style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>Click on questions to expand and study the model answers tailored to your department mappings.</p>
              </div>
            </div>

            {prep?.interview && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {Object.keys(prep.interview).map(catKey => {
                  const items = prep.interview[catKey] || []
                  const categoryLabels = {
                    conceptual: { title: "Conceptual — Theory-based Understanding", icon: "💡" },
                    problemSolving: { title: "Problem-Solving — Analytical & Numerical Challenges", icon: "⚡" },
                    applied: { title: "Applied — Real-world & Project Applications", icon: "🛠️" },
                    hrStyle: { title: "HR-style — Behavioral & Teamwork Questions", icon: "👥" }
                  }
                  const label = categoryLabels[catKey] || { title: catKey, icon: "❓" }

                  return (
                    <div key={catKey}>
                      <h4 style={{ fontSize: 14, fontWeight: 900, color: dStyle.text, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 16 }}>{label.icon}</span> {label.title}
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {items.map((qa, index) => {
                          const key = `${selectedDept}-${catKey}-${index}`
                          const isOpen = !!expandedQuestions[key]
                          return (
                            <div key={index} style={{ border: '1.5px solid var(--card-border)', borderRadius: 12, overflow: 'hidden', background: isOpen ? 'var(--main-bg)' : 'transparent', transition: 'all 0.2s ease' }}>
                              <button 
                                onClick={() => toggleQuestion(key)}
                                style={{
                                  width: '100%',
                                  padding: '14px 18px',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  gap: 12,
                                  textAlign: 'left',
                                  fontWeight: 800,
                                  fontSize: 13.5,
                                  color: 'var(--text-primary)',
                                  background: 'transparent',
                                  cursor: 'pointer'
                                }}
                              >
                                <span>{qa.question}</span>
                                {isOpen ? <ChevronUp size={18} color={dStyle.text} /> : <ChevronDown size={18} color="var(--text-secondary)" />}
                              </button>
                              {isOpen && (
                                <div style={{ padding: '16px 20px', borderTop: '1px solid var(--card-border)', fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, background: 'var(--card-bg)' }}>
                                  {qa.answer.includes('```sql') || qa.answer.includes('```c') || qa.answer.includes('```javascript') ? (
                                    <div style={{ whiteSpace: 'pre-wrap' }}>
                                      {qa.answer.split('```').map((block, idx) => {
                                        if (idx % 2 === 1) {
                                          const codeLines = block.replace(/^(sql|c|javascript|python)/i, '').trim()
                                          return (
                                            <pre key={idx} style={{ background: 'var(--main-bg)', border: '1px solid var(--card-border)', padding: '12px 16px', borderRadius: 8, fontFamily: 'Fira Code, monospace', fontSize: 12.5, color: 'var(--text-primary)', overflowX: 'auto', margin: '12px 0' }}>
                                              <code>{codeLines}</code>
                                            </pre>
                                          )
                                        }
                                        return <span key={idx}>{block}</span>
                                      })}
                                    </div>
                                  ) : (
                                    <div style={{ whiteSpace: 'pre-wrap' }}>{qa.answer}</div>
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ResourceCard({ res, onClick }) {
  const isVideo = res.url?.includes('youtube.com') || res.url?.includes('youtu.be')
  const thumbnail = getYoutubeThumbnail(res.url)
  const dStyle = DEPT_COLORS[res.department] || { text: 'var(--purple-primary)', bg: 'var(--purple-soft)', border: '1px solid var(--card-border)' }
  const [hovered, setHovered] = useState(false)

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        background: 'var(--card-bg)', 
        border: hovered ? `1.5px solid ${dStyle.text}` : '1.5px solid var(--card-border)', 
        borderRadius: 18, 
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 28px rgba(0,0,0,0.08)' : 'var(--shadow-card)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div>
        {/* Render Thumbnail if YouTube */}
        {isVideo && (
          <div style={{ width: '100%', height: 160, position: 'relative', overflow: 'hidden' }}>
            <img src={thumbnail} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.4s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }}>
              <div style={{ 
                width: 46, 
                height: 46, 
                borderRadius: 999, 
                background: 'rgba(239,68,68,0.95)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#fff', 
                fontSize: 14,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.25s'
              }}>
                ▶
              </div>
            </div>
          </div>
        )}

        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '3px 8px', borderRadius: 6 }}>
              <Award size={12} /> Verified Material
            </span>
            {res.department !== 'COMMON' && (
              <span style={{ fontSize: 10.5, fontWeight: 800, color: dStyle.text, background: dStyle.bg, border: dStyle.border, padding: '3px 9px', borderRadius: 6, letterSpacing: 0.5 }}>
                {res.department}
              </span>
            )}
          </div>

          <h3 style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 5, lineHeight: 1.35 }}>{res.title}</h3>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>📚</span>
            <span style={{ fontWeight: 800, color: 'var(--text-secondary)' }}>{res.subject}</span>
          </div>
          
          {res.description && (
            <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.5, margin: '6px 0 12px' }}>{res.description}</p>
          )}
        </div>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        {/* Render Tags */}
        {res.tags && res.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            {res.tags.map(tag => (
              <span key={tag} 
                style={{ 
                  fontSize: 10.5, 
                  fontWeight: 700, 
                  color: 'var(--text-secondary)', 
                  background: 'var(--main-bg)', 
                  border: '1px solid var(--card-border)',
                  padding: '3px 8px', 
                  borderRadius: 6
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--card-border)', paddingTop: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12.5, fontWeight: 700, color: dStyle.text || 'var(--purple-primary)' }}>
            {isVideo ? 'Watch Playlist' : 'Open Link'} <ExternalLink size={13} />
          </span>
        </div>
      </div>
    </div>
  )
}
