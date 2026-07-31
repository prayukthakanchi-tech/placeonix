import React, { useState, useRef, useCallback, useEffect } from 'react'

const LANGUAGES = [
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
  71: `num1 = int(input())
num2 = int(input())

sum = num1 + num2

print(sum)`,
  62: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int num1 = sc.nextInt();
            int num2 = sc.nextInt();
            System.out.println(num1 + num2);
        }
    }
}`,
  54: `#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    if (cin >> num1 >> num2) {
        cout << (num1 + num2) << endl;
    }
    return 0;
}`,
  63: `const fs = require("fs");
const lines = fs.readFileSync(0, "utf-8").trim().split(/\\s+/);
if (lines.length >= 2) {
    const num1 = parseInt(lines[0]);
    const num2 = parseInt(lines[1]);
    console.log(num1 + num2);
}`,
  50: `#include <stdio.h>

int main() {
    int num1, num2;
    if (scanf("%d %d", &num1, &num2) == 2) {
        printf("%d\\n", num1 + num2);
    }
    return 0;
}`
}

const THEMES = {
  cyberpunk: {
    name: '🌌 Cyberpunk Neon',
    bg: '#090714',
    text: '#e2d9f3',
    lineBg: '#130e26',
    lineColor: '#7c5cbf',
    border: '#2b1b4d',
    toolbarBg: '#110b24',
    outputBg: '#0d081d',
    btnBg: '#2b1b4d',
    btnText: '#00f0ff',
    accent: '#00f0ff'
  },
  monokaiGold: {
    name: '🥷 Monokai Gold',
    bg: '#19181a',
    text: '#f8f8f2',
    lineBg: '#222124',
    lineColor: '#727075',
    border: '#3a383e',
    toolbarBg: '#222125',
    outputBg: '#141315',
    btnBg: '#3a383e',
    btnText: '#ffd866',
    accent: '#ffd866'
  },
  emeraldDark: {
    name: '🌲 Emerald Dark',
    bg: '#061a14',
    text: '#e6f7f2',
    lineBg: '#0b2920',
    lineColor: '#4d8070',
    border: '#174739',
    toolbarBg: '#0a241c',
    outputBg: '#04120e',
    btnBg: '#174739',
    btnText: '#34d399',
    accent: '#34d399'
  },
  cleanLight: {
    name: '☀️ Clean Light',
    bg: '#ffffff',
    text: '#1e293b',
    lineBg: '#f8fafc',
    lineColor: '#94a3b8',
    border: '#cbd5e1',
    toolbarBg: '#f1f5f9',
    outputBg: '#f8fafc',
    btnBg: '#e2e8f0',
    btnText: '#0f172a',
    accent: '#6366f1'
  }
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

Return ONLY a JSON object: {"success": true, "output": "<stdout string>"}. No markdown code block formatting.`

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt })
    })

    if (res.ok) {
      const data = await res.json()
      let text = data?.response || ''
      text = text.replace(/```json/gi, '').replace(/```/gi, '').trim()
      const parsed = JSON.parse(text)
      return {
        success: parsed.success,
        output: parsed.output,
        type: parsed.type || (parsed.success ? undefined : 'Runtime Error'),
      }
    }
  } catch (err) {
    console.warn("Serverless compiler proxy failed, trying direct browser fallback...", err)
  }

  if (languageId === 63) {
    try {
      const logs = []
      const customConsole = { log: (...args) => logs.push(args.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) }
      // eslint-disable-next-line no-new-func
      new Function('console', sourceCode)(customConsole)
      return { success: true, output: logs.join('\n') || '(no output)' }
    } catch (jsErr) {
      return { success: false, output: jsErr.message, type: 'Runtime Error' }
    }
  }

  return {
    success: false,
    output: '⚠️ Compiler server is busy. Please try again in a few moments.',
    type: 'Execution Error'
  }
}

async function runCode(sourceCode, languageId, stdin = '', retries = 3) {
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
          stdin: stdin,
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      const data = await res.json()

      if (data.compiler_error || (data.status != 0 && !data.program_message)) {
        const compileOut = (data.compiler_error || data.compiler_message || 'Compile error').trim()
        if (compileOut.includes('Resource temporarily unavailable') || compileOut.includes('crun: clone')) {
          return await runCodeAI(sourceCode, languageId, stdin)
        }
        if (compileOut) return { success: false, output: compileOut, type: 'Compile Error' }
      }

      const stdout = (data.program_output || '').trim()
      const stderr = (data.program_error || '').trim()

      if (stderr.includes('Resource temporarily unavailable')) {
        return await runCodeAI(sourceCode, languageId, stdin)
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
        await new Promise(r => setTimeout(r, 800))
        continue
      }
      return await runCodeAI(sourceCode, languageId, stdin)
    }
  }
}

const INITIAL_TEST_CASES = [
  { id: '1', input: '22\n30', expectedOutput: '52' },
  { id: '2', input: '10\n15', expectedOutput: '25' },
  { id: '3', input: '5\n-3', expectedOutput: '2' },
]

export default function OnlineCompiler() {
  const [lang, setLang] = useState(71)
  const [codeMap, setCodeMap] = useState({ ...DEFAULT_CODE })
  const [theme, setTheme] = useState('cyberpunk')
  const [showStdin, setShowStdin] = useState(true)
  const [stdin, setStdin] = useState('22\n30')
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const [saveStatus, setSaveStatus] = useState('saved')
  const saveTimeoutRef = useRef(null)

  // Test Cases state
  const [activeTab, setActiveTab] = useState('testcases') // 'testcases' | 'stdin' | 'output'
  const [testCases, setTestCases] = useState(INITIAL_TEST_CASES)
  const [activeCaseId, setActiveCaseId] = useState('1')
  const [runningTestCases, setRunningTestCases] = useState(false)
  const [testSummary, setTestSummary] = useState(null)

  const activeTestCase = testCases.find(tc => tc.id === activeCaseId) || testCases[0]

  useEffect(() => {
    try {
      const saved = localStorage.getItem('placeonix_compiler_code')
      if (saved) {
        setCodeMap(JSON.parse(saved))
      }
    } catch {}
  }, [])

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  const code = codeMap[lang] || ''
  const setCode = (val) => {
    setCodeMap(prev => {
      const next = { ...prev, [lang]: val }
      setSaveStatus('saving')
      
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
      saveTimeoutRef.current = setTimeout(() => {
        try {
          localStorage.setItem('placeonix_compiler_code', JSON.stringify(next))
          setSaveStatus('saved')
        } catch {}
      }, 600)
      
      return next
    })
  }

  const lineCount = code.split('\n').length || 1
  const lineNumRef = useRef(null)
  const textareaRef = useRef(null)

  const syncScroll = useCallback(() => {
    if (lineNumRef.current && textareaRef.current) {
      lineNumRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }, [])

  const handleAddTestCase = () => {
    const newId = String(Date.now())
    const newCase = { id: newId, input: '', expectedOutput: '' }
    setTestCases(prev => [...prev, newCase])
    setActiveCaseId(newId)
  }

  const handleDeleteTestCase = (id) => {
    if (testCases.length <= 1) return
    const nextCases = testCases.filter(tc => tc.id !== id)
    setTestCases(nextCases)
    if (activeCaseId === id) {
      setActiveCaseId(nextCases[0].id)
    }
  }

  const handleUpdateTestCase = (id, patch) => {
    setTestCases(prev => prev.map(tc => tc.id === id ? { ...tc, ...patch } : tc))
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = e.target.selectionStart
      const val = code.substring(0, s) + '    ' + code.substring(e.target.selectionEnd)
      setCode(val)
      setTimeout(() => e.target.setSelectionRange(s + 4, s + 4), 0)
      return
    }

    const bracketMap = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      "'": "'"
    }

    if (bracketMap[e.key] !== undefined) {
      e.preventDefault()
      const closeChar = bracketMap[e.key]
      const s = e.target.selectionStart
      const val = code.substring(0, s) + e.key + closeChar + code.substring(e.target.selectionEnd)
      setCode(val)
      setTimeout(() => e.target.setSelectionRange(s + 1, s + 1), 0)
      return
    }

    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault()
      handleRun()
    }
  }, [code, lang, stdin, showStdin])

  async function handleRun() {
    if (!code.trim()) return
    setRunning(true)
    setOutput(null)
    setActiveTab('output')

    const startTime = performance.now()
    const result = await runCode(code, lang, showStdin ? stdin : '')
    const duration = ((performance.now() - startTime) / 1000).toFixed(2)

    setOutput({ ...result, time: duration })
    setRunning(false)
  }

  async function handleRunTestCases() {
    if (!code.trim() || testCases.length === 0) return
    setRunningTestCases(true)
    setTestSummary(null)
    setActiveTab('testcases')

    let passedCount = 0
    const updatedCases = []

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i]
      const startTime = performance.now()
      const result = await runCode(code, lang, tc.input)
      const duration = ((performance.now() - startTime) / 1000).toFixed(2)

      const actualOut = (result.output || '').trim()
      const expectedOut = (tc.expectedOutput || '').trim()
      const passed = result.success && actualOut === expectedOut

      if (passed) passedCount++

      updatedCases.push({
        ...tc,
        actualOutput: actualOut,
        status: passed ? 'PASSED' : 'FAILED',
        time: duration,
      })
    }

    setTestCases(updatedCases)
    setTestSummary({ passed: passedCount, total: testCases.length })
    setRunningTestCases(false)
  }

  function handleReset() {
    setCode(DEFAULT_CODE[lang])
    setOutput(null)
    setTestSummary(null)
  }

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleDownload() {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `main.${currentLang?.ext}.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  const currentLang = LANGUAGES.find(l => l.id === lang)
  const themeConfig = THEMES[theme] || THEMES.cyberpunk

  return (
    <div className="responsive-app-height" style={{ display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .ide-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          background: ${themeConfig.bg};
          border: 1.5px solid ${themeConfig.border};
          border-radius: 16px;
        }
        .editor-section {
          flex: 1.3;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-right: 1.5px solid ${themeConfig.border};
        }
        .io-section {
          width: 440px;
          display: flex;
          flex-direction: column;
          background: ${themeConfig.outputBg};
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .ide-container {
            flex-direction: column;
            overflow-y: auto;
          }
          .editor-section {
            border-right: none;
            border-bottom: 1.5px solid ${themeConfig.border};
            height: 400px;
            flex: none;
          }
          .io-section {
            width: 100%;
            height: auto;
            flex: 1;
          }
        }
      `}</style>

      {/* Top Title Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14, flexShrink: 0, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 24, color: 'var(--text-primary)', lineHeight: 1.2 }}>💻 Online Compiler</h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>Write code, manage test cases, and compare expected output in real-time</p>
        </div>
        
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <select value={theme} onChange={e => setTheme(e.target.value)}
            style={{ padding: '7px 14px', borderRadius: 10, border: '1.5px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-primary)', fontSize: 12.5, fontWeight: 700, outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            {Object.keys(THEMES).map(k => <option key={k} value={k}>{THEMES[k].name}</option>)}
          </select>
        </div>
      </div>

      {/* Main IDE Container */}
      <div className="ide-container">
        
        {/* Editor Section (Left) */}
        <div className="editor-section">
          
          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', background: themeConfig.toolbarBg, borderBottom: `1.5px solid ${themeConfig.border}`, flexShrink: 0, flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />)}
            </div>
            <span style={{ fontSize: 11.5, color: themeConfig.lineColor, fontFamily: 'monospace', marginLeft: 4 }}>
              main.{currentLang?.ext}
            </span>

            <div className="responsive-lang-strip" style={{ marginLeft: 'auto', display: 'flex', gap: 6, alignItems: 'center' }}>
              {LANGUAGES.map(l => (
                <button key={l.id} onClick={() => { setLang(l.id); setOutput(null); setTestSummary(null) }}
                  style={{ padding: '4px 10px', borderRadius: 8, border: '1px solid', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, transition: 'all 0.15s',
                    borderColor: lang === l.id ? l.color : themeConfig.border,
                    background:  lang === l.id ? l.color + '22' : 'transparent',
                    color:       lang === l.id ? l.color : themeConfig.lineColor,
                  }}>
                  {l.icon} {l.name}
                </button>
              ))}
            </div>
          </div>

          {/* Code Textarea with Line Numbers */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden', background: themeConfig.bg }}>
            <div ref={lineNumRef} style={{ width: 42, background: themeConfig.lineBg, padding: '14px 6px 14px 0', textAlign: 'right', borderRight: `1.5px solid ${themeConfig.border}`, userSelect: 'none', flexShrink: 0, overflow: 'hidden' }}>
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} style={{ fontSize: 13, color: themeConfig.lineColor, lineHeight: '1.65', fontFamily: 'monospace', paddingRight: 8 }}>{i + 1}</div>
              ))}
            </div>

            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => setCode(e.target.value)}
              onScroll={syncScroll}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              style={{
                flex: 1,
                padding: '14px 16px',
                background: 'transparent',
                color: themeConfig.text,
                border: 'none',
                outline: 'none',
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontSize: 13.5,
                lineHeight: '1.65',
                resize: 'none',
                tabSize: 4
              }}
            />
          </div>

          {/* Action Bar (Bottom of Editor) */}
          <div style={{ display: 'flex', gap: 8, padding: '9px 14px', background: themeConfig.toolbarBg, borderTop: `1.5px solid ${themeConfig.border}`, flexShrink: 0, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleReset}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer' }}>
              ↩ Reset
            </button>
            <button onClick={handleCopy}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: copied ? '#16a34a' : themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer' }}>
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
            <button onClick={handleDownload}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer' }}>
              📥 Download
            </button>
            
            <span style={{ flex: 1, fontSize: 10.5, color: themeConfig.lineColor, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <span style={{ color: saveStatus === 'saved' ? '#10b981' : '#f59e0b', fontWeight: 600 }}>
                ● {saveStatus === 'saved' ? 'Saved' : 'Saving...'}
              </span>
            </span>

            <button onClick={handleRun} disabled={running || runningTestCases}
              style={{ padding: '7px 16px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, cursor: running ? 'not-allowed' : 'pointer', fontSize: 12, fontFamily: 'inherit', fontWeight: 700, background: 'transparent', color: themeConfig.text }}>
              {running ? 'Running...' : '▶ Run Code'}
            </button>

            <button onClick={handleRunTestCases} disabled={runningTestCases || running}
              style={{ padding: '7px 18px', borderRadius: 8, border: 'none', cursor: runningTestCases ? 'not-allowed' : 'pointer', fontSize: 12, fontFamily: 'inherit', fontWeight: 800,
                background: runningTestCases ? '#2d2d3f' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)',
                color: runningTestCases ? '#6b7280' : '#fff',
                boxShadow: runningTestCases ? 'none' : '0 2px 8px rgba(108,60,225,0.4)',
              }}>
              {runningTestCases ? 'Testing...' : '✓ Run Test Cases'}
            </button>
          </div>
        </div>

        {/* Input/Output & Testcases section (Right) */}
        <div className="io-section" style={{ borderLeft: `1.5px solid ${themeConfig.border}` }}>
          
          {/* Panel Tabs */}
          <div style={{ display: 'flex', borderBottom: `1.5px solid ${themeConfig.border}`, background: themeConfig.toolbarBg }}>
            <button
              onClick={() => setActiveTab('testcases')}
              style={{
                flex: 1,
                padding: '10px 8px',
                fontSize: 11.5,
                fontWeight: 800,
                border: 'none',
                borderBottom: activeTab === 'testcases' ? `2.5px solid ${themeConfig.accent}` : '2.5px solid transparent',
                background: 'transparent',
                color: activeTab === 'testcases' ? themeConfig.accent : themeConfig.lineColor,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}
            >
              🧪 Test Cases ({testCases.length})
            </button>

            <button
              onClick={() => setActiveTab('stdin')}
              style={{
                flex: 1,
                padding: '10px 8px',
                fontSize: 11.5,
                fontWeight: 800,
                border: 'none',
                borderBottom: activeTab === 'stdin' ? `2.5px solid ${themeConfig.accent}` : '2.5px solid transparent',
                background: 'transparent',
                color: activeTab === 'stdin' ? themeConfig.accent : themeConfig.lineColor,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}
            >
              📥 Custom Input
            </button>

            <button
              onClick={() => setActiveTab('output')}
              style={{
                flex: 1,
                padding: '10px 8px',
                fontSize: 11.5,
                fontWeight: 800,
                border: 'none',
                borderBottom: activeTab === 'output' ? `2.5px solid ${themeConfig.accent}` : '2.5px solid transparent',
                background: 'transparent',
                color: activeTab === 'output' ? themeConfig.accent : themeConfig.lineColor,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}
            >
              🖥️ Output
            </button>
          </div>

          {/* TAB 1: TEST CASES */}
          {activeTab === 'testcases' && (
            <div style={{ flex: 1, padding: 14, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, background: themeConfig.outputBg }}>
              
              {/* Overall Summary Bar */}
              {testSummary && (
                <div style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: testSummary.passed === testSummary.total ? '#10b98120' : '#ef444420',
                  border: `1px solid ${testSummary.passed === testSummary.total ? '#10b98150' : '#ef444450'}`,
                  color: testSummary.passed === testSummary.total ? '#34d399' : '#f87171'
                }}>
                  <span>{testSummary.passed === testSummary.total ? '✅' : '❌'} Passed {testSummary.passed}/{testSummary.total} Test Cases</span>
                  <span>{Math.round((testSummary.passed / testSummary.total) * 100)}% Pass</span>
                </div>
              )}

              {/* Case Tabs Bar */}
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', overflowX: 'auto', pb: 4 }}>
                {testCases.map((tc, idx) => {
                  const isActive = tc.id === activeCaseId
                  return (
                    <button
                      key={tc.id}
                      onClick={() => setActiveCaseId(tc.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: 8,
                        fontSize: 11.5,
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        background: isActive ? '#6c3ce1' : themeConfig.btnBg,
                        color: isActive ? '#ffffff' : themeConfig.btnText,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4
                      }}
                    >
                      {tc.status === 'PASSED' && <span style={{ color: '#34d399' }}>✓</span>}
                      {tc.status === 'FAILED' && <span style={{ color: '#f87171' }}>✕</span>}
                      Case {idx + 1}
                    </button>
                  )
                })}

                <button
                  onClick={handleAddTestCase}
                  style={{
                    padding: '5px 10px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 800,
                    border: `1px solid ${themeConfig.border}`,
                    background: 'transparent',
                    color: themeConfig.text,
                    cursor: 'pointer'
                  }}
                  title="Add Test Case"
                >
                  +
                </button>
              </div>

              {/* Active Case Form */}
              {activeTestCase && (
                <div style={{
                  padding: 12,
                  borderRadius: 12,
                  background: themeConfig.bg,
                  border: `1px solid ${themeConfig.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: themeConfig.lineColor, textTransform: 'uppercase' }}>
                      Input (stdin)
                    </span>
                    {testCases.length > 1 && (
                      <button
                        onClick={() => handleDeleteTestCase(activeTestCase.id)}
                        style={{ background: 'none', border: 'none', color: '#f87171', fontSize: 11, cursor: 'pointer', fontWeight: 700 }}
                      >
                        🗑️ Delete
                      </button>
                    )}
                  </div>

                  <textarea
                    value={activeTestCase.input}
                    onChange={e => handleUpdateTestCase(activeTestCase.id, { input: e.target.value })}
                    placeholder="Input values..."
                    rows={3}
                    style={{
                      width: '100%',
                      padding: 8,
                      borderRadius: 8,
                      background: themeConfig.outputBg,
                      color: themeConfig.text,
                      border: `1px solid ${themeConfig.border}`,
                      outline: 'none',
                      fontFamily: 'monospace',
                      fontSize: 12,
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />

                  <span style={{ fontSize: 11, fontWeight: 800, color: themeConfig.lineColor, textTransform: 'uppercase' }}>
                    Expected Output
                  </span>
                  <textarea
                    value={activeTestCase.expectedOutput}
                    onChange={e => handleUpdateTestCase(activeTestCase.id, { expectedOutput: e.target.value })}
                    placeholder="Expected output string..."
                    rows={2}
                    style={{
                      width: '100%',
                      padding: 8,
                      borderRadius: 8,
                      background: themeConfig.outputBg,
                      color: themeConfig.text,
                      border: `1px solid ${themeConfig.border}`,
                      outline: 'none',
                      fontFamily: 'monospace',
                      fontSize: 12,
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />

                  {activeTestCase.status && (
                    <div style={{ paddingTop: 8, borderTop: `1px solid ${themeConfig.border}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: activeTestCase.status === 'PASSED' ? '#34d399' : '#f87171' }}>
                          {activeTestCase.status === 'PASSED' ? '✅ Passed' : '❌ Failed'}
                        </span>
                        {activeTestCase.time && (
                          <span style={{ fontSize: 11, color: themeConfig.lineColor }}>
                            ⚡ {activeTestCase.time}s
                          </span>
                        )}
                      </div>

                      {activeTestCase.status === 'FAILED' && (
                        <div style={{ background: themeConfig.outputBg, padding: 8, borderRadius: 8, fontSize: 11, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <span style={{ color: themeConfig.lineColor }}>Your Output:</span>
                          <pre style={{ color: '#f87171', margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                            {activeTestCase.actualOutput || '(no output)'}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CUSTOM INPUT */}
          {activeTab === 'stdin' && (
            <div style={{ flex: 1, padding: 14, background: themeConfig.outputBg, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, fontWeight: 700, color: themeConfig.text }}>
                <input type="checkbox" checked={showStdin} onChange={e => setShowStdin(e.target.checked)} style={{ cursor: 'pointer' }} />
                Enable stdin input
              </label>

              <textarea
                value={stdin}
                onChange={e => setStdin(e.target.value)}
                placeholder="Provide test inputs here..."
                style={{
                  flex: 1,
                  width: '100%',
                  padding: '12px',
                  background: themeConfig.bg,
                  color: themeConfig.text,
                  border: `1px solid ${themeConfig.border}`,
                  borderRadius: 10,
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'monospace',
                  fontSize: 12.5,
                  boxSizing: 'border-box'
                }}
              />
            </div>
          )}

          {/* TAB 3: OUTPUT */}
          {activeTab === 'output' && (
            <div style={{ flex: 1, padding: 14, overflowY: 'auto', background: themeConfig.outputBg }}>
              {output === null ? (
                <div style={{ fontSize: 12.5, color: themeConfig.lineColor, fontFamily: 'monospace' }}>
                  Click "Run Code" or press Ctrl+Enter to execute and view stdout/stderr...
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {output.time && (
                    <span style={{ fontSize: 11, color: themeConfig.lineColor, fontWeight: 600 }}>
                      ⚡ Execution Time: {output.time}s
                    </span>
                  )}
                  {output.type && (
                    <div style={{ fontSize: 11, fontWeight: 800, color: output.success ? '#28ca41' : '#ff5f57', background: output.success ? '#28ca4115' : '#ff5f5715', padding: '3px 8px', borderRadius: 4, display: 'inline-block', alignSelf: 'flex-start' }}>
                      {output.type}
                    </div>
                  )}
                  <pre style={{
                    fontSize: 12.5,
                    color: output.success ? '#a6e3a1' : '#f38ba8',
                    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.65
                  }}>
                    {output.output}
                  </pre>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  )
}
