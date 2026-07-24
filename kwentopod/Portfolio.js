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

function VideoThumbnail({ id, url, aspectRatio = '16/9' }) {
  const [playing, setPlaying] = useState(false)
  const thumbUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

  if (playing) {
    return (
      <div style={{ position: 'relative', width: '100%', paddingBottom: aspectRatio === '9/16' ? '177.78%' : '56.25%', background: '#000' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title="YouTube video"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    )
  }

  return (
    <div
      onClick={() => setPlaying(true)}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: aspectRatio === '9/16' ? '177.78%' : '56.25%',
        background: '#111',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <img
        src={thumbUrl}
        alt="Video thumbnail"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
        }}
        onError={(e) => {
          e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
        }}
      />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        transition: 'background 0.2s',
      }} />
      {/* Play button */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 56, height: 56,
        background: 'rgba(124,58,237,0.9)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem',
        boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
      }}>
        ▶
      </div>
      {/* Watch on YouTube link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', bottom: 8, right: 8,
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          fontSize: '0.65rem',
          padding: '3px 8px',
          borderRadius: '4px',
          textDecoration: 'none',
          letterSpacing: '0.04em',
        }}
      >
        ↗ YouTube
      </a>
    </div>
  )
}

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
              <VideoThumbnail id={v.id} url={v.url} aspectRatio="16/9" />
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
              <VideoThumbnail id={v.id} url={v.url} aspectRatio="9/16" />
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
