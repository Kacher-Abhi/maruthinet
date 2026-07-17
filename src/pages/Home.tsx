import BannerCarousel from '../components/BannerCarousel'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import Plans from './Plans'

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <WhyChooseUs />
      <section className="section home-plans-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular <span className="highlight">Plans</span></h2>
            <p className="section-desc">Choose from our top-rated plans designed for every need.</p>
          </div>
          <Plans homeView />
        </div>
      </section>
      <Testimonials />
      <FAQSection />
    </>
  )
}
