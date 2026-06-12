'use client'
import { useState } from 'react'

const faqs = [
  { q: 'How do I send you my raw footage?', a: 'We accept uploads via Google Drive, Dropbox, WeTransfer, or any shared link. Once you place an order, we\'ll send you a shared folder link where you can drop all your files.' },
  { q: 'How long does editing take?', a: 'Single Angle episodes are delivered within 24 hours. Multi-Cam episodes take 24–48 hours depending on complexity and episode length.' },
  { q: 'What does "2–3 reasonable revisions" mean?', a: 'We offer 2–3 rounds of revisions per episode to make sure the final output matches your vision. We keep the process smooth and efficient so you get a polished result without back-and-forth delays.' },
  { q: 'Do you handle both audio and video podcasts?', a: 'Yes! We primarily specialize in video podcasts (recorded on camera), but we can also work with audio-only recordings and create engaging audiogram visuals for social media.' },
  { q: 'Can you match my existing show\'s style and branding?', a: 'Absolutely. Send us examples of your existing episodes, brand guide, or style references and we\'ll match your aesthetic precisely. First-time clients get an onboarding call to align on style.' },
  { q: 'Are captions in English only?', a: 'We primarily work in English, but can accommodate other languages with some lead time. Reach out to discuss your specific needs.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section">
      <div className="sectionTag">FAQ</div>
      <h2 className="sectionTitle">Common questions</h2>
      <div className="faqList">
        {faqs.map((f, i) => (
          <div key={i} className={`faqItem${openIndex === i ? ' faqItemOpen' : ''}`}>
            <div className="faqQ" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {f.q}
              <span className="faqToggle">{openIndex === i ? '−' : '+'}</span>
            </div>
            <div className="faqA">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
