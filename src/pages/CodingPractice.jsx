import React, { useState, useRef, useEffect } from 'react'

// ── Judge0 language IDs ──────────────────────────────────────────
const LANGUAGES = [
  { id: 71, name: 'Python',     ext: 'py',  color: '#3b82f6' },
  { id: 62, name: 'Java',       ext: 'java',color: '#f97316' },
  { id: 54, name: 'C++',        ext: 'cpp', color: '#8b5cf6' },
  { id: 63, name: 'JavaScript', ext: 'js',  color: '#eab308' },
  { id: 50, name: 'C',          ext: 'c',   color: '#6b7280' },
]

const STARTER_CODE = {
  71: (fn) => `# Python solution\ndef ${fn}():\n    # Write your solution here\n    pass\n\n# Test your solution\nprint(${fn}())`,
  62: (fn) => `// Java solution\npublic class Solution {\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        // Test your solution\n    }\n    \n    public void ${fn}() {\n        // Write your solution here\n    }\n}`,
  54: (fn) => `// C++ solution\n#include <bits/stdc++.h>\nusing namespace std;\n\nvoid ${fn}() {\n    // Write your solution here\n}\n\nint main() {\n    ${fn}();\n    return 0;\n}`,
  63: (fn) => `// JavaScript solution\nfunction ${fn}() {\n    // Write your solution here\n}\n\nconsole.log(${fn}());`,
  50: (fn) => `// C solution\n#include <stdio.h>\n\nvoid ${fn}() {\n    // Write your solution here\n}\n\nint main() {\n    ${fn}();\n    return 0;\n}`,
}

// ── Problem bank ─────────────────────────────────────────────────
const PROBLEMS = [
  // EASY
  {
    id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays', company: ['Amazon', 'TCS', 'Infosys'],
    acceptance: '72%', fnName: 'twoSum',
    description: `Given an array of integers **nums** and an integer **target**, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'nums[1] + nums[2] = 2 + 4 = 6' },
    ],
    constraints: ['2 ≤ nums.length ≤ 10⁴', '-10⁹ ≤ nums[i] ≤ 10⁹', 'Only one valid answer exists'],
    hints: ['Try using a hash map to store seen numbers', 'For each number, check if (target - number) exists in the map'],
    testCode: { 71: 'nums = [2,7,11,15]\ntarget = 9\nprint(twoSum(nums, target))' },
  },
  {
    id: 2, title: 'Reverse a String', difficulty: 'Easy', category: 'Strings', company: ['TCS', 'Wipro', 'Cognizant'],
    acceptance: '85%', fnName: 'reverseString',
    description: `Write a function that reverses a string. The input string is given as an array of characters.

You must do this by modifying the input array **in-place** with O(1) extra memory.`,
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁵', 's[i] is a printable ASCII character'],
    hints: ['Use two pointers — one from start, one from end', 'Swap characters and move pointers toward center'],
    testCode: { 71: 's = ["h","e","l","l","o"]\nreverseString(s)\nprint(s)' },
  },
  {
    id: 3, title: 'Find Maximum in Array', difficulty: 'Easy', category: 'Arrays', company: ['TCS', 'Infosys', 'Wipro'],
    acceptance: '90%', fnName: 'findMax',
    description: `Given an integer array **nums**, return the maximum element in the array.

Try to solve it in O(n) time and O(1) space.`,
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]', output: '9' },
      { input: 'nums = [-1, -5, -3]', output: '-1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁵', '-10⁹ ≤ nums[i] ≤ 10⁹'],
    hints: ['Iterate through the array keeping track of the largest seen', 'Start with the first element as max'],
    testCode: { 71: 'print(findMax([3,1,4,1,5,9,2,6]))' },
  },
  {
    id: 4, title: 'Check Palindrome', difficulty: 'Easy', category: 'Strings', company: ['Accenture', 'Cognizant', 'TCS'],
    acceptance: '82%', fnName: 'isPalindrome',
    description: `Given a string **s**, return **true** if it is a palindrome, or **false** otherwise.

A string is a palindrome when it reads the same forward and backward. Consider only alphanumeric characters and ignore case.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome' },
      { input: 's = "race a car"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 2 × 10⁵', 's consists only of printable ASCII characters'],
    hints: ['Clean the string first — remove non-alphanumeric chars', 'Compare with its reverse, or use two pointers'],
    testCode: { 71: 'print(isPalindrome("A man, a plan, a canal: Panama"))' },
  },
  {
    id: 5, title: 'Fibonacci Number', difficulty: 'Easy', category: 'Recursion / DP', company: ['TCS', 'Wipro', 'Infosys'],
    acceptance: '88%', fnName: 'fib',
    description: `The **Fibonacci numbers**, commonly denoted F(n) form a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1.

Given **n**, calculate **F(n)**.`,
    examples: [
      { input: 'n = 4', output: '3', explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3' },
      { input: 'n = 10', output: '55' },
    ],
    constraints: ['0 ≤ n ≤ 30'],
    hints: ['Start with base cases: fib(0)=0, fib(1)=1', 'Try both recursive and iterative approaches'],
    testCode: { 71: 'print(fib(10))  # expected: 55' },
  },
  // MEDIUM
  {
    id: 6, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Strings / Sliding Window', company: ['Amazon', 'Accenture', 'Google'],
    acceptance: '58%', fnName: 'lengthOfLongestSubstring',
    description: `Given a string **s**, find the length of the **longest substring** without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: '"abc" is the longest substring without repeating chars' },
      { input: 's = "bbbbb"', output: '1', explanation: '"b" is the only valid substring' },
      { input: 's = "pwwkew"', output: '3', explanation: '"wke" is the longest' },
    ],
    constraints: ['0 ≤ s.length ≤ 5 × 10⁴', 's consists of English letters, digits, symbols and spaces'],
    hints: ['Use a sliding window with two pointers', 'Use a Set/HashMap to track characters in current window', 'Expand right pointer; shrink left when duplicate found'],
    testCode: { 71: 'print(lengthOfLongestSubstring("abcabcbb"))  # 3' },
  },
  {
    id: 7, title: 'Valid Parentheses', difficulty: 'Medium', category: 'Stack', company: ['Amazon', 'Google', 'Cognizant'],
    acceptance: '64%', fnName: 'isValid',
    description: `Given a string **s** containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets
- Open brackets must be closed in the correct order
- Every close bracket has a corresponding open bracket of the same type`,
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁴', 's consists of parentheses only'],
    hints: ['Use a stack data structure', 'Push open brackets, pop when closing bracket found', 'At the end, stack should be empty'],
    testCode: { 71: 'print(isValid("()[]{}"))  # True\nprint(isValid("(]"))  # False' },
  },
  {
    id: 8, title: 'Binary Search', difficulty: 'Medium', category: 'Binary Search', company: ['TCS', 'Amazon', 'Infosys'],
    acceptance: '61%', fnName: 'search',
    description: `Given an array of integers **nums** which is sorted in ascending order, and an integer **target**, write a function to search target in nums.

If target exists, return its index. Otherwise, return -1.

You must write an algorithm with **O(log n)** runtime complexity.`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists at index 4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 does not exist' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁴', 'All values unique', 'Array sorted in ascending order'],
    hints: ['Keep track of left and right boundaries', 'Calculate mid = (left + right) // 2', 'Narrow search space based on comparison with target'],
    testCode: { 71: 'print(search([-1,0,3,5,9,12], 9))  # 4' },
  },
  {
    id: 9, title: 'Merge Two Sorted Lists', difficulty: 'Medium', category: 'Linked List', company: ['Amazon', 'Accenture', 'TCS'],
    acceptance: '55%', fnName: 'mergeTwoLists',
    description: `You are given the heads of two sorted linked lists **list1** and **list2**.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: ['0 ≤ number of nodes ≤ 50', '-100 ≤ Node.val ≤ 100', 'Both lists sorted in non-decreasing order'],
    hints: ['Create a dummy head node', 'Compare values at each step, attach the smaller one', 'Handle remaining nodes after one list is exhausted'],
    testCode: { 71: '# Implement with arrays for testing\nprint(mergeTwoLists([1,2,4], [1,3,4]))' },
  },
  // HARD
  {
    id: 10, title: 'Trapping Rain Water', difficulty: 'Hard', category: 'Arrays / Two Pointer', company: ['Amazon', 'Google'],
    acceptance: '42%', fnName: 'trap',
    description: `Given **n** non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '6 units of rain water are trapped' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    constraints: ['n == height.length', '1 ≤ n ≤ 2 × 10⁴', '0 ≤ height[i] ≤ 10⁵'],
    hints: ['For each position, water = min(maxLeft, maxRight) - height[i]', 'Brute force O(n²) works, try two-pointer O(n)', 'Precompute max from left and max from right arrays'],
    testCode: { 71: 'print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6' },
  },
  {
    id: 11, title: 'Longest Palindromic Substring', difficulty: 'Hard', category: 'DP / Strings', company: ['Amazon', 'Google', 'Microsoft'],
    acceptance: '38%', fnName: 'longestPalindrome',
    description: `Given a string **s**, return the **longest palindromic substring** in s.`,
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also valid' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ['1 ≤ s.length ≤ 1000', 's consists of digits and English letters'],
    hints: ['Try expand-around-center approach', 'For each character, expand outward as long as palindrome holds', 'Handle both odd-length and even-length palindromes'],
    testCode: { 71: 'print(longestPalindrome("babad"))' },
  },
]

const DIFFICULTY_META = {
  Easy:   { color: '#16a34a', bg: '#dcfce7', border: '#86efac' },
  Medium: { color: '#d97706', bg: '#fef3c7', border: '#fde68a' },
  Hard:   { color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
}

// ── Judge0 API ───────────────────────────────────────────────────
// Using the free public Judge0 CE instance
const JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com'

async function runCode(sourceCode, languageId, stdin = '') {
  // Using Judge0 extra CE public instance (no key needed for basic use)
  // Fallback: show a helpful message about setting up Judge0
  try {
    const submitRes = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'SIGN_UP_FOR_KEY', // user needs to add their key
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        source_code: sourceCode,
        language_id: languageId,
        stdin,
        cpu_time_limit: 5,
        memory_limit: 128000,
      })
    })

    if (!submitRes.ok) throw new Error('API error')
    const result = await submitRes.json()

    if (result.stdout) return { success: true, output: result.stdout, time: result.time, memory: result.memory }
    if (result.stderr) return { success: false, output: result.stderr, type: 'Runtime Error' }
    if (result.compile_output) return { success: false, output: result.compile_output, type: 'Compile Error' }
    if (result.status?.description) return { success: false, output: result.status.description, type: 'Status' }
    return { success: false, output: 'Unknown error', type: 'Error' }
  } catch (err) {
    return {
      success: false,
      output: `⚙️ Judge0 API key required to run code.\n\nTo enable code execution:\n1. Go to rapidapi.com/judge0-official/api/judge0-ce\n2. Subscribe to the free plan (50 runs/day)\n3. Copy your RapidAPI key\n4. Replace "SIGN_UP_FOR_KEY" in CodingPractice.jsx with your key\n\nYou can still write and review your code here!`,
      type: 'Setup Required'
    }
  }
}

// ── Components ───────────────────────────────────────────────────
function DiffBadge({ difficulty, small }) {
  const m = DIFFICULTY_META[difficulty]
  return (
    <span style={{ fontSize: small ? 11 : 12, fontWeight: 700, color: m.color, background: m.bg, border: `1px solid ${m.border}`, padding: small ? '2px 8px' : '3px 10px', borderRadius: 999 }}>
      {difficulty}
    </span>
  )
}

function ProblemList({ problems, selected, onSelect, filter, setFilter, search, setSearch }) {
  const filtered = problems.filter(p => {
    const diffOk = filter.diff === 'All' || p.difficulty === filter.diff
    const catOk = filter.cat === 'All' || p.category.includes(filter.cat)
    const coOk = filter.company === 'All' || p.company.includes(filter.company)
    const srchOk = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
    return diffOk && catOk && coOk && srchOk
  })

  return (
    <div style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 0, background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
      {/* Filters header */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--card-border)', background: '#fafafa' }}>
        <div style={{ position: 'relative', marginBottom: 10 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, color: 'var(--text-muted)' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search problems..."
            style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1.5px solid var(--card-border)', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = 'var(--purple-primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
          />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['All', 'Easy', 'Medium', 'Hard'].map(d => (
            <button key={d} onClick={() => setFilter(f => ({ ...f, diff: d }))}
              style={{ flex: 1, padding: '5px 4px', borderRadius: 8, border: '1.5px solid', borderColor: filter.diff === d ? (d === 'All' ? 'var(--purple-primary)' : DIFFICULTY_META[d]?.border || 'var(--purple-primary)') : 'var(--card-border)', background: filter.diff === d ? (d === 'All' ? 'var(--purple-xsoft)' : DIFFICULTY_META[d]?.bg || 'var(--purple-xsoft)') : '#fff', color: filter.diff === d ? (d === 'All' ? 'var(--purple-primary)' : DIFFICULTY_META[d]?.color || 'var(--purple-primary)') : 'var(--text-muted)', fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Problem items */}
      <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 280px)' }}>
        {filtered.length === 0 ? (
          <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>No problems match your filters</div>
        ) : filtered.map(p => (
          <div key={p.id} onClick={() => onSelect(p)}
            style={{ padding: '12px 16px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', background: selected?.id === p.id ? 'var(--purple-xsoft)' : '#fff', borderLeft: selected?.id === p.id ? '3px solid var(--purple-primary)' : '3px solid transparent', transition: 'all 0.15s' }}
            onMouseEnter={e => { if (selected?.id !== p.id) e.currentTarget.style.background = '#f9fafb' }}
            onMouseLeave={e => { if (selected?.id !== p.id) e.currentTarget.style.background = '#fff' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)' }}>{p.id}. {p.title}</span>
              <DiffBadge difficulty={p.difficulty} small />
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', background: '#f3f4f6', padding: '1px 7px', borderRadius: 999 }}>{p.category.split(' / ')[0]}</span>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p.acceptance} acceptance</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid var(--card-border)', background: '#fafafa' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{filtered.length} / {problems.length} problems</span>
      </div>
    </div>
  )
}

function ProblemPanel({ problem }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '22px 24px', background: '#fff', maxHeight: 'calc(100vh - 200px)' }}>
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 20, color: 'var(--text-primary)', marginBottom: 8 }}>
            {problem.id}. {problem.title}
          </h2>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <DiffBadge difficulty={problem.difficulty} />
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', background: '#f3f4f6', padding: '3px 10px', borderRadius: 999, fontWeight: 600 }}>{problem.category}</span>
            {problem.company.slice(0, 3).map(c => (
              <span key={c} style={{ fontSize: 11, color: 'var(--purple-primary)', background: 'var(--purple-xsoft)', padding: '2px 8px', borderRadius: 999, fontWeight: 600 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}
        dangerouslySetInnerHTML={{ __html: problem.description.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>').replace(/\n/g, '<br/>') }}
      />

      {/* Examples */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'Urbanist, sans-serif' }}>Examples</div>
        {problem.examples.map((ex, i) => (
          <div key={i} style={{ background: '#f9fafb', border: '1px solid var(--card-border)', borderRadius: 10, padding: '14px 16px', marginBottom: 10, fontFamily: 'monospace' }}>
            <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: 'var(--text-muted)', fontFamily: 'inherit' }}>Input: </span><strong>{ex.input}</strong></div>
            <div style={{ fontSize: 13, marginBottom: ex.explanation ? 4 : 0 }}><span style={{ color: 'var(--text-muted)', fontFamily: 'inherit' }}>Output: </span><strong>{ex.output}</strong></div>
            {ex.explanation && <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', marginTop: 4 }}>Explanation: {ex.explanation}</div>}
          </div>
        ))}
      </div>

      {/* Constraints */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)', marginBottom: 8, fontFamily: 'Urbanist, sans-serif' }}>Constraints</div>
        {problem.constraints.map((c, i) => (
          <div key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', gap: 8, marginBottom: 4 }}>
            <span style={{ color: 'var(--purple-primary)' }}>•</span><span style={{ fontFamily: 'monospace' }}>{c}</span>
          </div>
        ))}
      </div>

      {/* Hints */}
      <div>
        <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-primary)', marginBottom: 8, fontFamily: 'Urbanist, sans-serif' }}>💡 Hints</div>
        {problem.hints.map((h, i) => (
          <details key={i} style={{ marginBottom: 6 }}>
            <summary style={{ fontSize: 13, color: 'var(--purple-primary)', fontWeight: 600, cursor: 'pointer', padding: '6px 10px', background: 'var(--purple-xsoft)', borderRadius: 8, listStyle: 'none' }}>
              Hint {i + 1} — click to reveal
            </summary>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', padding: '8px 12px', lineHeight: 1.6 }}>{h}</div>
          </details>
        ))}
      </div>
    </div>
  )
}

function CodeEditor({ problem, lang, setLang, code, setCode, output, running, onRun, onReset }) {
  const lineCount = code.split('\n').length

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e1e2e', borderRadius: 16, overflow: 'hidden', border: '1.5px solid #2d2d3f' }}>
      {/* Editor toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: '#16162a', borderBottom: '1px solid #2d2d3f', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 12, height: 12, borderRadius: 999, background: ['#ff5f57','#ffbd2e','#28ca41'][i] }} />)}
        </div>
        <span style={{ fontSize: 12, color: '#6b7280', fontFamily: 'monospace', marginLeft: 4 }}>
          {problem.title.toLowerCase().replace(/ /g, '_')}.{LANGUAGES.find(l => l.id === lang)?.ext}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          {LANGUAGES.map(l => (
            <button key={l.id} onClick={() => { setLang(l.id); setCode(STARTER_CODE[l.id]?.(problem.fnName) || '') }}
              style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid', borderColor: lang === l.id ? l.color : '#2d2d3f', background: lang === l.id ? l.color + '22' : 'transparent', color: lang === l.id ? l.color : '#6b7280', fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code area */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        {/* Line numbers */}
        <div style={{ width: 40, background: '#16162a', padding: '16px 8px', textAlign: 'right', borderRight: '1px solid #2d2d3f', userSelect: 'none', flexShrink: 0, overflowY: 'hidden' }}>
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i} style={{ fontSize: 12, color: '#4b4b6b', lineHeight: '1.6', fontFamily: 'monospace' }}>{i + 1}</div>
          ))}
        </div>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          style={{
            flex: 1, padding: '16px 16px', background: '#1e1e2e', color: '#cdd6f4',
            border: 'none', outline: 'none', fontFamily: '"Fira Code", "Cascadia Code", monospace',
            fontSize: 13.5, lineHeight: '1.6', resize: 'none', tabSize: 2,
          }}
          onKeyDown={e => {
            if (e.key === 'Tab') {
              e.preventDefault()
              const s = e.target.selectionStart
              const val = code.substring(0, s) + '  ' + code.substring(e.target.selectionEnd)
              setCode(val)
              setTimeout(() => e.target.setSelectionRange(s + 2, s + 2), 0)
            }
          }}
        />
      </div>

      {/* Action bar */}
      <div style={{ display: 'flex', gap: 10, padding: '10px 16px', background: '#16162a', borderTop: '1px solid #2d2d3f', flexShrink: 0, alignItems: 'center' }}>
        <button onClick={onReset} style={{ padding: '7px 14px', borderRadius: 8, border: '1px solid #2d2d3f', background: 'transparent', color: '#6b7280', fontSize: 12, fontFamily: 'inherit', fontWeight: 600, cursor: 'pointer' }}>
          Reset
        </button>
        <span style={{ flex: 1, fontSize: 11, color: '#4b4b6b' }}>Tab = indent · Ctrl+Enter = run</span>
        <button
          onClick={onRun}
          disabled={running}
          onKeyDown={e => e.key === 'Enter' && e.ctrlKey && onRun()}
          style={{ padding: '8px 22px', borderRadius: 8, border: 'none', background: running ? '#2d2d3f' : '#6c3ce1', color: running ? '#6b7280' : '#fff', fontSize: 13, fontFamily: 'inherit', fontWeight: 700, cursor: running ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          {running ? '⏳ Running...' : '▶ Run Code'}
        </button>
      </div>

      {/* Output panel */}
      <div style={{ background: '#11111f', borderTop: '1px solid #2d2d3f', padding: '12px 16px', maxHeight: 160, overflowY: 'auto', flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: '#4b4b6b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Output</div>
        {output === null ? (
          <div style={{ fontSize: 12, color: '#4b4b6b', fontFamily: 'monospace' }}>Click "Run Code" to see output here...</div>
        ) : (
          <pre style={{ fontSize: 13, color: output.success ? '#a6e3a1' : '#f38ba8', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
            {output.success && output.time && <span style={{ color: '#6b7280', fontSize: 11 }}>⚡ {output.time}s · {output.memory}KB{'\n'}</span>}
            {output.output}
          </pre>
        )}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════
export default function CodingPractice() {
  const [selected, setSelected] = useState(PROBLEMS[0])
  const [lang, setLang] = useState(71)
  const [code, setCode] = useState(STARTER_CODE[71](PROBLEMS[0].fnName))
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [filter, setFilter] = useState({ diff: 'All', cat: 'All', company: 'All' })
  const [search, setSearch] = useState('')
  const [view, setView] = useState('split') // split | problem | editor

  function selectProblem(p) {
    setSelected(p)
    setCode(STARTER_CODE[lang]?.(p.fnName) || '')
    setOutput(null)
  }

  function changeLang(newLang) {
    setLang(newLang)
    setCode(STARTER_CODE[newLang]?.(selected.fnName) || '')
    setOutput(null)
  }

  async function handleRun() {
    if (!code.trim()) return
    setRunning(true)
    setOutput(null)
    const result = await runCode(code, lang)
    setOutput(result)
    setRunning(false)
  }

  function handleReset() {
    setCode(STARTER_CODE[lang]?.(selected.fnName) || '')
    setOutput(null)
  }

  const solvedCount = 0 // Can be persisted in localStorage later

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, height: 'calc(100vh - 130px)', minHeight: 600 }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexShrink: 0 }}>
        <div>
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 24, color: 'var(--text-primary)', lineHeight: 1.2 }}>💻 Coding Practice</h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{PROBLEMS.length} problems · Arrays · Strings · DP · Trees · Linked Lists</p>
        </div>

        {/* Stats */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
          {[
            { label: 'Easy', count: PROBLEMS.filter(p => p.difficulty === 'Easy').length, ...DIFFICULTY_META.Easy },
            { label: 'Medium', count: PROBLEMS.filter(p => p.difficulty === 'Medium').length, ...DIFFICULTY_META.Medium },
            { label: 'Hard', count: PROBLEMS.filter(p => p.difficulty === 'Hard').length, ...DIFFICULTY_META.Hard },
          ].map(s => (
            <div key={s.label} style={{ padding: '6px 14px', background: s.bg, border: `1px solid ${s.border}`, borderRadius: 999, fontSize: 12, fontWeight: 700, color: s.color }}>
              {s.count} {s.label}
            </div>
          ))}
        </div>

        {/* View toggle - mobile */}
        <div style={{ display: 'flex', gap: 4, background: '#f3f4f6', borderRadius: 10, padding: 3 }}>
          {[['split','⊞'],['problem','📄'],['editor','💻']].map(([v, icon]) => (
            <button key={v} onClick={() => setView(v)} style={{ padding: '5px 10px', borderRadius: 7, border: 'none', background: view === v ? '#fff' : 'transparent', color: view === v ? 'var(--purple-primary)' : 'var(--text-muted)', cursor: 'pointer', fontSize: 14, fontWeight: 700, boxShadow: view === v ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.15s' }}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: 'flex', gap: 12, flex: 1, overflow: 'hidden' }}>
        {/* Problem list */}
        {(view === 'split' || view === 'problem') && (
          <ProblemList
            problems={PROBLEMS}
            selected={selected}
            onSelect={selectProblem}
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
        )}

        {/* Problem description */}
        {(view === 'split' || view === 'problem') && selected && (
          <div style={{ flex: view === 'split' ? '0 0 340px' : 1, background: '#fff', border: '1.5px solid var(--card-border)', borderRadius: 16, overflow: 'hidden' }}>
            <ProblemPanel problem={selected} />
          </div>
        )}

        {/* Code editor */}
        {(view === 'split' || view === 'editor') && (
          <CodeEditor
            problem={selected}
            lang={lang}
            setLang={changeLang}
            code={code}
            setCode={setCode}
            output={output}
            running={running}
            onRun={handleRun}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  )
}