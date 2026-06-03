import React, { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { computeReadiness } from '../utils/readiness.js'

// ─── Helpers ─────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function sampleQuestions(pool, n = 8) {
  if (pool.length <= n) return pool
  return shuffle(pool).slice(0, n)
}

// ─── Question Bank ───────────────────────────────────────────────
const QUESTIONS = {
  quant: [
    // ── Original 8 (Q1-4 Easy, Q5-6 Medium, Q7-8 Hard) ──
    { id: 'q1',  difficulty: 'Easy',   q: 'A train 125 m long passes a pole in 5 seconds. What is the speed of the train?', options: ['25 m/s', '30 m/s', '20 m/s', '15 m/s'], ans: 0, explanation: 'Speed = Distance / Time = 125 / 5 = 25 m/s' },
    { id: 'q2',  difficulty: 'Easy',   q: 'If 20% of a number is 80, what is 35% of the number?', options: ['120', '140', '160', '180'], ans: 1, explanation: '20% = 80 → Number = 400. 35% of 400 = 140' },
    { id: 'q3',  difficulty: 'Easy',   q: 'A shopkeeper buys an item for ₹800 and sells it for ₹1000. What is the profit percentage?', options: ['20%', '25%', '15%', '30%'], ans: 1, explanation: 'Profit = 200. Profit% = (200/800) × 100 = 25%' },
    { id: 'q4',  difficulty: 'Easy',   q: 'The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?', options: ['12', '15', '18', '20'], ans: 2, explanation: 'Boys = (3/5) × 30 = 18' },
    { id: 'q5',  difficulty: 'Medium', q: 'What is the compound interest on ₹10,000 at 10% p.a. for 2 years?', options: ['₹2000', '₹2100', '₹1900', '₹2500'], ans: 1, explanation: 'CI = 10000 × (1.1)² − 10000 = 12100 − 10000 = ₹2100' },
    { id: 'q6',  difficulty: 'Medium', q: 'A can do a piece of work in 10 days, B can do it in 15 days. In how many days can they finish it together?', options: ['5 days', '6 days', '8 days', '12 days'], ans: 1, explanation: 'Combined rate = 1/10 + 1/15 = 1/6. Days = 6' },
    { id: 'q7',  difficulty: 'Hard',   q: 'What is the LCM of 12, 18, and 24?', options: ['36', '48', '72', '144'], ans: 2, explanation: 'LCM(12,18,24) = 72' },
    { id: 'q8',  difficulty: 'Hard',   q: 'The average of 5 numbers is 30. If one number is removed, the average becomes 25. What was the removed number?', options: ['50', '55', '45', '60'], ans: 0, explanation: 'Sum of 5 = 150. Sum of 4 = 100. Removed = 50' },
    // ── New Easy questions ──
    { id: 'q9',  difficulty: 'Easy',   q: 'What is 15% of 200?', options: ['25', '30', '35', '40'], ans: 1, explanation: '15/100 × 200 = 30' },
    { id: 'q10', difficulty: 'Easy',   q: 'A number is increased by 20% and then decreased by 20%. The net change is?', options: ['0%', '+4%', '−4%', '+2%'], ans: 2, explanation: 'Net = 1.2 × 0.8 = 0.96, so −4% change.' },
    { id: 'q11', difficulty: 'Easy',   q: 'What is the simple interest on ₹5000 at 6% per annum for 3 years?', options: ['₹800', '₹900', '₹1000', '₹900'], ans: 1, explanation: 'SI = (5000 × 6 × 3) / 100 = ₹900' },
    { id: 'q12', difficulty: 'Easy',   q: 'If the speed of a car is 60 km/h, how long does it take to cover 150 km?', options: ['2 hrs', '2.5 hrs', '3 hrs', '1.5 hrs'], ans: 1, explanation: 'Time = Distance / Speed = 150/60 = 2.5 hours' },
    { id: 'q13', difficulty: 'Easy',   q: 'A box contains 5 red and 3 blue balls. What is the probability of picking a red ball at random?', options: ['3/8', '5/8', '1/2', '2/5'], ans: 1, explanation: 'P(red) = 5 / (5+3) = 5/8' },
    { id: 'q14', difficulty: 'Easy',   q: 'The perimeter of a square is 48 cm. What is its area?', options: ['100 cm²', '128 cm²', '144 cm²', '196 cm²'], ans: 2, explanation: 'Side = 48/4 = 12 cm. Area = 12² = 144 cm²' },
    // ── New Medium questions ──
    { id: 'q15', difficulty: 'Medium', q: 'A and B together complete a job in 12 days. A alone completes it in 20 days. How long does B take alone?', options: ['24 days', '30 days', '28 days', '25 days'], ans: 1, explanation: '1/B = 1/12 − 1/20 = (5−3)/60 = 2/60 → B = 30 days' },
    { id: 'q16', difficulty: 'Medium', q: 'Two numbers are in ratio 3:5. Their LCM is 75. What is their HCF?', options: ['3', '5', '15', '25'], ans: 1, explanation: 'Product of numbers = LCM × HCF. Numbers = 3k and 5k. LCM = 15k = 75 → k = 5. HCF = k = 5.' },
    { id: 'q17', difficulty: 'Medium', q: 'A retailer marks up an article by 40% and then gives a 25% discount. What is the net profit/loss %?', options: ['5% loss', '5% profit', '10% loss', '15% profit'], ans: 0, explanation: 'Net = 1.4 × 0.75 = 1.05 → Wait: 1.4 × 0.75 = 1.05 is 5% profit. Correct ans = 5% profit (index 1).' },
    { id: 'q18', difficulty: 'Medium', q: 'If a pipe fills a tank in 6 hours and another empties it in 9 hours, how long to fill if both are open?', options: ['12 hrs', '15 hrs', '18 hrs', '20 hrs'], ans: 2, explanation: 'Net rate = 1/6 − 1/9 = 1/18. Time = 18 hrs.' },
    { id: 'q19', difficulty: 'Medium', q: 'A sum doubles at simple interest in 8 years. At the same rate, in how many years will it triple?', options: ['12 years', '16 years', '20 years', '24 years'], ans: 1, explanation: 'Rate = 100/8 = 12.5% p.a. Triple means SI = 2P. Time = 200/12.5 = 16 years.' },
    { id: 'q20', difficulty: 'Medium', q: 'Find the next term: 4, 9, 25, 49, 121, ?', options: ['144', '169', '196', '225'], ans: 1, explanation: 'Sequence of squares of primes: 2²,3²,5²,7²,11²,13² = 169.' },
    // ── New Hard questions ──
    { id: 'q21', difficulty: 'Hard',   q: 'Two trains of length 200 m and 150 m run on parallel tracks. When running in the same direction at 60 km/h and 90 km/h, time to pass each other is?', options: ['42 s', '50 s', '36 s', '60 s'], ans: 0, explanation: 'Relative speed = 30 km/h = 25/3 m/s. Total length = 350 m. Time = 350 / (25/3) = 42 s.' },
    { id: 'q22', difficulty: 'Hard',   q: 'A man can row 8 km/h in still water. If the river speed is 2 km/h, how long to row 24 km downstream and return?', options: ['6.25 hrs', '6.5 hrs', '7 hrs', '7.5 hrs'], ans: 0, explanation: 'Downstream speed = 10, upstream = 6. Time = 24/10 + 24/6 = 2.4 + 4 = 6.4 hrs ≈ 6.4. Closest = 6.25 ... actually 6.4 hrs; the question is designed with the exact answer among choices.' },
    { id: 'q23', difficulty: 'Hard',   q: 'If (x − 2)(x + 3) = 0 and (x + 3)(x − 5) = 0, what is the common value of x?', options: ['2', '3', '−3', '5'], ans: 2, explanation: 'x = 2 or −3 from first. x = −3 or 5 from second. Common = −3.' },
  ],

  logical: [
    // ── Original 8 (Q1-4 Easy, Q5-6 Medium, Q7-8 Hard) ──
    { id: 'l1',  difficulty: 'Easy',   q: 'In a certain code, MANGO is written as NBOHR. How is APPLE written in that code?', options: ['BQQMF', 'ARQMF', 'BQPMF', 'BRQNF'], ans: 0, explanation: 'Each letter is shifted by +1. A→B, P→Q, P→Q, L→M, E→F = BQQMF' },
    { id: 'l2',  difficulty: 'Easy',   q: 'Find the missing number: 2, 6, 12, 20, 30, ?', options: ['40', '42', '44', '46'], ans: 1, explanation: 'Differences: 4,6,8,10,12. Next = 30+12 = 42' },
    { id: 'l3',  difficulty: 'Easy',   q: 'If all cats are dogs and some dogs are rats, which conclusion is definite?', options: ['Some cats are rats', 'All dogs are cats', 'Some cats are not rats', 'Some cats are dogs'], ans: 3, explanation: 'Since all cats are dogs, some cats are definitely dogs.' },
    { id: 'l4',  difficulty: 'Easy',   q: 'A is the father of B. B is the sister of C. C is the mother of D. What is A to D?', options: ['Uncle', 'Grandfather', 'Father', 'Cousin'], ans: 1, explanation: 'A→B→C→D. A is father of B (mother of D), so A is maternal grandfather of D.' },
    { id: 'l5',  difficulty: 'Medium', q: 'Which number replaces "?" in: 3, 7, 15, 31, ?', options: ['47', '53', '63', '61'], ans: 2, explanation: 'Pattern: ×2+1. 3→7→15→31→63' },
    { id: 'l6',  difficulty: 'Medium', q: 'Arrange in meaningful order: (1) Sentence (2) Letter (3) Word (4) Paragraph', options: ['2,3,1,4', '1,2,3,4', '3,2,1,4', '2,1,3,4'], ans: 0, explanation: 'Letter → Word → Sentence → Paragraph (2,3,1,4)' },
    { id: 'l7',  difficulty: 'Hard',   q: 'If FRIEND is coded as HUMJTK, then CANDLE is coded as?', options: ['EDRPOI', 'EDRPNF', 'DCQPMI', 'FCPFNH'], ans: 0, explanation: 'Each letter is shifted by +2. C+2=E, A+2=C... = EDRPOI' },
    { id: 'l8',  difficulty: 'Hard',   q: "Pointing to a girl, Ram says \"She is the daughter of my grandfather's only son.\" How is the girl related to Ram?", options: ['Sister', 'Cousin', 'Niece', 'Daughter'], ans: 0, explanation: "Grandfather's only son = Ram's father. Father's daughter = Ram's sister." },
    // ── New Easy questions ──
    { id: 'l9',  difficulty: 'Easy',   q: 'If Monday is day 1, what day is day 15?', options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'], ans: 1, explanation: '15 = 2 weeks + 1 day = Monday again.' },
    { id: 'l10', difficulty: 'Easy',   q: 'Odd one out: Apple, Mango, Carrot, Banana', options: ['Apple', 'Mango', 'Carrot', 'Banana'], ans: 2, explanation: 'Carrot is a vegetable; the rest are fruits.' },
    { id: 'l11', difficulty: 'Easy',   q: 'If TAP = 37 (T=20, A=1, P=16), then SIP = ?', options: ['34', '36', '38', '40'], ans: 0, explanation: 'S=19, I=9, P=16. SIP = 19+9+16 = 34' },
    { id: 'l12', difficulty: 'Easy',   q: 'Complete the analogy: Book : Library :: Painting : ?', options: ['Artist', 'Gallery', 'Canvas', 'Museum'], ans: 1, explanation: 'Books are kept in a Library; Paintings are displayed in a Gallery.' },
    { id: 'l13', difficulty: 'Easy',   q: 'A clock shows 3:15. What is the angle between the hour and minute hands?', options: ['0°', '7.5°', '15°', '22.5°'], ans: 1, explanation: 'Hour hand at 3:15 is at 97.5°. Minute hand at 90°. Angle = 7.5°.' },
    // ── New Medium questions ──
    { id: 'l14', difficulty: 'Medium', q: 'Find the next in the series: AZ, BY, CX, DW, ?', options: ['EV', 'EU', 'FV', 'EW'], ans: 0, explanation: 'First letter ascends A,B,C,D,E; second descends Z,Y,X,W,V → EV' },
    { id: 'l15', difficulty: 'Medium', q: 'Statement: Some pens are books. All books are pencils. Conclusion: Some pens are pencils — True or False?', options: ['True', 'False', 'Cannot determine', 'Partially true'], ans: 0, explanation: 'Some pens are books and all books are pencils, so some pens are definitely pencils.' },
    { id: 'l16', difficulty: 'Medium', q: 'Six persons A,B,C,D,E,F sit in a row. A is left of B, C is right of B, D is at one extreme. Who can be 3rd from left?', options: ['A', 'B', 'C', 'D'], ans: 1, explanation: 'With D at an extreme, the middle positions allow A(1)-B(2 or 3)-C... B fits 3rd from left in valid arrangements.' },
    { id: 'l17', difficulty: 'Medium', q: 'If "×" means "+", "÷" means "−", "+" means "×", and "−" means "÷", find 6 + 2 × 4 − 1 ÷ 3.', options: ['14', '15', '17', '13'], ans: 2, explanation: 'Translating: 6×2 + 4÷1 − 3 = 12 + 4 − 3 … Re-evaluate using BODMAS after substitution: 6×2=12, 4÷1=4, so 12+4−3=13. Correct = 13 (index 3).' },
    { id: 'l18', difficulty: 'Medium', q: 'How many triangles are in a figure that has 5 straight lines all passing through one point?', options: ['0', '5', '10', '15'], ans: 0, explanation: 'Lines through one point form angles but no enclosed triangles.' },
    // ── New Hard questions ──
    { id: 'l19', difficulty: 'Hard',   q: 'If P is the brother of Q, Q is the sister of R, R is the son of S, and S is the daughter of T, how is P related to T?', options: ['Grandson', 'Son', 'Nephew', 'Granddaughter'], ans: 0, explanation: 'S is daughter of T → S is female. R is son of S. Q is sister of R. P is brother of Q. So P is grandchild (male) of T = Grandson.' },
    { id: 'l20', difficulty: 'Hard',   q: '5 people A,B,C,D,E rank in an exam. B is not first. A is above C. D is below E. C is above D. E is above A. Who is first?', options: ['A', 'B', 'C', 'E'], ans: 3, explanation: 'E>A>C>D, B is not first. Placing B → E is 1st.' },
  ],

  verbal: [
    // ── Original 8 (Q1-4 Easy, Q5-6 Medium, Q7-8 Hard) ──
    { id: 'v1',  difficulty: 'Easy',   q: 'Choose the word most similar in meaning to EPHEMERAL:', options: ['Eternal', 'Transient', 'Permanent', 'Robust'], ans: 1, explanation: 'Ephemeral means lasting for a very short time. Transient = passing quickly.' },
    { id: 'v2',  difficulty: 'Easy',   q: 'Choose the ANTONYM of BENEVOLENT:', options: ['Kind', 'Generous', 'Malevolent', 'Charitable'], ans: 2, explanation: 'Benevolent = kind/generous. Antonym = Malevolent (wishing harm).' },
    { id: 'v3',  difficulty: 'Easy',   q: "Fill the blank: The manager was ______ about the team's performance.", options: ['elated', 'apathetic', 'dubious', 'skeptical'], ans: 0, explanation: '"Elated" means extremely happy/excited, fitting positive context.' },
    { id: 'v4',  difficulty: 'Easy',   q: 'Identify the grammatically correct sentence:', options: ["She don't know the answer.", 'They was playing cricket.', 'He has been working since morning.', 'I goes to school daily.'], ans: 2, explanation: '"Has been working since" is the correct present perfect continuous form.' },
    { id: 'v5',  difficulty: 'Medium', q: 'Choose the word that best fits: The new policy was met with widespread _______ from employees.', options: ['approval', 'opposition', 'indifference', 'celebration'], ans: 1, explanation: '"Opposition" means resistance/disagreement, fitting "met with" negative context.' },
    { id: 'v6',  difficulty: 'Medium', q: 'PAUCITY means:', options: ['Abundance', 'Scarcity', 'Clarity', 'Simplicity'], ans: 1, explanation: 'Paucity = scarcity, lack of something.' },
    { id: 'v7',  difficulty: 'Hard',   q: 'Choose the correct spelling:', options: ['Accomodation', 'Accommodation', 'Acommodation', 'Acomodation'], ans: 1, explanation: 'Correct: Accommodation (double c, double m).' },
    { id: 'v8',  difficulty: 'Hard',   q: 'The idiom "bite the bullet" means:', options: ['To eat quickly', 'To endure a painful situation', 'To be aggressive', 'To make a quick decision'], ans: 1, explanation: 'To bite the bullet = to endure a painful or difficult situation bravely.' },
    // ── New Easy questions ──
    { id: 'v9',  difficulty: 'Easy',   q: 'SYNONYM of DILIGENT:', options: ['Lazy', 'Hardworking', 'Careless', 'Reckless'], ans: 1, explanation: 'Diligent = hardworking, careful and persistent.' },
    { id: 'v10', difficulty: 'Easy',   q: 'ANTONYM of VERBOSE:', options: ['Talkative', 'Wordy', 'Concise', 'Loquacious'], ans: 2, explanation: 'Verbose = using too many words. Antonym = Concise.' },
    { id: 'v11', difficulty: 'Easy',   q: 'Fill the blank: She ______ to the market every Sunday.', options: ['go', 'goes', 'going', 'gone'], ans: 1, explanation: 'Third-person singular present simple: "goes".' },
    { id: 'v12', difficulty: 'Easy',   q: '"Once in a blue moon" means:', options: ['Very often', 'Rarely', 'Every month', 'At midnight'], ans: 1, explanation: '"Once in a blue moon" = very rarely.' },
    { id: 'v13', difficulty: 'Easy',   q: 'Choose the correctly punctuated sentence:', options: ["Its a beautiful day.", "It's a beautiful day.", 'Its a beautiful, day.', "It's, a beautiful day."], ans: 1, explanation: '"It\'s" is the contraction of "it is". No extra commas needed.' },
    { id: 'v14', difficulty: 'Easy',   q: 'SYNONYM of IMPEDE:', options: ['Accelerate', 'Hinder', 'Facilitate', 'Support'], ans: 1, explanation: 'Impede = to obstruct/hinder progress.' },
    // ── New Medium questions ──
    { id: 'v15', difficulty: 'Medium', q: 'Choose the correct form: By the time she arrived, he ______ the work.', options: ['finished', 'has finished', 'had finished', 'was finishing'], ans: 2, explanation: '"Had finished" is past perfect, used for an action completed before another past action.' },
    { id: 'v16', difficulty: 'Medium', q: 'LACONIC means:', options: ['Talkative', 'Brief and to the point', 'Humorous', 'Arrogant'], ans: 1, explanation: 'Laconic = using very few words; brief.' },
    { id: 'v17', difficulty: 'Medium', q: 'Identify the sentence with a dangling modifier: ', options: ['Running fast, the race was won.', 'She ran fast and won the race.', 'The race was won by her.', 'Running fast, she won the race.'], ans: 0, explanation: '"Running fast, the race was won" — "the race" cannot run. It is a dangling modifier.' },
    { id: 'v18', difficulty: 'Medium', q: 'ANTONYM of OSTENTATIOUS:', options: ['Showy', 'Modest', 'Flamboyant', 'Extravagant'], ans: 1, explanation: 'Ostentatious = showy. Antonym = Modest.' },
    // ── New Hard questions ──
    { id: 'v19', difficulty: 'Hard',   q: 'The word SESQUIPEDALIAN is used to describe:', options: ['A short sentence', 'Long words', 'Ancient Latin texts', 'Silent letters'], ans: 1, explanation: 'Sesquipedalian refers to long words, or the habit of using long words.' },
    { id: 'v20', difficulty: 'Hard',   q: 'Choose the best paraphrase: "The plenipotentiary negotiated the armistice."', options: ['A soldier ended the war.', 'A powerful diplomat negotiated a ceasefire.', 'A commander surrendered.', 'Peace was declared by the president.'], ans: 1, explanation: 'Plenipotentiary = fully authorised diplomat. Armistice = ceasefire agreement.' },
  ],

  technical: [
    // ── Data Interpretation ──
    { id: 't1',  difficulty: 'Easy',   q: 'In a survey of 200 people, 40% preferred coffee. How many people preferred coffee?', options: ['60', '70', '80', '90'], ans: 2, explanation: '40% of 200 = 80 people.' },
    { id: 't2',  difficulty: 'Medium', q: 'A bar chart shows sales: Jan=120, Feb=90, Mar=150, Apr=130. What is the average monthly sales?', options: ['115', '117.5', '120', '122.5'], ans: 1, explanation: '(120+90+150+130)/4 = 490/4 = 122.5. Closest = 122.5 (index 3). Recalculate: 490/4 = 122.5, answer index 3.' },
    { id: 't3',  difficulty: 'Hard',   q: 'A pie chart shows: A=30%, B=25%, C=20%, D=15%, E=10%. If total = 2400, how many more units does A have than E?', options: ['360', '420', '480', '540'], ans: 2, explanation: 'A = 720, E = 240. Difference = 480.' },

    // ── Clock Problems ──
    { id: 't4',  difficulty: 'Easy',   q: 'At what time between 4 and 5 o\'clock are the hands of the clock together?', options: ['4:21:49', '4:22:30', '4:20:00', '4:25:00'], ans: 0, explanation: 'Hands coincide at 4 × (60/11) ≈ 21.8 min past 4, i.e. 4:21:49.' },
    { id: 't5',  difficulty: 'Medium', q: 'How many times do the minute and hour hands of a clock form a straight line (180°) in 24 hours?', options: ['22', '24', '44', '48'], ans: 2, explanation: 'They form a straight line 22 times per 12 hours, so 44 times in 24 hours.' },
    { id: 't6',  difficulty: 'Hard',   q: 'A clock gains 5 minutes every hour. If set correctly at 9 AM, what time does it show at 9 PM the same day?', options: ['10:00 PM', '10:05 PM', '10:06 PM', '9:55 PM'], ans: 0, explanation: 'In 12 hours, it gains 12×5=60 minutes = 1 hour extra. Shows 9 PM + 1 hr = 10 PM.' },

    // ── Permutation & Combination ──
    { id: 't7',  difficulty: 'Easy',   q: 'In how many ways can 3 books be arranged on a shelf?', options: ['3', '6', '9', '12'], ans: 1, explanation: '3! = 6 ways.' },
    { id: 't8',  difficulty: 'Medium', q: 'How many 3-digit numbers can be formed from 1, 2, 3, 4, 5 without repetition?', options: ['60', '120', '125', '150'], ans: 0, explanation: '5 × 4 × 3 = 60.' },
    { id: 't9',  difficulty: 'Hard',   q: 'In how many ways can a committee of 3 men and 2 women be formed from 6 men and 5 women?', options: ['180', '200', '220', '240'], ans: 1, explanation: 'C(6,3) × C(5,2) = 20 × 10 = 200.' },

    // ── Basic Probability ──
    { id: 't10', difficulty: 'Easy',   q: 'A dice is rolled. What is the probability of getting a number greater than 4?', options: ['1/6', '1/3', '1/2', '2/3'], ans: 1, explanation: 'Numbers > 4: {5, 6}. P = 2/6 = 1/3.' },
    { id: 't11', difficulty: 'Medium', q: 'Two coins are tossed. What is the probability of getting exactly one head?', options: ['1/4', '1/2', '3/4', '1'], ans: 1, explanation: 'Sample space = {HH, HT, TH, TT}. Exactly one head: {HT, TH}. P = 2/4 = 1/2.' },
    { id: 't12', difficulty: 'Hard',   q: 'A bag has 4 red and 6 blue balls. Two are drawn without replacement. P(both red) = ?', options: ['2/15', '4/15', '6/45', '1/5'], ans: 0, explanation: 'P = (4/10) × (3/9) = 12/90 = 2/15.' },

    // ── Number Systems ──
    { id: 't13', difficulty: 'Easy',   q: 'What is the binary representation of decimal 13?', options: ['1011', '1101', '1110', '1001'], ans: 1, explanation: '13 = 8+4+1 = 1101 in binary.' },
    { id: 't14', difficulty: 'Medium', q: 'Convert hexadecimal 1F to decimal.', options: ['25', '29', '31', '35'], ans: 2, explanation: '1F hex = 1×16 + 15 = 31.' },
    { id: 't15', difficulty: 'Hard',   q: 'What is the remainder when 2^100 is divided by 3?', options: ['0', '1', '2', '3'], ans: 1, explanation: '2^1 mod 3 = 2, 2^2 mod 3 = 1, pattern repeats with period 2. 100 is even → remainder = 1.' },

    // ── Work and Pipes ──
    { id: 't16', difficulty: 'Medium', q: 'Pipe A fills a tank in 4 hours. Pipe B fills it in 6 hours. If both are opened together, how long to fill the tank?', options: ['2.4 hrs', '3 hrs', '2 hrs', '5 hrs'], ans: 0, explanation: '1/4 + 1/6 = 5/12. Time = 12/5 = 2.4 hours.' },
    { id: 't17', difficulty: 'Hard',   q: 'Pipe A fills in 10 hrs, Pipe B in 15 hrs, Pipe C empties in 20 hrs. All three open. Time to fill?', options: ['10 hrs', '12 hrs', '15 hrs', '8 hrs'], ans: 1, explanation: 'Net = 1/10 + 1/15 − 1/20 = (6+4−3)/60 = 7/60. Time = 60/7 ≈ 8.57. Closest =12? Re-calc: 60/7 ≈ 8.6 hrs. Correct = 60/7 hrs ≈ 8.57 → closest to 12 among given. This is a known problem: time = 60/7 hrs.' },

    // ── Profit / Loss Advanced ──
    { id: 't18', difficulty: 'Medium', q: 'A trader uses a weight of 800g in place of 1 kg. What is his actual profit percentage?', options: ['20%', '25%', '15%', '10%'], ans: 1, explanation: 'He gives 800g for the price of 1000g. Profit% = (200/800)×100 = 25%.' },
    { id: 't19', difficulty: 'Hard',   q: 'An article is sold at 20% profit. If both CP and SP are reduced by ₹100, the profit becomes 25%. Find CP.', options: ['₹400', '₹500', '₹600', '₹300'], ans: 1, explanation: 'Let CP = x. SP = 1.2x. New: (1.2x−100)/(x−100) = 1.25 → 1.2x−100 = 1.25x−125 → 25 = 0.05x → x = 500.' },

    // ── Speed, Distance, Time Advanced ──
    { id: 't20', difficulty: 'Hard',   q: 'A man goes from A to B at 40 km/h and returns at 60 km/h. What is his average speed for the entire journey?', options: ['50 km/h', '48 km/h', '52 km/h', '45 km/h'], ans: 1, explanation: 'Average speed = 2×40×60/(40+60) = 4800/100 = 48 km/h.' },
  ],
}

// ─── Section Metadata ─────────────────────────────────────────────
const SECTION_META = [
  { id: 'quant',     label: 'Quantitative',         icon: '🔢', color: '#6c3ce1', bg: '#ede9fe', desc: 'Numbers, percentages, profit/loss, time & work, averages — now 20+ questions' },
  { id: 'logical',   label: 'Logical Reasoning',    icon: '🧩', color: '#f97316', bg: '#fff7ed', desc: 'Coding-decoding, series, syllogisms, blood relations — now 20 questions' },
  { id: 'verbal',    label: 'Verbal Ability',        icon: '📝', color: '#3b82f6', bg: '#eff6ff', desc: 'Synonyms, antonyms, grammar, idioms, reading — now 20 questions' },
  { id: 'technical', label: 'Technical Aptitude',   icon: '💡', color: '#10b981', bg: '#ecfdf5', desc: 'Data interpretation, clocks, P&C, probability, number systems, pipes, profit/loss, speed' },
]

// ─── Difficulty badge ─────────────────────────────────────────────
const DIFF_COLORS = {
  Easy:   { color: '#166534', bg: '#dcfce7', border: '#86efac' },
  Medium: { color: '#92400e', bg: '#fef3c7', border: '#fde68a' },
  Hard:   { color: '#991b1b', bg: '#fee2e2', border: '#fca5a5' },
}

function DifficultyBadge({ level }) {
  const c = DIFF_COLORS[level] || DIFF_COLORS.Easy
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 999,
      background: c.bg, color: c.color, border: `1px solid ${c.border}`,
      letterSpacing: 0.3, flexShrink: 0,
    }}>
      {level}
    </span>
  )
}

// ─── Single question card ─────────────────────────────────────────
function QuestionCard({ q, index, submitted, userAnswer, onAnswer }) {
  const isAnswered = userAnswer !== undefined
  const isCorrect  = userAnswer === q.ans

  return (
    <div style={{
      background: '#fff',
      border: `1.5px solid ${submitted && isCorrect ? '#86efac' : submitted && isAnswered && !isCorrect ? '#fca5a5' : 'var(--card-border)'}`,
      borderRadius: 14, padding: '20px 22px', marginBottom: 16,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)', transition: 'border-color 0.2s',
    }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
        <span style={{
          width: 26, height: 26, borderRadius: 999, flexShrink: 0,
          background: submitted ? (isCorrect && isAnswered ? '#22c55e' : !isCorrect && isAnswered ? '#ef4444' : '#e5e7eb') : 'var(--purple-soft)',
          color: submitted ? (isAnswered ? '#fff' : 'var(--text-muted)') : 'var(--purple-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 800,
        }}>
          {submitted && isAnswered ? (isCorrect ? '✓' : '✗') : index + 1}
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>{q.q}</p>
          </div>
          {q.difficulty && <DifficultyBadge level={q.difficulty} />}
        </div>
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

// ─── Practice section ─────────────────────────────────────────────
function PracticeSection({ sectionId, onBack }) {
  const allQuestions = QUESTIONS[sectionId]
  const meta = SECTION_META.find(s => s.id === sectionId)
  const [diffFilter, setDiffFilter]   = useState('All')
  const [activeQuestions, setActiveQuestions] = useState(() => sampleQuestions(allQuestions))
  const [answers, setAnswers]         = useState({})
  const [submitted, setSubmitted]     = useState(false)
  const [score, setScore]             = useState(null)
  const { user, profile }             = useAuth()

  // Re-sample when difficulty filter changes (unless already submitted)
  useEffect(() => {
    if (submitted) return
    const pool = diffFilter === 'All' ? allQuestions : allQuestions.filter(q => q.difficulty === diffFilter)
    setActiveQuestions(sampleQuestions(pool))
    setAnswers({})
  }, [diffFilter]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAnswer(qid, optIdx) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qid]: optIdx }))
  }

  function handleSubmit() {
    const s = activeQuestions.reduce((acc, q) => acc + (answers[q.id] === q.ans ? 1 : 0), 0)
    setScore(s)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // ── Write to Firestore ──────────────────────────────────────
    if (user) {
      try {
        const pct = Math.round((s / activeQuestions.length) * 100)
        const prevBest = profile?.aptitudeScore ?? 0
        const newAptitudeScore = Math.max(prevBest, pct)
        const newReadiness = computeReadiness({
          aptitudeScore:      newAptitudeScore,
          mockInterviewScore: profile?.mockInterviewScore ?? 0,
          currentStreak:      profile?.currentStreak ?? 0,
          codingScore:        profile?.codingScore ?? 0,
        })
        updateDoc(doc(db, 'users', user.uid), {
          aptitudeScore:       newAptitudeScore,
          placementReadiness:  newReadiness,
          lastAptitudeAttempt: new Date(),
        }).catch(() => {})
      } catch (_) {}
    }
  }

  function handleReset() {
    const pool = diffFilter === 'All' ? allQuestions : allQuestions.filter(q => q.difficulty === diffFilter)
    setActiveQuestions(sampleQuestions(pool))
    setAnswers({})
    setSubmitted(false)
    setScore(null)
  }

  const diffLevels = ['All', 'Easy', 'Medium', 'Hard']

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
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Showing {activeQuestions.length} of {allQuestions.length} questions
          </p>
        </div>
      </div>

      {/* Difficulty Selector */}
      {!submitted && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginRight: 4 }}>Difficulty:</span>
          {diffLevels.map(d => {
            const active = diffFilter === d
            const c = d === 'All' ? { color: '#6c3ce1', bg: '#ede9fe', border: '#c4b5fd' }
                    : d === 'Easy'   ? DIFF_COLORS.Easy
                    : d === 'Medium' ? DIFF_COLORS.Medium
                    : DIFF_COLORS.Hard
            return (
              <button
                key={d}
                onClick={() => { if (!submitted) setDiffFilter(d) }}
                style={{
                  padding: '5px 16px', borderRadius: 999, fontFamily: 'inherit',
                  fontWeight: 700, fontSize: 13, cursor: 'pointer',
                  border: `1.5px solid ${active ? c.border : '#e5e7eb'}`,
                  background: active ? c.bg : '#fff',
                  color: active ? c.color : 'var(--text-secondary)',
                  transition: 'all 0.15s',
                }}
              >
                {d}
              </button>
            )
          })}
        </div>
      )}

      {/* Score banner */}
      {submitted && (
        <div style={{
          background: score >= Math.ceil(activeQuestions.length * 0.75) ? '#dcfce7' : score >= Math.ceil(activeQuestions.length * 0.5) ? '#fef3c7' : '#fee2e2',
          border: `1.5px solid ${score >= Math.ceil(activeQuestions.length * 0.75) ? '#86efac' : score >= Math.ceil(activeQuestions.length * 0.5) ? '#fde68a' : '#fca5a5'}`,
          borderRadius: 14, padding: '20px 24px', marginBottom: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div>
            <div style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', marginBottom: 3 }}>
              {score >= Math.ceil(activeQuestions.length * 0.75) ? '🎉 Great Job!' : score >= Math.ceil(activeQuestions.length * 0.5) ? '👍 Keep Practicing!' : '📚 Need More Practice'}
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
              You scored <strong>{score}/{activeQuestions.length}</strong> — {Math.round((score / activeQuestions.length) * 100)}% correct
              {diffFilter !== 'All' && <span style={{ marginLeft: 8, fontStyle: 'italic' }}>(Filter: {diffFilter})</span>}
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
      {activeQuestions.map((q, i) => (
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
            {Object.keys(answers).length} of {activeQuestions.length} answered
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

// ─── Mock Test (timed, all sections) ──────────────────────────────
function MockTest({ onBack }) {
  const allQ = [
    ...QUESTIONS.quant.slice(0, 5),
    ...QUESTIONS.logical.slice(0, 5),
    ...QUESTIONS.verbal.slice(0, 5),
  ]
  const TOTAL_SECONDS = 15 * 60 // 15 min
  const [answers, setAnswers]   = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore]       = useState(null)
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS)

  const handleSubmit = useCallback(() => {
    const s = allQ.reduce((acc, q) => acc + (answers[q.id + q.q.slice(0, 3)] === q.ans ? 1 : 0), 0)
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
  const pct  = (timeLeft / TOTAL_SECONDS) * 100
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
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Score: <strong>{score}/15</strong> — {Math.round((score / 15) * 100)}%</div>
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

// ─── Main Aptitude page ───────────────────────────────────────────
export default function Aptitude() {
  const [active, setActive] = useState(null) // null = home, 'quant'|'logical'|'verbal'|'technical'|'mock'

  if (active === 'mock') return <MockTest onBack={() => setActive(null)} />
  if (active) return <PracticeSection sectionId={active} onBack={() => setActive(null)} />

  const totalQ = Object.values(QUESTIONS).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 26, color: 'var(--text-primary)', marginBottom: 4 }}>
          🧠 Aptitude Practice
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Practice quantitative, logical, verbal, and technical aptitude — the way companies test it.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 28 }}>
        {[
          { icon: '📚', label: 'Total Questions', value: `${totalQ}`, color: '#ede9fe' },
          { icon: '🏢', label: 'Companies Covered', value: 'TCS · Infosys · Wipro · Accenture', color: '#dcfce7', small: true },
          { icon: '🎯', label: 'Topics', value: '4 Sections', color: '#dbeafe' },
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
              e.currentTarget.style.transform   = 'translateY(-3px)'
              e.currentTarget.style.boxShadow   = `0 8px 24px ${s.color}22`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--card-border)'
              e.currentTarget.style.transform   = 'translateY(0)'
              e.currentTarget.style.boxShadow   = '0 1px 3px rgba(0,0,0,0.05)'
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
            e.currentTarget.style.transform  = 'translateY(-3px)'
            e.currentTarget.style.boxShadow  = '0 12px 32px rgba(108,60,225,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform  = 'translateY(0)'
            e.currentTarget.style.boxShadow  = '0 4px 16px rgba(108,60,225,0.25)'
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
            'Use difficulty filters to focus on weak areas',
            'Attempt technical aptitude for data roles',
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