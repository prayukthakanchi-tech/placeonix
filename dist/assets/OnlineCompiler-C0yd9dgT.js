import{j as t}from"./index-CeKhrBfZ.js";import{a1 as a}from"./icons-Duf8sykG.js";import"./react-vendor-ehwJnh3_.js";import"./firebase-vendor-CQT6tCi3.js";const O=[{id:71,name:"Python",ext:"py",color:"#3b82f6",icon:"🐍"},{id:62,name:"Java",ext:"java",color:"#f97316",icon:"☕"},{id:54,name:"C++",ext:"cpp",color:"#8b5cf6",icon:"🔷"},{id:63,name:"JavaScript",ext:"js",color:"#eab308",icon:"🟨"},{id:50,name:"C",ext:"c",color:"#6b7280",icon:"⚙️"}],P={71:{compiler:"cpython-3.13.8"},62:{compiler:"openjdk-jdk-22+36"},54:{compiler:"gcc-13.2.0"},63:{compiler:"nodejs-20.17.0"},50:{compiler:"gcc-13.2.0-c"}},W={71:`print("Hello, Python!")

# Try custom input:
# import sys
# name = sys.stdin.read().strip()
# print(f"Welcome, {name}!")`,62:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        // Try custom input:
        // Scanner sc = new Scanner(System.in);
        // if (sc.hasNext()) {
        //     System.out.println("Input: " + sc.next());
        // }
    }
}`,54:`#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    // Try custom input:
    // string s;
    // if (cin >> s) cout << "Input: " << s << endl;
    return 0;
}`,63:`console.log("Hello, JavaScript!");

// Try custom input:
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim();
// console.log("Input was:", input);`,50:`#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    // Try custom input:
    // char name[50];
    // if (scanf("%49s", name) == 1) printf("Hello, %s!\\n", name);
    return 0;
}`},T={dracula:{name:"🧛 Dracula",bg:"#282a36",text:"#f8f8f2",lineBg:"#21222c",lineColor:"#6272a4",border:"#44475a",toolbarBg:"#191a21",outputBg:"#1e1f29",btnBg:"#44475a",btnText:"#f8f8f2"},oneDark:{name:"🌘 One Dark",bg:"#282c34",text:"#abb2bf",lineBg:"#21252b",lineColor:"#5c6370",border:"#3e4451",toolbarBg:"#1e2227",outputBg:"#181a1f",btnBg:"#3e4451",btnText:"#abb2bf"},nord:{name:"❄️ Nord",bg:"#2e3440",text:"#d8dee9",lineBg:"#242933",lineColor:"#4c566a",border:"#3b4252",toolbarBg:"#1f232a",outputBg:"#1a1c23",btnBg:"#3b4252",btnText:"#d8dee9"},githubLight:{name:"☀️ Light",bg:"#ffffff",text:"#24292e",lineBg:"#f6f8fa",lineColor:"#959da5",border:"#e1e4e8",toolbarBg:"#eaecef",outputBg:"#fafbfc",btnBg:"#e1e4e8",btnText:"#24292e"}},M={71:"Python",62:"Java",54:"C++",63:"JavaScript",50:"C"};async function E(i,f,g=""){const x=`You are a secure, sandboxed code execution engine. Analyze the following source code and simulate its compilation and execution.

Language: ${M[f]||"Python"}
Stdin / Input:
${g}

Code to execute:
${i}

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

Return ONLY the raw JSON object. Do not include markdown code block formatting (like \`\`\`json). Do not include any other text.`;try{const l=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:x})});if(l.ok){const s=await l.json();let r=(s==null?void 0:s.response)||"";r=r.replace(/```json/gi,"").replace(/```/gi,"").trim();const c=JSON.parse(r);return{success:c.success,output:c.output,type:c.type||(c.success?void 0:"Runtime Error")}}}catch(l){console.warn("Serverless compiler proxy failed, trying direct browser fallback...",l)}if(f===63)try{const l=[],s={log:(...r)=>l.push(r.map(c=>typeof c=="object"?JSON.stringify(c):String(c)).join(" "))};return new Function("console",i)(s),{success:!0,output:l.join(`
`)||"(no output)"}}catch(l){return{success:!1,output:l.message,type:"Runtime Error"}}return{success:!1,output:"⚠️ Compiler server is busy. Please try again in a few moments or run JavaScript code directly.",type:"Execution Error"}}async function U(i,f,g="",m=3){const x=P[f];if(!x)return{success:!1,output:"Language not supported",type:"Error"};for(let l=1;l<=m;l++)try{const s=await fetch("https://wandbox.org/api/compile.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({compiler:x.compiler,code:i,stdin:g})});if(!s.ok)throw new Error(`Server returned ${s.status}`);const r=await s.json();if(r.compiler_error||r.status!=0&&!r.program_message){const o=(r.compiler_error||r.compiler_message||"Compile error").trim();if(o.includes("Resource temporarily unavailable")||o.includes("crun: clone"))return console.warn("Wandbox is overloaded. Falling back to AI compiler..."),await E(i,f,g);if(o)return{success:!1,output:o,type:"Compile Error"}}const c=(r.program_output||"").trim(),b=(r.program_error||"").trim();return b.includes("Resource temporarily unavailable")?(console.warn("Wandbox process space exhausted. Falling back to AI compiler..."),await E(i,f,g)):r.status!=0&&b?{success:!1,output:b,type:"Runtime Error"}:{success:!0,output:c||b||"(no output)"}}catch(s){if(l<m){await new Promise(r=>setTimeout(r,1e3));continue}return console.warn(`Wandbox offline: ${s.message}. Falling back to AI compiler...`),await E(i,f,g)}}function V(){const[i,f]=a.useState(71),[g,m]=a.useState({...W}),[x,l]=a.useState("dracula"),[s,r]=a.useState(!1),[c,b]=a.useState(""),[o,j]=a.useState(null),[h,B]=a.useState(!1),[z,N]=a.useState(!1),[C,F]=a.useState("saved"),S=a.useRef(null);a.useEffect(()=>{try{const e=localStorage.getItem("placeonix_compiler_code");e&&m(JSON.parse(e))}catch{}},[]),a.useEffect(()=>()=>{S.current&&clearTimeout(S.current)},[]);const u=g[i]||"",w=e=>{m(d=>{const p={...d,[i]:e};return F("saving"),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{try{localStorage.setItem("placeonix_compiler_code",JSON.stringify(p)),F("saved")}catch{}},600),p})},$=u.split(`
`).length||1,k=a.useRef(null),R=a.useRef(null),D=a.useCallback(()=>{k.current&&R.current&&(k.current.scrollTop=R.current.scrollTop)},[]),J=a.useCallback(e=>{if(e.key==="Tab"){e.preventDefault();const p=e.target.selectionStart,v=u.substring(0,p)+"    "+u.substring(e.target.selectionEnd);w(v),setTimeout(()=>e.target.setSelectionRange(p+4,p+4),0);return}const d={"(":")","[":"]","{":"}",'"':'"',"'":"'"};if(d[e.key]!==void 0){e.preventDefault();const p=d[e.key],v=e.target.selectionStart,H=u.substring(0,v)+e.key+p+u.substring(e.target.selectionEnd);w(H),setTimeout(()=>e.target.setSelectionRange(v+1,v+1),0);return}e.key==="Enter"&&e.ctrlKey&&(e.preventDefault(),I())},[u,i,c,s]);async function I(){if(!u.trim())return;B(!0),j(null);const e=performance.now(),d=await U(u,i,s?c:""),p=((performance.now()-e)/1e3).toFixed(2);j({...d,time:p}),B(!1)}function L(){w(W[i]),j(null)}function A(){navigator.clipboard.writeText(u).then(()=>{N(!0),setTimeout(()=>N(!1),2e3)})}function _(){const e=new Blob([u],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(e),p=document.createElement("a");p.href=d,p.download=`main.${y==null?void 0:y.ext}.txt`,p.click(),URL.revokeObjectURL(d)}const y=O.find(e=>e.id===i),n=T[x];return t.jsxs("div",{className:"responsive-app-height",style:{display:"flex",flexDirection:"column"},children:[t.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .ide-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          background: ${n.bg};
          border: 1.5px solid ${n.border};
          border-radius: 16px;
        }
        .editor-section {
          flex: 1.3;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-right: 1.5px solid ${n.border};
        }
        .io-section {
          width: 380px;
          display: flex;
          flex-direction: column;
          background: ${n.outputBg};
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .ide-container {
            flex-direction: column;
            overflow-y: auto;
          }
          .editor-section {
            border-right: none;
            border-bottom: 1.5px solid ${n.border};
            height: 400px;
            flex: none;
          }
          .io-section {
            width: 100%;
            height: auto;
            flex: 1;
          }
        }
      `}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:14,flexShrink:0,flexWrap:"wrap"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",lineHeight:1.2},children:"💻 VS-Code Sandbox"}),t.jsx("p",{style:{fontSize:12.5,color:"var(--text-muted)",marginTop:2},children:"Write, test, and compile code in real-time with custom test cases"})]}),t.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:t.jsx("select",{value:x,onChange:e=>l(e.target.value),style:{padding:"6px 12px",borderRadius:8,border:"1.5px solid var(--card-border)",background:"var(--card-bg)",color:"var(--text-primary)",fontSize:12,fontWeight:700,outline:"none",cursor:"pointer",fontFamily:"inherit"},children:Object.keys(T).map(e=>t.jsx("option",{value:e,children:T[e].name},e))})})]}),t.jsxs("div",{className:"ide-container",children:[t.jsxs("div",{className:"editor-section",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px 14px",background:n.toolbarBg,borderBottom:`1.5px solid ${n.border}`,flexShrink:0,flexWrap:"wrap",gap:10},children:[t.jsx("div",{style:{display:"flex",gap:5},children:["#ff5f57","#ffbd2e","#28ca41"].map((e,d)=>t.jsx("div",{style:{width:11,height:11,borderRadius:999,background:e}},d))}),t.jsxs("span",{style:{fontSize:11.5,color:n.lineColor,fontFamily:"monospace",marginLeft:4},children:["main.",y==null?void 0:y.ext]}),t.jsx("div",{className:"responsive-lang-strip",style:{marginLeft:"auto",display:"flex",gap:6,alignItems:"center"},children:O.map(e=>t.jsxs("button",{onClick:()=>{f(e.id),j(null)},style:{padding:"4px 10px",borderRadius:8,border:"1px solid",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:700,transition:"all 0.15s",borderColor:i===e.id?e.color:n.border,background:i===e.id?e.color+"22":"transparent",color:i===e.id?e.color:n.lineColor},children:[e.icon," ",e.name]},e.id))})]}),t.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden",background:n.bg},children:[t.jsx("div",{ref:k,style:{width:42,background:n.lineBg,padding:"14px 6px 14px 0",textAlign:"right",borderRight:`1.5px solid ${n.border}`,userSelect:"none",flexShrink:0,overflow:"hidden"},children:Array.from({length:$},(e,d)=>t.jsx("div",{style:{fontSize:13,color:n.lineColor,lineHeight:"1.65",fontFamily:"monospace",paddingRight:8},children:d+1},d))}),t.jsx("textarea",{ref:R,value:u,onChange:e=>w(e.target.value),onScroll:D,onKeyDown:J,spellCheck:!1,style:{flex:1,padding:"14px 16px",background:"transparent",color:n.text,border:"none",outline:"none",fontFamily:'"Fira Code", "Cascadia Code", Consolas, monospace',fontSize:13.5,lineHeight:"1.65",resize:"none",tabSize:4}})]}),t.jsxs("div",{style:{display:"flex",gap:10,padding:"9px 14px",background:n.toolbarBg,borderTop:`1.5px solid ${n.border}`,flexShrink:0,alignItems:"center",flexWrap:"wrap"},children:[t.jsx("button",{onClick:L,style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${n.border}`,background:"transparent",color:n.lineColor,fontSize:11.5,fontFamily:"inherit",fontWeight:700,cursor:"pointer",transition:"all 0.15s"},onMouseEnter:e=>e.currentTarget.style.borderColor=n.lineColor,onMouseLeave:e=>e.currentTarget.style.borderColor=n.border,children:"↩ Reset"}),t.jsx("button",{onClick:A,style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${n.border}`,background:"transparent",color:z?"#16a34a":n.lineColor,fontSize:11.5,fontFamily:"inherit",fontWeight:700,cursor:"pointer",transition:"all 0.15s"},children:z?"✓ Copied":"📋 Copy Code"}),t.jsx("button",{onClick:_,style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${n.border}`,background:"transparent",color:n.lineColor,fontSize:11.5,fontFamily:"inherit",fontWeight:700,cursor:"pointer",transition:"all 0.15s"},children:"📥 Download"}),t.jsxs("span",{style:{flex:1,fontSize:10.5,color:n.lineColor,display:"flex",alignItems:"center",justifyContent:"center",gap:12,flexWrap:"wrap"},children:[t.jsx("span",{children:"Ctrl+Enter = run"}),t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,color:C==="saved"?"#10b981":"#f59e0b",transition:"color 0.2s",fontWeight:600},children:[t.jsx("span",{style:{width:6,height:6,borderRadius:999,background:C==="saved"?"#10b981":"#f59e0b",display:"inline-block",animation:C==="saving"?"pulse 1.2s infinite":"none"}}),C==="saved"?"Saved":"Saving..."]})]}),t.jsx("button",{onClick:I,disabled:h,style:{padding:"7px 22px",borderRadius:8,border:"none",cursor:h?"not-allowed":"pointer",fontSize:12.5,fontFamily:"inherit",fontWeight:800,transition:"all 0.2s",display:"flex",alignItems:"center",gap:6,background:h?"#2d2d3f":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:h?"#6b7280":"#fff",boxShadow:h?"none":"0 2px 8px rgba(108,60,225,0.4)"},children:h?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{display:"inline-block",width:12,height:12,border:"2px solid #6b7280",borderTopColor:"#a78bfa",borderRadius:999,animation:"spin 0.8s linear infinite"}}),"Running..."]}):"▶ Run Code"})]})]}),t.jsxs("div",{className:"io-section",style:{borderLeft:`1.5px solid ${n.border}`},children:[t.jsxs("div",{style:{padding:"12px 14px",borderBottom:`1.5px solid ${n.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:n.toolbarBg},children:[t.jsx("span",{style:{fontSize:12,fontWeight:800,color:n.text,textTransform:"uppercase",letterSpacing:.5},children:"📥 Custom Input"}),t.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:12,fontWeight:700,color:n.lineColor},children:[t.jsx("input",{type:"checkbox",checked:s,onChange:e=>r(e.target.checked),style:{cursor:"pointer"}}),"Enable stdin"]})]}),t.jsx("div",{style:{height:s?120:0,transition:"height 0.2s ease",overflow:"hidden",background:n.bg},children:t.jsx("textarea",{value:c,onChange:e=>b(e.target.value),placeholder:"Provide test inputs here (e.g. standard stdin parameters)...",style:{width:"100%",height:"100%",padding:"12px",background:"transparent",color:n.text,border:"none",outline:"none",resize:"none",fontFamily:"monospace",fontSize:12.5,boxSizing:"border-box"}})}),t.jsxs("div",{style:{padding:"12px 14px",borderTop:`1.5px solid ${n.border}`,borderBottom:`1.5px solid ${n.border}`,background:n.toolbarBg,display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{width:6,height:6,borderRadius:999,background:o===null?"#3d3d5c":o!=null&&o.success?"#28ca41":"#ff5f57",display:"inline-block"}}),t.jsx("span",{style:{fontSize:12,fontWeight:800,color:n.text,textTransform:"uppercase",letterSpacing:.5},children:"🖥️ Compiler Output"}),(o==null?void 0:o.time)&&t.jsxs("span",{style:{fontSize:11,color:n.lineColor,marginLeft:"auto",fontWeight:600},children:["⚡ ",o.time,"s"]})]}),t.jsx("div",{style:{flex:1,padding:"14px",overflowY:"auto",background:n.outputBg},children:o===null?t.jsx("div",{style:{fontSize:12.5,color:n.lineColor,fontFamily:"monospace"},children:'Click "Run Code" or press Ctrl+Enter to execute and view stdout/stderr...'}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[o.type&&t.jsx("div",{style:{fontSize:11,fontWeight:800,color:o.success?"#28ca41":"#ff5f57",background:o.success?"#28ca4115":"#ff5f5715",padding:"3px 8px",borderRadius:4,display:"inline-block",alignSelf:"flex-start"},children:o.type}),t.jsx("pre",{style:{fontSize:12.5,color:o.success?"#a6e3a1":"#f38ba8",fontFamily:'"Fira Code", "Cascadia Code", Consolas, monospace',margin:0,whiteSpace:"pre-wrap",lineHeight:1.65},children:o.output})]})})]})]})]})}export{V as default};
