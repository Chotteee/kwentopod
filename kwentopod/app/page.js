'use client'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FAQ />
      <footer style={{borderTop:'1px solid var(--border)',padding:'2rem 4rem',color:'var(--muted)',fontSize:'0.85rem'}}>
        <span>© 2025 KwentoPod</span>
      </footer>
    </>
  )
}
