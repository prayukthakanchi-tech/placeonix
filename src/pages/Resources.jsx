import React, { useState, useEffect } from 'react'
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
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'


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
  { title: "Striver's DSA A-to-Z Placement Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course-sheet-preview-2/", category: "coding", department: "COMMON", subject: "Data Structures & Algorithms", description: "The most structured coding sheet for software engineering placements.", tags: ["#dsa", "#coding", "#striversheet"] },
  { title: "NeetCode 150 - Coding Practice Map", url: "https://neetcode.io/practice", category: "coding", department: "COMMON", subject: "Coding Practice", description: "150 curated LeetCode problems with full video walk-throughs and structural maps.", tags: ["#leetcode", "#coding", "#dsa"] },
  { title: "Abdul Bari's Algorithms Lectures", url: "https://www.youtube.com/playlist?list=PLDN4rRL5gy4UzoN7Apx-w5G37WPo68e59", category: "coding", department: "COMMON", subject: "Algorithms", description: "Gold standard video tutorials explaining algorithm design techniques (Greedy, DP, Divide & Conquer).", tags: ["#algorithms", "#dsa", "#youtube"] },
  { title: "Jenny's Lectures - Data Structures Course", url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8JH", category: "coding", department: "COMMON", subject: "Data Structures", description: "Detailed whiteboard lectures explaining arrays, stacks, trees, and linked list implementations.", tags: ["#datastructures", "#cse", "#youtube"] },
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
  { title: "MIT OpenCourseWare - Flight Mechanics", url: "https://ocw.mit.edu/courses/16-333-aircraft-stability-and-control-fall-2004/", category: "core", department: "AERO", subject: "Flight Mechanics", description: "Advanced academic aerospace lectures focusing on stability, control, drag coefficients, and flight dynamics.", tags: ["#flight", "#stability", "#mit"] },
  { title: "NPTEL Aerospace Engineering Courses", url: "https://nptel.ac.in/courses/101104025/", category: "core", department: "AERO", subject: "Propulsion", description: "NPTEL lecture series covering aerodynamics, propulsion, flight stability, and aerospace structures.", tags: ["#propulsion", "#nptel", "#aerospace"] },
  { title: "Sanfoundry Aerodynamics & Flight Mechanics Foundational Questions", url: "https://www.sanfoundry.com/aerodynamics-questions-answers/", category: "interview", department: "AERO", subject: "Aerospace Foundations", description: "Top Q&As covering lift, drag, aerodynamics coefficients, gas dynamics, and propulsion configurations.", tags: ["#aeroquestions", "#lift", "#propulsion"] },

  // ── BIOMEDICAL ENGINEERING (BME) ─────────────────────────────────
  { title: "NIH Biomedical Engineering Science Portal", url: "https://www.nibib.nih.gov/science-education/science-topics", category: "core", department: "BME", subject: "Biomedical Instrumentation", description: "Official science topics covering medical imaging physics (MRI, CT, ultrasound) and prosthetic bio-design.", tags: ["#imaging", "#nih", "#instrumentation"] },
  { title: "Introduction to Biomedical Engineering (Yale OCW)", url: "https://oyc.yale.edu/biomedical-engineering/beng-100", category: "core", department: "BME", subject: "Bio-design & Devices", description: "Yale open course materials covering artificial organs, cardiac pacing, and biomechanics formulas.", tags: ["#yale", "#biomechanics", "#organs"] },
  { title: "MIT OCW - Biomedical Signal & Image Processing", url: "https://ocw.mit.edu/courses/hst-582j-biomedical-signal-and-image-processing-spring-2007/", category: "core", department: "BME", subject: "Signal Processing", description: "MIT lecture materials on biosignal filtering, medical image analysis, ECG/EEG processing, and diagnostic system design.", tags: ["#signals", "#ecg", "#mit"] },
  { title: "NIH Genomics & Genome Assembly Program", url: "https://www.genome.gov/about-genomics/educational-resources", category: "core", department: "BME", subject: "Genomics", description: "Foundational education on DNA base sequencing models, genomic databases, and bioinformatics tools.", tags: ["#genomics", "#dna", "#nih"] },
  { title: "Sanfoundry Biomedical Instrumentation Foundational Questions", url: "https://www.sanfoundry.com/biomedical-instrumentation-questions-answers/", category: "interview", department: "BME", subject: "Biomedical Foundations", description: "Foundational interview Q&As covering physiological sensors, clinical imaging machines, and biological transducers.", tags: ["#bmequestions", "#sensors", "#imaging"] },

  // ── BIOTECHNOLOGY (BT) ───────────────────────────────────────────
  { title: "BiotechTimes - Entrance & Placements", url: "https://biotechtimes.org/", category: "core", department: "BT", subject: "Biochemistry & Genetics", description: "Career guides, biotechnology study notes, molecular biology MCQs, and industry news feeds.", tags: ["#biotech", "#genetics", "#molecular"] },
  { title: "Shomu's Biology (Biotech & Life Sciences)", url: "https://www.youtube.com/c/ShomusBiologyOfficial", category: "core", department: "BT", subject: "Biotechnology & Bioinformatics", description: "The premier YouTube channel explaining biochemistry, cell genetics, DNA sequencing, and bioprocess engineering.", tags: ["#biology", "#biochem", "#youtube"] },
  { title: "NPTEL Pharmaceutical Biotechnology Course", url: "https://archive.nptel.ac.in/courses/102/105/102105058/", category: "core", department: "BT", subject: "Pharmaceutical Biotech", description: "Foundational lectures on immunotoxins, biopharmaceuticals, drug development cycles, and vaccine structures.", tags: ["#pharmaceutical", "#biotech", "#drugs", "#nptel"] },
  { title: "NCBI Bookshelf Curation Portal", url: "https://www.ncbi.nlm.nih.gov/books", category: "core", department: "BT", subject: "Genomics & Bio-textbooks", description: "Access to free medical and biotech textbooks covering molecular biology, genetics, and bioinformatics.", tags: ["#textbooks", "#ncbi", "#molecular"] },
  { title: "Rosalind Bioinformatics Coding Portal", url: "https://rosalind.info/problems/locations/", category: "coding", department: "BT", subject: "Bioinformatics Coding", description: "Rosalind problem solving hub matching coding exercises with DNA/genomics sequencing algorithms.", tags: ["#bioinformatics", "#rosalind", "#coding"] },
  { title: "Sanfoundry Molecular Biology & Biotechnology Foundational Questions", url: "https://www.sanfoundry.com/biotechnology-questions-answers/", category: "interview", department: "BT", subject: "Biotech Foundations", description: "Technical placement questions covering molecular replication, protein design, cell structures, and fermentation chemistry.", tags: ["#btquestions", "#dna", "#fermentation"] },

  // ── ADDITIONAL CURATED RESOURCES (ALL DEPTS) ──────────────────────
  // --- CSE Extra ---
  { title: "CS50 - Harvard's Intro to CS (Free)", url: "https://cs50.harvard.edu/x/", category: "core", department: "CSE", subject: "CS Fundamentals", description: "The world's most popular CS course covering C, Python, SQL, and web development with problem sets.", tags: ["#cs50", "#harvard", "#foundations"] },
  { title: "LeetCode - Coding Practice Platform", url: "https://leetcode.com/", category: "coding", department: "CSE", subject: "DSA Practice", description: "The definitive platform for practicing coding interview problems with company-tagged filters.", tags: ["#leetcode", "#dsa", "#coding"] },
  { title: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", category: "core", department: "CSE", subject: "System Design", description: "Comprehensive open-source guide to designing scalable distributed systems for senior engineer interviews.", tags: ["#systemdesign", "#scalability", "#github"] },
  { title: "GeeksforGeeks - CP & Interview Prep", url: "https://www.geeksforgeeks.org/", category: "coding", department: "COMMON", subject: "Competitive Programming", description: "The most visited coding interview prep site with articles, problems, and company-wise questions.", tags: ["#gfg", "#dsa", "#interviewprep"] },

  // --- IT Extra ---
  { title: "AWS Training & Certification (Free Tier)", url: "https://aws.amazon.com/training/", category: "core", department: "IT", subject: "Cloud Computing", description: "Official AWS cloud training modules covering EC2, Lambda, S3, IAM, and cloud architecture fundamentals.", tags: ["#aws", "#cloud", "#certification"] },
  { title: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/", category: "coding", department: "IT", subject: "SQL Databases", description: "Interactive SQL tutorials covering SELECT, JOIN, GROUP BY, subqueries, and stored procedures.", tags: ["#sql", "#databases", "#webdev"] },
  { title: "Docker Official Getting Started Guide", url: "https://docs.docker.com/get-started/", category: "core", department: "IT", subject: "DevOps & Containers", description: "Official Docker documentation for containerization, Docker Compose, and cloud-native deployment.", tags: ["#docker", "#devops", "#containers"] },

  // --- ECE Extra ---
  { title: "All About Circuits - ECE Learning Hub", url: "https://www.allaboutcircuits.com/", category: "core", department: "ECE", subject: "Circuit Fundamentals", description: "Free textbook-quality articles on analog circuits, digital electronics, and RF engineering with interactive calculators.", tags: ["#circuits", "#analog", "#digital"] },
  { title: "Electronics Tutorials - Op-Amps & Filters", url: "https://www.electronics-tutorials.ws/", category: "core", department: "ECE", subject: "Electronics Design", description: "Structured tutorials covering transistors, op-amps, active filters, power supplies, and digital logic.", tags: ["#opamps", "#filters", "#transistors"] },
  { title: "NPTEL Electronics Engineering Courses", url: "https://nptel.ac.in/courses/117105080/", category: "core", department: "ECE", subject: "Microelectronics", description: "NPTEL lecture series on semiconductor devices, VLSI design, and microelectronics fabrication.", tags: ["#nptel", "#vlsi", "#semiconductor"] },

  // --- EEE Extra ---
  { title: "NPTEL Power Electronics Course", url: "https://nptel.ac.in/courses/108105066/", category: "core", department: "EEE", subject: "Power Electronics", description: "Official NPTEL course on power converters, inverters, choppers, and modern power electronic switching circuits.", tags: ["#power", "#converters", "#nptel"] },
  { title: "NPTEL Power Systems Engineering", url: "https://nptel.ac.in/courses/108104051/", category: "core", department: "EEE", subject: "Power Systems", description: "Comprehensive academic course on transmission lines, load flow analysis, fault analysis, and power protection.", tags: ["#powersystems", "#grid", "#nptel"] },

  // --- ME Extra ---
  { title: "Engineering Toolbox - ME Reference", url: "https://www.engineeringtoolbox.com/", category: "core", department: "ME", subject: "Mechanical Reference", description: "Comprehensive reference database for mechanical properties, fluid data, thermodynamic tables, and standard formulas.", tags: ["#thermo", "#fluids", "#reference"] },
  { title: "MIT OCW Thermodynamics & Fluids", url: "https://ocw.mit.edu/courses/2-006-thermal-fluids-engineering-ii-spring-2008/", category: "core", department: "ME", subject: "Thermodynamics", description: "MIT OpenCourseWare materials for advanced thermodynamic cycles, heat transfer, and fluid mechanics.", tags: ["#mit", "#thermo", "#fluids"] },

  // --- CIVIL Extra ---
  { title: "NPTEL Civil Engineering Courses", url: "https://nptel.ac.in/courses/105101021/", category: "core", department: "CIVIL", subject: "Structural Analysis", description: "NPTEL course modules on structural analysis, RCC design, steel structures, and foundation engineering.", tags: ["#structural", "#rcc", "#nptel"] },
  { title: "Civil Engineering Academy - Study Hub", url: "https://civilengineeringacademy.com/", category: "core", department: "CIVIL", subject: "PE Exam & Core Topics", description: "Study materials, quick reference sheets, and mock questions for civil engineering placements and GATE.", tags: ["#civil", "#gate", "#concrete"] },

  // --- AERO Extra ---
  { title: "NASA Aeronautics Research Portal", url: "https://www.nasa.gov/aeronautics/", category: "core", department: "AERO", subject: "Aeronautics R&D", description: "NASA's official aeronautics page covering hypersonic flight, sustainable aviation, and next-gen propulsion research.", tags: ["#nasa", "#aeronautics", "#research"] },
  { title: "MIT Unified Engineering (Aero)", url: "https://ocw.mit.edu/courses/16-001-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/", category: "core", department: "AERO", subject: "Aerospace Core", description: "MIT's foundational aerospace course covering fluids, structures, thermodynamics, and signals.", tags: ["#mit", "#aerospace", "#structures"] },

  // --- BME Extra ---
  { title: "NIH Biomedical Imaging Science Topics", url: "https://www.nibib.nih.gov/science-education/science-topics", category: "core", department: "BME", subject: "Medical Imaging", description: "NIH's official science education pages covering MRI, CT, ultrasound, OCT, and medical device physics.", tags: ["#nih", "#imaging", "#mri"] },
  { title: "Yale OCW - Intro to Biomedical Engineering", url: "https://oyc.yale.edu/biomedical-engineering/beng-100", category: "core", department: "BME", subject: "Bio-design Fundamentals", description: "Yale open course materials covering prosthetics, cardiac pacing, bio-instrumentation, and biomechanics formulas.", tags: ["#yale", "#biomechanics", "#devices"] },

  // --- BT Extra ---
  { title: "NCBI - National Center for Biotechnology", url: "https://www.ncbi.nlm.nih.gov/", category: "core", department: "BT", subject: "Bioinformatics & Genomics", description: "Official NIH portal for PubMed literature, GenBank sequences, BLAST alignment, and biotech databases.", tags: ["#ncbi", "#genbank", "#blast"] },
  { title: "iBiology - Molecular Biology Video Lectures", url: "https://www.ibiology.org/", category: "core", department: "BT", subject: "Cell & Molecular Biology", description: "Curated video lectures by leading scientists covering CRISPR, PCR, protein structure, and cell signaling.", tags: ["#ibiology", "#crispr", "#molecularbio"] }
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

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightText(text, search) {
  if (!text) return ''
  if (!search) return text
  const parts = text.split(new RegExp(`(${escapeRegExp(search)})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={i} style={{ background: '#fde047', color: '#111827', padding: '1px 3px', borderRadius: 4, fontWeight: 'bold' }}>{part}</mark>
        ) : part
      )}
    </span>
  )
}

function getFilteredPrep(prep, searchQuery) {
  if (!prep) return null
  if (!searchQuery) return prep

  const q = searchQuery.toLowerCase()

  const filterSection = (section) => {
    if (!section) return null
    const descMatches = section.description?.toLowerCase().includes(q)
    const filteredTopics = section.topics?.filter(topic => topic.toLowerCase().includes(q)) || []
    const filteredPlaylists = section.playlists?.filter(pl => 
      pl.title?.toLowerCase().includes(q) || pl.url?.toLowerCase().includes(q)
    ) || []

    return {
      description: section.description,
      topics: descMatches ? (section.topics || []) : filteredTopics,
      playlists: descMatches ? (section.playlists || []) : filteredPlaylists
    }
  }

  const filteredInterview = {}
  if (prep.interview) {
    Object.keys(prep.interview).forEach(catKey => {
      const items = prep.interview[catKey] || []
      const filteredItems = items.filter(qa => 
        qa.question?.toLowerCase().includes(q) || qa.answer?.toLowerCase().includes(q)
      )
      filteredInterview[catKey] = filteredItems
    })
  }

  return {
    ...prep,
    aptitude: filterSection(prep.aptitude),
    coding: filterSection(prep.coding),
    core: filterSection(prep.core),
    interview: filteredInterview
  }
}

export default function Resources() {
  const { user, profile } = useAuth()
  const [resources, setResources] = useState(() => 
    SEED_DATA.map((item, idx) => ({ id: `local-${idx}`, clicks: 0, ...item }))
  )
  const [dbResources, setDbResources] = useState([])
  const [selectedDept, setSelectedDept] = useState(null) // null = waiting for profile to load
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('resources') // 'resources' | 'syllabus'
  const [expandedQuestions, setExpandedQuestions] = useState({})


  // Initialize to user's department once profile loads
  useEffect(() => {
    if (profile?.branch && !selectedDept) {
      setSelectedDept(profile.branch)
    } else if (!profile && !selectedDept) {
      // If no profile yet, default to CSE so the page isn't empty
      const timer = setTimeout(() => setSelectedDept(prev => prev ?? 'CSE'), 1500)
      return () => clearTimeout(timer)
    }
  }, [profile, selectedDept])


  // Fetch dynamic resources from admin
  useEffect(() => {
    const q = query(collection(db, 'resources'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, snap => {
      setDbResources(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [])

  // Open resource in new tab
  function handleResourceClick(id, url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Unified filtering logic (combine local and admin db resources)
  const allResources = [...dbResources, ...resources]
  const filtered = allResources.filter(res => {
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
  const filteredPrep = getFilteredPrep(prep, searchQuery)
  const dStyle = DEPT_COLORS[selectedDept] || { text: 'var(--purple-primary)', bg: 'var(--purple-soft)', border: '1px solid var(--card-border)' }

  const showAptitude = filteredPrep?.aptitude && (
    !searchQuery ||
    filteredPrep.aptitude.topics.length > 0 ||
    filteredPrep.aptitude.playlists.length > 0 ||
    filteredPrep.aptitude.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const showCoding = filteredPrep?.coding && (
    !searchQuery ||
    filteredPrep.coding.topics.length > 0 ||
    filteredPrep.coding.playlists.length > 0 ||
    filteredPrep.coding.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const showCore = filteredPrep?.core && (
    !searchQuery ||
    filteredPrep.core.topics.length > 0 ||
    filteredPrep.core.playlists.length > 0 ||
    filteredPrep.core.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const hasSyllabusMatches = !searchQuery || (
    showAptitude || showCoding || showCore || 
    (filteredPrep?.interview && Object.values(filteredPrep.interview).some(arr => arr.length > 0))
  )

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
                {aptitudeResources.map(res => <ResourceCard key={res.id} res={res} searchQuery={searchQuery} onClick={() => handleResourceClick(res.id, res.url)} />)}
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
                {codingResources.map(res => <ResourceCard key={res.id} res={res} searchQuery={searchQuery} onClick={() => handleResourceClick(res.id, res.url)} />)}
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
                {coreResources.map(res => <ResourceCard key={res.id} res={res} searchQuery={searchQuery} onClick={() => handleResourceClick(res.id, res.url)} />)}
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
                {interviewResources.map(res => <ResourceCard key={res.id} res={res} searchQuery={searchQuery} onClick={() => handleResourceClick(res.id, res.url)} />)}
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
                {companyResources.map(res => <ResourceCard key={res.id} res={res} searchQuery={searchQuery} onClick={() => handleResourceClick(res.id, res.url)} />)}
              </div>
            )}
          </div>

        </div>
      ) : (
        /* New Structured Prep Syllabus & Q&A View */
        !hasSyllabusMatches ? (
          <div style={{ 
            color: 'var(--text-secondary)', 
            fontSize: 15, 
            background: 'var(--card-bg)', 
            padding: '40px 20px', 
            borderRadius: 20, 
            textAlign: 'center', 
            border: '1.5px dashed var(--card-border)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12
          }}>
            <Search size={32} color={dStyle.text} />
            <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-primary)' }}>No syllabus matches found</div>
            <div>No topics, playlists, or Q&As in <strong>{DEPARTMENTS.find(d => d.key === selectedDept)?.name}</strong> match your search query "{searchQuery}".</div>
            <button 
              onClick={() => setSearchQuery('')}
              style={{
                marginTop: 8,
                padding: '8px 16px',
                background: dStyle.bg,
                color: dStyle.text,
                border: dStyle.border,
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            
            {/* Three Prep Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {/* Aptitude Pillar */}
              {showAptitude && (
                <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div style={{ background: 'var(--purple-soft)', color: 'var(--purple-primary)', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Brain size={20} />
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Aptitude & Reasoning Prep</h3>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{highlightText(filteredPrep.aptitude.description, searchQuery)}</p>
                    {filteredPrep.aptitude.topics && filteredPrep.aptitude.topics.length > 0 && (
                      <div style={{ marginBottom: 20 }}>
                        <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                        <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {filteredPrep.aptitude.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{highlightText(topic, searchQuery)}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  {filteredPrep.aptitude.playlists && filteredPrep.aptitude.playlists.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Portals</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {filteredPrep.aptitude.playlists.map((pl, i) => (
                          <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{highlightText(pl.title, searchQuery)}</span>
                            <ExternalLink size={13} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Coding Pillar */}
              {showCoding && (
                <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div style={{ background: 'rgba(2,132,199,0.08)', color: '#0284c7', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code2 size={20} />
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Coding & Algorithmic Prep</h3>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{highlightText(filteredPrep.coding.description, searchQuery)}</p>
                    {filteredPrep.coding.topics && filteredPrep.coding.topics.length > 0 && (
                      <div style={{ marginBottom: 20 }}>
                        <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                        <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {filteredPrep.coding.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{highlightText(topic, searchQuery)}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  {filteredPrep.coding.playlists && filteredPrep.coding.playlists.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Sheets</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {filteredPrep.coding.playlists.map((pl, i) => (
                          <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{highlightText(pl.title, searchQuery)}</span>
                            <ExternalLink size={13} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Core Subjects Pillar */}
              {showCore && (
                <div style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 18, padding: 22, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div style={{ background: 'rgba(234,88,12,0.08)', color: '#ea580c', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Cpu size={20} />
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 900, color: 'var(--text-primary)' }}>Core Subjects Prep</h3>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>{highlightText(filteredPrep.core.description, searchQuery)}</p>
                    {filteredPrep.core.topics && filteredPrep.core.topics.length > 0 && (
                      <div style={{ marginBottom: 20 }}>
                        <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Syllabus Topics</h4>
                        <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {filteredPrep.core.topics.map((topic, i) => <li key={i} style={{ lineHeight: 1.4 }}>{highlightText(topic, searchQuery)}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  {filteredPrep.core.playlists && filteredPrep.core.playlists.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 0.5 }}>Top Playlists & Portals</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {filteredPrep.core.playlists.map((pl, i) => (
                          <a key={i} href={pl.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--main-bg)', border: '1px solid var(--card-border)', borderRadius: 10, fontSize: 12.5, fontWeight: 700, color: dStyle.text, textDecoration: 'none', transition: 'all 0.2s' }}>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>{highlightText(pl.title, searchQuery)}</span>
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

              {filteredPrep?.interview && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {Object.keys(filteredPrep.interview).map(catKey => {
                    const items = filteredPrep.interview[catKey] || []
                    if (items.length === 0) return null
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
                            const key = `${selectedDept}-${catKey}-${qa.question}`
                            const matchesQuery = !!searchQuery && (
                              qa.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            const isOpen = !!expandedQuestions[key] || matchesQuery
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
                                  <span>{highlightText(qa.question, searchQuery)}</span>
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
                                                <code>{highlightText(codeLines, searchQuery)}</code>
                                              </pre>
                                            )
                                          }
                                          return <span key={idx}>{highlightText(block, searchQuery)}</span>
                                        })}
                                      </div>
                                    ) : (
                                      <div style={{ whiteSpace: 'pre-wrap' }}>{highlightText(qa.answer, searchQuery)}</div>
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
        )
      )}
    </div>
  )
}

function ResourceCard({ res, searchQuery, onClick }) {
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

          <h3 style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 5, lineHeight: 1.35 }}>
            {highlightText(res.title, searchQuery)}
          </h3>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>📚</span>
            <span style={{ fontWeight: 800, color: 'var(--text-secondary)' }}>{highlightText(res.subject, searchQuery)}</span>
          </div>
          
          {res.description && (
            <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.5, margin: '6px 0 12px' }}>
              {highlightText(res.description, searchQuery)}
            </p>
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
                {highlightText(tag, searchQuery)}
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
