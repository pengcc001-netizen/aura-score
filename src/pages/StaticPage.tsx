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

This privacy policy explains how Aura Score ("we", "us", or "our") handles information when you visit aura.csskey.com (the "Site"). We are committed to being transparent about what we collect, how we use it, and the choices you have.

### Information We Collect

Aura Score does not collect personal information. We do not require accounts, logins, email addresses, or any form of registration. When you take the aura quiz, your answers are converted into an encoded string that is stored entirely in the URL of your browser. This encoded string is never transmitted to our server, never written to a database, and never associated with your identity or device. We do not collect your IP address for tracking purposes, and we do not build user profiles.

### How the Quiz Works

When you take the aura quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result by copying and pasting the link, without us storing any data on a server. The encoded string is processed entirely in your browser, meaning your answers remain on your device. If you close the page without sharing the link, your quiz results are gone.

### Cookies

We do not set cookies directly. The only cookies that may be set on your browser come from third-party advertising partners, specifically Google AdSense, as part of their ad-serving process. These cookies allow Google to display relevant ads and measure ad performance. You can review and opt out of personalized advertising at https://www.google.com/settings/ads. You can also clear cookies in your browser settings at any time.

### Google AdSense

We use Google AdSense to display ads on the Site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. You may learn more about how Google handles data and your privacy options by reviewing Google's Privacy Policy at https://policies.google.com/privacy. You may also opt out of personalized advertising by visiting Google Ads Settings.

### Data Security

All quiz data stays in your browser. Nothing is sent to a server, which means there is no central database that could be breached or leaked. The only data that leaves your device is what you voluntarily choose to share by copying a result URL. We cannot recover lost result links because we never store them.

### Children's Privacy

The Site is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. Because we do not collect personal information from any users, children are not at risk of having their data stored. If you believe a child has provided information through a shared result URL, please note that we have no way to access or delete that data, as it lives only in the link itself.

### Contact

If you have any questions about this Privacy Policy, please contact us at support@csskey.com. We will do our best to respond within a reasonable timeframe.`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

These Terms of Service ("Terms") govern your use of aura.csskey.com (the "Site") operated by Aura Score ("we", "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you should not access or use the Site.

### Acceptance of Terms

By visiting, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future modifications. We may update these Terms from time to time without prior notice. Your continued use of the Site after any changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.

### Use of Service

This site is for entertainment purposes only. Aura points are not a real currency, commodity, or store of value. They cannot be exchanged, redeemed, transferred, or used for any commercial or personal purpose. The aura score is a reflection of internet culture and a social phenomenon, not a measure of your worth as a person or a scientific assessment of any kind. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.

### Intellectual Property

All content on this Site, including but not limited to the aura point events, aura types, aura personas, blog posts, design, layout, and underlying code, is owned by us and protected by applicable intellectual property laws. You may share links to the Site freely. You may not copy, republish, reproduce, modify, distribute, or otherwise exploit the analysis text or other content without our prior written permission.

### Disclaimer of Warranties

The Site is provided "as is" and "as available", without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantees about the accuracy, reliability, completeness, or timeliness of the content. The point values are based on internet culture and are intentionally absurd. Your reliance on the Site is at your sole risk.

### Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site, including but not limited to damages for loss of profits, goodwill, or reputation. The framework is designed for humor and social reflection, not for guiding real-world decisions.

### Contact

If you have any questions about these Terms, please contact us at support@csskey.com.`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Found a bug, have an aura event suggestion, or want to share feedback about the site? Email works best. I read every message and try to respond personally when I can.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days. If your message is complex or requires research on my end, it may take a little longer. I appreciate your patience.

### What to Include

To help me respond quickly, please include the following in your email: a clear description of the issue or suggestion, the page or feature it relates to, and any screenshots or examples if relevant. The more context you provide, the faster I can help.

### Bug Reports

If you found a bug, please include the browser and device you are using, the URL of the page where it happened, and a description of what you expected versus what actually happened. Steps to reproduce the issue are especially helpful.

### Feature Requests

Have an idea for a new feature, quiz question, or aura type? Send it along. I cannot promise to implement every suggestion, but I keep a running list and prioritize based on what would help the most users.

### Submit an Aura Event

Have an aura event that is not in our database? Send it and I might add it. Include the event description, the point value you think it deserves, and a brief explanation of why it matters.`,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `## Disclaimer

**Last updated: July 2026**

### Entertainment Purposes Only

Aura Score is an entertainment website. The aura points, aura types, and aura personas presented on this site are based on internet culture and are not intended to be taken seriously as measures of social worth, personality, or character. The aura framework originated as a meme on TikTok, and everything on this site should be understood in that playful, satirical spirit. If you find yourself taking your aura score personally, please step back, take a breath, and remember that the entire concept started as a joke.

### Not Professional Advice

The content on this site is not professional, psychological, medical, legal, or social advice. We are not licensed therapists, counselors, or consultants. If you are concerned about your social relationships, self-esteem, or mental health, please consult a qualified professional. The quiz and analysis on this site are not a substitute for professional guidance.

### Cultural Context

Aura points originated as an internet meme on TikTok. The point values, event categories, and personas are creative interpretations of this cultural phenomenon. They do not represent scientific or psychological measurements. The categories are fluid and intentionally subjective, reflecting the playful nature of the trend rather than any established framework.

### No Liability

We are not liable for any decisions made based on aura point values or any content on this site. The framework is designed for humor and social reflection, not for guiding real-world decisions. You are solely responsible for how you interpret and act on the content presented here.

### Contact

If you have questions about this disclaimer, please contact us at support@csskey.com.`,
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
  const ogDescription = info.content.substring(0, 155).replace(/\n/g, ' ').replace(/[#*]/g, '').trim()

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
