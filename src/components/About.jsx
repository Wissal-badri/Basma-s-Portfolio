import React from 'react';
import { Puzzle, ShieldCheck, Zap } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const pillarIcons = [Puzzle, ShieldCheck, Zap];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-script-subtitle">{aboutData.subtitle}</span>
          <h2 className="section-title">{aboutData.title}</h2>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Text & 3 Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#E9D5FF',
                lineHeight: '1.75',
                opacity: 0.95
              }}
            >
              {aboutData.description}
            </p>

            {/* 3 Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '0.5rem'
              }}
              className="pillars-grid"
            >
              {aboutData.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx] || Puzzle;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '1.4rem 1rem',
                      borderRadius: '16px',
                      background: 'rgba(22, 11, 38, 0.75)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.85rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(147, 51, 234, 0.2)',
                        border: '1px solid rgba(192, 132, 252, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D8B4FE',
                        boxShadow: '0 0 15px rgba(168, 85, 247, 0.25)'
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        lineHeight: '1.3'
                      }}
                    >
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Workspace Showcase Image with Glowing Neon Sign */}
          <div style={{ position: 'relative' }}>
            
            {/* Ambient Purple Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0
              }}
            />

            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '0.65rem',
                borderRadius: '22px',
                background: 'rgba(16, 8, 30, 0.85)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(147, 51, 234, 0.25)'
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '16/10'
                }}
              >
                <img
                  src="/images/laptop.png"
                  alt="Basma's Creative Coding Setup"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Slogan caption */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '0.85rem 0 0.4rem 0'
                }}
              >
                <span
                  className="font-script"
                  style={{
                    fontSize: '1.45rem',
                    color: '#D8B4FE',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}
                >
                  {aboutData.quote}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 580px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
