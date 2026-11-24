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

      {/* 1. PRICING */}
      <section id="pricing" className="section sectionGray">
        <div className="sectionTag">Pricing</div>
        <h2 className="sectionTitle">Monthly Podcast Editing<br />Packages</h2>
        <p className="sectionSub">No hidden fees. No surprise charges. Pick the plan that fits your setup.</p>
        <div className="pricingGrid">
          <div className="pricingCard">
            <h3>Single Angle</h3>
            <p className="pricingSubtitle">Perfect for solo or remote podcasters</p>
            <div className="pricingPrice">$500<span>/month</span></div>
            <p className="pricingNote">4 episodes · billed monthly</p>
            <div className="pricingBadge pricingBadgeSpeed">⚡ 24hr Turnaround</div>
            <div className="pricingDivider"></div>
            <ul className="pricingList">
              <li className="pricingListHighlight">4 Episodes (30 min – 1 hour each)</li>
              <li className="pricingListHighlight">8 Short-form Clips (30 seconds)</li>
              <li>Single Angle Editing</li>
              <li>Audio Enhancement</li>
              <li>Smart Cutting</li>
              <li>Color Correction</li>
              <li>Lower Thirds</li>
              <li>2–3 Reasonable Revisions</li>
            </ul>
            <a href="#contact" className="pricingCta pricingCtaOutline">Get Started</a>
          </div>
          <div className="pricingCard pricingCardFeatured">
            <div className="featuredBadge">Most Popular</div>
            <h3>Multi-Cam Editing</h3>
            <p className="pricingSubtitle">For professional in-studio productions</p>
            <div className="pricingPrice">$650<span>/month</span></div>
            <p className="pricingNote">4 episodes · billed monthly</p>
            <div className="pricingBadge pricingBadgePro">🎬 24–48hr Turnaround</div>
            <div className="pricingDivider"></div>
            <ul className="pricingList">
              <li className="pricingListHighlight">4 Episodes (30 min – 1 hour each)</li>
              <li className="pricingListHighlight">8 Short-form Clips (30–45 seconds)</li>
              <li>Multi-Camera Editing</li>
              <li>Audio Enhancement</li>
              <li>Smart Cutting</li>
              <li>Color Correction</li>
              <li>Lower Thirds</li>
              <li>2–3 Reasonable Revisions</li>
            </ul>
            <a href="#contact" className="pricingCta pricingCtaFilled">Get Started</a>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO */}
      <Portfolio />

      {/* 3. PLATFORMS */}
      <section id="platforms" className="section" style={{ background: 'var(--gray)' }}>
        <div className="sectionTag">Distribution</div>
        <h2 className="sectionTitle">Optimized for every platform</h2>
        <p className="sectionSub">One recording, four fully-optimized cuts. Each platform gets the right format, aspect ratio, and length.</p>
        <div className="platformGrid">
          <div className="platformCard">
            <div className="platformIconWrap" style={{ background: 'rgba(255,0,0,0.1)' }}>📺</div>
            <h3>YouTube</h3>
            <p>Full-length 16:9 export, chapters, cards, end screens, and SEO-optimized scheduling.</p>
            <span className="platformSpec">16:9 · Long-form</span>
          </div>
          <div className="platformCard">
            <div className="platformIconWrap" style={{ background: 'rgba(225,48,108,0.1)' }}>📸</div>
            <h3>Instagram</h3>
            <p>Reels and feed-optimized clips with captions in 9:16 vertical format for maximum reach.</p>
            <span className="platformSpec">9:16 · Reels</span>
          </div>
          <div className="platformCard">
            <div className="platformIconWrap" style={{ background: 'rgba(10,102,194,0.1)' }}>💼</div>
            <h3>LinkedIn</h3>
            <p>Professional square or vertical clips with topic-driven captions suited for B2B audiences.</p>
            <span className="platformSpec">1:1 or 9:16 · Pro</span>
          </div>
          <div className="platformCard">
            <div className="platformIconWrap" style={{ background: 'rgba(24,119,242,0.1)' }}>👥</div>
            <h3>Facebook</h3>
            <p>Horizontal or square clips formatted for Facebook Watch and feed with auto-captions.</p>
            <span className="platformSpec">16:9 or 1:1 · Feed</span>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="section sectionGray">
        <div className="sectionTag">What&apos;s Included</div>
        <h2 className="sectionTitle">Every service you need<br />in one package</h2>
        <p className="sectionSub">From raw recording to polished, publish-ready content — we handle every step of the post-production pipeline.</p>
        <div className="servicesGrid">
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(124,58,237,0.15)' }}>🎬</div>
            <h3>Multi-Camera Editing</h3>
            <p>Seamless cuts between multiple camera angles, synced and color-graded for a professional broadcast look.</p>
            <span className="serviceTag">Video</span>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(185,127,255,0.12)' }}>🎙</div>
            <h3>Audio Editing &amp; Cleaning</h3>
            <p>Noise removal, EQ, compression, and de-essing. Basic audio balancing between hosts and guests.</p>
            <span className="serviceTag">Audio</span>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(124,58,237,0.15)' }}>✂️</div>
            <h3>Smart Cutting</h3>
            <p>Removal of filler words, long pauses, and unnecessary tangents — keeping your show tight and engaging.</p>
            <span className="serviceTag">Efficiency</span>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(185,127,255,0.12)' }}>🖼</div>
            <h3>AI-Powered Thumbnails</h3>
            <p>Eye-catching thumbnails generated and refined using AI tools, optimized for click-through rate on YouTube.</p>
            <span className="serviceTag">AI</span>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(124,58,237,0.15)' }}>📅</div>
            <h3>YouTube Scheduling</h3>
            <p>We upload and schedule your video on YouTube with optimized titles, descriptions, tags, and chapters.</p>
            <span className="serviceTag">Distribution</span>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon" style={{ background: 'rgba(185,127,255,0.12)' }}>🎨</div>
            <h3>Custom Templates &amp; Lower Thirds</h3>
            <p>Branded animated lower thirds and intro/outro templates tailored to your show&apos;s identity.</p>
            <span className="serviceTag">Branding</span>
          </div>
        </div>
      </section>

      {/* REVISION BANNER */}
      <div className="revisionBanner">
        <div>
          <h2>2–3 Reasonable Revisions.<br />Fast turnaround. Every time.</h2>
          <p>We deliver on time and refine until you&apos;re satisfied — because your show&apos;s quality is our reputation too.</p>
        </div>
        <a href="#contact" className="btnDark">Talk to us →</a>
      </div>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section id="contact" className="ctaSection">
        <div className="sectionTag">Let&apos;s Work Together</div>
        <h2>Ready to grow your<br />podcast brand?</h2>
        <p>Send us a message and we&apos;ll get back to you within 24 hours.</p>
        <a href="mailto:kwentopod@gmail.com" className="btnPrimary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
          kwentopod@gmail.com →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#" className="footerLogo">Kwento<span>Pod</span></a>
        <p>© 2025 KwentoPod. All rights reserved.</p>
        <div className="footerLinks">
          <a href="#pricing">Pricing</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#platforms">Platforms</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}
