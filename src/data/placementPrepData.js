export const PLACEMENT_PREP_DATA = {
  CSE: {
    name: "Computer Science Engineering",
    icon: "💻",
    aptitude: {
      description: "Quantitative Aptitude, Logical Reasoning, and Verbal Ability foundation for top product and service companies.",
      topics: [
        "Quantitative: Time & Work, Time/Speed/Distance, Profit & Loss, Percentages, Ratio & Proportion.",
        "Logical Reasoning: Syllogisms, Blood Relations, Coding-Decoding, Seating Arrangements, Data Sufficiency.",
        "Verbal Ability: Sentence Correction, Reading Comprehension, Synonyms & Antonyms, Parajumbles."
      ],
      playlists: [
        { title: "IndiaBIX Quantitative Aptitude Tutorials", url: "https://www.indiabix.com/aptitude/questions-and-answers/" },
        { title: "PrepInsta Placement Aptitude Masterclass", url: "https://prepinsta.com/" }
      ]
    },
    coding: {
      description: "Data Structures, Algorithms, and coding fundamentals required for technical assessment rounds.",
      topics: [
        "Data Structures: Arrays, Strings, HashMaps, Linked Lists, Stacks, Queues, Binary Trees, Graphs.",
        "Algorithms: Searching, Sorting, Recursion, Backtracking, Dynamic Programming, Greedy Algorithms.",
        "Databases: SQL Queries, Relational Schemas, Constraints."
      ],
      playlists: [
        { title: "Striver's DSA A-to-Z Course Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course-sheet-preview-2/" },
        { title: "NeetCode 150 - LeetCode Map", url: "https://neetcode.io/practice" },
        { title: "Abdul Bari's Algorithms lectures", url: "https://www.youtube.com/playlist?list=PLDN4rRL5gy4UzoN7Apx-w5G37WPo68e59" }
      ]
    },
    core: {
      description: "Core computer science subjects representing the pillars of technical engineering rounds.",
      topics: [
        "Operating Systems: Process scheduling, threads, memory management (paging, virtual memory), deadlocks, and semaphores.",
        "Database Management Systems (DBMS): Normalization (1NF to BCNF), SQL queries, transactions, ACID properties, indexing.",
        "Computer Networks: OSI & TCP/IP models, routing protocols, TCP/UDP sockets, DNS, HTTP, subnetting."
      ],
      playlists: [
        { title: "Gate Smashers - Operating Systems Course", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
        { title: "Gate Smashers - DBMS Course", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGGtVqgLYuJaqyLl74I_641" },
        { title: "Operating Systems: Three Easy Pieces (OSTEP)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "Explain the four main pillars of Object-Oriented Programming (OOP) with real-world analogies.",
          answer: "1. Abstraction: Hiding internal complexity and showing only essential features. (e.g., using a remote control to operate a TV without knowing the internal circuitry).\n2. Encapsulation: Binding data and methods that operate on that data into a single unit (class) and restricting direct access using access modifiers. (e.g., a capsule enclosing medicine ingredients).\n3. Inheritance: Reusability mechanism where a new class inherits attributes and behaviors of an existing class. (e.g., a child inheriting traits from parents).\n4. Polymorphism: Ability of a function or method to take multiple forms. Can be compile-time (overloading) or runtime (overriding). (e.g., a single 'Draw' method drawing shapes, circles, or squares depending on the object type)."
        },
        {
          question: "What is database normalization? Explain 1NF, 2NF, 3NF, and BCNF.",
          answer: "Normalization is the systematic process of organizing data in database tables to minimize redundancy and avoid insertion, deletion, and update anomalies:\n- 1NF (First Normal Form): All table attributes must contain atomic (indivisible) values, and there must be no repeating groups.\n- 2NF (Second Normal Form): Must be in 1NF, and all non-key attributes must be fully functionally dependent on the primary key (no partial dependencies on composite keys).\n- 3NF (Third Normal Form): Must be in 2NF, and there must be no transitive dependencies (non-key columns depending on other non-key columns).\n- BCNF (Boyce-Codd Normal Form): A stronger version of 3NF where for every non-trivial functional dependency A -> B, A must be a super key."
        }
      ],
      problemSolving: [
        {
          question: "How would you find the maximum subarray sum in O(N) time? Explain the algorithm.",
          answer: "This is solved using Kadane's Algorithm. The algorithm keeps track of two variables: `max_so_far` (global maximum sum found so far) and `max_ending_here` (maximum sum ending at the current position):\n1. Initialize `max_so_far = INT_MIN` and `max_ending_here = 0`.\n2. Iterate through each element `x` of the array.\n3. Add `x` to `max_ending_here`.\n4. If `max_ending_here > max_so_far`, update `max_so_far = max_ending_here`.\n5. If `max_ending_here < 0`, reset `max_ending_here = 0`.\nTime complexity is O(N) and space complexity is O(1)."
        },
        {
          question: "Write a SQL query to find the second highest salary in an Employee table without using LIMIT.",
          answer: "You can find the second highest salary by selecting the maximum salary that is strictly less than the overall maximum salary:\n\n```sql\nSELECT MAX(Salary) AS SecondHighestSalary\nFROM Employee\nWHERE Salary < (SELECT MAX(Salary) FROM Employee);\n```\nAlternatively, using a correlated subquery:\n```sql\nSELECT DISTINCT E1.Salary\nFROM Employee E1\nWHERE 1 = (\n    SELECT COUNT(DISTINCT E2.Salary)\n    FROM Employee E2\n    WHERE E2.Salary > E1.Salary\n);\n```"
        }
      ],
      applied: [
        {
          question: "What is a Cross-Site Scripting (XSS) vulnerability, and how do you secure an IT system against it?",
          answer: "XSS occurs when an application includes untrusted user-supplied data in a web page without proper validation or escaping, allowing attackers to execute malicious scripts in the victim's browser. Prevention strategies include:\n1. Input Validation: Check all inputs for correct formats using whitelisting.\n2. Context-Aware Output Escaping/Encoding: Convert characters like <, >, &, \", and ' to their safe HTML/JS entity equivalents before rendering.\n3. Content Security Policy (CSP): Set HTTP headers to restrict the sources from which scripts can be loaded and executed.\n4. HttpOnly Cookies: Prevent client-side scripts from accessing session tokens."
        },
        {
          question: "How would you design an automated, scalable machine learning inference pipeline on the cloud?",
          answer: "A modern serverless ML inference pipeline uses:\n1. API Gateway: Receives the client prediction requests securely.\n2. Serverless Function (e.g., AWS Lambda / Google Cloud Function): Receives the input payload from the API gateway, loads the lightweight model, and performs inference. For large deep learning models, deploy via containerized Lambdas with access to shared Elastic File Systems (EFS).\n3. Cache Layer (Redis/ElastiCache): Stores predictions for frequent duplicate queries to reduce serverless invocation overhead.\n4. Queue (SQS) & Object Storage (S3): For batch inference, store payloads in S3, queue metadata in SQS, and process asynchronously using auto-scaling compute workers (AWS ECS/Fargate)."
        }
      ],
      hrStyle: [
        {
          question: "Tell me about a time you faced a conflict in a software development project team and how you resolved it.",
          answer: "Use the STAR method:\n- Situation: During our Software Engineering course project, we were divided on choosing between SQL (PostgreSQL) and NoSQL (MongoDB) for our backend.\n- Task: We needed to settle the technical stack quickly as the project deadline was approaching.\n- Action: I scheduled a brief research session. Instead of arguing, I proposed that each side draft a quick proof-of-concept based on our primary data models (highly structured user relationships). I demonstrated that relational tables suited our transactional needs better, while acknowledging NoSQL strengths for analytics.\n- Result: The team agreed objectively to PostgreSQL. We finished the project ahead of schedule with 95% test coverage and presented it successfully."
        },
        {
          question: "Describe a complex memory leak or bug you debugged. What tools did you use?",
          answer: "Answer outline: Focus on a specific debugging challenge. For example: In a Node.js API project, the server crashed due to Heap Out of Memory. I used Chrome DevTools memory profiles and heap snapshots to capture memory state under stress. I discovered that a global array was storing database connection listeners without releasing them. By replacing the listeners with once-only triggers or properly cleaning them up in connection teardown blocks, the memory usage stabilized at a constant 80MB under load, preventing any further server crashes."
        }
      ]
    }
  },

  IT: {
    name: "Information Technology",
    icon: "🌐",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Verbal Ability with a strong focus on logical problem-solving and patterns.",
      topics: [
        "Quantitative Aptitude: Probability, Permutations & Combinations, Data Interpretation, Averages, Percentages.",
        "Logical Reasoning: Cryptarithmetic, Coding-Decoding, Venn Diagrams, Seating Arrangement.",
        "Verbal: Verbal Reasoning, Error Spotting, Reading Comprehension."
      ],
      playlists: [
        { title: "PrepInsta Logical Reasoning Masterclass", url: "https://prepinsta.com/" },
        { title: "IndiaBIX Quantitative Aptitude Practice", url: "https://www.indiabix.com/aptitude/questions-and-answers/" }
      ]
    },
    coding: {
      description: "Algorithmic thinking, string manipulations, data structures, and database query problem-solving.",
      topics: [
        "Core Programming: Array searches, string manipulation, anagram checks, hash mapping.",
        "SQL Practice: CRUD operations, joins, aggregations, nested queries.",
        "Web APIs: REST API design, status codes, JSON representations."
      ],
      playlists: [
        { title: "freeCodeCamp JavaScript & Data Structures", url: "https://www.freecodecamp.org/" },
        { title: "Striver's SQL & Database Sheet", url: "https://takeuforward.org/" }
      ]
    },
    core: {
      description: "Systems, Software Engineering principles, Cloud infrastructure, and web security architectures.",
      topics: [
        "Software Engineering: SDLC models (Waterfall, Agile Scrum), software testing levels, design patterns.",
        "System Design: Scale architectures (vertical vs horizontal), load balancers, caching mechanisms, CDNs.",
        "Cloud Computing & Cybersecurity: Virtualization, Cloud services (IaaS, PaaS, SaaS), Web security protocols."
      ],
      playlists: [
        { title: "Gate Smashers - System Design Basics", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHaeSkOPofz7IpS3u9kS0Oq" },
        { title: "GeeksforGeeks Cybersecurity Tutorial", url: "https://www.geeksforgeeks.org/cyber-security-tutorial/" },
        { title: "JavaTpoint - Software Engineering Principles", url: "https://www.javatpoint.com/software-engineering-tutorial" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "What is the difference between monolithic and microservice architectures?",
          answer: "Monolithic Architecture:\n- All components of the software application are bundled into a single, unified codebase and deployable unit.\n- Easier to build and test initially, but scaling, modifying, or using diverse technology stacks becomes extremely hard as the app grows.\n- If one module fails, the entire application can crash.\n\nMicroservice Architecture:\n- The application is broken down into small, independent, loosely coupled services communicating via lightweight APIs (HTTP/REST or gRPC).\n- Each service has its own database, technology stack, and scaling profile.\n- Increases development speed and fault isolation, but introduces complexity in networking, transaction handling, and deployments."
        },
        {
          question: "Explain the Agile Scrum software development methodology.",
          answer: "Agile Scrum is an iterative framework for project management. It breaks project releases down into short cycles called Sprints (typically 2 to 4 weeks). Key roles include:\n1. Product Owner: Defines and prioritizes features in the product backlog.\n2. Scrum Master: Facilitates team meetings, removes blockers, and ensures Scrum practices are followed.\n3. Developers: Build the increment.\nKey ceremonies:\n- Sprint Planning: Team selects items from the backlog to complete in the current sprint.\n- Daily Standup: 15-minute sync on what was done, what's next, and blockers.\n- Sprint Review: Demonstration of the working increment to stakeholders.\n- Sprint Retrospective: Team reflects on what went well and what can be improved."
        }
      ],
      problemSolving: [
        {
          question: "How do you check if two strings are anagrams of each other? Write the algorithm.",
          answer: "An anagram is a word formed by rearranging the letters of another. The most efficient way is checking character counts using a frequency hash map:\n1. If lengths of the two strings are not equal, return false.\n2. Initialize a frequency array of size 256 (or hash map) to 0.\n3. Loop through the strings. For the first string, increment the character count in the array; for the second string, decrement it.\n4. Iterate through the frequency array. If any element is not 0, return false. Otherwise, return true.\nTime Complexity: O(N) where N is string length. Space Complexity: O(1) for ASCII characters."
        },
        {
          question: "Write an SQL query to find all departments in a company that have more than 5 employees.",
          answer: "You can solve this using the GROUP BY clause and filtering with HAVING:\n\n```sql\nSELECT DepartmentID, COUNT(EmployeeID) AS EmployeeCount\nFROM Employees\nGROUP BY DepartmentID\nHAVING COUNT(EmployeeID) > 5;\n```\nNote: `WHERE` cannot be used here because aggregate functions (like `COUNT`) must be evaluated after grouping, which is what `HAVING` handles."
        }
      ],
      applied: [
        {
          question: "How do you prevent SQL Injection vulnerabilities in an IT web application?",
          answer: "SQL Injection occurs when user input is concatenated directly into SQL query strings, allowing attackers to alter query structures. The main prevention techniques are:\n1. Prepared Statements (Parameterized Queries): Ensures that parameters are sent separately from the SQL statement itself, so user input is treated strictly as data, never parsed as executable code.\n2. ORM Frameworks: Use secure ORMs (like Hibernate, Entity Framework, or Prisma) which parameterize queries by default.\n3. Input Whitelisting: Clean and validate inputs (e.g. ensure numerical IDs are actual integers).\n4. Principle of Least Privilege: Configure the database user account used by the app to have only the minimum permissions necessary."
        },
        {
          question: "How would you design a scalable shopping cart system using serverless AWS architecture?",
          answer: "1. Frontend hosting: Single Page Application hosted in AWS S3 and served globally via Amazon CloudFront (CDN).\n2. Routing: Amazon API Gateway handles HTTP request routing to backend endpoints.\n3. Compute: AWS Lambda executes microservice logic serverlessly, autoscaling based on incoming web traffic.\n4. Database: Amazon DynamoDB stores user shopping carts in a highly scalable, low-latency NoSQL table using UserID as the partition key.\n5. Cache: Amazon ElastiCache (Redis) handles fast product catalog details to prevent slow database queries."
        }
      ],
      hrStyle: [
        {
          question: "What is your approach when a customer reports a critical bug in production?",
          answer: "I follow a structured incident response approach:\n1. Replicate & Assess: Try to reproduce the bug in a local or staging environment. Review production logs (e.g., CloudWatch, Sentry) to understand the scope and impact.\n2. Temporary Mitigation: If the bug is severe, I propose rolling back to the previous stable release or applying a temporary hotfix (e.g., turning off the buggy feature using feature flags).\n3. Deep Fix: Write the actual patch, write unit tests to prevent regression, and submit for peer code review.\n4. Deploy & Verify: Deploy to staging, verify behavior, and then release to production.\n5. Post-Mortem: Discuss with the team to identify root causes and improve automated tests."
        },
        {
          question: "Tell me about a time you had to adapt to a completely new technology under a tight deadline.",
          answer: "Answer outline: Detail a situation where a project required a tool you didn't know (e.g., learning Docker or React). Describe how you structured your learning (official documentation, basic tutorials, building a simple boilerplate), and how you successfully applied it to deliver the project on time."
        }
      ]
    }
  },

  ECE: {
    name: "Electronics & Communication Engineering",
    icon: "⚡",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Visual Pattern matching suited for core hardware and signal engineering companies.",
      topics: [
        "Quantitative: Linear Equations, Speed & Distance, Work equations, Data Interpretation.",
        "Logical: Patterns, Syllogisms, Venn diagrams, Spatial visualization.",
        "Verbal: Grammar, critical reasoning, technical report comprehension."
      ],
      playlists: [
        { title: "Neso Academy - General Aptitude", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjg5C0k64oqS17yrFI2A1du" }
      ]
    },
    coding: {
      description: "Low-level C programming, bitwise operations, register programming, and digital logic simulation.",
      topics: [
        "Low-level Programming: Pointers in C, memory offsets, structure alignment, bitwise masks.",
        "Hardware Description Languages: Verilog syntax, combinational and sequential HDL modeling.",
        "Simulation: Basic algorithms, sorting, searching, state machine simulation."
      ],
      playlists: [
        { title: "ASIC World Verilog Guide", url: "https://www.asic-world.com/verilog/index.html" },
        { title: "C Programming for Embedded Systems", url: "https://users.ece.utexas.edu/~valvano/embed/toc1.htm" }
      ]
    },
    core: {
      description: "Core electronics subjects covering analog/digital design, signal processing, and VLSI physics.",
      topics: [
        "Analog Circuits: Semiconductor diodes, BJT/MOSFET models, Operational Amplifiers (Op-Amps), oscillators.",
        "Digital Logic & VLSI: Logic gates, Karnaugh Maps, flip-flops, setup/hold times, CMOS layout, propagation delays.",
        "Embedded Systems & DSP: Microcontrollers (ARM, 8051), interrupt handlers, SPI, I2C, UART, DFT/FFT, Z-Transforms."
      ],
      playlists: [
        { title: "Neso Academy - Digital Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm" },
        { title: "Neso Academy - Analog Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhPG3QI33UYAd5V0aTOaFnK" },
        { title: "Embedded Systems Shape the World", url: "https://users.ece.utexas.edu/~valvano/embed/toc1.htm" },
        { title: "MIT Signals and Systems", url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "Explain the operating stages and characteristics of a CMOS inverter.",
          answer: "A CMOS inverter consists of an enhancement-type PMOS pull-up transistor and an NMOS pull-down transistor connected in series:\n- When Input is Low (GND): PMOS is ON ($V_{GS}$ is negative enough), NMOS is OFF. Output is pulled up to $V_{DD}$ (Logic High).\n- When Input is High ($V_{DD}$): NMOS is ON ($V_{GS}$ is positive), PMOS is OFF. Output is pulled down to GND (Logic Low).\nDuring transitions, there is a region where both transistors are partially ON, causing a brief spike in current (short-circuit current). Key features of CMOS include high input impedance and extremely low static power dissipation since one of the transistors is always OFF in steady-state."
        },
        {
          question: "What is Setup Time and Hold Time? What happens if they are violated?",
          answer: "In digital synchronous circuits (like flip-flops):\n- Setup Time ($T_{setup}$): The minimum amount of time that data input must remain stable *before* the active clock edge arrives.\n- Hold Time ($T_{hold}$): The minimum amount of time that data input must remain stable *after* the active clock edge arrives.\nIf either setup or hold time is violated, the flip-flop output may fail to settle into a stable 0 or 1 state, entering a metastable state. Metastability can cause propagation of unpredictable logical values through the circuit, leading to system failure."
        }
      ],
      problemSolving: [
        {
          question: "Design a 2-to-1 Multiplexer using only 2-input NAND gates.",
          answer: "The output equation of a 2:1 Multiplexer is: $Y = A\\bar{S} + BS$ where $S$ is selector, $A, B$ are inputs.\n1. We can write $Y = \\overline{\\overline{A\\bar{S} + BS}} = \\overline{\\overline{A\\bar{S}} \\cdot \\overline{BS}}$.\n2. To generate $\\bar{S}$, use a NAND gate as an inverter: $S_{inv} = \\text{NAND}(S, S)$.\n3. Generate $Y_1 = \\text{NAND}(A, S_{inv}) = \\overline{A\\bar{S}}$.\n4. Generate $Y_2 = \\text{NAND}(B, S) = \\overline{BS}$.\n5. Combine outputs: $Y = \\text{NAND}(Y_1, Y_2) = \\overline{Y_1 \\cdot Y_2} = A\\bar{S} + BS$.\nThis implementation requires exactly 4 NAND gates."
        },
        {
          question: "An amplifier has a voltage gain ($V_{out}/V_{in}$) of 1000. Calculate its gain in Decibels (dB).",
          answer: "Voltage gain in dB is calculated using the logarithmic formula:\n$$\\text{Gain (dB)} = 20 \\log_{10}\\left(\\frac{V_{out}}{V_{in}}\\right)$$\nSubstitute 1000:\n$$\\text{Gain (dB)} = 20 \\log_{10}(1000) = 20 \\times 3 = 60 \\text{ dB}$$\nIf it were a power gain ($P_{out}/P_{in}$), the multiplier would be 10 instead of 20 (resulting in 30 dB)."
        }
      ],
      applied: [
        {
          question: "How would you interface a digital sensor with a microcontroller using SPI protocol?",
          answer: "SPI (Serial Peripheral Interface) is a synchronous, full-duplex, master-slave communication protocol. Steps to interface:\n1. Hardware Connections: Connect four lines:\n   - MOSI (Master Out Slave In) -> Sensor SI\n   - MISO (Master In Slave Out) -> Sensor SO\n   - SCK (Serial Clock) -> Sensor SCK\n   - SS/CS (Slave Select / Chip Select) -> Sensor CS (controlled via GPIO)\n2. Pin Config & Timing: Set the microcontroller pin modes, choose clock polarity (CPOL) and phase (CPHA) to match the sensor's datasheet.\n3. Software Data Exchange: Pull CS line Low to activate the sensor. Send the read/write address command over MOSI while reading returned bytes on MISO synchronously. Pull CS High when transaction is complete."
        },
        {
          question: "Explain the methods you would use to analyze and filter high-frequency noise from a sensor signal.",
          answer: "1. Hardware low-pass RC filter: Implement a simple resistor-capacitor (RC) analog filter before the ADC input to block noise frequencies above cutoff $f_c = 1/(2\\pi RC)$.\n2. Hardware shielding: Use twisted pair wiring or differential signaling to minimize electromagnetic interference (EMI).\n3. Software DSP filtering: Implement a moving average filter or a digital Low-Pass FIR (Finite Impulse Response) filter in microcontroller code. For real-time applications, calculate filter coefficients using MATLAB and run: $y[n] = \\sum b_i x[n-i]$."
        }
      ],
      hrStyle: [
        {
          question: "Describe a time you had to troubleshoot a circuit board in the lab that was not functioning as expected.",
          answer: "Situation: During a microprocessor lab, our custom telemetry board didn't power up when plugged in; the indicator LEDs remained off.\n- Task: We had to identify the cause of the failure and fix it within the 3-hour lab period.\n- Action: I took a methodical debugging approach. First, I disconnected the power supply to prevent short-circuit burns. I used a digital multimeter (DMM) to run a continuity test between the ground plane and power rail, discovering a low resistance path (short circuit). I then inspected the board under a microscope and located a tiny solder bridge across the terminals of a SMD bypass capacitor. I used a desoldering braid to clean the pin joint.\n- Result: We re-measured resistance (now infinity/open), powered up the board, and successfully loaded our firmware, completing the lab on time."
        },
        {
          question: "How do you coordinate with software engineers when working on a hardware-software interface?",
          answer: "Answer outline: Focus on creating clear interface control documents (ICDs) early on. Mappings of registers, memory offsets, timing constraints, and pinouts are documented. Use simulators or logic analyzers (e.g. Saleae) during integration phases so both hardware and software behaviors can be visualized and verified simultaneously."
        }
      ]
    }
  },

  EEE: {
    name: "Electrical & Electronics Engineering",
    icon: "🔋",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Critical Path analysis for electrical utilities, power grids, and core sectors.",
      topics: [
        "Quantitative: Percentages, Averages, Linear Algebra, Time & Work, Profit & Loss.",
        "Logical: Syllogisms, series completion, critical path sequencing (PERT/CPM).",
        "Verbal: Technical vocabulary, instructions matching, reading comprehension."
      ],
      playlists: [
        { title: "IndiaBIX Quantitative Aptitude Practice", url: "https://www.indiabix.com/aptitude/questions-and-answers/" }
      ]
    },
    coding: {
      description: "MATLAB/Simulink modeling, numerical scripts, basic C algorithms for controllers.",
      topics: [
        "Numerical Tools: MATLAB matrix operations, differential equation solver scripts.",
        "Microcontroller Coding: Basic C programming, register setup, timer interrupts.",
        "Simulation: Power system and electric circuit state solvers."
      ],
      playlists: [
        { title: "MATLAB & Simulink Tutorials", url: "https://www.mathworks.com/support/schedules.html" }
      ]
    },
    core: {
      description: "Electrical machines, power grids, converters, and automatic control loop equations.",
      topics: [
        "Electrical Machines: Synchronous generators, transformers, 3-phase induction motors, DC motor starting methods.",
        "Power Electronics: Thyristor rectifiers, Buck, Boost, and Buck-Boost DC-DC converters, single-phase inverters.",
        "Control Systems: Transfer functions, feedback loop stability, Routh-Hurwitz stability criterion, root locus plots."
      ],
      playlists: [
        { title: "NPTEL Electrical Machines Course", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_y9V3Q41-Yv_m2L3k5Tf3t" },
        { title: "NPTEL Power Systems Engineering Lectures", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Qj-7-Sbe7z4y0v6qFzQ2l" },
        { title: "Control Systems Crash Course", url: "https://www.youtube.com/playlist?list=PLgwJf8NHJnNFgJ1uR8h986x3yQfI0_cZ6" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "How does a 3-phase Induction Motor generate starting torque? Why is it self-starting?",
          answer: "A 3-phase induction motor is self-starting because of the interaction of magnetic fields:\n1. 3-Phase Stator Winding: The stator contains three windings space-shifted by $120^\\circ$ electrical degrees. When connected to a 3-phase AC supply, the currents create a Rotating Magnetic Field (RMF) that rotates at synchronous speed $N_s = 120f/P$.\n2. Electromagnetic Induction: The rotating field cuts the stationary rotor conductors, inducing electromotive force (EMF) in them according to Faraday's Law.\n3. Rotor Current: Since the rotor conductors form a closed circuit, currents flow through them.\n4. Torque Generation: The rotor currents interact with the stator RMF, generating a mechanical force (Lorentz Force) that rotates the rotor in the direction of the RMF according to Lenz's Law."
        },
        {
          question: "Explain the Routh-Hurwitz Stability Criterion in Control Systems.",
          answer: "The Routh-Hurwitz criterion determines the stability of a linear time-invariant (LTI) system by analyzing the coefficients of its characteristic equation $A(s) = a_n s^n + a_{n-1} s^{n-1} + ... + a_0 = 0$:\n1. Construct the Routh Array using the coefficients.\n2. Analyze the first column of the array.\n3. The system is stable if and only if all elements in the first column have the same mathematical sign (all positive or all negative).\n4. If there are sign changes, the system is unstable, and the number of sign changes equals the number of roots of the characteristic equation lying in the right half of the s-plane (RHP)."
        }
      ],
      problemSolving: [
        {
          question: "Calculate the transfer function of a series RC circuit where the output is taken across the capacitor.",
          answer: "For a series RC circuit, the input voltage is $v_{in}(t)$ and output is $v_{out}(t) = v_c(t)$:\n1. Apply Laplace Transform to the components: $R \\to R$, $C \\to 1/(Cs)$.\n2. By voltage divider, the output voltage in the s-domain is:\n   $$V_{out}(s) = V_{in}(s) \\cdot \\frac{\\frac{1}{Cs}}{R + \\frac{1}{Cs}}$$\n3. Simplify the fraction by multiplying numerator and denominator by $Cs$:\n   $$H(s) = \\frac{V_{out}(s)}{V_{in}(s)} = \\frac{1}{RCs + 1}$$\nThis is a standard first-order system with time constant $\\tau = RC$."
        },
        {
          question: "Calculate the synchronous speed of a 4-pole induction motor running on a grid frequency of 50 Hz. If rotor speed is 1440 RPM, what is the slip?",
          answer: "1. Synchronous Speed ($N_s$):\n   $$N_s = \\frac{120 \\times f}{P} = \\frac{120 \\times 50}{4} = 1500 \\text{ RPM}$$\n2. Slip ($s$):\n   $$s = \\frac{N_s - N_r}{N_s} = \\frac{1500 - 1440}{1500} = \\frac{60}{1500} = 0.04 \\text{ (or } 4\\%\\text{)}$$"
        }
      ],
      applied: [
        {
          question: "How is regenerative braking implemented in electric vehicle (EV) motor controllers?",
          answer: "Regenerative braking turns the traction motor into a generator during deceleration:\n1. Generating Mode: When the accelerator is released, the motor controller changes the firing angle of the inverter switches so that the back-EMF of the traction motor becomes higher than the battery terminal voltage.\n2. Direction of Current: Current reverses, flowing from the motor back through the freewheeling diodes of the inverter to the battery pack.\n3. Retarding Torque: The magnetic drag of the generator provides braking torque to decelerate the vehicle, while converting kinetic energy into chemical energy stored in the battery."
        },
        {
          question: "How do you diagnose and troubleshoot harmonic distortions in an industrial power system?",
          answer: "1. Measurements: Connect a Power Quality Analyzer at the Point of Common Coupling (PCC) to measure Total Harmonic Distortion (THD) for voltage and current.\n2. Identification: Identify sources of non-linear loads (e.g. Variable Frequency Drives, rectifiers, arc furnaces).\n3. Mitigations:\n   - Install Passive Filters (inductor-capacitor networks tuned to block specific odd harmonics like 5th and 7th).\n   - Deploy Active Harmonic Filters (AHF) that monitor current harmonics in real-time and inject equal but opposite phase currents to cancel them out."
        }
      ],
      hrStyle: [
        {
          question: "How do you handle safety protocols when working with high-voltage equipment in a team lab?",
          answer: "Safety is paramount in electrical engineering:\n- Pre-work briefing: We review circuit diagrams and assign roles before turning on power supplies.\n- PPE: Ensure everyone is wearing safety glasses and non-conductive safety shoes.\n- One-Hand Rule: When probing powered circuits, keep one hand in your pocket to prevent forming a path through your chest.\n- Lock-Out/Tag-Out (LOTO): Physical locks are placed on circuit breakers during wiring changes to prevent accidental power-up by others.\n- Emergency plan: Knowing the location of the main power shut-off switch and the lab's first-aid/cardiac defibrillator (AED) units."
        },
        {
          question: "Describe a project experience where you had to manage budget constraints while selecting electrical components.",
          answer: "Answer outline: Detail a lab project (e.g. custom inverter). You had to balance expensive high-rated IGBTs vs budget limits. Explain how you calculated the maximum expected currents under overload, added a safety factor (e.g., 1.5x), and chose an optimized mid-tier component that met safety margins without exceeding the budget limit."
        }
      ]
    }
  },

  ME: {
    name: "Mechanical Engineering",
    icon: "⚙️",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Mechanical Comprehension tests targeting manufacturing, auto, and design firms.",
      topics: [
        "Quantitative: Pipes & Cisterns, Clocks, Time & Distance, Ratios.",
        "Logical: Gear rotation patterns, spatial reasoning, pulleys and lever mechanisms.",
        "Verbal: Safety procedures translation, reading technical manuals."
      ],
      playlists: [
        { title: "Sanfoundry Mechanical Engineering MCQs", url: "https://www.sanfoundry.com/" }
      ]
    },
    coding: {
      description: "Python/MATLAB for finite element analysis, heat transfer calculations, and CNC G-Code scripting.",
      topics: [
        "Scientific Scripting: Matrix stress calculations using Python/NumPy, plotting temperature gradients.",
        "CNC Programming: Writing and verifying G-Code (G01, G02, G03) and M-Code blocks for automated lathe milling."
      ],
      playlists: [
        { title: "Autodesk G-Code & CNC Programming Guide", url: "https://academy.autodesk.com/" }
      ]
    },
    core: {
      description: "Fluid dynamics, heat transfer, structural materials, and CAD design workflows.",
      topics: [
        "Thermodynamics & Fluids: Otto/Diesel power cycles, Carnot engine limits, Bernoulli's equation, boundary layers.",
        "Strength of Materials: Stress-Strain diagrams, bending moments, shear force profiles, torsion, buckling limits.",
        "Manufacturing & CAD: Casting principles, welding types, SolidWorks modeling, Finite Element Method (FEM) constraints."
      ],
      playlists: [
        { title: "Lesics 3D Concepts - Mechanical Engineering", url: "https://www.youtube.com/c/Lesics" },
        { title: "NPTEL Strength of Materials Course", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Jb_5lB_WlXGZ2uM1jU5N3" },
        { title: "GrabCAD Community CAD/CAM Library", url: "https://grabcad.com/tutorials" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "Explain the Second Law of Thermodynamics and its implications on heat engines.",
          answer: "The Second Law of Thermodynamics states that heat cannot spontaneously flow from a cooler body to a warmer body, and entropy of an isolated system always increases over time. For heat engines, it is formulated in two statements:\n1. Kelvin-Planck Statement: It is impossible to construct a device operating in a cycle that absorbs heat from a single thermal reservoir and converts it entirely into work. There must be some heat rejected to a cold sink.\n2. Implications: This means no heat engine can ever have $100\\%$ thermal efficiency. The upper limit of efficiency for any heat engine operating between temperatures $T_H$ (hot source) and $T_C$ (cold sink) is defined by the Carnot efficiency: $\\eta_{max} = 1 - T_C/T_H$."
        },
        {
          question: "Explain the stress-strain curve for a ductile material like mild steel.",
          answer: "The stress-strain curve shows several distinct regions when subjected to tensile loading:\n1. Proportional Limit: Stress is directly proportional to strain (Hooke's Law holds).\n2. Elastic Limit: The material returns to its original dimensions upon unloading. No permanent deformation occurs.\n3. Yield Point (Upper & Lower): Elastic limit is exceeded. Plastic deformation begins; the material yields with little to no additional load.\n4. Ultimate Tensile Strength (UTS): The maximum stress value the material can withstand. Beyond this point, necking (localized cross-sectional reduction) begins.\n5. Fracture Point: The material ruptures."
        }
      ],
      problemSolving: [
        {
          question: "A cantilever beam of length L supports a point load P at its free end. Calculate the maximum bending moment and maximum deflection.",
          answer: "For a cantilever beam fixed at $x=0$ and loaded with point load $P$ at $x=L$:\n1. Bending Moment ($M$): The bending moment is maximum at the fixed support because the moment arm is longest there:\n   $$M_{max} = -P \\cdot L$$\n2. Deflection ($\\delta$): Using standard Euler-Bernoulli beam theory equations:\n   $$\\delta_{max} = \\frac{P \\cdot L^3}{3EI}$$\nwhere $E$ is Young's Modulus and $I$ is the Area Moment of Inertia of the beam's cross-section."
        },
        {
          question: "Calculate the thermal efficiency of an engine operating on the Otto cycle if the compression ratio (r) is 8. (Assume ratio of specific heats $\\gamma = 1.4$).",
          answer: "The formula for Otto cycle thermal efficiency is:\n$$\\eta = 1 - \\frac{1}{r^{\\gamma - 1}}$$\nSubstitute $r = 8$ and $\\gamma = 1.4$:\n$$\\eta = 1 - \\frac{1}{8^{1.4 - 1}} = 1 - \\frac{1}{8^{0.4}}$$\nSince $8^{0.4} \\approx 2.3$,\n$$\\eta \\approx 1 - \\frac{1}{2.3} \\approx 1 - 0.435 = 0.565 \\text{ (or } 56.5\\%\\text{)}$$"
        }
      ],
      applied: [
        {
          question: "Compare additive manufacturing (3D Printing) and subtractive manufacturing (CNC Milling) design constraints.",
          answer: "Additive Manufacturing (3D Printing):\n- Constraints: Requires support structures for overhangs angle $>45^\\circ$. Layer-by-layer adhesion introduces anisotropic material strength (weaker along Z-axis). High surface roughness requires post-processing.\n- Advantages: Design freedom (internal channels, lattices), minimal material waste.\n\nSubtractive Manufacturing (CNC Milling):\n- Constraints: Limited tool entry angles (requires multi-axis machines for complex cuts). Fillets are required since round rotary tools cannot cut sharp internal corners. Material waste is high.\n- Advantages: Excellent surface finish, isotropic strength, works on a wider range of materials."
        },
        {
          question: "How would you diagnose structural cracks on a cast iron pump casing?",
          answer: "I would follow a non-destructive testing (NDT) workflow:\n1. Visual Inspection: Use magnifier and light to inspect surface stress locations.\n2. Liquid Dye Penetrant Testing: Clean the casing surface, apply a red dye penetrant, wipe it off, and apply a developer. The dye bleeding into surface cracks will clearly highlight them.\n3. Magnetic Particle Testing (if applicable): Apply magnetic fields and metallic powders to locate sub-surface cracks.\n4. Remediation: Run Finite Element Method (FEM) simulation on the casing under dynamic pressure to check if stress levels exceed fatigue limits. Redesign with thicker walls if stress is concentrated."
        }
      ],
      hrStyle: [
        {
          question: "Describe a design project where your CAD modeling team had conflicting design concepts. How did you resolve it?",
          answer: "STAR method:\n- Situation: During our SAE formula student project, the chassis team disagreed on choosing between a steel space-frame and a carbon-fiber monocoque.\n- Task: We had to decide within two weeks to avoid delaying manufacturing.\n- Action: As team lead, I created a weighted decision matrix. We scored both choices on objective parameters: manufacturing cost, weight, crash simulation results, and lead time. While carbon fiber was lighter, our FEA simulations showed the space frame met all safety criteria and cost $70\\%$ less to fabricate in our lab.\n- Result: The team agreed unanimously to the space-frame chassis. We manufactured it successfully and passed tech inspection at the competition."
        },
        {
          question: "Tell me about a time you had to present a complex engineering design to non-technical stakeholders.",
          answer: "Answer outline: Detail how you translated technical drawings into simple functional parameters (e.g., how the mechanism saves costs, increases speed, or improves safety) using 3D animations instead of complex stress equations."
        }
      ]
    }
  },

  CIVIL: {
    name: "Civil Engineering",
    icon: "🧱",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Spatial logic for construction, infrastructure, and structural firms.",
      topics: [
        "Quantitative: Heights & Distances, Area & Volume, Time/Speed/Distance, Ratios.",
        "Logical: Structural sequences, logical flowcharts, network diagrams.",
        "Verbal: Building code summaries, project specifications reading."
      ],
      playlists: [
        { title: "Civil Engineering Academy Portal", url: "https://civilengineeringacademy.com/" }
      ]
    },
    coding: {
      description: "Excel Macros, VBA programming, and basic structural scripts for beam load analysis.",
      topics: [
        "Spreadsheet Tools: Excel VBA macros to calculate material bills, estimate costs, and solve concrete weights.",
        "Structural Scripts: Basic Python arrays to calculate bending moments at coordinate intervals."
      ],
      playlists: [
        { title: "VBA Programming for Civil Engineers", url: "https://civilengineeringacademy.com/" }
      ]
    },
    core: {
      description: "Structural design, concrete technology, soil hydraulics, and construction charts.",
      topics: [
        "Structural Design & Analysis: Concrete grade codes, shear rebar placement, beam load distributions, truss analysis.",
        "Hydraulics & Fluids: Open channel flow, Darcy's law for soil seepage, groundwater tables, dam pressure distributions.",
        "Construction Management: Critical Path Method (CPM), PERT charts, quality concrete mixes, slump testing."
      ],
      playlists: [
        { title: "NPTEL Structural Analysis Playlist", url: "https://www.youtube.com/playlist?list=PL43E087796791E479" },
        { title: "GATE Academy Civil Lectures", url: "https://www.youtube.com/playlist?list=PL-k6G5rLqD7P-Tpx7aI0tPj_jC_J7wL9D" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "What is the difference between under-reinforced and over-reinforced concrete beams? Why are under-reinforced designs preferred?",
          answer: "1. Under-reinforced Beams:\n- The tension steel yields before the compression concrete reaches its ultimate crushing strain.\n- Ductile failure: Yielding steel undergoes significant plastic deformation, creating visible cracks and deflections as a warning before failure.\n- This is highly preferred to allow building evacuations.\n\n2. Over-reinforced Beams:\n- The compression concrete crushes before the tension steel yields.\n- Brittle failure: Failure occurs suddenly without warning, which is extremely dangerous.\nTherefore, building design codes enforce under-reinforced sections by limiting the maximum allowable area of steel."
        },
        {
          question: "Explain Darcy's Law for water flow through porous soils.",
          answer: "Darcy's Law describes the rate of fluid flow through a porous medium (like water through a soil mass):\n$$Q = k \\cdot i \\cdot A$$\nwhere:\n- $Q$ is the discharge flow rate ($m^3/s$).\n- $k$ is the hydraulic conductivity/permeability coefficient of the soil ($m/s$).\n- $i$ is the hydraulic gradient ($h/L$, head loss per unit flow length).\n- $A$ is the cross-sectional area perpendicular to the flow direction.\nThis law is fundamental for analyzing soil seepage under dams, well hydraulics, and drainage designs."
        }
      ],
      problemSolving: [
        {
          question: "For a simply supported beam of length 6m supporting a Uniformly Distributed Load (UDL) of 4kN/m over its entire length, calculate the maximum shear force and maximum bending moment.",
          answer: "1. Reaction Forces: Since the load is symmetrical, the reaction forces at supports $A$ and $B$ are equal:\n   $$R_A = R_B = \\frac{w \\cdot L}{2} = \\frac{4 \\cdot 6}{2} = 12 \\text{ kN}$$\n2. Maximum Shear Force ($V_{max}$): Occurs at the supports:\n   $$V_{max} = R_A = 12 \\text{ kN}$$\n3. Maximum Bending Moment ($M_{max}$): Occurs at the midpoint ($x = L/2 = 3\\text{m}$):\n   $$M_{max} = \\frac{w \\cdot L^2}{8} = \\frac{4 \\cdot 6^2}{8} = \\frac{144}{8} = 18 \\text{ kNm}$$\nAt the midpoint, the shear force crosses zero."
        },
        {
          question: "Calculate the water-to-cement ratio if a concrete mix design uses 180 liters of water and 400 kg of cement. How does this ratio affect strength?",
          answer: "1. Calculation:\n   $$\\text{Water-Cement Ratio} = \\frac{\\text{Weight of Water}}{\\text{Weight of Cement}} = \\frac{180 \\text{ kg}}{400 \\text{ kg}} = 0.45$$\nNote: 1 liter of water has a mass of 1 kg.\n2. Effect on Strength: A lower water-cement ratio increases concrete strength and durability by placing cement particles closer together, reducing capillary voids. However, if the ratio is too low (e.g. $<0.35$), the concrete becomes unworkable and difficult to compact, leading to structural voids."
        }
      ],
      applied: [
        {
          question: "What quality control tests must be conducted on concrete during cast execution on-site?",
          answer: "1. Slump Cone Test: Performed on fresh concrete mix on-site to verify workability and consistency before casting. If concrete slump does not match design spec, the truck is rejected.\n2. Compression Cube Casting: Fresh concrete samples are cast into $150\\text{mm}$ cubes. They are cured and crushed in a compression testing machine at 7 days and 28 days to verify strength specs (e.g. $30\\text{MPa}$ for M30 concrete).\n3. Temperature Monitoring: For mass concrete pours (e.g., raft foundations), monitor temperature differentials to prevent thermal cracking."
        },
        {
          question: "How would you handle structural foundation settlements detected in an existing building?",
          answer: "1. Diagnostic: Install settlement tell-tale markers to monitor rate and direction of crack expansion. Conduct soil bore tests to analyze moisture changes.\n2. Remediation:\n   - Underpinning: Extend the depth of the foundation down to a stronger soil strata using micro-piles.\n   - Soil Grouting: Inject cement or chemical grouts under pressure to compact and stabilize loose sub-base soils."
        }
      ],
      hrStyle: [
        {
          question: "Describe a time your design team noticed a safety violation on a construction site. How did you handle it?",
          answer: "Situation: During a site visit for our structural concrete lab project, I noticed subcontractor workers casting columns without safety harnesses or fall protection rails at a height of 4 meters.\n- Task: We had to stop the unsafe work immediately without causing contractual disputes.\n- Action: I called the site safety supervisor to the location. I pointed out the violation of safety codes, explaining the liability risks and worker danger. We paused the pour, and the safety team set up safety lines.\n- Result: Workers tied off before resuming. The pour was finished safely, and the team established a daily safety check routine."
        },
        {
          question: "How do you handle disputes with subcontractors regarding material specifications on site?",
          answer: "Answer outline: Focus on objectivity and referencing contract documents. I compare delivered material certificates (e.g. mill test certificates for steel) with the approved structural drawings. If materials do not meet design grades, I issue a formal non-conformance report (NCR) to ensure compliance."
        }
      ]
    }
  },

  AERO: {
    name: "Aerospace Engineering",
    icon: "✈️",
    aptitude: {
      description: "Quantitative, Physics-oriented math, and Spatial logic for aerospace, aeronautics, and defense firms.",
      topics: [
        "Quantitative: Kinematics, vectors, rates of change, spatial rotation logic.",
        "Logical: Mechanical linkages, flow charts, coordinate transformations.",
        "Verbal: Technical flight logs translation, aviation regulations."
      ],
      playlists: [
        { title: "Sanfoundry Aerodynamics & Flight Mechanics MCQs", url: "https://www.sanfoundry.com/" }
      ]
    },
    coding: {
      description: "Python/MATLAB for computational fluid dynamics (CFD), flight path simulation, and control parameters.",
      topics: [
        "Simulation: Coding Runge-Kutta numerical integration for trajectory simulation in Python.",
        "CFD scripting: Setting up mesh vectors and boundary conditions in MATLAB scripts."
      ],
      playlists: [
        { title: "Computational Fluid Dynamics Guide", url: "https://ocw.mit.edu/courses/aeronautics-and-astronautics/" }
      ]
    },
    core: {
      description: "Flight mechanics, boundary layers, structural stress-strain, jet propulsion, and avionics.",
      topics: [
        "Aerodynamics & Fluids: Airfoil lift/drag curves, boundary layer separation, supersonic shock waves (normal & oblique).",
        "Structures & Avionics: Thin-walled pressure vessels, aerospace alloys, autopilot PID control models, IMU sensors.",
        "Propulsion: Gas turbine cycles (Brayton), bypass ratios, rocket propellants."
      ],
      playlists: [
        { title: "NASA Glenn Research - Aerodynamics Basics", url: "https://www.grc.nasa.gov/www/k-12/airplane/index.html" },
        { title: "NPTEL Flight Mechanics & Aircraft Dynamics", url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_S5p3q_SNDsV1e0zXWwz1" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "How does an airfoil generate aerodynamic lift? Explain using pressure differences.",
          answer: "An airfoil generates lift through a combination of Bernoulli's principle and Newton's Third Law:\n1. Flow asymmetry: Because of the airfoil's shape and angle of attack, the air flowing over the curved top surface travels faster than the air flowing under the bottom surface.\n2. Pressure difference: According to Bernoulli's equation, as fluid speed increases, static pressure decreases. This creates a low-pressure region on the upper surface and a higher-pressure region on the lower surface.\n3. Net Force: This pressure differential generates a net upward aerodynamic force perpendicular to the freestream velocity, known as Lift.\n4. Downward deflection: The airfoil also forces the air downwards; Newton's Third Law dictates an equal and opposite reaction forcing the airfoil upwards."
        },
        {
          question: "Explain the differences between normal and oblique shock waves in supersonic flow.",
          answer: "Shock waves are discontinuities where pressure, temperature, and density increase abruptly while flow velocity drops:\n- Normal Shock Wave: Occurs perpendicular ($90^\\circ$) to the upstream flow direction. The flow downstream of a normal shock wave always drops from supersonic to subsonic speed ($M < 1$).\n- Oblique Shock Wave: Occurs at an angle to the flow direction (usually formed by a wedge or concave corner). The flow downstream of an oblique shock wave is deflected but usually remains supersonic, though at a lower Mach number than upstream."
        }
      ],
      problemSolving: [
        {
          question: "An aircraft with wing area $20\\text{ m}^2$ and lift coefficient $C_L = 1.2$ flies at a velocity of $50\\text{ m/s}$ in air density $\\rho = 1.2\\text{ kg/m}^3$. Calculate the aerodynamic lift.",
          answer: "The lift equation is:\n$$L = \\frac{1}{2} \\rho \\cdot v^2 \\cdot S \\cdot C_L$$\nSubstitute the given values:\n$$L = 0.5 \\times 1.2 \\times 50^2 \\times 20 \\times 1.2$$\n$$L = 0.6 \\times 2500 \\times 24$$\n$$L = 1500 \\times 24 = 36,000 \\text{ N (or } 36 \\text{ kN)}$$"
        },
        {
          question: "Calculate the Mach number of an aircraft flying at $680\\text{ m/s}$ where ambient temperature is such that the speed of sound is $340\\text{ m/s}$. Under what regime is the aircraft flying?",
          answer: "1. Mach number ($M$) calculation:\n   $$M = \\frac{\\text{Velocity of Aircraft } v}{\\text{Speed of Sound } a} = \\frac{680}{340} = 2.0$$\n2. Flight regime: Since $M = 2.0$ (which is greater than 1.2 but less than 5.0), the aircraft is flying in the supersonic regime."
        }
      ],
      applied: [
        {
          question: "How do you minimize structural fatigue in commercial aircraft fuselage joints?",
          answer: "1. Material Selection: Use fatigue-resistant materials like Aluminum-Copper alloys (2000 series) or modern Carbon-Fiber Reinforced Polymers (CFRP).\n2. Manufacturing steps: Perform cold expansion on rivet/fastener holes. This induces beneficial residual compressive stress fields around the hole margins, halting crack initiation.\n3. Design: Eliminate sharp interior corners; use generous radius fillets. Incorporate 'crack arrestor' structural strips to limit damage propagation."
        },
        {
          question: "How would you diagnose autopilot oscillation issues in a drone simulation test?",
          answer: "I would analyze the control loop signals:\n1. Log PID Outputs: Log the Proportional ($K_p$), Integral ($K_i$), and Derivative ($K_d$) outputs alongside gyroscope attitude data.\n2. Root Cause: If the drone oscillates rapidly, $K_p$ is likely too high, causing overshoot. If oscillations are slow, $K_i$ might be causing windup.\n3. Remediation: Turn off $K_i$ and $K_d$. Gradually increase $K_p$ until self-oscillation starts, then set it to half. Introduce $K_d$ to damp out overshoots, and finally add small $K_i$ to eliminate steady-state errors."
        }
      ],
      hrStyle: [
        {
          question: "Describe a time your aerospace team faced an unexpected simulation error close to a project deadline.",
          answer: "Situation: During a wind tunnel prep lab, our calculated drag coefficients in the CFD mesh deviated by $40\\%$ from our flat-plate theoretical equations.\n- Task: We had to fix the simulation mesh model within 48 hours to secure testing approvals.\n- Action: I organized an emergency debugging session. I checked our boundary conditions and discovered that we hadn't set the turbulence model correctly, neglecting boundary layer wall functions ($y^+$ calculations) in our mesh. I recalculated the grid spacing near the airfoil surface to satisfy $y^+ \\approx 1$ and switched to the Spalart-Allmaras turbulence model.\n- Result: The new CFD drag matched theory within $3\\%$, allowing us to pass verification and run our wind tunnel test on schedule."
        },
        {
          question: "How do you handle high-pressure environments, such as during critical testing or flight test programs?",
          answer: "Answer outline: Detail utilizing standard checklists and pre-flight safety briefings. Emphasize that in aviation, safety takes absolute precedence over deadlines, and keeping a calm, methodical checklist-driven mindset prevents human error."
        }
      ]
    }
  },

  BME: {
    name: "Biomedical Engineering",
    icon: "🏥",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Medical charts data interpretation for clinical, design, and instrumentation companies.",
      topics: [
        "Quantitative: Statistics, standard deviations, probability distributions, coordinate geometry.",
        "Logical: Biological flow charts, logical syllogisms, medical device fault sequences.",
        "Verbal: Medical literature reviews, FDA compliance standards parsing."
      ],
      playlists: [
        { title: "Sanfoundry Biomedical Instrumentation MCQs", url: "https://www.sanfoundry.com/" }
      ]
    },
    coding: {
      description: "Python/MATLAB for biosignal filtering (ECG/EEG), clinical image processing, and biological systems modeling.",
      topics: [
        "Signal Filtering: Writing Fourier transform and Butterworth filter scripts in MATLAB.",
        "Medical Imaging: Implementing thresholding and edge detection on MRI DICOM files in Python."
      ],
      playlists: [
        { title: "Biomedical Signal Processing Tutorials", url: "https://www.youtube.com/playlist?list=PLTfCJuq2YtB0j3Hh9QZ8Wn3yU_eK_gYn3" }
      ]
    },
    core: {
      description: "Anatomy dynamics, biosignal telemetry, implant materials, and clinical instrumentation.",
      topics: [
        "Anatomy & Devices: ECG/EEG signal acquisition, pacemakers, physiological sensors, MRI/CT scanners.",
        "Biomechanics & Biomaterials: Joint mechanics, biocompatibility, orthopedic implant stress, blood rheology.",
        "Biosignal Processing: Digital filters (Butterworth, Notch), noise reduction (50Hz grid noise), wave classification."
      ],
      playlists: [
        { title: "Yale Open Courseware - Intro to Biomedical Engineering", url: "https://oyc.yale.edu/biomedical-engineering/beng-100" },
        { title: "NIH Biomedical Engineering Science Portal", url: "https://www.nibib.nih.gov/science-education/science-topics" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "How does a standard Electrocardiogram (ECG) acquire cardiac signals from the skin?",
          answer: "ECG signal acquisition involves the following steps:\n1. Transduction: Ag/AgCl electrodes placed on the skin detect ionic currents generated by the depolarization and repolarization of the heart muscle.\n2. Amplification: Because skin-surface ECG signals are tiny ($0.5\\text{mV}$ to $2\\text{mV}$), they are passed through an Instrumentation Amplifier with a high Common-Mode Rejection Ratio (CMRR $>100\\text{dB}$) to eliminate common-mode noise.\n3. Filtering: Passband filters limit the signal to $0.05\\text{ Hz}$ to $150\\text{ Hz}$ to block respiration baseline drift ($<0.05\\text{Hz}$) and high-frequency muscle tremors.\n4. Digitization: An ADC converts the analog voltages for digital processing and screen visualization."
        },
        {
          question: "What defines biocompatibility for materials used in medical implants?",
          answer: "Biocompatibility is the ability of a material to perform its desired function inside a living host without eliciting undesirable local or systemic effects. Key criteria:\n1. Non-toxic & Non-carcinogenic: Must not leach toxic chemicals into surrounding fluids.\n2. Bioinert or Bioactive: Must not trigger an immune reaction (foreign body response) leading to thick fibrous capsules.\n3. Corrosion resistance: Must withstand the highly saline environment of body fluids.\nCommon biocompatible materials include Titanium alloys, 316L Stainless Steel, and ceramics like Alumina."
        }
      ],
      problemSolving: [
        {
          question: "Design a high-pass active RC filter to block low-frequency baseline wander (< 0.5 Hz) in an ECG acquisition circuit. Calculate the resistor value if the capacitor is set to 1 microfarad.",
          answer: "The cutoff frequency equation for an active RC filter is:\n$$f_c = \\frac{1}{2\\pi \\cdot R \\cdot C}$$\n1. Rearrange to solve for $R$:\n   $$R = \\frac{1}{2\\pi \\cdot f_c \\cdot C}$$\n2. Substitute $f_c = 0.5 \\text{ Hz}$ and $C = 1 \\mu\\text{F} = 10^{-6}\\text{ F}$:\n   $$R = \\frac{1}{2\\pi \\cdot 0.5 \\cdot 10^{-6}} = \\frac{1}{\\pi \\cdot 10^{-6}} = \\frac{10^6}{\\pi} \\approx 318,310 \\text{ }\\Omega \\approx 318 \\text{ k}\\Omega$$\nUsing a $318\\text{ k}\\Omega$ resistor will set the cutoff exactly at $0.5\\text{ Hz}$."
        },
        {
          question: "Determine the spatial resolution (pixel size) of a CT scanner with a Field of View (FOV) of 250 mm and an acquisition matrix size of 512 x 512.",
          answer: "The formula for CT spatial pixel size is:\n$$\\text{Pixel Size} = \\frac{\\text{FOV}}{\\text{Matrix Size}}$$\nSubstitute the values:\n$$\\text{Pixel Size} = \\frac{250 \\text{ mm}}{512} \\approx 0.488 \\text{ mm/pixel}$$\nThe spatial resolution is approximately $0.49\\text{ mm}$."
        }
      ],
      applied: [
        {
          question: "How would you design a prosthetic knee joint for a young, active patient?",
          answer: "1. Material Selection: Use Titanium-6Aluminum-4Vanadium alloy or carbon-fiber composites for high strength-to-weight ratio and bio-inertness.\n2. Kinematics: Incorporate a polycentric (multi-axis) hinge design to replicate the natural sliding-rolling motion of the human knee.\n3. Damping: Deploy a micro-hydraulic damper with an embedded microcontroller that adjusts resistance dynamically based on IMU data, allowing walking and running.\n4. Interface: Design a soft silicone gel sleeve insert to prevent pressure sores at the residual limb socket."
        },
        {
          question: "How do you isolate and debug a 50Hz power line noise issue during ECG sensor testing?",
          answer: "1. Hardware verification: Check electrode gel wetness; high contact impedance increases noise. Verify that the shield lines of the patient cable are connected to system ground.\n2. Instrumentation checks: Verify the CMRR of the pre-amplifier. If the op-amp input impedances are mismatched, common-mode 50Hz noise will convert to differential noise.\n3. Software fix: Apply a digital IIR Notch Filter tuned precisely to $50\\text{ Hz}$ (or $60\\text{ Hz}$ depending on grid location) in code to eliminate power-line interference without distorting QRS details."
        }
      ],
      hrStyle: [
        {
          question: "How do you address ethical and patient-safety guidelines during medical device design?",
          answer: "Patient safety is our primary engineering metric:\n- Electrical Isolation: I design the device inputs to be isolated from mains voltage using optical couplers, keeping leakage currents under $10\\mu\\text{A}$ (satisfying IEC 60601-1 standards).\n- Redundancy: Implement watchdogs and hardware fail-safes (e.g. pacemakers revert to fixed backing rates if code freezes).\n- FDA validation: Keep rigorous design records (DHF) and trace verification steps to ensure patient protection before clinical trials."
        },
        {
          question: "Describe a time your biomedical team faced a disagreement during testing of a clinical sensor prototype.",
          answer: "Answer outline: Detail how your team disagreed on whether a sensor's temperature drift was acceptable. You resolved this by reviewing the FDA specifications for clinical thermometers, showing that the drift exceeded limits, and agreeing objectively to implement a compensation equation in software."
        }
      ]
    }
  },

  BT: {
    name: "Biotechnology",
    icon: "🧬",
    aptitude: {
      description: "Quantitative, Logical Reasoning, and Probability/Statistics math for pharmaceutical, agri-tech, and bio-industrial sectors.",
      topics: [
        "Quantitative: Probability (Mendelian ratios), permutations, statistics (T-tests, Chi-square), ratios.",
        "Logical: Genetic trees, biological process flow charts, classification patterns.",
        "Verbal: Patent specifications reading, safety guidelines verification."
      ],
      playlists: [
        { title: "Sanfoundry Biotechnology MCQs", url: "https://www.sanfoundry.com/" }
      ]
    },
    coding: {
      description: "Bioinformatics coding, DNA alignment search algorithms, and biological database parsing.",
      topics: [
        "Bioinformatics Coding: Python scripts to parse FASTA files, count GC-content, and find motifs.",
        "Database Tools: Running command-line BLAST searches, querying NCBI records."
      ],
      playlists: [
        { title: "Rosalind Bioinformatics Coding Portal", url: "https://rosalind.info/problems/locations/" }
      ]
    },
    core: {
      description: "Genetics, molecular replication, cell growth math, and bioprocess purification units.",
      topics: [
        "Molecular Biology: DNA replication enzymes, RNA transcription factors, translation models, CRISPR-Cas9 mechanics.",
        "Bioprocess Engineering: Microbial growth curves, Monod model equations, bioreactor aeration, downstream purification.",
        "Genetics & Biotech: Mendelian inheritance, PCR thermal profiles, HPLC chromatography."
      ],
      playlists: [
        { title: "Shomu's Biology (Biotechnology Lectures)", url: "https://www.youtube.com/c/ShomusBiologyOfficial" },
        { title: "NPTEL Pharmaceutical Biotechnology", url: "https://archive.nptel.ac.in/courses/102/105/102105058/" }
      ]
    },
    interview: {
      conceptual: [
        {
          question: "Describe the steps and enzyme functions involved in eukaryotic DNA Replication.",
          answer: "DNA replication is highly coordinated and semi-conservative:\n1. Unwinding: Helicase breaks hydrogen bonds to unwind the double helix, forming a replication fork. Single-Stranded Binding Proteins (SSBs) stabilize the strands.\n2. Priming: Primase synthesizes short RNA primers to provide a free 3'-OH end.\n3. Elongation: DNA Polymerase $\\delta$ and $\\epsilon$ add nucleotides in the 5' to 3' direction. The leading strand is synthesized continuously, while the lagging strand is synthesized discontinuously, creating Okazaki fragments.\n4. Ligation: Exonuclease removes RNA primers, DNA Polymerase fills the gaps, and DNA Ligase seals the phosphodiester backbone."
        },
        {
          question: "What is the Monod Model for microbial growth in bioprocess engineering?",
          answer: "The Monod model relates the specific growth rate ($\\mu$) of microorganisms to the concentration of a limiting substrate ($S$):\n$$\\mu = \\mu_{max} \\cdot \\frac{S}{K_s + S}$$\nwhere:\n- $\\mu$ is the specific growth rate ($h^{-1}$).\n- $\\mu_{max}$ is the maximum growth rate.\n- $S$ is the substrate concentration ($g/L$).\n- $K_s$ is the half-velocity constant (substrate concentration where $\\mu = \\mu_{max}/2$).\nThis is mathematically equivalent to Michaelis-Menten kinetics and is vital for bioreactor scaling."
        }
      ],
      problemSolving: [
        {
          question: "Calculate the doubling time of a bacterial culture that grows from $10^3$ to $10^6$ cells in 6 hours of exponential growth.",
          answer: "The exponential growth equation is:\n$$N_t = N_0 \\cdot 2^g$$\nwhere $g$ is the number of generations:\n1. Solve for $g$:\n   $$10^6 = 10^3 \\cdot 2^g \\implies 2^g = 1000$$\n   $$g = \\log_2(1000) = \\frac{\\ln(1000)}{\\ln(2)} \\approx \\frac{6.908}{0.693} \\approx 9.96 \\text{ generations}$$\n2. Calculate Doubling Time ($t_d$):\n   $$t_d = \\frac{\\text{Total Time } t}{g} = \\frac{6 \\text{ hours}}{9.96} \\approx 0.602 \\text{ hours} \\approx 36.1 \\text{ minutes}$$\nThe doubling time is approximately 36 minutes."
        },
        {
          question: "An enzyme has a maximum velocity ($V_{max}$) of 50 micromoles/sec, and the substrate concentration is equal to $K_m$. What is the reaction velocity (V)?",
          answer: "Using the Michaelis-Menten equation:\n$$V = \\frac{V_{max} \\cdot S}{K_m + S}$$\nSince we are given that $S = K_m$:\n$$V = \\frac{V_{max} \\cdot K_m}{K_m + K_m} = \\frac{V_{max} \\cdot K_m}{2 K_m} = \\frac{V_{max}}{2}$$\nSubstitute $V_{max} = 50 \\mu\\text{mol/s}$:\n$$V = \\frac{50}{2} = 25 \\mu\\text{mol/s}$$\nThe reaction velocity is exactly half of the maximum velocity."
        }
      ],
      applied: [
        {
          question: "Outline the downstream purification process to isolate a recombinant monoclonal antibody from cell harvest.",
          answer: "1. Clarification: Centrifugation or depth filtration to remove mammalian host cells and cellular debris.\n2. Capture: Protein A Affinity Chromatography. The antibody binds specifically to the resin, and impurities are washed away. Elute the target by lowering pH to $\\approx 3.0$.\n3. Viral Inactivation: Hold the eluate at low pH for 1 hour to denature enveloped viruses.\n4. Polishing: Ion Exchange Chromatography (Anion/Cation) to remove trace host cell proteins (HCP), DNA, and antibody aggregates.\n5. Formulation: Ultrafiltration/Diafiltration to exchange buffer and concentrate the purified antibody to drug storage requirements."
        },
        {
          question: "How do you optimize growth yields of a recombinant protein expressed in E. coli in a batch fermenter?",
          answer: "1. Aeration Control: Monitor Dissolved Oxygen (DO). Adjust agitation speed and air flow rate to maintain DO above $30\\%$ to prevent anaerobic byproduct (acetate) accumulation.\n2. Induction point: Monitor optical density ($OD_{600}$). Induce protein expression (e.g. using IPTG) during mid-exponential phase to maximize cellular machinery availability.\n3. Codon Optimization: Modify the recombinant gene sequence to use codons favored by E. coli, eliminating translation bottlenecks."
        }
      ],
      hrStyle: [
        {
          question: "Describe a time your biotechnology team faced contamination in a cell culture run. How did you investigate it?",
          answer: "Situation: During a 5-day yeast fermentation lab, our control flask turned turbid, indicating bacterial contamination, which threatened to ruin our dataset.\n- Task: We had to identify the point of entry and save our remaining runs.\n- Action: I led the troubleshooting. I took samples for gram staining and confirmed rod-shaped bacteria. I systematically audited our aseptic flow: autoclave logs, hood airflow, and media sterility. I found that the autoclave temperature sensor had logged a lower temp during our run due to a steam valve clog.\n- Result: We cleaned the fermenters with sanitizers, replaced the media, autoclaved again under verified sensors, and successfully finished our project with sterile cultures."
        },
        {
          question: "How do you handle biosafety protocols (e.g. Biosafety Levels) when working in a collaborative team?",
          answer: "Answer outline: Detail strictly enforcing BSL safety guidelines (BSL-1 or BSL-2). Wearing lab coats, gloves, and eye protection. Ensuring autoclave schedules are checked, biological waste disposal protocols are followed, and clean team communication is maintained to prevent contamination or exposure."
        }
      ]
    }
  }
};
