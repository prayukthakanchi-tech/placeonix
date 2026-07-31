export const BADGES = [
  {
    id: 'dsa_warrior',
    name: 'DSA Warrior',
    emoji: '⚔️',
    desc: 'Solve 5+ coding practice challenges.',
    check: (profile) => (profile?.codingScore ?? 0) >= 50
  },
  {
    id: 'aptitude_scholar',
    name: 'Aptitude Scholar',
    emoji: '🎓',
    desc: 'Achieve a score of 80%+ in any aptitude test.',
    check: (profile) => (profile?.aptitudeScore ?? 0) >= 80
  },
  {
    id: 'mock_master',
    name: 'Mock Master',
    emoji: '🎙️',
    desc: 'Complete an AI Mock Interview with a score of 8/10 or higher.',
    check: (profile) => (profile?.mockInterviewScore ?? 0) >= 80
  },
  {
    id: 'daily_devoted',
    name: 'Daily Devoted',
    emoji: '🔥',
    desc: 'Maintain a placement prep streak of 3+ days.',
    check: (profile) => (profile?.currentStreak ?? 0) >= 3
  },
  {
    id: 'aptitude_grandmaster',
    name: 'Aptitude Sage',
    emoji: '🧠',
    desc: 'Score 70%+ in all 4 aptitude sections (Quant, Logic, Verbal, Tech).',
    check: (profile) => {
      const s = profile?.sectionScores || {}
      return (s.quant ?? 0) >= 70 && (s.logical ?? 0) >= 70 && (s.verbal ?? 0) >= 70 && (s.technical ?? 0) >= 70
    }
  },
  {
    id: 'fullstack_interviewee',
    name: 'Technical Master',
    emoji: '💻',
    desc: 'Complete an AI Interview focusing on "Technical Core Only".',
    check: (profile) => !!profile?.technicalInterviewCompleted
  }
]

export function getUnlockedBadges(profile) {
  return BADGES.filter(b => b.check(profile)).map(b => b.id)
}
