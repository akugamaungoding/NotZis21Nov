import { useState } from 'react'
import { supabase } from '../lib/supabase'

const NAMES = [
  'Shofi', 'Wita', 'Yuzmi', 'Shafira', 'Fira', 'Tiara',
  'Riri', 'Fia', 'Fany', 'Sissy', 'Indah', 'Naurah',
]

export default function SongRequest() {
  const [name, setName] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name) {
      setError('Please select your name 💕')
      return
    }
    if (!songTitle.trim()) {
      setError('Please enter a song title 🎵')
      return
    }

    setLoading(true)

    try {
      const { error: supabaseError } = await supabase
        .from('song_requests')
        .insert([{ name, song_title: songTitle.trim() }])

      if (supabaseError) throw supabaseError

      setSuccess(true)
      setSongTitle('')
    } catch (err) {
      console.error('Submission error:', err)
      setError('Oops! Something went wrong. Please try again 😢')
    } finally {
      setLoading(false)
    }
  }

  const handleAddAnother = () => {
    setSuccess(false)
    setError('')
  }

  return (
    <section className="song-request" id="song-request">
      <h2 className="section-title">Song Request 🎵</h2>
      <p className="section-subtitle">What songs should we play? Drop your picks! 🎶</p>

      <div className="song-form-wrapper">
        {success ? (
          <div className="success-message">
            <span className="success-emoji">🎉💖</span>
            <p className="success-text">Song added!</p>
            <p className="success-subtext">Your song request has been submitted ♡</p>
            <button className="add-another-btn" onClick={handleAddAnother}>
              Add Another Song 🎵
            </button>
          </div>
        ) : (
          <form className="song-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <span>💁‍♀️</span> Your Name
              </label>
              <select
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <option value="">Select your name...</option>
                {NAMES.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                <span>🎵</span> Song Title
              </label>
              <input
                type="text"
                placeholder="e.g. Barbie Girl – Aqua"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                maxLength={200}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button
              type="submit"
              className={`submit-btn ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Add My Song ♡'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
