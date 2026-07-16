import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PAGES: Record<string, { title: string; content: string }> = {
  about: {
    title: 'About',
    content: `## About Aura Score

I built this site because aura points are the most interesting social phenomenon of our generation. The idea that everyday interactions can be quantified, scored, and compared is simultaneously absurd and profound. It takes something humans have always tracked intuitively — social capital — and gives it a number.

My name is Jordan Reeves. I have been writing about internet culture and social dynamics for years. When I first saw the #aurapoints trend on TikTok, I was fascinated by how quickly it evolved from a joke into a genuine social framework. People were actually using aura points to make decisions. "Should I do this? It would cost 3,000 aura." That realization — that a meme had become a behavioral compass — inspired this project.

### What You Will Find Here

- 80+ aura point events with detailed analysis
- 10 aura types based on your total score
- 12 aura personas based on your behavioral patterns
- A 12-question quiz that calculates your aura score
- A blog covering aura culture, farming techniques, and recovery strategies
- An aura leaderboard showing the highest and lowest events
- Free to use, no sign-up

### Why I Built This

Aura points are more than a trend. They are a mirror. When you start tracking which events add and subtract from your score, you start noticing patterns in your own behavior. You realize that you consistently gain aura through kindness but lose it through procrastination. That insight is the real value of the aura framework — not the points themselves, but what they reveal about how you move through the world.

### Contact

Email: support@csskey.com`,
  },
  privacy: {
    title: 'Privacy Policy',
    content: `## Privacy Policy

**Last updated: July 2026**

### Information We Collect

Aura Score does not collect personal information. Your quiz answers are encoded in your browser and never sent to a server. We do not use accounts, logins, or tracking cookies.

### How the Quiz Works

When you take the aura quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result without us storing any data. The encoded string is processed entirely in your browser.

### Cookies

We do not set cookies directly. Google AdSense may set cookies as part of their ad-serving process. You can opt out at https://www.google.com/settings/ads.

### Google AdSense

We use Google AdSense to display ads. Google uses cookies to serve ads based on your visit. Learn more: https://policies.google.com/privacy

### Data Security

All quiz data stays in your browser. Nothing is sent to a server.

### Contact

Questions? Email support@csskey.com`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

By using this site, you agree to these terms.

### Use of Service

This site is for entertainment. Aura points are not a real currency. They cannot be exchanged, redeemed, or used for any purpose. The aura score is a reflection of internet culture, not a measure of your worth as a person.

### Intellectual Property

All content is owned by us. You may share links freely. You may not copy or republish the analysis text.

### Disclaimer

The site is provided "as is" without warranties. We make no guarantees about accuracy. The point values are based on internet culture and are intentionally absurd.

### Contact

Questions? Email support@csskey.com`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Found a bug or have an aura event suggestion? Email works best.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days.

### Submit an Aura Event

Have an aura event that is not in our database? Send it and I might add it. Include the event description, the point value you think it deserves, and a brief explanation of why it matters.`,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `## Disclaimer

**Last updated: July 2026**

### Entertainment Purposes Only

Aura Score is an entertainment website. The aura points, aura types, and aura personas presented on this site are based on internet culture and are not intended to be taken seriously as measures of social worth, personality, or character.

### Not Professional Advice

The content on this site is not professional, psychological, or social advice. If you are concerned about your social relationships or mental health, please consult a qualified professional.

### Cultural Context

Aura points originated as an internet meme on TikTok. The point values, event categories, and personas are creative interpretations of this cultural phenomenon. They do not represent scientific or psychological measurements.

### No Liability

We are not liable for any decisions made based on aura point values. The framework is designed for humor and social reflection, not for guiding real-world decisions.

### Contact

Questions? Email support@csskey.com`,
  },
}

export default function StaticPage({ page }: { page: string }) {
  const info = PAGES[page]
  if (!info) return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <h1 className="mono" style={{ fontSize: '1.5rem', marginBottom: 16 }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>← Back to Home</Link>
      </div>
    )

  const canonicalUrl = `https://aura.csskey.com/${page}`
  const ogDescription = `Aura Score ${info.title.toLowerCase()} page.`

  let isFirstParagraph = true

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{info.title} - Aura Score</title>
        <meta name="description" content={ogDescription} />
        <meta property="og:title" content={`${info.title} - Aura Score`} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": info.title,
          "description": ogDescription,
          "url": canonicalUrl
        })}</script>
      </Helmet>

      <article>
        {info.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return (
            <h1 key={i} style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 32,
              paddingBottom: 24,
              borderBottom: '1px solid var(--border)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              {line.replace('## ', '')}
            </h1>
          )
          if (line.startsWith('### ')) return (
            <h2 key={i} style={{
              fontSize: '1.25rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: 'var(--text)',
              margin: '36px 0 12px',
              letterSpacing: '-0.01em',
            }}>
              {line.replace('### ', '')}
            </h2>
          )
          if (line.startsWith('**')) return (
            <p key={i} style={{
              fontWeight: 700,
              color: 'var(--gold)',
              margin: '20px 0 8px',
              fontSize: 13,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {line.replace(/\*\*/g, '')}
            </p>
          )
          if (line.trim() === '') {
            isFirstParagraph = false
            return <div key={i} style={{ height: 16 }} />
          }
          if (line.startsWith('Email')) return (
            <p key={i} style={{
              margin: '6px 0',
              fontSize: 16,
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
              color: 'var(--text)',
            }}>
              <a href="mailto:support@csskey.com" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: 1 }}>{line.split(': ')[1]}</a>
            </p>
          )
          if (line.startsWith('- ')) return (
            <p key={i} style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text)',
              margin: '4px 0',
              paddingLeft: 20,
              position: 'relative',
              fontFamily: 'var(--font-body)',
            }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
              {line.replace('- ', '')}
            </p>
          )

          const dropcapClass = isFirstParagraph ? 'dropcap' : ''
          isFirstParagraph = false
          return (
            <p key={i} className={dropcapClass} style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'var(--text)',
              margin: '8px 0',
              fontFamily: 'var(--font-body)',
              textAlign: 'justify',
              hyphens: 'auto',
            }}>
              {line}
            </p>
          )
        })}
      </article>
    </div>
  )
}
