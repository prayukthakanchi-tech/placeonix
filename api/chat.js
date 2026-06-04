/**
 * Vercel Serverless Function — Gemini AI Proxy
 *
 * Keeps the GEMINI_API_KEY on the server only.
 * The client calls /api/chat instead of Gemini directly,
 * so the key is never exposed in the browser bundle.
 *
 * Set GEMINI_API_KEY in Vercel → Project Settings → Environment Variables
 */
export default async function handler(req, res) {
  // CORS headers — only allow our own origin
  res.setHeader('Access-Control-Allow-Origin', 'https://placeonix-theta.vercel.app')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'AI service is not configured on the server.' })
  }

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    )

    const data = await upstream.json()

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: 'Gemini API error',
        detail: data?.error?.message || 'Unknown error from AI service',
      })
    }

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({
      error: 'AI service temporarily unavailable.',
      message: err.message,
    })
  }
}
