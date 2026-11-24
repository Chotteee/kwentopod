export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="whitelistBadge"><span>✅</span> Whitelisted Video Editor for Video Podcasts</div>
        <h1 className="heroTitle">Your Podcast.<br /><em>Edited.</em> Everywhere.</h1>
        <p className="heroSub">Professional podcast video editing built for creators — multi-cam cuts, short-form reels, 4 platforms, and content repurposed for every major platform.</p>
        <div className="heroActions">
          <a href="mailto:kwentopod@gmail.com" className="btnPrimary">Start Your Project →</a>
          <a href="#portfolio" className="btnGhost">See What&apos;s Included ↓</a>
        </div>
        <div className="heroStats">
          <div><div className="statNum">8</div><div className="statLabel">Short-form clips/month</div></div>
          <div><div className="statNum">4</div><div className="statLabel">Episodes/month</div></div>
          <div><div className="statNum">4</div><div className="statLabel">Platforms optimized</div></div>
        </div>
      </div>
      <div style={{background:'#1a1a1a',border:'1px solid #3a3a3a',borderRadius:'6px',padding:'1rem',fontSize:'0.8rem',color:'#d0d0d0'}}>
        <div style={{marginBottom:'0.5rem',color:'#4a90d9',fontWeight:'700'}}>Adobe Premiere Pro — KwentoPod_EP04</div>
        <div>🎬 EP04_Main_A.mp4</div>
        <div>🎬 EP04_Main_B.mp4</div>
        <div>🎵 EP04_Audio_Mix.wav</div>
        <div style={{marginTop:'0.5rem',color:'#888'}}>Timeline: EP04_Sequence 00:12:34:08</div>
      </div>
    </section>
  )
}
