import React, { useState } from 'react';
import { Briefcase, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { experienceData, testimonialsData } from '../data/portfolioData';

export default function ExperienceAndTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="experience" className="section-wrapper" style={{ scrollMarginTop: '80px' }}>
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}
          className="exp-test-grid"
        >
          {/* LEFT COLUMN: Experience Timeline */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <span className="section-script-subtitle">My Journey</span>
              <h2 className="section-title">Experience</h2>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              
              {/* Vertical Glowing Timeline Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: '15px',
                  bottom: '25px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #A855F7 0%, rgba(168, 85, 247, 0.2) 100%)',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
                {experienceData.map((item, idx) => (
                  <div key={idx} style={{ position: 'relative' }}>
                    
                    {/* Node Dot / Icon */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '2px',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#0D0618',
                        border: '2px solid #C084FC',
                        boxShadow: '0 0 12px rgba(192, 132, 252, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#C084FC'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: '600',
                          color: '#C084FC',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {item.period}
                      </span>
                      <h3
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: '700',
                          color: '#FFFFFF',
                          marginTop: '0.2rem',
                          marginBottom: '0.4rem'
                        }}
                      >
                        {item.role}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#C4B5FD',
                          lineHeight: '1.6',
                          opacity: 0.9
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Testimonials */}
          <div id="testimonials" style={{ scrollMarginTop: '100px' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span className="section-script-subtitle">What people say</span>
              <h2 className="section-title">Testimonials</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Show testimonials */}
              {testimonialsData.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.6rem 1.8rem',
                    borderRadius: '18px',
                    background: 'rgba(24, 12, 42, 0.82)',
                    border: '1px solid rgba(192, 132, 252, 0.28)',
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: '#E9D5FF',
                      lineHeight: '1.7',
                      marginBottom: '1.25rem',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    "{item.quote}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <img
                        src={item.avatar}
                        alt={item.author}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid rgba(192, 132, 252, 0.6)',
                          boxShadow: '0 0 14px rgba(168, 85, 247, 0.35)'
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#FFFFFF' }}>
                          {item.author}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#A78BFA' }}>
                          {item.role}
                        </div>
                      </div>
                    </div>

                    <Quote size={28} style={{ color: 'rgba(168, 85, 247, 0.35)', transform: 'rotate(180deg)' }} />
                  </div>
                </div>
              ))}

              {/* Navigation Arrows on bottom */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginTop: '0.5rem' }}>
                <button
                  onClick={prevTestimonial}
                  className="btn-icon"
                  style={{ width: '38px', height: '38px' }}
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="btn-icon"
                  style={{ width: '38px', height: '38px' }}
                  aria-label="Next Testimonial"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-test-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
