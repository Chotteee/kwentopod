import Nav from '../components/Nav'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <footer style={{borderTop:'1px solid var(--border)',padding:'2rem 4rem',color:'var(--muted)',fontSize:'0.85rem'}}>
        <span>© 2025 KwentoPod</span>
      </footer>
    </>
  )
}
