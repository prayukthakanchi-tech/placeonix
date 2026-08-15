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
      'gemini-2.5-pro',
      'gemini-3.5-flash'
    ];

    // Adapt { message: "..." } request format to Gemini contents schema
    let requestBody = req.body;
    if (requestBody && requestBody.message) {
      requestBody = {
        contents: [{ parts: [{ text: requestBody.message }] }]
      };
    }

    let upstream;
    let data;

    for (const model of modelsToTry) {
      upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        }
      );

      data = await upstream.json();
      
      // If successful, break out of loop
      if (upstream.ok) break;
      
      // If it's 404, 400 or 503 (model unavalaible/deprecated), try next model
      if ([400, 404, 503].includes(upstream.status)) continue;
      
      break;
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: 'Gemini API error',
        detail: data?.error?.message || 'Unknown error from AI service',
        triedModels: modelsToTry
      })
    }

    // Add .response field for compatibility with client code expecting data.response
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    data.response = text;

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({
      error: 'AI service temporarily unavailable.',
      message: err.message,
    })
  }
}
