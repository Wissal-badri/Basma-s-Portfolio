import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" style={{ scrollMarginTop: '80px', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Section Header with "View All Projects" */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <span className="section-script-subtitle">Recent Work</span>
            <h2 className="section-title">My Projects</h2>
          </div>

          <a
            href="https://github.com/Basma-bob"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.88rem',
              border: '1px solid rgba(192, 132, 252, 0.35)',
              background: 'rgba(28, 14, 50, 0.75)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Projects Grid - Matching mockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.6rem'
          }}
          className="projects-grid"
        >
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl || "https://github.com/Basma-bob"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card project-card-item"
              style={{
                borderRadius: '18px',
                background: 'rgba(22, 11, 38, 0.9)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                padding: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.55), 0 0 15px rgba(147, 51, 234, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 180, 254, 0.85)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(147, 51, 234, 0.4), 0 0 25px rgba(192, 132, 252, 0.35)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.55), 0 0 15px rgba(147, 51, 234, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Box */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1rem',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  background: '#07030E'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>

              {/* Card Meta: Title + Subtitle + Arrow */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.2rem 0.4rem 0.4rem 0.4rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      lineHeight: '1.2'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#D8B4FE',
                      marginTop: '0.25rem',
                      fontWeight: '500'
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow Icon Button */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(45, 20, 80, 0.85)',
                    border: '1px solid rgba(216, 180, 254, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                    boxShadow: '0 0 12px rgba(168, 85, 247, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ArrowUpRight size={19} />
                </div>
              </div>

            </a>
          ))}
        </div>

        {/* Pagination indicator dots as in mockup */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2.2rem'
          }}
        >
          <span
            style={{
              width: '26px',
              height: '8px',
              borderRadius: '9999px',
              background: '#C084FC',
              boxShadow: '0 0 10px rgba(192, 132, 252, 0.9)'
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.4)'
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.4)'
            }}
          />
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 620px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
