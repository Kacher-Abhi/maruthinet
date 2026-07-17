import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Plans', path: '/plans' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    const pathOnly = path.split('?')[0]
    if (path.includes('?')) {
      const param = path.split('tab=')[1]
      const searchParams = new URLSearchParams(location.search)
      return location.pathname === pathOnly && searchParams.get('tab') === param
    }
    return location.pathname === pathOnly
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">MN</span>
          <span className="logo-text">Maruthi<span className="logo-highlight">Net</span></span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://pay.maruthinet.com"
            className="nav-link nav-link--pay"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Pay
          </a>
          <Link to="/contact" className="btn btn--primary nav-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
