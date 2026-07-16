import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { auraTypes } from '../data/auraTypes'
import Ad from '../components/Ad'

export default function TypesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Aura Types - All {auraTypes.length} Aura Level Categories | Aura Score</title>
        <meta name="description" content={`Discover all ${auraTypes.length} aura types — from Aura Billionaire to Aura Nuclear Meltdown. Find out which aura tier you belong to based on your aura points.`} />
        <meta property="og:title" content={`Aura Types - All ${auraTypes.length} Aura Level Categories | Aura Score`} />
        <meta property="og:description" content={`Discover all ${auraTypes.length} aura types — from Aura Billionaire to Aura Nuclear Meltdown. Find out which aura tier you belong to based on your aura points.`} />
        <meta property="og:url" content="https://aura.csskey.com/types" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Aura Types",
          "description": `Discover all ${auraTypes.length} aura types — from Aura Billionaire to Aura Nuclear Meltdown. Find out which aura tier you belong to based on your aura points.`,
          "url": "https://aura.csskey.com/types"
        })}</script>
      </Helmet>

      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Aura Classification</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>
        Aura Types
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        Your total aura points determine your aura type. From <span style={{ color: 'var(--gold)' }}>Aura Billionaire</span> at 500,000+ points down to <span style={{ color: '#EF4444' }}>Aura Nuclear Meltdown</span> in the deep negative, each type comes with its own traits, strengths, and personality profile.
      </p>

      {/* Type cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {auraTypes.map((type, i) => (
          <Link key={type.slug} to={`/types/${type.slug}`} style={{ textDecoration: 'none' }}>
            <div className="gold-card" style={{
              padding: '28px 32px',
              display: 'grid',
              gridTemplateColumns: '60px 1fr auto',
              gap: 24,
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', textAlign: 'center' }}>{type.emoji}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>#{i + 1}</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: type.color }}>{type.name}</h2>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.6, fontFamily: 'var(--font-body)', marginBottom: 8 }}>{type.description}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {type.traits.map((t, j) => <span key={j} className="chip chip-gold">{t}</span>)}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="mono section-label" style={{ marginBottom: 4 }}>Range</div>
                <div className="mono nums" style={{ fontSize: 14, color: 'var(--gold)', fontWeight: 600 }}>{type.range}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link to="/" className="btn btn-gold">Calculate Your Aura Score →</Link>
      </div>
    </div>
  )
}
