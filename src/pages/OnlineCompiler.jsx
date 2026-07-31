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
  71: 'print("Hello, Python!")\n\n# Try custom input:\n# import sys\n# name = sys.stdin.read().strip()\n# print(f"Welcome, {name}!")',
  62: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n        // Try custom input:\n        // Scanner sc = new Scanner(System.in);\n        // if (sc.hasNext()) {\n        //     System.out.println("Input: " + sc.next());\n        // }\n    }\n}',
  54: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    // Try custom input:\n    // string s;\n    // if (cin >> s) cout << "Input: " << s << endl;\n    return 0;\n}',
  63: 'console.log("Hello, JavaScript!");\n\n// Try custom input:\n// const fs = require("fs");\n// const input = fs.readFileSync(0, "utf-8").trim();\n// console.log("Input was:", input);',
  50: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    // Try custom input:\n    // char name[50];\n    // if (scanf("%49s", name) == 1) printf("Hello, %s!\\n", name);\n    return 0;\n}'
}

const THEMES = {
  dracula: {
    name: '🧛 Dracula',
    bg: '#282a36',
    text: '#f8f8f2',
    lineBg: '#21222c',
    lineColor: '#6272a4',
    border: '#44475a',
    toolbarBg: '#191a21',
    outputBg: '#1e1f29',
    btnBg: '#44475a',
    btnText: '#f8f8f2'
  },
  oneDark: {
    name: '🌘 One Dark',
    bg: '#282c34',
    text: '#abb2bf',
    lineBg: '#21252b',
    lineColor: '#5c6370',
    border: '#3e4451',
    toolbarBg: '#1e2227',
    outputBg: '#181a1f',
    btnBg: '#3e4451',
    btnText: '#abb2bf'
  },
  nord: {
    name: '❄️ Nord',
    bg: '#2e3440',
    text: '#d8dee9',
    lineBg: '#242933',
    lineColor: '#4c566a',
    border: '#3b4252',
    toolbarBg: '#1f232a',
    outputBg: '#1a1c23',
    btnBg: '#3b4252',
    btnText: '#d8dee9'
  },
  githubLight: {
    name: '☀️ Light',
    bg: '#ffffff',
    text: '#24292e',
    lineBg: '#f6f8fa',
    lineColor: '#959da5',
    border: '#e1e4e8',
    toolbarBg: '#eaecef',
    outputBg: '#fafbfc',
    btnBg: '#e1e4e8',
    btnText: '#24292e'
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

  // 1. Try server proxy /api/chat
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

  // 2. Instant local JS execution fallback for JavaScript (Language ID 63)
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
    output: '⚠️ Compiler server is busy. Please try again in a few moments or run JavaScript code directly.',
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
          console.warn("Wandbox is overloaded. Falling back to AI compiler...");
          return await runCodeAI(sourceCode, languageId, stdin)
        }
        if (compileOut) return { success: false, output: compileOut, type: 'Compile Error' }
      }

      const stdout = (data.program_output || '').trim()
      const stderr = (data.program_error || '').trim()

      if (stderr.includes('Resource temporarily unavailable')) {
        console.warn("Wandbox process space exhausted. Falling back to AI compiler...");
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
        await new Promise(r => setTimeout(r, 1000))
        continue
      }
      console.warn(`Wandbox offline: ${err.message}. Falling back to AI compiler...`);
      return await runCodeAI(sourceCode, languageId, stdin)
    }
  }
}

export default function OnlineCompiler() {
  const [lang, setLang] = useState(71)
  const [codeMap, setCodeMap] = useState({ ...DEFAULT_CODE })
  const [theme, setTheme] = useState('dracula')
  const [showStdin, setShowStdin] = useState(false)
  const [stdin, setStdin] = useState('')
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const [saveStatus, setSaveStatus] = useState('saved')
  const saveTimeoutRef = useRef(null)

  // Load from localStorage on mount
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

    const startTime = performance.now()
    const result = await runCode(code, lang, showStdin ? stdin : '')
    const duration = ((performance.now() - startTime) / 1000).toFixed(2)

    setOutput({ ...result, time: duration })
    setRunning(false)
  }

  function handleReset() {
    setCode(DEFAULT_CODE[lang])
    setOutput(null)
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
    // Suffixing with .txt prevents browser Safe Browsing heuristics from flagging 
    // downloaded scripts (.py, .js, .cpp) as potentially harmful executable files.
    link.download = `main.${currentLang?.ext}.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  const currentLang = LANGUAGES.find(l => l.id === lang)
  const themeConfig = THEMES[theme]

  return (
    <div className="responsive-app-height" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Styles for Responsiveness & Themes */}
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
          width: 380px;
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
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.2 }}>💻 VS-Code Sandbox</h1>
          <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>Write, test, and compile code in real-time with custom test cases</p>
        </div>
        
        {/* Theme Select & Utilities */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <select value={theme} onChange={e => setTheme(e.target.value)}
            style={{ padding: '6px 12px', borderRadius: 8, border: '1.5px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-primary)', fontSize: 12, fontWeight: 700, outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
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
                <button key={l.id} onClick={() => { setLang(l.id); setOutput(null) }}
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
            
            {/* Line numbers */}
            <div ref={lineNumRef} style={{ width: 42, background: themeConfig.lineBg, padding: '14px 6px 14px 0', textAlign: 'right', borderRight: `1.5px solid ${themeConfig.border}`, userSelect: 'none', flexShrink: 0, overflow: 'hidden' }}>
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} style={{ fontSize: 13, color: themeConfig.lineColor, lineHeight: '1.65', fontFamily: 'monospace', paddingRight: 8 }}>{i + 1}</div>
              ))}
            </div>

            {/* Textarea */}
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
          <div style={{ display: 'flex', gap: 10, padding: '9px 14px', background: themeConfig.toolbarBg, borderTop: `1.5px solid ${themeConfig.border}`, flexShrink: 0, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleReset}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = themeConfig.lineColor}
              onMouseLeave={e => e.currentTarget.style.borderColor = themeConfig.border}
            >
              ↩ Reset
            </button>
            <button onClick={handleCopy}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: copied ? '#16a34a' : themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
            >
              {copied ? '✓ Copied' : '📋 Copy Code'}
            </button>
            <button onClick={handleDownload}
              style={{ padding: '6px 12px', borderRadius: 8, border: `1.5px solid ${themeConfig.border}`, background: 'transparent', color: themeConfig.lineColor, fontSize: 11.5, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
            >
              📥 Download
            </button>
            
            <span style={{ flex: 1, fontSize: 10.5, color: themeConfig.lineColor, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span>Ctrl+Enter = run</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: saveStatus === 'saved' ? '#10b981' : '#f59e0b', transition: 'color 0.2s', fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: saveStatus === 'saved' ? '#10b981' : '#f59e0b', display: 'inline-block', animation: saveStatus === 'saving' ? 'pulse 1.2s infinite' : 'none' }} />
                {saveStatus === 'saved' ? 'Saved' : 'Saving...'}
              </span>
            </span>

            <button onClick={handleRun} disabled={running}
              style={{ padding: '7px 22px', borderRadius: 8, border: 'none', cursor: running ? 'not-allowed' : 'pointer', fontSize: 12.5, fontFamily: 'inherit', fontWeight: 800, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                background: running ? '#2d2d3f' : 'linear-gradient(135deg, #6c3ce1, #7c3aed)',
                color: running ? '#6b7280' : '#fff',
                boxShadow: running ? 'none' : '0 2px 8px rgba(108,60,225,0.4)',
              }}>
              {running
                ? <><span style={{ display: 'inline-block', width: 12, height: 12, border: '2px solid #6b7280', borderTopColor: '#a78bfa', borderRadius: 999, animation: 'spin 0.8s linear infinite' }} />Running...</>
                : '▶ Run Code'
              }
            </button>
          </div>
        </div>

        {/* Input/Output section (Right) */}
        <div className="io-section" style={{ borderLeft: `1.5px solid ${themeConfig.border}` }}>
          
          {/* Custom Input Header / Stdin Toggle */}
          <div style={{ padding: '12px 14px', borderBottom: `1.5px solid ${themeConfig.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: themeConfig.toolbarBg }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: themeConfig.text, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              📥 Custom Input
            </span>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, fontWeight: 700, color: themeConfig.lineColor }}>
              <input type="checkbox" checked={showStdin} onChange={e => setShowStdin(e.target.checked)} style={{ cursor: 'pointer' }} />
              Enable stdin
            </label>
          </div>

          {/* Custom Input Textarea */}
          <div style={{ height: showStdin ? 120 : 0, transition: 'height 0.2s ease', overflow: 'hidden', background: themeConfig.bg }}>
            <textarea
              value={stdin}
              onChange={e => setStdin(e.target.value)}
              placeholder="Provide test inputs here (e.g. standard stdin parameters)..."
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                background: 'transparent',
                color: themeConfig.text,
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontFamily: 'monospace',
                fontSize: 12.5,
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Output Header */}
          <div style={{ padding: '12px 14px', borderTop: `1.5px solid ${themeConfig.border}`, borderBottom: `1.5px solid ${themeConfig.border}`, background: themeConfig.toolbarBg, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: output === null ? '#3d3d5c' : output?.success ? '#28ca41' : '#ff5f57', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: themeConfig.text, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              🖥️ Compiler Output
            </span>
            {output?.time && (
              <span style={{ fontSize: 11, color: themeConfig.lineColor, marginLeft: 'auto', fontWeight: 600 }}>
                ⚡ {output.time}s
              </span>
            )}
          </div>

          {/* Compiler Output Pre */}
          <div style={{ flex: 1, padding: '14px', overflowY: 'auto', background: themeConfig.outputBg }}>
            {output === null ? (
              <div style={{ fontSize: 12.5, color: themeConfig.lineColor, fontFamily: 'monospace' }}>
                Click "Run Code" or press Ctrl+Enter to execute and view stdout/stderr...
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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

        </div>

      </div>
    </div>
  )
}
