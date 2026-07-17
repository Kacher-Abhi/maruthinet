import { whyChooseUs } from '../data/plans'

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="highlight">Maruthi Net</span>?</h2>
          <p className="section-desc">We deliver the best internet experience with cutting-edge technology and unmatched support.</p>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
