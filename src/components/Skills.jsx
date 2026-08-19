import React from 'react';
import { 
  Atom, 
  Hexagon, 
  Leaf, 
  Database, 
  Wind, 
  GitBranch, 
  Container,
  Code2
} from 'lucide-react';
import { techSkills, skillBars } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        
        {/* Section Title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">My Skills</h2>
        </div>

        {/* 2 Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.95fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="skills-grid"
        >
          {/* Left: 3x4 Grid of Tech Skill Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}
            className="tech-badges-grid"
          >
            {techSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1rem 1.15rem',
                  borderRadius: '14px',
                  background: 'rgba(20, 10, 36, 0.7)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  transition: 'all 0.25s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(216, 180, 254, 0.6)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Tech Badge or Icon */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    background: skill.badge ? 'rgba(35, 18, 60, 0.9)' : 'rgba(147, 51, 234, 0.18)',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                    color: skill.color || '#D8B4FE'
                  }}
                >
                  {skill.badge ? (
                    <span style={{ color: skill.color || '#FFFFFF', fontFamily: 'monospace', fontWeight: 'bold' }}>
                      {skill.badge}
                    </span>
                  ) : skill.name === 'React' ? (
                    <Atom size={20} color="#61DAFB" />
                  ) : skill.name === 'Node.js' ? (
                    <Hexagon size={20} color="#68A063" />
                  ) : skill.name === 'MongoDB' ? (
                    <Leaf size={20} color="#47A248" />
                  ) : skill.name.includes('SQL') ? (
                    <Database size={20} color="#4169E1" />
                  ) : skill.name.includes('Tailwind') ? (
                    <Wind size={20} color="#38BDF8" />
                  ) : skill.name.includes('Git') ? (
                    <GitBranch size={20} color="#F05032" />
                  ) : skill.name === 'Docker' ? (
                    <Container size={20} color="#2496ED" />
                  ) : (
                    <Code2 size={20} color="#C084FC" />
                  )}
                </div>

                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    color: '#FFFFFF'
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right: "What I do best" Glass Card */}
          <div
            className="glass-card"
            style={{
              padding: '2rem 2.2rem',
              borderRadius: '20px',
              background: 'rgba(20, 10, 36, 0.8)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                marginBottom: '1.75rem'
              }}
            >
              What I do best
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {skillBars.map((bar, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#FFFFFF' }}>
                      {bar.label}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#D8B4FE' }}>
                      {bar.percentage}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '9999px',
                      background: 'rgba(38, 20, 68, 0.6)',
                      border: '1px solid rgba(168, 85, 247, 0.15)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Glowing Progress Fill */}
                    <div
                      style={{
                        width: `${bar.percentage}%`,
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #9333EA 0%, #C084FC 70%, #E9D5FF 100%)',
                        boxShadow: '0 0 12px rgba(192, 132, 252, 0.6)',
                        transition: 'width 1.2s ease-in-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .tech-badges-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
