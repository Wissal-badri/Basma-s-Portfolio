import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 3, 12, 0.85)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(168, 85, 247, 0.15)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            color: '#FFFFFF'
          }}
        >
          <span
            className="font-signature"
            style={{
              fontSize: '2.3rem',
              fontWeight: '700',
              color: '#FFFFFF',
              letterSpacing: '1px',
              textShadow: '0 0 20px rgba(192, 132, 252, 0.6)'
            }}
          >
            Basma<span style={{ color: '#C084FC' }}>.</span>
          </span>
        </a>

        {/* Desktop Nav Pill */}
        <nav
          className="desktop-nav"
          style={{
            background: 'rgba(20, 10, 35, 0.75)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            padding: '0.35rem 0.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
          }}
        >
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.25rem', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    style={{
                      display: 'inline-block',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? '600' : '500',
                      color: isActive ? '#FFFFFF' : '#D8B4FE',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.55), rgba(168, 85, 247, 0.35))'
                        : 'transparent',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      border: isActive ? '1px solid rgba(216, 180, 254, 0.35)' : '1px solid transparent',
                      boxShadow: isActive ? '0 0 16px rgba(168, 85, 247, 0.4)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#D8B4FE';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={onOpenContact}
            className="btn-talk"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(28, 14, 50, 0.7)',
              border: '1px solid rgba(192, 132, 252, 0.35)',
              color: '#FFFFFF',
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(147, 51, 234, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #9333EA, #A855F7)';
              e.currentTarget.style.boxShadow = '0 0 22px rgba(168, 85, 247, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(28, 14, 50, 0.7)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(147, 51, 234, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Let's Talk</span>
            <Sparkles size={14} style={{ color: '#D8B4FE' }} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(28, 14, 50, 0.8)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#D8B4FE',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '1rem',
            right: '1rem',
            background: 'rgba(15, 8, 28, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '16px',
            padding: '1rem',
            marginTop: '0.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.7)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.7rem 1rem',
                    borderRadius: '10px',
                    color: activeSection === link.id ? '#FFFFFF' : '#D8B4FE',
                    background: activeSection === link.id ? 'rgba(147, 51, 234, 0.35)' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: activeSection === link.id ? '600' : '400'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Inline styles for responsive navbar */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
