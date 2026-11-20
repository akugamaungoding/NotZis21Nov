export default function EventDetails() {
  return (
    <section className="event-details" id="event-details">
      <h2 className="section-title">Event Details</h2>
      <p className="section-subtitle">Save the date & mark your calendars! 💕</p>

      <div className="details-grid">
        <div className="detail-card">
          <span className="card-emoji">📅</span>
          <span className="card-label">Date</span>
          <span className="card-value">Saturday,<br />21 Nov 2026</span>
        </div>

        <div className="detail-card">
          <span className="card-emoji">🕒</span>
          <span className="card-label">Time</span>
          <span className="card-value">15:30 WIB</span>
        </div>

        <div className="detail-card">
          <span className="card-emoji">👗</span>
          <span className="card-label">Dress Code</span>
          <span className="card-value">Earth Tone</span>
        </div>

        <div className="detail-card">
          <span className="card-emoji">📍</span>
          <span className="card-label">Location</span>
          <a
            className="location-btn"
            href="https://share.google/HO16aHgigSYPtNRjl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Maps 🗺️
          </a>
        </div>
      </div>
    </section>
  )
}
