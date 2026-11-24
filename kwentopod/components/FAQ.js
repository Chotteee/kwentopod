'use client'
import { useState } from 'react'

const faqs = [
  { q: 'How long does editing take?', a: 'Typically 48 hours per episode after receiving your raw footage.' },
  { q: 'What formats do you accept?', a: 'We accept all major video formats: MP4, MOV, MXF, and more.' },
  { q: 'How many revisions are included?', a: 'Every project includes 2 rounds of revisions at no extra cost.' },
  { q: 'Do you sign NDAs?', a: 'Yes, we are happy to sign an NDA before viewing any client footage.' },
  { q: 'How do I send my footage?', a: 'We use Google Drive, Dropbox, or WeTransfer — whatever works best for you.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section sectionGray">
      <div className="sectionTag">FAQ</div>
      <h2 className="sectionTitle">Common Questions</h2>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {faqs.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '1.25rem 0' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}
            >
              {item.q}
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p style={{ color: 'var(--muted)', marginTop: '0.75rem', lineHeight: 1.7 }}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
