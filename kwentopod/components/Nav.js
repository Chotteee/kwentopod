'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="#" className="navLogo">Kwento<span>Pod</span></Link>
      <ul className="navLinks">
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#platforms">Platforms</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#contact" className="navCta">Get Started</a>
    </nav>
  )
}
