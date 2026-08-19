import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, CheckCircle2 } from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Hero';
import confetti from 'canvas-confetti';

export default function Footer({ onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#C084FC', '#A855F7', '#D8B4FE', '#FFFFFF']
    });
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer
      id="contact"
      style={{
        background: 'rgba(8, 4, 14, 0.95)',
        borderTop: '1px solid rgba(168, 85, 247, 0.18)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        
        {/* 5-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.9fr 1.1fr 1.3fr 1.3fr',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="footer-grid"
        >
          {/* Col 1: Bio & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span
              className="font-signature"
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(192, 132, 252, 0.6)'
              }}
            >
              Basma<span style={{ color: '#C084FC' }}>.</span>
            </span>

            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#FFFFFF' }}>
              {personalInfo.fullName}
            </div>

            <p style={{ fontSize: '0.86rem', color: '#A78BFA', lineHeight: '1.6' }}>
              Fullstack Developer creating scalable web solutions with passion and precision.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem' }}>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ width: '36px', height: '36px' }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ width: '36px', height: '36px' }}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ width: '36px', height: '36px' }}
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: '#C4B5FD',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C4B5FD'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {servicesData.map((service, idx) => (
                <li key={idx}>
                  <span style={{ color: '#C4B5FD', fontSize: '0.88rem' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Me */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Contact Me
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#C4B5FD',
                    textDecoration: 'none',
                    fontSize: '0.86rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C4B5FD'}
                >
                  <Mail size={16} style={{ color: '#C084FC', flexShrink: 0 }} />
                  <span style={{ wordBreak: 'break-all' }}>{personalInfo.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#C4B5FD',
                    textDecoration: 'none',
                    fontSize: '0.86rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C4B5FD'}
                >
                  <Phone size={16} style={{ color: '#C084FC', flexShrink: 0 }} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#C4B5FD', fontSize: '0.86rem' }}>
                <MapPin size={16} style={{ color: '#C084FC', flexShrink: 0 }} />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay in touch */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>
              Let's stay in touch
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#A78BFA', marginBottom: '1rem', lineHeight: '1.5' }}>
              Subscribe to get updates on new projects and articles.
            </p>

            <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(25, 12, 45, 0.8)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  padding: '0.35rem 0.4rem 0.35rem 0.85rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    outline: 'none',
                    width: '100%',
                    fontFamily: 'inherit'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #9333EA, #A855F7)',
                    border: 'none',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                  }}
                  aria-label="Subscribe"
                >
                  <Send size={14} />
                </button>
              </div>

              {subscribed && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#4ADE80',
                    fontSize: '0.78rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(168, 85, 247, 0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.84rem',
            color: '#A78BFA'
          }}
          className="footer-bottom-bar"
        >
          <div>
            © {new Date().getFullYear()} Basma Aboubzou. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Made with</span>
            <Heart size={14} style={{ color: '#C084FC', fill: '#C084FC' }} />
            <span>using React</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            gap: 0.8rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
