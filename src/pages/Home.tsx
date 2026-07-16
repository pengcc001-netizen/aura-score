import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { auraTypes } from '../data/auraTypes'
import { auraEvents } from '../data/auraEvents'
import Ad from '../components/Ad'

type Phase = 'intro' | 'quiz' | 'result'

interface Answer {
  questionId: number
  optionIndex: number
  points: number
  category: string
  text: string
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [totalPoints, setTotalPoints] = useState(0)
  const navigate = useNavigate()

  const handleAnswer = (optionIndex: number) => {
    const q = quizQuestions[currentQ]
    const opt = q.options[optionIndex]
    const newAnswers = [...answers, { questionId: q.id, optionIndex, points: opt.points, category: opt.category, text: opt.text }]
    setAnswers(newAnswers)

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const total = newAnswers.reduce((sum, a) => sum + a.points, 0)
      setTotalPoints(total)
      setPhase('result')
      // Encode answers for sharing
      const encoded = btoa(JSON.stringify(newAnswers.map(a => a.optionIndex)))
      window.history.replaceState(null, '', `/r/${encoded}`)
    }
  }

  const resetQuiz = () => {
    setPhase('intro')
    setCurrentQ(0)
    setAnswers([])
    setTotalPoints(0)
    navigate('/')
  }

  const getAuraType = (points: number): typeof auraTypes[0] => {
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

  // ---------- INTRO ----------
  if (phase === 'intro') {
    return (
      <div className="fade-in">
        <Helmet>
          <title>Aura Score Calculator - How Many Aura Points Do You Have? [2026]</title>
          <meta name="description" content="Calculate your Aura Score. Answer 12 questions about your daily behavior and discover your aura points, aura type, and aura persona. Free, no sign-up." />
          <meta property="og:title" content="Aura Score Calculator - How Many Aura Points Do You Have?" />
          <meta property="og:description" content="Calculate your Aura Score. Answer 12 questions and discover your aura points, type, and persona." />
          <meta property="og:url" content="https://aura.csskey.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Aura Score Calculator",
            "url": "https://aura.csskey.com",
            "applicationCategory": "EntertainmentApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Calculate your Aura Score. Track aura points gained and lost from daily events. Discover your aura persona."
          })}</script>
        </Helmet>

        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '40px 0 60px' }}>
          <h2 className="eyebrow" style={{ marginBottom: 16 }}>Aura Score Calculator · 2026</h2>
          <h1 className="gradient-text" style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: 24,
          }}>
            How Many Aura<br />Points Do You Have?
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-soft)',
            maxWidth: 560,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontFamily: 'var(--font-body)',
          }}>
            Answer 12 questions about your daily behavior. Get your aura score, discover your aura type, and find out which aura persona matches you. Based on {auraEvents.length}+ real aura events from internet culture.
          </p>
          <button
            onClick={() => setPhase('quiz')}
            className="btn btn-gold pulse-glow"
            style={{ padding: '16px 48px', fontSize: 14 }}
          >
            Calculate My Aura Score →
          </button>
          <div style={{ marginTop: 16 }}>
            <span style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
              12 questions · ~2 minutes · Free, no sign-up
            </span>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 16,
          marginBottom: 60,
        }}>
          {[
            { label: 'Aura Events Tracked', value: `${auraEvents.length}+` },
            { label: 'Aura Types', value: `${auraTypes.length}` },
            { label: 'Point Range', value: '-2M to ∞' },
            { label: 'Questions', value: '12' },
          ].map((stat, i) => (
            <div key={i} className="gold-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div className="mono nums" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--gold)', marginBottom: 4 }}>
                {stat.value}
              </div>
              <div className="section-label" style={{ fontSize: 11 }}>{stat.label}</div>
            </div>
          ))}
        </section>

        <Ad />

        {/* How it works */}
        <section style={{ marginBottom: 60 }}>
          <h2 className="eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>How It Works</h2>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'var(--font-heading)', marginBottom: 40 }}>
            Three Steps to Your Aura Score
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'Answer 12 Questions', desc: 'Tell us about your daily behavior — how you handle social situations, fails, and lucky moments.' },
              { num: '02', title: 'Get Your Aura Score', desc: 'We calculate your aura points based on real internet culture values. See your total and your aura bank statement.' },
              { num: '03', title: 'Discover Your Persona', desc: 'Find out which of our aura personas matches you. Share your result and compare with friends.' },
            ].map((step, i) => (
              <div key={i} className="gold-card" style={{ padding: '32px 28px' }}>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', opacity: 0.3, marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: 12, color: 'var(--text)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured events */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <div>
              <h2 className="eyebrow" style={{ marginBottom: 4 }}>Featured</h2>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Top Aura Events</h2>
            </div>
            <Link to="/events" style={{ color: 'var(--gold)', fontSize: 14, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {auraEvents.slice(0, 6).map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
                <div className="gold-card" style={{ padding: '20px 24px', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span className={`chip chip-tier-${event.tier}`}>{event.tier}</span>
                    <span className="mono nums" style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: event.points > 0 ? 'var(--positive)' : 'var(--negative)',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {event.points > 0 ? '+' : ''}{event.points.toLocaleString()}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{event.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    )
  }

  // ---------- QUIZ ----------
  if (phase === 'quiz') {
    const q = quizQuestions[currentQ]
    const progress = ((currentQ + 1) / quizQuestions.length) * 100

    return (
      <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Helmet>
          <title>Aura Quiz - Question {currentQ + 1} of {quizQuestions.length}</title>
          <meta name="description" content={`Answer question ${currentQ + 1} to calculate your aura score.`} />
        </Helmet>

        {/* Progress */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', letterSpacing: '0.1em' }}>
              QUESTION {currentQ + 1} / {quizQuestions.length}
            </span>
            <span className="mono" style={{ fontSize: 12, color: 'var(--gold)' }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-bright))',
              borderRadius: 2,
              transition: 'width 0.4s ease',
              boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)',
            }} />
          </div>
        </div>

        {/* Question */}
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: 32,
          color: 'var(--text)',
        }}>
          {q.question}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '20px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                color: 'var(--text)',
                fontSize: 15,
                fontFamily: 'var(--font-body)',
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.background = 'var(--gold-soft)'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(212, 175, 55, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginRight: 12 }}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt.text}
            </button>
          ))}
        </div>

        {/* Back button */}
        {currentQ > 0 && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <button
              onClick={() => { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)) }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-faint)',
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'var(--font-mono)',
              }}
            >
              ← Previous question
            </button>
          </div>
        )}
      </div>
    )
  }

  // ---------- RESULT ----------
  if (phase === 'result') {
    const auraType = getAuraType(totalPoints)
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://aura.csskey.com'

    return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
        <Helmet>
          <title>Your Aura Score: {totalPoints.toLocaleString()} points | Aura Score</title>
          <meta name="description" content={`My aura score is ${totalPoints.toLocaleString()} points. I am a ${auraType.name}. Calculate yours!`} />
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        {/* Result card — AURA BANK STATEMENT */}
        <div className="gold-card" style={{
          padding: '40px 32px',
          marginBottom: 32,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Bank header */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: 8 }}>
              AURA BANK · STATEMENT
            </div>
            <div style={{ width: 60, height: 1, background: 'var(--gold)', margin: '0 auto 24px', opacity: 0.5 }} />
          </div>

          {/* Score */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="section-label" style={{ marginBottom: 8 }}>Your Aura Balance</div>
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

          {/* Aura type */}
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

          {/* Transaction history */}
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--text-faint)', marginBottom: 12 }}>
              TRANSACTION HISTORY
            </div>
            {answers.map((a, i) => (
              <div key={i} className="tx-row">
                <span style={{ color: 'var(--text)', flex: 1, paddingRight: 16, fontSize: 13 }}>
                  {a.text}
                </span>
                <span className="nums" style={{
                  color: a.points > 0 ? 'var(--positive)' : 'var(--negative)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  {a.points > 0 ? '+' : ''}{a.points.toLocaleString()}
                </span>
              </div>
            ))}
            {/* Balance */}
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
              <span className="mono nums" style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: totalPoints >= 0 ? 'var(--gold)' : 'var(--negative)',
              }}>
                {totalPoints > 0 ? '+' : ''}{totalPoints.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Share */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Share Your Aura Score</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`My aura score is ${totalPoints.toLocaleString()} points — I'm a ${auraType.name}! Calculate yours:`)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
              style={{ fontSize: 12 }}
            >
              Share on X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
              style={{ fontSize: 12 }}
            >
              Share on Facebook
            </a>
            <button
              onClick={() => { navigator.clipboard.writeText(shareUrl) }}
              className="btn btn-outline"
              style={{ fontSize: 12 }}
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Traits */}
        <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 32,
        }}>
          {auraType.traits.map((trait, i) => (
            <span key={i} className="chip chip-gold">{trait}</span>
          ))}
        </div>

        <Ad />

        {/* Retake */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <button onClick={resetQuiz} className="btn btn-ghost" style={{ fontSize: 13 }}>
            ← Retake the Quiz
          </button>
        </div>

        {/* Explore more */}
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Explore More</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/events" className="btn btn-outline" style={{ fontSize: 12 }}>Browse All Aura Events</Link>
            <Link to="/personas" className="btn btn-outline" style={{ fontSize: 12 }}>See All Personas</Link>
            <Link to="/blog/what-are-aura-points-complete-guide" className="btn btn-outline" style={{ fontSize: 12 }}>Learn About Aura Points</Link>
          </div>
        </div>
      </div>
    )
  }

  return null
}
