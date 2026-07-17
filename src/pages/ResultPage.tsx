import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { auraTypes } from '../data/auraTypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function ResultPage() {
  const { code } = useParams<{ code: string }>()
  const [decoded, setDecoded] = useState<number[] | null>(null)

  useEffect(() => {
    try {
      const std = (code || '').replace(/-/g, '+').replace(/_/g, '/')
      const padded = std + '='.repeat((4 - std.length % 4) % 4)
      const parsed = JSON.parse(atob(padded))
      if (Array.isArray(parsed) && parsed.length === quizQuestions.length) {
        setDecoded(parsed)
      }
    } catch {
      setDecoded(null)
    }
  }, [code])

  if (!decoded) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Aura Score</title></Helmet>
        <p style={{ color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>Invalid aura result link.</p>
        <Link to="/" className="btn btn-gold" style={{ marginTop: 16 }}>Take the Quiz</Link>
      </div>
    )
  }

  const answers = decoded.map((optionIndex, i) => {
    const q = quizQuestions[i]
    const opt = q.options[optionIndex]
    return { questionId: q.id, optionIndex, points: opt.points, category: opt.category, text: opt.text }
  })

  const totalPoints = answers.reduce((sum, a) => sum + a.points, 0)

  const getAuraType = (points: number) => {
    if (points >= 500000) return auraTypes[0]
    if (points >= 100000) return auraTypes[1]
    if (points >= 50000) return auraTypes[2]
    if (points >= 20000) return auraTypes[3]
    if (points >= 5000) return auraTypes[4]
    if (points >= 1000) return auraTypes[5]
    if (points >= 0) return auraTypes[6]
    if (points >= -1000) return auraTypes[7]
    if (points >= -10000) return auraTypes[8]
    return auraTypes[9]
  }

  const auraType = getAuraType(totalPoints)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://aura.csskey.com'

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>Aura Score: {totalPoints.toLocaleString()} points ?{auraType.name}</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={`My Aura Score is ${totalPoints.toLocaleString()} points — I'm a ${auraType.name}!`} />
        <meta property="og:description" content={auraType.description} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`My Aura Score: ${totalPoints.toLocaleString()} points`} />
        <meta name="twitter:description" content={auraType.description} />
      </Helmet>

      {/* Result card */}
      <div className="gold-card" style={{ padding: '40px 32px', marginBottom: 32 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: 8 }}>
            AURA BANK 路 SHARED STATEMENT
          </div>
          <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto 24px', opacity: 0.5 }} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="section-label" style={{ marginBottom: 8 }}>Aura Balance</div>
          <div className="mono nums gradient-text" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            {totalPoints > 0 ? '+' : ''}{totalPoints.toLocaleString()}
          </div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 4 }}>AURA POINTS</div>
        </div>

        <div style={{
          textAlign: 'center',
          padding: '24px 16px',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          marginBottom: 32,
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{auraType.emoji}</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: auraType.color, marginBottom: 4 }}>
            {auraType.name}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-soft)', letterSpacing: '0.1em' }}>
            RANGE: {auraType.range}
          </div>
          <p style={{ marginTop: 12, fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
            {auraType.description}
          </p>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--text-faint)', marginBottom: 12 }}>
            TRANSACTION HISTORY
          </div>
          {answers.map((a, i) => (
            <div key={i} className="tx-row">
              <span style={{ color: 'var(--text)', flex: 1, paddingRight: 16, fontSize: 13 }}>{a.text}</span>
              <span className="nums" style={{ color: a.points > 0 ? 'var(--positive)' : 'var(--negative)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {a.points > 0 ? '+' : ''}{a.points.toLocaleString()}
              </span>
            </div>
          ))}
          <div style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: '2px solid var(--gold)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span className="mono" style={{ fontSize: 12, letterSpacing: '0.15em', color: 'var(--gold)', fontWeight: 600 }}>
              FINAL BALANCE
            </span>
            <span className="mono nums" style={{ fontSize: '1.5rem', fontWeight: 700, color: totalPoints >= 0 ? 'var(--gold)' : 'var(--negative)' }}>
              {totalPoints > 0 ? '+' : ''}{totalPoints.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <ShareButtons url={shareUrl} title={`My aura score is ${totalPoints.toLocaleString()} points 鈥?I'm a ${auraType.name}! Calculate yours:`} />
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Link to="/" className="btn btn-gold">Calculate Your Own Aura 鈫?/Link>
      </div>
    </div>
  )
}
