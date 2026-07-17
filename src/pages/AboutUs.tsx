const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Chief Executive Officer',
    bio: '20+ years in telecom and ISP industry. Visionary leader driving Maruthi Net towards becoming Hyderabad\'s most reliable fiber provider.',
  },
  {
    name: 'Anita Reddy',
    role: 'Managing Director',
    bio: '15+ years of experience in operations and business strategy. Ensures operational excellence and customer satisfaction across all touchpoints.',
  },
  {
    name: 'Srinivas Rao',
    role: 'Chief Technology Officer',
    bio: '18+ years in network architecture and GPON technology. Architect of our high-performance fiber network infrastructure.',
  },
  {
    name: 'Priya Deshmukh',
    role: 'Chief Operating Officer',
    bio: '12+ years in service operations. Oversees installation, maintenance, and 24/7 customer support teams.',
  },
  {
    name: 'Vikram Shetty',
    role: 'VP of Sales & Marketing',
    bio: '10+ years in telecom sales. Drives growth and partner relationships across Hyderabad and surrounding regions.',
  },
  {
    name: 'Deepa Nair',
    role: 'Head of Customer Experience',
    bio: '8+ years in customer success. Ensures every Maruthi Net customer receives world-class support and service.',
  },
]

export default function AboutUs() {
  return (
    <section className="section about-hero">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="highlight">Maruthi Net</span></h2>
          <p className="section-desc">Connecting Hyderabad with high-speed fiber internet since 2018.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>Maruthi Net is a leading fiber internet service provider based in Hyderabad, Telangana. We are committed to delivering world-class internet connectivity at affordable prices. Our state-of-the-art GPON fiber network covers major areas of Hyderabad including Madhapur, Gachibowli, Hitech City, Kompally, and more.</p>
            <h3>Our Mission</h3>
            <p>To provide every home and business in Hyderabad with reliable, high-speed internet that enables seamless streaming, productivity, and connectivity. We believe fast internet should be accessible to everyone.</p>
            <h3>Why Us?</h3>
            <p>With Maruthi Net, you get more than just internet. You get a complete entertainment package with OTT subscriptions and IPTV, all backed by 24/7 local support. Our customer-first approach ensures that you are never left waiting for a solution.</p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Locations Covered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container team-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our <span className="highlight">Team</span></h2>
          <p className="section-desc">The passionate people behind Maruthi Net driving innovation and customer delight.</p>
        </div>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">{member.name.split(' ').map(n => n[0]).join('')}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
