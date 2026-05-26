import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        For any queries &amp; issues<br />
        <a href="mailto:prayukthakanchi@gmail.com">prayukthakanchi@gmail.com</a>
      </div>
      <div className="footer-center">
        Designed &amp; Developed by <strong style={{ color: '#6c3ce1' }}>kanchi prayuktha</strong>
      </div>
      <div className="footer-right" style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
        <strong style={{ fontSize: 13, color: '#374151', marginBottom: 2 }}>Know More About Me</strong>
        <a href="mailto:prayukthakanchi@gmail.com" style={{ color: '#6c3ce1', fontSize: 12.5, fontWeight: 500 }}>
          📧 prayukthakanchi@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/prayuktha-kanchi" target="_blank" rel="noreferrer" style={{ color: '#6c3ce1', fontSize: 12.5, fontWeight: 500 }}>
          💼 LinkedIn/prayuktha-kanchi
        </a>
        <a href="https://github.com/prayukthakanchi-tech" target="_blank" rel="noreferrer" style={{ color: '#6c3ce1', fontSize: 12.5, fontWeight: 500 }}>
          🐙 GitHucb/prayukthakanchi-tech
        </a>
        <span style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>© 2025 Kanchi Prayuktha</span>
      </div>
    </footer>
  )
}