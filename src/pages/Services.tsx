const services = [
  {
    icon: '🌐',
    title: 'High-Speed Fiber Internet',
    desc: 'We provide blazing fast fiber optic internet with speeds ranging from 30 Mbps to 300 Mbps. Our GPON technology ensures low latency, high reliability, and consistent speeds even during peak hours. Perfect for streaming 4K content, online gaming, video conferencing, and working from home.',
  },
  {
    icon: '📺',
    title: 'IPTV Services',
    desc: 'Enjoy 1000+ live TV channels with our IPTV service included in Entertainment plans. Watch your favorite shows, news, sports, and movies on your TV, laptop, tablet, or smartphone. Features include pause, rewind, and recording capabilities.',
  },
  {
    icon: '🎬',
    title: 'OTT Platform Subscriptions',
    desc: 'Get access to premium OTT platforms like Netflix, Amazon Prime Video, JioHotstar, ZEE5, Sony Liv, and many more. Our Entertainment bundle plans include curated subscription packages so you never run out of content to watch.',
  },
  {
    icon: '🔧',
    title: 'Installation & Setup',
    desc: 'Our professional technical team handles end-to-end installation including fiber cabling, ONT/router setup, and WiFi configuration. We ensure your connection is up and running smoothly with minimal disruption to your routine.',
  },
  {
    icon: '🛠️',
    title: '24/7 Technical Support',
    desc: 'Our dedicated support team is available round the clock to assist with any issues. Reach us via phone, email, WhatsApp, or through our website. We typically resolve issues within 4 hours of reporting.',
  },
]

export default function Services() {
  return (
    <section className="section services-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="highlight">Services</span></h2>
          <p className="section-desc">Comprehensive internet solutions tailored for your home and business needs.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
