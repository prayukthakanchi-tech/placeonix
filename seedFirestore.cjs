const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, deleteDoc, doc, addDoc, serverTimestamp } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBlbEXZ9R0uPMZbg_Lip6kq8rWVlEndjiU",
  authDomain: "placeonix.firebaseapp.com",
  projectId: "placeonix",
  storageBucket: "placeonix.firebasestorage.app",
  messagingSenderId: "923570345439",
  appId: "1:923570345439:web:5b6a89efc297c7f945206a",
  measurementId: "G-W83XNJN2MF"
};

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
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function seed() {
  try {
    console.log("Signing in dynamically as seeder...");
    const credentials = await createUserWithEmailAndPassword(auth, `seeder_${Date.now()}@test.com`, "password123");
    console.log("Signed up successfully! UID:", credentials.user.uid);

    console.log("Reading existing documents...");
    const snap = await getDocs(collection(db, 'resources'));
    console.log(`Found ${snap.size} resources. Deleting them...`);
    const deletePromises = snap.docs.map(docSnap => deleteDoc(doc(db, 'resources', docSnap.id)));
    await Promise.all(deletePromises);
    console.log("Deletes complete.");

    console.log("Writing seed documents in parallel...");
    const addPromises = SEED_DATA.map(item => addDoc(collection(db, 'resources'), {
      ...item,
      submittedBy: 'System Curator',
      status: 'approved',
      clicks: 0,
      createdAt: serverTimestamp()
    }));
    await Promise.all(addPromises);
    console.log("Firestore successfully seeded with 60+ curated placement resources!");
    process.exit(0);
  } catch (e) {
    console.error("Seed execution failed:", e);
    process.exit(1);
  }
}

seed();
