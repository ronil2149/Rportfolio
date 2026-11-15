'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo-badge">RG</span>
          <span className="navbar__name">Ronil Ghoghari</span>
          <span className="navbar__tagline">Full-Stack Dev</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar__desktop" aria-label="Main navigation">
          <Link href="/#live-apps" className="navbar__link">
            Live Apps
          </Link>
          <Link href="/#experience" className="navbar__link">
            Experience
          </Link>
          <Link href="/projects/software" className="navbar__link">
            Software Hub
          </Link>
          <Link href="/projects/data-ai" className="navbar__link">
            Data &amp; AI
          </Link>
          <Link href="/#kit" className="navbar__link">
            Toolkit
          </Link>
          <a
            href="/Ronil_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--resume"
          >
            Resume ↗
          </a>
          <a href="/#contact" className="navbar__cta">
            Hire / Contact
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="navbar__mobile-drawer" onClick={closeMenu}>
          <nav className="navbar__mobile-nav" onClick={(e) => e.stopPropagation()}>
            <Link href="/#live-apps" className="navbar__mobile-link" onClick={closeMenu}>
              🚀 Production Live Apps
            </Link>
            <Link href="/#experience" className="navbar__mobile-link" onClick={closeMenu}>
              💼 Work Experience
            </Link>
            <Link href="/projects/software" className="navbar__mobile-link" onClick={closeMenu}>
              💻 Software &amp; Web Hub
            </Link>
            <Link href="/projects/data-ai" className="navbar__mobile-link" onClick={closeMenu}>
              📊 Data &amp; AI Analytics Hub
            </Link>
            <Link href="/#kit" className="navbar__mobile-link" onClick={closeMenu}>
              🛠 Technical Toolkit
            </Link>
            <a
              href="/Ronil_dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-link navbar__mobile-link--resume"
              onClick={closeMenu}
            >
              📄 View / Download Resume (PDF) ↗
            </a>
            <a href="/#contact" className="navbar__mobile-cta" onClick={closeMenu}>
              Say Hello / Hire Me →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

