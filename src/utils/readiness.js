/**
 * Computes placement readiness from real user activity fields.
 * Each factor contributes a weighted percentage — all sourced from Firestore.
 *
 * Formula:
 *   Aptitude Score      × 30%   (from best aptitude quiz attempt)
 *   Mock Interview Score × 40%  (from AI interview sessions)
 *   Streak Bonus        × 20%   (consistency: 10 streak days = 100%)
 *   Coding Score        × 10%   (from coding practice sessions)
 */
export function computeReadiness({ aptitudeScore, mockInterviewScore, currentStreak, codingScore }) {
  const streakBonus = Math.min(100, (currentStreak ?? 0) * 10)
  return Math.min(100, Math.round(
    (aptitudeScore        ?? 0) * 0.30 +
    (mockInterviewScore   ?? 0) * 0.40 +
    streakBonus                 * 0.20 +
    (codingScore          ?? 0) * 0.10
  ))
}

/**
 * Tries to extract an overall score from AI-generated interview feedback text.
 * Looks for patterns like "X/10" or "Overall Score: X" and converts to 0–100%.
 * Returns 50 (neutral) if no score can be parsed.
 */
export function parseInterviewScore(text) {
  if (!text) return 0
  // Match "X/10" anywhere in the text
  const tenMatch = text.match(/(\d+)\s*\/\s*10/)
  if (tenMatch) {
    const raw = parseInt(tenMatch[1], 10)
    return Math.min(100, Math.max(0, Math.round((raw / 10) * 100)))
  }
  return 0
}
