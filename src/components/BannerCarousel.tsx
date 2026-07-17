import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: 'Lightning Fast Fiber Internet',
    subtitle: 'Stream, work & play with speeds up to 300 Mbps',
    price: 'Starting at ₹549',
    period: '/mo*',
    cta: 'View Plans',
    link: '/plans',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
    graphic: 'speed',
  },
  {
    title: 'OTT Platforms + 1000+ Live Channels',
    subtitle: 'Prime, Hotstar, ZEE5 & more with free IPTV on all your devices',
    price: 'From ₹499',
    period: '/month',
    cta: 'Explore Plans',
    link: '/plans?tab=entertainment',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #3b0764 100%)',
    graphic: 'ott',
  },
]

type OttBrand = { label: string; bg: string; color: string; text: string }

const ottBrands: OttBrand[] = [
  { label: 'Prime', bg: '#00a8e1', color: '#fff', text: 'P' },
  { label: 'Hotstar', bg: '#1a1a2e', color: '#e50914', text: 'H' },
  { label: 'Sony LIV', bg: '#000', color: '#f5a623', text: 'SL' },
  { label: 'ZEE5', bg: '#720e9e', color: '#fff', text: 'Z5' },
  { label: 'Sun NXT', bg: '#e67e22', color: '#fff', text: 'SN' },
  { label: 'Hoichoi', bg: '#e74c3c', color: '#fff', text: 'H' },
]

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(prev => (prev + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(prev => (prev - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="banner">
      <div className="banner-bg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`banner-bg-layer ${i === current ? 'banner-bg-layer--active' : ''}`}
            style={{ background: slide.gradient }}
          />
        ))}
      </div>

      <div className="banner-particles">
        {Array.from({ length: 25 }, (_, i) => (
          <span key={i} className="banner-particle" style={{
            left: `${5 + (i * 3.8) % 90}%`,
            top: `${10 + (i * 7.2) % 80}%`,
            width: `${2 + (i % 5) * 1.5}px`,
            height: `${2 + (i % 5) * 1.5}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${6 + (i % 4) * 2}s`,
          }} />
        ))}
      </div>

      <div className="banner-orbs">
        <div className="banner-orb" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: 'var(--primary)', animationDelay: '0s' }}></div>
        <div className="banner-orb" style={{ top: '60%', right: '10%', width: '250px', height: '250px', background: 'var(--accent)', animationDelay: '-4s' }}></div>
        <div className="banner-orb" style={{ bottom: '5%', left: '40%', width: '200px', height: '200px', background: '#8b5cf6', animationDelay: '-8s' }}></div>
      </div>

      <div className="banner-grid"></div>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`banner-slide ${i === current ? 'banner-slide--active' : ''}`}
        >
          <div className="container banner-content">
            <div className="banner-text-col">
              <span className="banner-badge">New</span>
              <h1 className="banner-title">{slide.title}</h1>
              <p className="banner-subtitle">{slide.subtitle}</p>
              {slide.graphic === 'ott' ? (
                <div className="banner-ott-strip">
                  {ottBrands.slice(0, 5).map(b => (
                    <span key={b.label} className="banner-ott-pill" style={{ background: b.bg, color: b.color }}>{b.label}</span>
                  ))}
                </div>
              ) : null}
              <div className="banner-price-row">
                <span className="banner-price-amount">{slide.price}</span>
                <span className="banner-price-period">{slide.period}</span>
              </div>
              <Link to={slide.link} className="btn btn--primary btn--lg">{slide.cta}</Link>
            </div>
            <div className="banner-graphic-col">
              {slide.graphic === 'speed' && (
                <div className="banner-graphic-speed">
                  <div className="tower-bg">
                    <div className="tower tower--1">
                      <div className="tower-pole"></div>
                      <div className="tower-head">
                        <div className="tower-antenna"></div>
                        <div className="tower-dish"></div>
                      </div>
                      <div className="tower-waves">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="tower tower--2">
                      <div className="tower-pole"></div>
                      <div className="tower-head">
                        <div className="tower-antenna"></div>
                        <div className="tower-dish"></div>
                      </div>
                      <div className="tower-waves">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="tower-people">
                      <div className="person person--1">
                        <div className="person-head"></div>
                        <div className="person-body"></div>
                      </div>
                      <div className="person person--2">
                        <div className="person-head"></div>
                        <div className="person-body"></div>
                      </div>
                      <div className="person person--3">
                        <div className="person-head"></div>
                        <div className="person-body"></div>
                      </div>
                    </div>
                    <div className="tower-connect">
                      <svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 80 Q80 30 140 50 Q200 70 260 30" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                          <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="3s" repeatCount="indefinite"/>
                        </path>
                        <path d="M30 60 Q100 10 170 40 Q240 70 280 20" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none">
                          <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="4s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="speed-ring">
                    <div className="speed-ring-inner">
                      <span className="speed-value">300</span>
                      <span className="speed-unit">Mbps</span>
                    </div>
                  </div>
                  <div className="speed-bars">
                    <span className="speed-bar" style={{ animationDelay: '0s' }}></span>
                    <span className="speed-bar" style={{ animationDelay: '0.15s' }}></span>
                    <span className="speed-bar" style={{ animationDelay: '0.3s' }}></span>
                    <span className="speed-bar" style={{ animationDelay: '0.45s' }}></span>
                    <span className="speed-bar" style={{ animationDelay: '0.6s' }}></span>
                  </div>
                </div>
              )}
              {slide.graphic === 'ott' && (
                <div className="banner-graphic-ott">
                  <div className="banner-ott-grid">
                    {ottBrands.map((b, idx) => (
                      <div key={b.label} className="banner-ott-card" style={{ animationDelay: `${idx * 0.12}s` }}>
                        <span className="banner-ott-card-icon" style={{ background: b.bg, color: b.color }}>{b.text}</span>
                        <span className="banner-ott-card-label">{b.label}</span>
                      </div>
                    ))}
                    <div className="banner-ott-card banner-ott-card--live" style={{ animationDelay: '0.72s' }}>
                      <span className="banner-ott-card-live-dot"></span>
                      <span className="banner-ott-card-label" style={{ color: '#ef4444', fontWeight: 700 }}>1000+ Live</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="banner-controls">
        <button className="banner-arrow" onClick={prev} aria-label="Previous slide">&#8249;</button>
        <div className="banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`banner-dot ${i === current ? 'banner-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="banner-arrow" onClick={next} aria-label="Next slide">&#8250;</button>
      </div>
    </section>
  )
}
