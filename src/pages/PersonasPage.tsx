import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { auraPersonas } from '../data/auraPersonas'
import Ad from '../components/Ad'

export default function PersonasPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Aura Personas - {auraPersonas.length} Personality Types | Aura Score</title>
        <meta name="description" content={`Discover your aura persona — from The Main Character to The Lone Wolf. ${auraPersonas.length} unique personality types based on how you generate and spend aura in social situations.`} />
        <meta property="og:title" content={`Aura Personas - ${auraPersonas.length} Personality Types | Aura Score`} />
        <meta property="og:description" content={`Discover your aura persona — from The Main Character to The Lone Wolf. ${auraPersonas.length} unique personality types based on how you generate and spend aura in social situations.`} />
        <meta property="og:url" content="https://aura.csskey.com/personas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Aura Personas",
          "description": `Discover your aura persona — from The Main Character to The Lone Wolf. ${auraPersonas.length} unique personality types based on how you generate and spend aura in social situations.`,
          "url": "https://aura.csskey.com/personas"
        })}</script>
      </Helmet>

      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Personality Archetypes</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>
        Aura Personas
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        Your aura persona is determined by how you generate and spend aura — not just how much you have. Are you The Main Character, The Comic Relief, or The Dark Horse? Each persona comes with unique strengths, weaknesses, and an aura multiplier.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 40 }}>
        {auraPersonas.map((persona) => (
          <Link key={persona.slug} to={`/personas/${persona.slug}`} style={{ textDecoration: 'none' }}>
            <div className="gold-card" style={{ padding: '28px 24px', height: '100%' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{persona.emoji}</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{persona.name}</h2>
              <p style={{ fontSize: 13, color: 'var(--gold)', fontStyle: 'italic', marginBottom: 12, fontFamily: 'var(--font-body)' }}>"{persona.tagline}"</p>
              <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.6, fontFamily: 'var(--font-body)', marginBottom: 12 }}>{persona.description}</p>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>
                AURA MULTIPLIER: {persona.auraMultiplier}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link to="/" className="btn btn-gold">Find Your Persona →</Link>
      </div>
    </div>
  )
}
