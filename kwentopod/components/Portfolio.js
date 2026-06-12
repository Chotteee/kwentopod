'use client'
import { useState } from 'react'

const longformVideos = [
  { id: 'VIDEO_ID_1', title: 'Episode Title Here', desc: 'Guest Name · Topic Description' },
  { id: 'VIDEO_ID_2', title: 'Episode Title Here', desc: 'Guest Name · Topic Description' },
  { id: 'VIDEO_ID_3', title: 'Episode Title Here', desc: 'Guest Name · Topic Description' },
]

const shortformVideos = [
  { id: 'SHORT_ID_1', title: 'Clip Title Here', desc: 'Episode source', duration: '30s' },
  { id: 'SHORT_ID_2', title: 'Clip Title Here', desc: 'Episode source', duration: '30s' },
  { id: 'SHORT_ID_3', title: 'Clip Title Here', desc: 'Episode source', duration: '45s' },
  { id: 'SHORT_ID_4', title: 'Clip Title Here', desc: 'Episode source', duration: '30s' },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('longform')

  return (
    <section id="portfolio" className="section">
      <div className="sectionTag">Our Work</div>
      <h2 className="sectionTitle">Sample Videos</h2>
      <p className="sectionSub">See our editing in action — browse our long-form podcast episodes and short-form clips below.</p>

      <div className="portfolioTabs">
        <button
          className={`portfolioTab${activeTab === 'longform' ? ' active' : ''}`}
          onClick={() => setActiveTab('longform')}
        >
          🎬 Long-form Episodes
        </button>
        <button
          className={`portfolioTab${activeTab === 'shortform' ? ' active' : ''}`}
          onClick={() => setActiveTab('shortform')}
        >
          📱 Short-form Reels
        </button>
      </div>

      {activeTab === 'longform' && (
        <div className="longformGrid">
          {longformVideos.map((v) => (
            <div key={v.id} className="videoCard">
              <div className="videoEmbed">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
