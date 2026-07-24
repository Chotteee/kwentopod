'use client'
import { useState } from 'react'

const longformVideos = [
  { 
    id: 'd0u0zwaBZEY', 
    title: 'Episode Sample 1', 
    desc: 'Full podcast episode · Long-form',
    url: 'https://youtu.be/d0u0zwaBZEY'
  },
  { 
    id: 'fAtYTZzXcKQ', 
    title: 'Episode Sample 2', 
    desc: 'Full podcast episode · Long-form',
    url: 'https://youtu.be/fAtYTZzXcKQ'
  },
  { 
    id: '5Ns1g_jJ_4M', 
    title: 'Episode Sample 3', 
    desc: 'Full podcast episode · Long-form',
    url: 'https://youtu.be/5Ns1g_jJ_4M'
  },
]

const shortformVideos = [
  { 
    id: 'ZKJHStfJRRA', 
    title: 'Short Clip 1', 
    desc: 'Short-form reel', 
    duration: '30s',
    url: 'https://youtube.com/shorts/ZKJHStfJRRA'
  },
  { 
    id: 'MDVZdjZ_BcY', 
    title: 'Short Clip 2', 
    desc: 'Short-form reel', 
    duration: '30s',
    url: 'https://youtube.com/shorts/MDVZdjZ_BcY'
  },
  { 
    id: 'w7926fKyCOk', 
    title: 'Short Clip 3', 
    desc: 'Short-form reel', 
    duration: '30s',
    url: 'https://youtube.com/shorts/w7926fKyCOk'
  },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('longform')

  return (
    <section id="portfolio" className="section">
      <div className="sectionTag">Our Work</div>
      <h2 className="sectionTitle">Sample Videos</h2>
      <p className="sectionSub">See our editing in action — click any video to watch on YouTube.</p>

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
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="videoCard" style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#111', overflow: 'hidden' }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` }}
                  />
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 60, height: 60,
                      background: 'rgba(124,58,237,0.95)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: '0 4px 24px rgba(124,58,237,0.6)',
                    }}>▶</div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 10, right: 10,
                    background: 'rgba(0,0,0,0.75)',
                    color: '#fff', fontSize: '0.7rem',
                    padding: '3px 8px', borderRadius: '4px',
                  }}>
                    Watch on YouTube ↗
                  </div>
                </div>
                <div className="videoInfo">
                  <div className="videoTypeBadge badgeLong">Long-form · Full Episode</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'shortform' && (
        <div className="shortformGrid">
          {shortformVideos.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="reelCard" style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', paddingBottom: '177.78%', background: '#111', overflow: 'hidden' }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` }}
                  />
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 50, height: 50,
                      background: 'rgba(124,58,237,0.95)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem',
                      boxShadow: '0 4px 24px rgba(124,58,237,0.6)',
                    }}>▶</div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 8, right: 8,
                    background: 'rgba(0,0,0,0.75)',
                    color: '#fff', fontSize: '0.65rem',
                    padding: '2px 6px', borderRadius: '4px',
                  }}>
                    Watch ↗
                  </div>
                </div>
                <div className="reelInfo">
                  <div className="videoTypeBadge badgeShort">Short-form · {v.duration}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
