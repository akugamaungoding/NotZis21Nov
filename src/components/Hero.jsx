export default function Hero() {
  const scrollToDetails = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-decorations">
        <span className="hero-deco">🎀</span>
        <span className="hero-deco">✨</span>
        <span className="hero-deco">💖</span>
        <span className="hero-deco">🎀</span>
        <span className="hero-deco">⭐</span>
        <span className="hero-deco">💕</span>
        <span className="hero-deco">✨</span>
        <span className="hero-deco">🌸</span>
      </div>

      <div className="hero-content">
        <span className="hero-ribbon">🎀</span>
        <h2 className="hero-invited">You're Invited!</h2>
        <h1 className="hero-title">NotZis Gathering</h1>
        <p className="hero-tagline">"A little party, a lot of memories!"</p>

        <div className="hero-info">
          <div className="hero-info-item">
            <span className="emoji">📅</span>
            Saturday, 21 November 2026
          </div>
          <div className="hero-info-item">
            <span className="emoji">🕒</span>
            15:30 WIB
          </div>
          <div className="hero-info-item">
            <span className="emoji">👗</span>
            Dress Code: Earth Tone
          </div>
        </div>

        <button className="hero-cta" onClick={scrollToDetails}>
          Let's Celebrate! 🎉
        </button>
      </div>
    </section>
  )
}
