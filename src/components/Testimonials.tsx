import { testimonials } from '../data/plans'

export default function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our <span className="highlight">Customers</span> Say</h2>
          <p className="section-desc">Hear from our happy customers about their Maruthi Net experience.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <span key={j} className={`star ${j < t.rating ? 'star--filled' : ''}`}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-location">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
