import { useState } from 'react'
import { faqs } from '../data/plans'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="section-desc">Got questions? We have answers. If you cannot find what you are looking for, contact us.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
