import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { auraPersonas } from '../data/auraPersonas'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function PersonaDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const persona = auraPersonas.find(p => p.slug === slug)

  if (!persona) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://aura.csskey.com/personas/${persona.slug}`
  const compatible = auraPersonas.filter(p => persona.compatibleWith.includes(p.slug))

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{persona.name} - Aura Persona Guide | Aura Score</title>
        <meta name="description" content={`${persona.name}: ${persona.description} Strengths: ${persona.strengths.join(', ')}. Discover your aura persona.`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${persona.name} — Aura Persona`,
          "description": persona.description,
          "url": url,
          "author": { "@type": "Person", "name": "Jordan Reeves" },
          "publisher": { "@type": "Organization", "name": "Aura Score" },
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/personas" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>← All Personas</Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>{persona.emoji}</div>
        <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 700, marginBottom: 8 }}>
          {persona.name}
        </h1>
        <p style={{ fontSize: 16, color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>"{persona.tagline}"</p>
      </div>

      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>About This Persona</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify' }}>
          {persona.description}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div className="gold-card" style={{ padding: '24px 28px' }}>
          <h2 className="eyebrow" style={{ marginBottom: 12, color: 'var(--positive)' }}>Strengths</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {persona.strengths.map((s, i) => (
              <li key={i} style={{ fontSize: 14, color: 'var(--text)', padding: '4px 0', fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--positive)', marginRight: 8 }}>+</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="gold-card" style={{ padding: '24px 28px' }}>
          <h2 className="eyebrow" style={{ marginBottom: 12, color: 'var(--negative)' }}>Weaknesses</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {persona.weaknesses.map((w, i) => (
              <li key={i} style={{ fontSize: 14, color: 'var(--text)', padding: '4px 0', fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--negative)', marginRight: 8 }}>−</span>{w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gold-card" style={{ padding: '24px 28px', marginBottom: 24, textAlign: 'center' }}>
        <h2 className="eyebrow" style={{ marginBottom: 8 }}>Aura Multiplier</h2>
        <div className="mono gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{persona.auraMultiplier}</div>
      </div>

      <Ad />

      {/* Compatible personas */}
      {compatible.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 className="eyebrow" style={{ marginBottom: 12 }}>Most Compatible With</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {compatible.map(p => (
              <Link key={p.slug} to={`/personas/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div className="gold-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1.5rem' }}>{p.emoji}</span>
                  <span style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{p.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: 32 }}>
        <ShareButtons url={url} title={`${persona.name} — ${persona.tagline}`} />
      </div>
    </div>
  )
}
