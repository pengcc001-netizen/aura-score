import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { auraTypes } from '../data/auraTypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function TypeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const type = auraTypes.find(t => t.slug === slug)

  if (!type) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Aura Score</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://aura.csskey.com/types/${type.slug}`
  const idx = auraTypes.indexOf(type)

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{type.name} ({type.range} Aura Points) | Aura Score</title>
        <meta name="description" content={`${type.name}: ${type.description} Point range: ${type.range}. Learn about the traits, strengths, and characteristics of this aura type.`} />
        <meta property="og:title" content={`${type.name} (${type.range} Aura Points)`} />
        <meta property="og:description" content={`${type.name}: ${type.description} Point range: ${type.range}.`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${type.name} 鈥?Aura Type Guide`,
          "description": type.description,
          "url": url,
          "author": { "@type": "Person", "name": "Jordan Reeves" },
          "publisher": { "@type": "Organization", "name": "Aura Score" },
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/types" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>鈫?All Types</Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>{type.emoji}</div>
        <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: 8 }}>
          {type.name}
        </h1>
        <div className="mono" style={{ fontSize: 14, color: 'var(--gold)', letterSpacing: '0.1em' }}>
          POINT RANGE: {type.range}
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 4 }}>
          TIER {idx + 1} OF {auraTypes.length}
        </div>
      </div>

      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 32 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>Description</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify' }}>
          {type.description}
        </p>
      </div>

      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 32 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>Defining Traits</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {type.traits.map((t, i) => <span key={i} className="chip chip-gold" style={{ fontSize: 13, padding: '6px 16px' }}>{t}</span>)}
        </div>
      </div>

      <Ad />

      {/* SEO content */}
      <section className="prose" style={{ marginTop: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>What Does {type.name} Mean?</h2>
        <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
          {type.name} is one of {auraTypes.length} aura types in the Aura Score system. Your aura type is determined by your total aura points, which are calculated based on your daily behavior and social interactions.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
          People in the {type.name} category typically score between {type.range} aura points. This places them at tier {idx + 1} of {auraTypes.length} on the aura spectrum. The traits associated with this type 鈥?{type.traits.join(', ')} 鈥?reflect the behavioral patterns that tend to produce this aura level.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
          Want to know your aura type? <Link to="/" style={{ color: 'var(--gold)' }}>Take the aura quiz</Link> and find out where you land on the spectrum. The quiz takes about 2 minutes and covers {type.traits.length === 4 ? 'all major' : 'key'} categories of social interaction.
        </p>
      </section>

      <div style={{ marginTop: 32 }}>
        <ShareButtons url={url} title={`${type.name} 鈥?${type.range} aura points`} />
      </div>

      {/* Adjacent types */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 40 }}>
        {idx > 0 && (
          <Link to={`/types/${auraTypes[idx - 1].slug}`} style={{ textDecoration: 'none' }}>
            <div className="gold-card" style={{ padding: '16px 20px' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>PREVIOUS</div>
              <div style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{auraTypes[idx - 1].emoji} {auraTypes[idx - 1].name}</div>
            </div>
          </Link>
        )}
        {idx < auraTypes.length - 1 && (
          <Link to={`/types/${auraTypes[idx + 1].slug}`} style={{ textDecoration: 'none', marginLeft: 'auto' }}>
            <div className="gold-card" style={{ padding: '16px 20px', textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>NEXT</div>
              <div style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{auraTypes[idx + 1].emoji} {auraTypes[idx + 1].name}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
