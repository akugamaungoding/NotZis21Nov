const activities = [
  { emoji: '🎤', name: 'Karaoke' },
  { emoji: '🎱', name: 'Fun Billiard' },
  { emoji: '🎮', name: 'GTA 6' },
  { emoji: '🕹️', name: 'PS5' },
  { emoji: '🎮', name: 'Nintendo Switch' },
  { emoji: '🎲', name: 'Board Games' },
  { emoji: '📸', name: 'Cute Photobox' },
]

export default function Activities() {
  return (
    <section className="activities">
      <h2 className="section-title">What's the Plan?</h2>
      <p className="section-subtitle">So many fun things to do together! ✨</p>

      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <span className="activity-emoji">{activity.emoji}</span>
            <span className="activity-name">{activity.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
