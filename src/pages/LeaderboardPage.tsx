import { Helmet } from 'react-helmet-async'
import { auraEvents } from '../data/auraEvents'
import Ad from '../components/Ad'

export default function LeaderboardPage() {
  const topGains = [...auraEvents].sort((a, b) => b.points - a.points).slice(0, 20)
  const topLosses = [...auraEvents].sort((a, b) => a.points - b.points).slice(0, 20)

  return (
    <div className="fade-in">
      <Helmet>
        <title>Aura Leaderboard - Highest & Lowest Aura Events | Aura Score</title>
        <meta name="description" content={`See the highest and lowest aura point events. From +77,000 for nailing karaoke to -2,000,000 for the screenshot disaster. The ultimate aura leaderboard.`} />
        <link rel="canonical" href="https://aura.csskey.com/leaderboard" />
        <meta property="og:title" content="Aura Leaderboard - Highest & Lowest Aura Events | Aura Score" />
        <meta property="og:description" content={`See the highest and lowest aura point events. From +77,000 for nailing karaoke to -2,000,000 for the screenshot disaster. The ultimate aura leaderboard.`} />
        <meta property="og:url" content="https://aura.csskey.com/leaderboard" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Aura Leaderboard",
          "description": "See the highest and lowest aura point events. The ultimate aura leaderboard.",
          "url": "https://aura.csskey.com/leaderboard"
        })}</script>
      </Helmet>

      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Aura Leaderboard</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>
        Top Aura Events
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        The highest-earning and most devastating aura events in our database. See which events generate the most aura and which ones destroy it.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 40 }}>
        {/* Top Gains */}
        <div>
          <h2 className="eyebrow" style={{ color: 'var(--positive)', marginBottom: 16 }}>↑ TOP AURA GAINS</h2>
          <div className="gold-card" style={{ padding: '8px 24px' }}>
            {topGains.map((event, i) => (
              <div key={event.id} className="tx-row">
                <span className="mono" style={{ color: 'var(--gold)', fontSize: 12, width: 24 }}>{i + 1}</span>
                <span style={{ color: 'var(--text)', flex: 1, paddingRight: 16, fontSize: 12, fontFamily: 'var(--font-body)' }}>{event.title}</span>
                <span className="nums" style={{ color: 'var(--positive)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: 13, whiteSpace: 'nowrap' }}>
                  +{event.points.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Losses */}
        <div>
          <h2 className="eyebrow" style={{ color: 'var(--negative)', marginBottom: 16 }}>↓ TOP AURA LOSSES</h2>
          <div className="gold-card" style={{ padding: '8px 24px' }}>
            {topLosses.map((event, i) => (
              <div key={event.id} className="tx-row">
                <span className="mono" style={{ color: 'var(--negative)', fontSize: 12, width: 24 }}>{i + 1}</span>
                <span style={{ color: 'var(--text)', flex: 1, paddingRight: 16, fontSize: 12, fontFamily: 'var(--font-body)' }}>{event.title}</span>
                <span className="nums" style={{ color: 'var(--negative)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: 13, whiteSpace: 'nowrap' }}>
                  {event.points.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Ad />
    </div>
  )
}
