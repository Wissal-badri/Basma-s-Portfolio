import React from 'react';
import { Star, Briefcase, Users, Coffee } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconMap = {
  Star: Star,
  Briefcase: Briefcase,
  Users: Users,
  Coffee: Coffee
};

export default function StatsBar() {
  return (
    <section style={{ padding: '1rem 0 3rem 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem'
          }}
          className="stats-grid"
        >
          {stats.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Star;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  padding: '1.35rem 1.5rem',
                  borderRadius: '18px',
                  background: 'rgba(20, 10, 36, 0.7)',
                  border: '1px solid rgba(168, 85, 247, 0.22)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Icon Box */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(147, 51, 234, 0.18)',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D8B4FE',
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
                  }}
                >
                  <IconComponent size={24} />
                </div>

                {/* Values */}
                <div>
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      fontFamily: 'var(--font-heading)',
                      color: '#FFFFFF',
                      lineHeight: '1.1',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      color: '#D8B4FE',
                      fontWeight: '500',
                      marginTop: '0.15rem'
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
