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
  // CORS headers
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY
  if (!GEMINI_API_KEY) {
    console.error("AI Config Error: API key is missing on the server.");
    return res.status(500).json({ error: 'AI service is not configured on the server. API key is missing.' })
  }

  try {
    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-1.5-flash-latest',
      'gemini-pro'
    ];

    let upstream;
    let data;

    for (const model of modelsToTry) {
      upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body),
        }
      );

      data = await upstream.json();
      
      // If successful, break out of loop
      if (upstream.ok) break;
      
      // If it's a 404 (model not found), try the next model
      if (upstream.status === 404) continue;
      
      // If it's some other error (like 403 invalid key, or 400 bad request), break and return it
      break;
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: 'Gemini API error',
        detail: data?.error?.message || 'Unknown error from AI service',
        triedModels: modelsToTry
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
