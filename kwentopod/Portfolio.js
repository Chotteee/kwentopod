'use client'
import { useState } from 'react'

const longformVideos = [
  { id: 'd0u0zwaBZEY', title: 'Episode Sample 1', desc: 'Full podcast episode · Long-form' },
  { id: 'fAtYTZzXcKQ', title: 'Episode Sample 2', desc: 'Full podcast episode · Long-form' },
  { id: '5Ns1g_jJ_4M', title: 'Episode Sample 3', desc: 'Full podcast episode · Long-form' },
]

const shortformVideos = [
  { id: 'ZKJHStfJRRA', title: 'Short Clip 1', desc: 'Short-form reel', duration: '30s' },
  { id: 'MDVZdjZ_BcY', title: 'Short Clip 2', desc: 'Short-form reel', duration: '30s' },
  { id: 'w7926fKyCOk', title: 'Short Clip 3', desc: 'Short-form reel', duration: '30s' },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('longform')

  return (
    <section id="portfolio" className="section">
      <div className="sectionTag">Our Work</div>
      <h2 className="sectionTitle">Sample Videos</h2>
      <p className="sectionSub">See our editing in action — browse our long-form podcast episodes and short-form clips below.</p>

      <div style={{
        background: 'rgba(185,127,255,0.06)',
        border: '1px solid rgba(185,127,255,0.2)',
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
      }}>
        <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>🔒</span>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--white)' }}>Client Confidentiality Notice:</strong> Due to client confidentiality, some portfolio samples cannot be displayed publicly. I would be happy to share additional work during a{' '}
          <a href="mailto:hello@kwentopod.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Zoom call</a>.
        </p>
      </div>

      <div className="portfolioTabs">
        <button className={`portfolioTab${activeTab === 'longform' ? ' active' : ''}`} onClick={() => setActiveTab('longform')}>
          🎬 Long-form Episodes
        </button>
        <button className={`portfolioTab${activeTab === 'shortform' ? ' active' : ''}`} onClick={() => setActiveTab('shortform')}>
          📱 Short-form Reels
        </button>
      </div>

      {activeTab === 'longform' && (
        <div className="longformGrid">
          {longformVideos.map((v) => (
            <div key={v.id} className="videoCard">
              <div className="videoEmbed">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="videoInfo">
                <div className="videoTypeBadge badgeLong">Long-form · Full Episode</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'shortform' && (
        <div className="shortformGrid">
          {shortformVideos.map((v) => (
            <div key={v.id} className="reelCard">
              <div className="reelEmbed">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="reelInfo">
                <div className="videoTypeBadge badgeShort">Short-form · {v.duration}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
