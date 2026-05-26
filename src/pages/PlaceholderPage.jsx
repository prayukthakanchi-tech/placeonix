import React from 'react'

export default function PlaceholderPage({ title, icon, description }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      gap: 16,
    }}>
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
      }}>
        {icon}
      </div>
      <h2 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 24,
        fontWeight: 800,
        color: '#111827',
        marginBottom: 4,
      }}>
        {title}
      </h2>
      <p style={{ color: '#6b7280', maxWidth: 380, lineHeight: 1.6, fontSize: 14 }}>
        {description || `The ${title} section is coming in the next step. We're building this feature carefully to ensure the best experience.`}
      </p>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 20px',
        background: '#ede9fe',
        borderRadius: 999,
        color: '#6c3ce1',
        fontSize: 13,
        fontWeight: 600,
      }}>
        🔨 Coming in Step 2
      </div>
    </div>
  )
}
