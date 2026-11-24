'use client'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

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
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="section sectionGray">
        <div className="sectionTag">Distribution</div>
        <h2 className="sectionTitle">4 Platforms. One Edit.</h2>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign:'center'}}>
        <h2 className="sectionTitle">Ready to Grow Your Podcast?</h2>
        <a href="mailto:kwentopod@gmail.com" className="btnPrimary">kwentopod@gmail.com →</a>
      </section>

      <footer style={{borderTop:'1px solid var(--border)',padding:'2rem 4rem',color:'var(--muted)',fontSize:'0.85rem'}}>
        <span>© 2025 KwentoPod</span>
      </footer>
    </>
  )
}
