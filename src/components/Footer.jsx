import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div className="footer-left" style={{ fontSize: 13, color: '#9ca3af' }}>
        © {new Date().getFullYear()} Placeonix
      </div>
      <div className="footer-center" style={{ fontSize: 13, color: '#6b7280' }}>
        Designed &amp; Developed by <strong style={{ color: '#6c3ce1' }}>kanchi prayuktha</strong>
      </div>
      <div className="footer-right" style={{ fontSize: 13, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
        For any queries &amp; issues, contact us at 
        <a href="mailto:prayukthakanchi@gmail.com" style={{ color: '#6c3ce1', fontWeight: 700, textDecoration: 'none' }}>prayukthakanchi@gmail.com</a>
      </div>
    </footer>
  )
}