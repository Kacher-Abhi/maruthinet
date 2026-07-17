import { useState } from 'react'

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(`https://wa.me/919206635453?text=Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`, '_blank')
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <p className="section-desc">Have questions? We would love to hear from you. Send us a message and we will respond quickly.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <h4>Our Address</h4>
                <p>Plot No. 42, Hitech City Road,<br />Madhapur, Hyderabad - 500081<br />Telangana, India</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919206635453">+91 92066 35453</a>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:support@maruthinet.com">support@maruthinet.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">🕐</span>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.307058613662!2d78.3779!3d17.4451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzQyLjQiTiA3OMKwMjInNDAuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maruthi Net Location"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Tell us about your requirement..."
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <button type="submit" className="btn btn--primary btn--lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
