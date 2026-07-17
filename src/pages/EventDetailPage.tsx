import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { auraEvents } from '../data/auraEvents'
import ShareButtons from '../components/ShareButtons'
import Ad from '../components/Ad'

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = auraEvents.find(e => e.id === slug)

  if (!event) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://aura.csskey.com/events/${event.id}`
  const related = auraEvents.filter(e => e.category === event.category && e.id !== event.id).slice(0, 4)

  return (
    <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto' }}>
      <Helmet>
        <title>{event.title} - {event.points > 0 ? '+' : ''}{event.points.toLocaleString()} Aura Points | Aura Score</title>
        <meta name="description" content={event.description} />
        <meta property="og:title" content={`${event.title} — ${event.points > 0 ? '+' : ''}${event.points.toLocaleString()} Aura Points`} />
        <meta property="og:description" content={event.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": event.title,
          "description": event.description,
          "url": url,
          "author": { "@type": "Person", "name": "Jordan Reeves" },
          "publisher": { "@type": "Organization", "name": "Aura Score" },
          "datePublished": "2026-07-01",
          "dateModified": "2026-07-01",
          "mainEntityOfPage": url
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ marginBottom: 24 }}>
        <Link to="/events" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>← All Events</Link>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <span className={`chip chip-tier-${event.tier}`}>{event.tier} tier</span>
        <span className="chip chip-neutral">{event.category}</span>
      </div>

      {/* Title */}
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: 'var(--text)' }}>
        {event.title}
      </h1>

      {/* Point value */}
      <div className="gold-card" style={{ padding: '24px 32px', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="section-label" style={{ marginBottom: 4 }}>Aura Impact</div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--text-faint)' }}>POINTS {event.points > 0 ? 'GAINED' : 'LOST'}</div>
        </div>
        <div className="mono nums gradient-text" style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1,
        }}>
          {event.points > 0 ? '+' : ''}{event.points.toLocaleString()}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 16, color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: 24, fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
        {event.description}
      </p>

      {/* Analysis */}
      <article className="prose" style={{ marginBottom: 32 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>Aura Analysis</h2>
        {event.analysis.split('\n').map((para, i) => (
          <p key={i} className={i === 0 ? 'dropcap' : ''} style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--text)',
            margin: '12px 0',
            fontFamily: 'var(--font-body)',
            textAlign: 'justify',
            hyphens: 'auto',
          }}>
            {para}
          </p>
        ))}
      </article>

      <Ad />

      {/* Share */}
      <div style={{ marginBottom: 40 }}>
        <div className="section-label" style={{ marginBottom: 12, textAlign: 'center' }}>Share This Event</div>
        <ShareButtons url={url} title={`${event.title} — ${event.points > 0 ? '+' : ''}${event.points.toLocaleString()} aura points`} />
      </div>

      {/* Related events */}
      {related.length > 0 && (
        <section>
          <h2 className="eyebrow" style={{ marginBottom: 12 }}>Related {event.category} events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {related.map(e => (
              <Link key={e.id} to={`/events/${e.id}`} style={{ textDecoration: 'none' }}>
                <div className="gold-card" style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'var(--font-body)', flex: 1, paddingRight: 8 }}>{e.title}</span>
                    <span className="mono nums" style={{ fontSize: 13, fontWeight: 700, color: e.points > 0 ? 'var(--positive)' : 'var(--negative)', whiteSpace: 'nowrap' }}>
                      {e.points > 0 ? '+' : ''}{e.points.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
