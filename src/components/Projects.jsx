import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, X, ExternalLink, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Hero';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        
        {/* Section Header with "View All Projects" */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <span className="section-script-subtitle">Recent Work</span>
            <h2 className="section-title">My Projects</h2>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.88rem'
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
            gap: '1.5rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              onClick={() => setSelectedProject(project)}
              style={{
                borderRadius: '18px',
                background: 'rgba(20, 10, 36, 0.75)',
                border: '1px solid rgba(168, 85, 247, 0.22)',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
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
                  marginBottom: '1rem'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(13, 6, 24, 0.5) 100%)'
                  }}
                />
              </div>

              {/* Card Bottom Meta */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.2rem 0.5rem 0.4rem 0.5rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      lineHeight: '1.2'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#A78BFA',
                      marginTop: '0.2rem'
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow Icon Button */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(38, 18, 68, 0.7)',
                    border: '1px solid rgba(192, 132, 252, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D8B4FE',
                    flexShrink: 0,
                    transition: 'all 0.25s ease'
                  }}
                >
                  <ArrowUpRight size={18} />
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
            marginTop: '2rem'
          }}
        >
          <span
            style={{
              width: '24px',
              height: '8px',
              borderRadius: '9999px',
              background: '#C084FC',
              boxShadow: '0 0 10px rgba(192, 132, 252, 0.8)'
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.3)'
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.3)'
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
            background: 'rgba(5, 2, 10, 0.85)',
            backdropFilter: 'blur(16px)',
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
              maxWidth: '650px',
              background: 'rgba(16, 8, 30, 0.95)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)'
            }}
          >
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', height: '240px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(10, 5, 20, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '1.8rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: '#C084FC',
                    background: 'rgba(147, 51, 234, 0.2)',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px'
                  }}
                >
                  {selectedProject.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#A78BFA' }}>
                  {selectedProject.subtitle}
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: '#E9D5FF', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.4rem' }}>
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.82rem',
                      background: 'rgba(38, 20, 68, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#D8B4FE',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '8px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={selectedProject.demoUrl}
                  className="btn-primary"
                  style={{ flex: 1 }}
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
                  style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
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
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
