import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { auraEvents } from '../data/auraEvents'
import type { AuraEvent } from '../data/auraEvents'
import Ad from '../components/Ad'

const CATEGORIES = ['all', 'talent', 'luck', 'fail', 'romance', 'school', 'work', 'gaming', 'internet', 'sports', 'social']
const TIERS = ['all', 'god', 'major', 'moderate', 'minor', 'catastrophic']

export default function EventsPage() {
  const [category, setCategory] = useState('all')
  const [tier, setTier] = useState('all')
  const [sort, setSort] = useState<'points-desc' | 'points-asc' | 'title'>('points-desc')

  const filtered = useMemo(() => {
    let result = [...auraEvents]
    if (category !== 'all') result = result.filter(e => e.category === category)
    if (tier !== 'all') result = result.filter(e => e.tier === tier)
    if (sort === 'points-desc') result.sort((a, b) => b.points - a.points)
    else if (sort === 'points-asc') result.sort((a, b) => a.points - b.points)
    else result.sort((a, b) => a.title.localeCompare(b.title))
    return result
  }, [category, tier, sort])

  return (
    <div className="fade-in">
      <Helmet>
        <title>All Aura Events - {auraEvents.length}+ Aura Point Events Explained | Aura Score</title>
        <meta name="description" content={`Browse ${auraEvents.length}+ aura point events. See how many points each event is worth, from +77,000 for nailing karaoke to -2,000,000 for the screenshot disaster.`} />
        <meta property="og:title" content="All Aura Events - 80+ Aura Point Events Explained | Aura Score" />
        <meta property="og:description" content={`Browse ${auraEvents.length}+ aura point events. See how many points each event is worth, from +77,000 for nailing karaoke to -2,000,000 for the screenshot disaster.`} />
        <meta property="og:url" content="https://aura.csskey.com/events" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Aura Point Events",
          "numberOfItems": auraEvents.length,
          "itemListElement": auraEvents.slice(0, 20).map((e, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": e.title,
            "url": `https://aura.csskey.com/events/${e.id}`
          }))
        })}</script>
      </Helmet>

      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Aura Events Database</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>
        All Aura Point Events
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 32, fontFamily: 'var(--font-body)' }}>
        A comprehensive database of {auraEvents.length}+ events that add or subtract aura points. Browse by category, filter by tier, and discover the point values behind internet culture's favorite social currency.
      </p>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <label className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>CATEGORY</label>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer' }}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>TIER</label>
          <select value={tier} onChange={e => setTier(e.target.value)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer' }}>
            {TIERS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>SORT</label>
          <select value={sort} onChange={e => setSort(e.target.value as 'points-desc' | 'points-asc' | 'title')} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer' }}>
            <option value="points-desc">Highest Points</option>
            <option value="points-asc">Lowest Points</option>
            <option value="title">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginBottom: 16 }}>
        {filtered.length} EVENTS FOUND
      </div>

      {/* Events grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 12, marginBottom: 40 }}>
        {filtered.map((event: AuraEvent) => (
          <Link key={event.id} to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
            <div className="gold-card" style={{ padding: '20px 24px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span className={`chip chip-tier-${event.tier}`}>{event.tier}</span>
                  <span className="chip chip-neutral">{event.category}</span>
                </div>
                <span className="mono nums" style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: event.points > 0 ? 'var(--positive)' : 'var(--negative)',
                  whiteSpace: 'nowrap',
                }}>
                  {event.points > 0 ? '+' : ''}{event.points.toLocaleString()}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{event.title}</h3>
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 4, lineHeight: 1.5 }}>{event.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Ad />

      {/* SEO content */}
      <section className="prose" style={{ maxWidth: 680, marginTop: 40 }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>What Are Aura Point Events?</h2>
        <p style={{ fontFamily: 'var(--font-body)' }}>
          Aura point events are specific moments in daily life that either add to or subtract from your <Link to="/blog/what-are-aura-points-complete-guide" style={{ color: 'var(--gold)' }}>aura score</Link>. The concept originated on TikTok in 2024 and has since become a permanent part of internet culture, with over 500 million views on the #aurapoints hashtag.
        </p>
        <p style={{ fontFamily: 'var(--font-body)' }}>
          Each event has a point value that reflects its social impact. Small positive actions like holding a door might be worth +150 points, while catastrophic fails like sending a screenshot to the wrong person can cost -2,000,000 points. The point scale is deliberately dramatic — it mirrors the emotional intensity of these moments, not their real-world consequences.
        </p>
        <p style={{ fontFamily: 'var(--font-body)' }}>
          Our database covers {auraEvents.length}+ events across 10 categories: talent, luck, fails, romance, school, work, gaming, internet culture, sports, and social interactions. Each event has a dedicated page with a detailed analysis of why it affects your aura and how to handle the situation.
        </p>
      </section>
    </div>
  )
}
