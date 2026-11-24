'use client'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="sectionTag">Pricing</div>
        <h2 className="sectionTitle">Simple, Transparent Pricing</h2>
        <p className="sectionSub">One plan, everything included. No hidden fees.</p>
        <div className="pricingGrid">
          <div className="pricingCard featured">
            <div className="pricingBadge">Most Popular</div>
            <div className="pricingName">Monthly Retainer</div>
            <div className="pricingPrice"><span className="pricingCurrency">$</span>497<span className="pricingPer">/mo</span></div>
            <ul className="pricingFeatures">
              <li>✓ 4 full podcast episodes/month</li>
              <li>✓ 8 short-form clips/month</li>
              <li>✓ Multi-cam editing</li>
              <li>✓ 4 platforms optimized</li>
              <li>✓ 2 revision rounds</li>
              <li>✓ 48-hour turnaround</li>
            </ul>
            <a href="mailto:kwentopod@gmail.com" className="btnPrimary" style={{display:'block',textAlign:'center',marginTop:'2rem'}}>Get Started →</a>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* PLATFORMS */}
      <section id="platforms" className="section sectionGray">
        <div className="sectionTag">Distribution</div>
        <h2 className="sectionTitle">4 Platforms. One Edit.</h2>
        <p className="sectionSub">We optimize your content for every major platform so you don't have to.</p>
        <div className="platformsGrid">
          <div className="platformCard"><div className="platformIcon">▶</div><div className="platformName">YouTube</div></div>
          <div className="platformCard"><div className="platformIcon">🎵</div><div className="platformName">TikTok</div></div>
          <div className="platformCard"><div className="platformIcon">📸</div><div className="platformName">Instagram</div></div>
          <div className="platformCard"><div className="platformIcon">🎙</div><div className="platformName">Spotify</div></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="sectionTag">What's Included</div>
        <h2 className="sectionTitle">Everything You Need</h2>
        <p className="sectionSub">Full-service podcast video editing from raw footage to published content.</p>
        <div className="servicesGrid">
          <div className="serviceCard"><div className="serviceIcon" style={{background:'rgba(124,58,237,0.15)'}}>🎬</div><h3>Multi-Cam Editing</h3><p>Seamless cuts between multiple camera angles for a professional broadcast look.</p></div>
          <div className="serviceCard"><div className="serviceIcon" style={{background:'rgba(185,127,255,0.1)'}}>📱</div><h3>Short-Form Reels</h3><p>Viral-ready clips optimized for TikTok, Instagram Reels, and YouTube Shorts.</p></div>
          <div className="serviceCard"><div className="serviceIcon" style={{background:'rgba(124,58,237,0.15)'}}>🎨</div><h3>Motion Graphics</h3><p>Custom lower thirds, transitions, and branded graphics for your show.</p></div>
          <div className="serviceCard"><div className="serviceIcon" style={{background:'rgba(185,127,255,0.1)'}}>🔊</div><h3>Audio Enhancement</h3><p>Noise removal, leveling, and mastering for crystal-clear podcast audio.</p></div>
        </div>
      </section>

      {/* REVISION BANNER */}
      <section className="section sectionGray" style={{textAlign:'center',padding:'4rem'}}>
        <h3 style={{fontFamily:'Nexa, sans-serif',fontSize:'1.8rem',marginBottom:'0.5rem'}}>2 Revision Rounds Included</h3>
        <p style={{color:'var(--muted)'}}>Every delivery comes with two rounds of revisions — no extra charge.</p>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="section" style={{textAlign:'center'}}>
        <div className="sectionTag">Get Started</div>
        <h2 className="sectionTitle">Ready to Grow Your Podcast?</h2>
        <p className="sectionSub" style={{margin:'0 auto 2rem'}}>Let's talk about your show. Email us and we'll get back to you within 24 hours.</p>
        <a href="mailto:kwentopod@gmail.com" className="btnPrimary" style={{fontSize:'1.1rem',padding:'1rem 2.5rem'}}>kwentopod@gmail.com →</a>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'1px solid var(--border)',padding:'2rem 4rem',display:'flex',justifyContent:'space-between',alignItems:'center',color:'var(--muted)',fontSize:'0.85rem'}}>
        <span>© 2025 KwentoPod</span>
        <a href="mailto:kwentopod@gmail.com" style={{color:'var(--muted)',textDecoration:'none'}}>kwentopod@gmail.com</a>
      </footer>
    </>
  )
}
