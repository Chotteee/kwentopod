import Nav from '../components/Nav'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <section id="pricing" className="section">
        <div className="sectionTag">Pricing</div>
        <h2 className="sectionTitle">Simple, Transparent Pricing</h2>
        <p className="sectionSub">One plan, everything included. No surprises.</p>
        <div className="pricingGrid">
          <div className="pricingCard pricingCardFeatured">
            <div className="featuredBadge">Most Popular</div>
            <h3>Monthly Retainer</h3>
            <p className="pricingSubtitle">Full-service podcast editing</p>
            <div className="pricingPrice">$497<span>/mo</span></div>
            <div className="pricingDivider"></div>
            <ul className="pricingList">
              <li>4 full podcast episodes/month</li>
              <li>8 short-form clips/month</li>
              <li>Multi-cam editing</li>
              <li>4 platforms optimized</li>
              <li className="pricingListHighlight">2 revision rounds included</li>
              <li className="pricingListHighlight">48-hour turnaround</li>
            </ul>
            <a href="mailto:kwentopod@gmail.com" className="pricingCta pricingCtaFilled">Get Started →</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section sectionGray">
        <div className="sectionTag">Our Work</div>
        <h2 className="sectionTitle">Sample Videos</h2>
        <p className="sectionSub">See our editing in action — click any video to watch on YouTube.</p>
        <div style={{background:'rgba(185,127,255,0.06)',border:'1px solid rgba(185,127,255,0.2)',borderRadius:'12px',padding:'1.25rem 1.75rem',marginBottom:'2rem',maxWidth:'800px',marginLeft:'auto',marginRight:'auto',display:'flex',alignItems:'flex-start',gap:'0.75rem'}}>
          <span style={{fontSize:'1.2rem',flexShrink:0}}>🔒</span>
          <p style={{fontSize:'1rem',color:'var(--muted)',lineHeight:1.7}}>
            <strong style={{color:'var(--white)'}}>Client Confidentiality Notice:</strong>{' '}
            Due to client confidentiality, some portfolio samples cannot be displayed publicly.
            I would be happy to share additional work during a{' '}
            <a href="mailto:kwentopod@gmail.com" style={{color:'var(--accent)',textDecoration:'none'}}>Zoom call</a>.
          </p>
        </div>
        <div className="longformGrid">
          <a href="https://youtu.be/d0u0zwaBZEY" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <div className="videoCard" style={{cursor:'pointer'}}>
              <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',background:'#111',overflow:'hidden'}}>
                <img src="https://img.youtube.com/vi/d0u0zwaBZEY/maxresdefault.jpg" alt="Episode Sample 1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover'}} />
                <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.35)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:60,height:60,background:'rgba(124,58,237,0.95)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem'}}>▶</div>
                </div>
              </div>
              <div className="videoInfo">
                <div className="videoTypeBadge badgeLong">Long-form · Full Episode</div>
                <h4>Episode Sample 1</h4>
                <p>Full podcast episode · Long-form</p>
              </div>
            </div>
          </a>
          <a href="https://youtu.be/fAtYTZzXcKQ" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <div className="videoCard" style={{cursor:'pointer'}}>
              <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',background:'#111',overflow:'hidden'}}>
                <img src="https://img.youtube.com/vi/fAtYTZzXcKQ/maxresdefault.jpg" alt="Episode Sample 2" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover'}} />
                <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.35)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:60,height:60,background:'rgba(124,58,237,0.95)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem'}}>▶</div>
                </div>
              </div>
              <div className="videoInfo">
                <div className="videoTypeBadge badgeLong">Long-form · Full Episode</div>
                <h4>Episode Sample 2</h4>
                <p>Full podcast episode · Long-form</p>
              </div>
            </div>
          </a>
          <a href="https://youtu.be/5Ns1g_jJ_4M" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <div className="videoCard" style={{cursor:'pointer'}}>
              <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',background:'#111',overflow:'hidden'}}>
                <img src="https://img.youtube.com/vi/5Ns1g_jJ_4M/maxresdefault.jpg" alt="Episode Sample 3" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover'}} />
                <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.35)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:60,height:60,background:'rgba(124,58,237,0.95)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem'}}>▶</div>
                </div>
              </div>
              <div className="videoInfo">
                <div className="videoTypeBadge badgeLong">Long-form · Full Episode</div>
                <h4>Episode Sample 3</h4>
                <p>Full podcast episode · Long-form</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section id="platforms" className="section">
        <div className="sectionTag">Distribution</div>
        <h2 className="sectionTitle">4 Platforms. One Edit.</h2>
        <p className="sectionSub">We optimize your content for every major platform so you don't have to.</p>
        <div className="platformGrid">
          <div className="platformCard"><div className="platformIconWrap" style={{background:'rgba(255,0,0,0.1)'}}>▶</div><h3>YouTube</h3><p>Long-form + Shorts optimized</p></div>
          <div className="platformCard"><div className="platformIconWrap" style={{background:'rgba(0,0,0,0.3)'}}>🎵</div><h3>TikTok</h3><p>Vertical reels with captions</p></div>
          <div className="platformCard"><div className="platformIconWrap" style={{background:'rgba(225,48,108,0.1)'}}>📸</div><h3>Instagram</h3><p>Reels + feed posts</p></div>
          <div className="platformCard"><div className="platformIconWrap" style={{background:'rgba(30,215,96,0.1)'}}>🎙</div><h3>Spotify</h3><p>Podcast audio mastered</p></div>
        </div>
      </section>

      <section id="services" className="section sectionGray">
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

      <div className="revisionBanner">
        <div>
          <h2>2 Revision Rounds Included</h2>
          <p>Every delivery comes with two rounds of revisions — no extra charge.</p>
        </div>
        <a href="mailto:kwentopod@gmail.com" className="btnDark">Get Started →</a>
      </div>

      <section id="faq" className="section">
        <div className="sectionTag">FAQ</div>
        <h2 className="sectionTitle">Common Questions</h2>
        <div className="faqList">
          <div className="faqItem">
            <div className="faqQ">How long does editing take?<span className="faqToggle">+</span></div>
            <div className="faqA">Typically 48 hours per episode after receiving your raw footage.</div>
          </div>
          <div className="faqItem">
            <div className="faqQ">What formats do you accept?<span className="faqToggle">+</span></div>
            <div className="faqA">We accept all major video formats: MP4, MOV, MXF, and more.</div>
          </div>
          <div className="faqItem">
            <div className="faqQ">How many revisions are included?<span className="faqToggle">+</span></div>
            <div className="faqA">Every project includes 2 rounds of revisions at no extra cost.</div>
          </div>
          <div className="faqItem">
            <div className="faqQ">Do you sign NDAs?<span className="faqToggle">+</span></div>
            <div className="faqA">Yes, we are happy to sign an NDA before viewing any client footage.</div>
          </div>
          <div className="faqItem">
            <div className="faqQ">How do I send my footage?<span className="faqToggle">+</span></div>
            <div className="faqA">We use Google Drive, Dropbox, or WeTransfer — whatever works best for you.</div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="sectionTag">Get Started</div>
        <h2>Ready to Grow Your Podcast?</h2>
        <p>Let's talk about your show. Email us and we'll get back to you within 24 hours.</p>
        <a href="mailto:kwentopod@gmail.com" className="btnPrimary" style={{fontSize:'1.1rem',padding:'1rem 2.5rem'}}>kwentopod@gmail.com →</a>
      </section>

      <footer className="footer">
        <a href="/" className="footerLogo">Kwento<span>Pod</span></a>
        <p>© 2025 KwentoPod. All rights reserved.</p>
        <div className="footerLinks">
          <a href="mailto:kwentopod@gmail.com">Email Us</a>
        </div>
      </footer>
    </>
  )
}
