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
          <span style={{fontSize:'1.2rem'
