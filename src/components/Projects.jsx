import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Hero';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

        {/* 3 Projects Grid - Click to view details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.6rem'
          }}
          className="projects-grid"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card project-card-item"
              style={{
                borderRadius: '18px',
                background: 'rgba(22, 11, 38, 0.92)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                padding: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
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

            </div>
          ))}
        </div>

        {/* Pagination indicator dots */}
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

      {/* Project Details Modal - Clean, Perfectly Centered, Always Fully Visible */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(5, 2, 12, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '82vh',
              overflowY: 'auto',
              background: 'rgba(18, 9, 34, 0.98)',
              border: '1px solid rgba(216, 180, 254, 0.45)',
              borderRadius: '22px',
              padding: '1.6rem 1.8rem',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 45px rgba(147, 51, 234, 0.45)',
              position: 'relative'
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(38, 18, 68, 0.8)',
                border: '1px solid rgba(216, 180, 254, 0.4)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(147, 51, 234, 0.9)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(38, 18, 68, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close modal"
            >
              <X size={17} />
            </button>

            {/* Header / Category & Title */}
            <div style={{ marginBottom: '1rem', paddingRight: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #9333EA, #A855F7)',
                    border: '1px solid rgba(233, 213, 255, 0.4)',
                    padding: '0.2rem 0.7rem',
                    borderRadius: '9999px'
                  }}
                >
                  {selectedProject.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#D8B4FE' }}>
                  {selectedProject.subtitle}
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF' }}>
                {selectedProject.title}
              </h3>
            </div>

            {/* Project Image Preview */}
            <div
              style={{
                width: '100%',
                height: '165px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.2rem',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                background: '#07030E'
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block'
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.9rem',
                color: '#E9D5FF',
                lineHeight: '1.65',
                marginBottom: '1.2rem',
                opacity: 0.95
              }}
            >
              {selectedProject.description}
            </p>

            {/* Tech Tags */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#C084FC', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Technologies utilisées
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '500',
                      background: 'rgba(38, 20, 68, 0.85)',
                      border: '1px solid rgba(192, 132, 252, 0.35)',
                      color: '#E9D5FF',
                      padding: '0.22rem 0.65rem',
                      borderRadius: '8px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a
                href={selectedProject.demoUrl}
                className="btn-primary"
                style={{ flex: '1 1 140px', padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Ouverture de la démo en direct pour ${selectedProject.title}`);
                }}
              >
                <span>Live Preview</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={selectedProject.githubUrl || "https://github.com/Basma-bob"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  flex: '1 1 140px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.65rem 1.2rem',
                  fontSize: '0.88rem',
                  border: '1px solid rgba(192, 132, 252, 0.4)'
                }}
              >
                <span>Source Code</span>
                <GithubIcon size={14} />
              </a>
            </div>

          </div>
        </div>
      )}

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
