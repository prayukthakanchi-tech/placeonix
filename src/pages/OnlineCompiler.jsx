import React, { useState, useRef, useCallback } from 'react'

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
  71: 'print("Hello, Python!")',
  62: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
  54: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
  63: 'console.log("Hello, JavaScript!");',
  50: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}'
}

async function runCode(sourceCode, languageId, retries = 3) {
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
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)
      const data = await res.json()

      // Compile error
      if (data.compiler_error || (data.status != 0 && !data.program_message)) {
        const compileOut = (data.compiler_error || data.compiler_message || 'Compile error').trim()
        if (compileOut.includes('Resource temporarily unavailable') && attempt < retries) {
          await new Promise(r => setTimeout(r, 1200))
          continue
        }
        if (compileOut) return { success: false, output: compileOut, type: 'Compile Error' }
      }

      const stdout = (data.program_output || '').trim()
      const stderr = (data.program_error || '').trim()

      if (stderr.includes('Resource temporarily unavailable') && attempt < retries) {
        await new Promise(r => setTimeout(r, 1200))
        continue
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
        await new Promise(r => setTimeout(r, 1200))
        continue
      }
      return {
        success: false,
        output: `⚠️ Execution failed after ${retries} attempts: ${err.message}`,
        type: 'Network Error',
      }
    }
  }
}

export default function OnlineCompiler() {
  const [lang, setLang] = useState(71)
  const [codeMap, setCodeMap] = useState({ ...DEFAULT_CODE })
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)

  const code = codeMap[lang] || ''
  const setCode = (val) => setCodeMap(prev => ({ ...prev, [lang]: val }))

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
      const val = code.substring(0, s) + '  ' + code.substring(e.target.selectionEnd)
      setCode(val)
      setTimeout(() => e.target.setSelectionRange(s + 2, s + 2), 0)
    }
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault()
      handleRun()
    }
  }, [code]) 

  async function handleRun() {
    if (!code.trim()) return
    setRunning(true)
    setOutput(null)

    if (lang === 63) {
      try {
        const logs = []
        const con = { log: (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')) }
        new Function('console', code)(con)
        setOutput({ success: true, output: logs.join('\n') || '(no output)' })
      } catch (err) {
        setOutput({ success: false, output: err.message, type: 'Error' })
      }
      setRunning(false)
      return
    }

    const result = await runCode(code, lang)
    setOutput(result)
    setRunning(false)
  }

  function handleReset() {
    setCode(DEFAULT_CODE[lang])
    setOutput(null)
  }

  const currentLang = LANGUAGES.find(l => l.id === lang)

  return (
    <div className="responsive-app-height">
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexShrink: 0, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 900, fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.2 }}>⚡ Online Compiler</h1>
          <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>Write and execute code instantly in 5 languages</p>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1e1e2e', borderRadius: 16, overflow: 'hidden', border: '1.5px solid #2d2d3f' }}>
        {/* Toolbar */}
        <div className="responsive-toolbar">
          <div style={{ display: 'flex', gap: 5 }}>
            {['#ff5f57','#ffbd2e','#28ca41'].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />)}
          </div>
          <span style={{ fontSize: 11.5, color: '#6b7280', fontFamily: 'monospace', marginLeft: 4 }}>
            main.{currentLang?.ext}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
            {LANGUAGES.map(l => (
              <button key={l.id} onClick={() => { setLang(l.id); setOutput(null) }}
                style={{ padding: '3px 9px', borderRadius: 6, border: '1px solid', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, transition: 'all 0.15s',
                  borderColor: lang === l.id ? l.color : '#2d2d3f',
                  background:  lang === l.id ? l.color + '22' : 'transparent',
                  color:       lang === l.id ? l.color : '#6b7280',
                }}>
                {l.icon} {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* Code area */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
          {/* Line numbers */}
          <div ref={lineNumRef} style={{ width: 38, background: '#16162a', padding: '14px 6px 14px 0', textAlign: 'right', borderRight: '1px solid #2d2d3f', userSelect: 'none', flexShrink: 0, overflow: 'hidden' }}>
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} style={{ fontSize: 11.5, color: '#3d3d5c', lineHeight: '1.65', fontFamily: 'monospace', paddingRight: 6 }}>{i + 1}</div>
            ))}
          </div>
          <textarea
            ref={textareaRef}
            value={code}
            onChange={e => setCode(e.target.value)}
            onScroll={syncScroll}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            style={{ flex: 1, padding: '14px 14px', background: '#1e1e2e', color: '#cdd6f4', border: 'none', outline: 'none', fontFamily: '"Fira Code", "Cascadia Code", monospace', fontSize: 13.5, lineHeight: '1.65', resize: 'none', tabSize: 2 }}
          />
        </div>

        {/* Action bar */}
        <div style={{ display: 'flex', gap: 8, padding: '9px 14px', background: '#16162a', borderTop: '1px solid #2d2d3f', flexShrink: 0, alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={handleReset}
            style={{ padding: '6px 12px', borderRadius: 7, border: '1px solid #2d2d3f', background: 'transparent', color: '#6b7280', fontSize: 12, fontFamily: 'inherit', fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#4b4b6b'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#2d2d3f'}
          >
            ↩ Reset
          </button>
          <span style={{ flex: 1, fontSize: 10.5, color: '#3d3d5c' }}>Tab = indent · Ctrl+Enter = run</span>
          <button onClick={handleRun} disabled={running}
            style={{ padding: '7px 20px', borderRadius: 8, border: 'none', cursor: running ? 'not-allowed' : 'pointer', fontSize: 12.5, fontFamily: 'inherit', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
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

        {/* Output */}
        <div style={{ height: 200, background: '#11111f', borderTop: '1px solid #1a1a2e', padding: '10px 14px', overflowY: 'auto', flexShrink: 0 }}>
          <div style={{ fontSize: 10, color: '#3d3d5c', fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.5, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: output === null ? '#3d3d5c' : output?.success ? '#28ca41' : '#ff5f57', display: 'inline-block' }} />
            Output
            {output?.time && <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>· ⚡ {output.time}s · {output.memory} KB</span>}
          </div>
          {output === null
            ? <div style={{ fontSize: 12, color: '#3d3d5c', fontFamily: 'monospace' }}>Click "Run Code" or press Ctrl+Enter to execute...</div>
            : <pre style={{ fontSize: 12.5, color: output.success ? '#a6e3a1' : '#f38ba8', fontFamily: 'monospace', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.65 }}>{output.output}</pre>
          }
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
