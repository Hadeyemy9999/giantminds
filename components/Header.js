import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav id="main-nav" className={isMenuActive ? 'active' : ''}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/vision-mission">Vision &amp; Mission</Link></li>
            <li><Link href="/contact-candidate" className="cta-link">For Candidates</Link></li>
            <li><Link href="/contact-partner" className="cta-link">For Partners</Link></li>
          </ul>
        </nav>
        <Link href="/" className="logo">
          <div className="logo-container">
            <img src="/images/logo.jpg" alt="GIANT MINDS Logo" className="logo-image" />
            <span className="logo-text">Giant Minds</span>
          </div>
        </Link>

        <button
          className={`hamburger ${isMenuActive ? 'active' : ''}`}
          aria-expanded={isMenuActive}
          aria-controls="main-nav"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
