import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Ad from '../components/Ad'

export default function BlogIndex() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Aura Points Blog - Guides & Culture | Aura Score</title>
        <meta name="description" content={`Learn about aura points, aura farming techniques, and internet culture. ${blogPosts.length} articles covering everything from the basics to advanced aura strategy.`} />
        <meta property="og:title" content="Aura Points Blog - Guides & Culture | Aura Score" />
        <meta property="og:description" content={`Learn about aura points, aura farming techniques, and internet culture. ${blogPosts.length} articles covering everything from the basics to advanced aura strategy.`} />
        <meta property="og:url" content="https://aura.csskey.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Aura Points Blog",
          "description": `Learn about aura points, aura farming techniques, and internet culture. ${blogPosts.length} articles covering everything from the basics to advanced aura strategy.`,
          "url": "https://aura.csskey.com/blog"
        })}</script>
      </Helmet>

      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Blog</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>
        Aura Points Guides
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        Deep dives into aura points culture, farming techniques, recovery strategies, and the history of the internet's favorite social currency.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="gold-card" style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span className="chip chip-gold">{post.category}</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em', alignSelf: 'center' }}>
                  {post.date}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
                {post.excerpt}
              </p>
              <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', marginTop: 12 }}>READ MORE →</div>
            </article>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  )
}
