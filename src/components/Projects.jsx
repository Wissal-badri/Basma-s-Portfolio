import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, X, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Hero';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper" style={{ scrollMarginTop: '80px' }}>
      <div className="container">
        
        {/* Section Header with "View All Projects" */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <span className="section-script-subtitle">Recent Work</span>
            <h2 className="section-title">My Projects</h2>
          </div>

          <a
            href="https://github.com/Wissal-badri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '0.6rem 1.35rem',
              fontSize: '0.9rem',
              border: '1px solid rgba(192, 132, 252, 0.35)',
              background: 'rgba(28, 14, 50, 0.75)'
            }}
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card-item"
              onClick={() => setSelectedProject(project)}
              style={{
                borderRadius: '20px',
                background: 'rgba(24, 12, 42, 0.88)',
                border: '1px solid rgba(192, 132, 252, 0.32)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.55), 0 0 20px rgba(147, 51, 234, 0.12)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(216, 180, 254, 0.8)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(147, 51, 234, 0.35), 0 0 30px rgba(192, 132, 252, 0.3)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.32)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.55), 0 0 20px rgba(147, 51, 234, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Box - Vivid and Sharp */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1.1rem',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  background: '#0B0517'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </div>

              {/* Card Bottom Meta */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.3rem 0.6rem 0.5rem 0.6rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      lineHeight: '1.25',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
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
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(45, 20, 80, 0.85)',
                    border: '1px solid rgba(216, 180, 254, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination indicator dots as seen in mockup */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2.5rem'
          }}
        >
          <span
            style={{
              width: '26px',
              height: '8px',
              borderRadius: '9999px',
              background: '#C084FC',
              boxShadow: '0 0 12px rgba(192, 132, 252, 0.9)'
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

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(5, 2, 12, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '680px',
              background: 'rgba(18, 9, 34, 0.96)',
              border: '1px solid rgba(216, 180, 254, 0.45)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 45px rgba(147, 51, 234, 0.45)',
              animation: 'fadeIn 0.25s ease-out'
            }}
          >
            {/* Modal Image Header */}
            <div style={{ position: 'relative', width: '100%', height: '260px', background: '#0A0515' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(10, 5, 20, 0.85)',
                  border: '1px solid rgba(216, 180, 254, 0.4)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.8)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10, 5, 20, 0.85)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #9333EA, #A855F7)',
                    border: '1px solid rgba(233, 213, 255, 0.4)',
                    padding: '0.25rem 0.8rem',
                    borderRadius: '9999px',
                    boxShadow: '0 0 12px rgba(168, 85, 247, 0.35)'
                  }}
                >
                  {selectedProject.category}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#D8B4FE', fontWeight: '500' }}>
                  {selectedProject.subtitle}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: '#E9D5FF', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '1.5rem', opacity: 0.95 }}>
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '2rem' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: '500',
                      background: 'rgba(38, 20, 68, 0.85)',
                      border: '1px solid rgba(192, 132, 252, 0.35)',
                      color: '#E9D5FF',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '10px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={selectedProject.demoUrl}
                  className="btn-primary"
                  style={{ flex: '1 1 200px', padding: '0.85rem 1.5rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Opening live demo for ${selectedProject.title}`);
                  }}
                >
                  <span>Live Preview</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    flex: '1 1 200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.5rem',
                    border: '1px solid rgba(192, 132, 252, 0.4)'
                  }}
                >
                  <span>Source Code</span>
                  <GithubIcon size={16} />
                </a>
              </div>
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
