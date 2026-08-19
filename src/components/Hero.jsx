import React from 'react';
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom SVG Social Icons for pixel-perfect match
export const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Hero({ onOpenContact }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        className="ambient-glow-sphere"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.28) 0%, rgba(109, 40, 217, 0.12) 50%, transparent 70%)',
          top: '10%',
          right: '5%',
        }}
      />
      <div
        className="ambient-glow-sphere"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.2) 0%, transparent 65%)',
          top: '30%',
          left: '-5%',
          animationDelay: '-5s'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.95fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Intro & Call To Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Pill Greeting */}
            <div style={{ display: 'inline-flex' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(35, 18, 60, 0.75)',
                  border: '1px solid rgba(192, 132, 252, 0.3)',
                  padding: '0.4rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#E9D5FF',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
                }}
              >
                <span style={{ color: '#D8B4FE' }}>{personalInfo.tagline}</span>
              </span>
            </div>

            {/* Main Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                letterSpacing: '-1.5px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              <span style={{ display: 'block', color: '#FFFFFF' }}>{personalInfo.name}</span>
              <span
                className="text-gradient-purple"
                style={{
                  display: 'block',
                  textShadow: '0 0 40px rgba(168, 85, 247, 0.45)'
                }}
              >
                {personalInfo.lastName}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.4vw, 1.85rem)',
                fontWeight: '600',
                color: '#D8B4FE',
                letterSpacing: '-0.3px'
              }}
            >
              {personalInfo.title}
            </h2>

            {/* Bio */}
            <p
              style={{
                color: '#C4B5FD',
                fontSize: '1rem',
                lineHeight: '1.7',
                maxWidth: '520px',
                opacity: 0.9
              }}
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '0.5rem',
                alignItems: 'center'
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Downloading Resume: Basma_Aboubzou_Resume.pdf");
                }}
              >
                <span>Download CV</span>
                <Download size={17} />
              </a>
            </div>

            {/* Follow Me Social Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                marginTop: '1.2rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(168, 85, 247, 0.12)'
              }}
            >
              <span style={{ fontSize: '0.9rem', color: '#A78BFA', fontWeight: '500' }}>
                Follow me
              </span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glowing Portrait & Availability Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Ambient Multi-layered Glow behind Portrait */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(126, 34, 206, 0.2) 50%, transparent 75%)',
                filter: 'blur(35px)',
                zIndex: 0
              }}
            />

            {/* Outer Neon Ring Graphic */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                padding: '10px',
                background: 'linear-gradient(135deg, rgba(216, 180, 254, 0.8), rgba(147, 51, 234, 0.2), rgba(192, 132, 252, 0.9))',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.45), inset 0 0 30px rgba(147, 51, 234, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}
            >
              {/* Inner Circle with Image */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <img
                  src="/images/home.png"
                  alt="Basma Aboubzou"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.03)',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Violet Gradient Overlay on Bottom of portrait */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 65%, rgba(9, 4, 15, 0.6) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Floating Glowing Spheres / Particles */}
              <div
                style={{
                  position: 'absolute',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(216, 180, 254, 0.8)',
                  boxShadow: '0 0 20px rgba(216, 180, 254, 0.9)',
                  top: '12%',
                  left: '-10px',
                  animation: 'floatOrb 6s ease-in-out infinite alternate'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.6)',
                  boxShadow: '0 0 25px rgba(168, 85, 247, 0.8)',
                  top: '40%',
                  left: '-25px',
                  animation: 'floatOrb 8s ease-in-out infinite alternate -2s'
                }}
              />
            </div>

            {/* Floating Glassmorphic "Available for new projects" Card */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '-10px',
                padding: '1.1rem 1.3rem',
                borderRadius: '18px',
                background: 'rgba(18, 9, 32, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(192, 132, 252, 0.35)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(147, 51, 234, 0.3)',
                maxWidth: '240px',
                zIndex: 3
              }}
            >
              {/* Green/Lavender glowing availability status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4ADE80',
                    boxShadow: '0 0 10px #4ADE80',
                    display: 'inline-block'
                  }}
                />
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#FFFFFF' }}>
                  {personalInfo.availability}
                </span>
              </div>

              <p style={{ fontSize: '0.78rem', color: '#D8B4FE', margin: '0.2rem 0 0.8rem 0', opacity: 0.9 }}>
                {personalInfo.availabilitySub}
              </p>

              <button
                onClick={onOpenContact}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
                  border: '1px solid rgba(233, 213, 255, 0.3)',
                  color: '#FFFFFF',
                  padding: '0.45rem 0.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(147, 51, 234, 0.4)';
                }}
              >
                <span>Hire Me</span>
                <Send size={12} />
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3.5rem !important;
          }
          .hero-grid > div:first-child {
            align-items: center;
          }
          .hero-grid .btn-primary, .hero-grid .btn-secondary {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
