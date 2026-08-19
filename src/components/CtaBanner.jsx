import React from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section style={{ padding: '2rem 0 4.5rem 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div
          className="glass-card cta-banner-card"
          style={{
            position: 'relative',
            padding: '2.4rem 3rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(28, 12, 50, 0.9) 0%, rgba(18, 8, 35, 0.95) 100%)',
            border: '1px solid rgba(192, 132, 252, 0.35)',
            boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(147, 51, 234, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            overflow: 'hidden'
          }}
        >
          {/* Ethereal Glow Waves behind using hallow.png */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/hallow.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              opacity: 0.35,
              mixBlendMode: 'screen',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50%',
              right: '-10%',
              width: '450px',
              height: '250px',
              background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

          {/* Left Content (Icon + Text) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(147, 51, 234, 0.25)',
                border: '1px solid rgba(216, 180, 254, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E9D5FF',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
              }}
            >
              <Send size={26} />
            </div>

            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Let's work together on your <br className="desktop-br" />
                <span className="text-gradient-purple">next amazing project</span>
              </h3>
            </div>
          </div>

          {/* Right Button */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{
                padding: '0.85rem 2rem',
                fontSize: '1rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Get In Touch</span>
              <Send size={16} />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cta-banner-card {
            flex-direction: column !important;
            text-align: center !important;
            padding: 2rem !important;
          }
          .cta-banner-card > div:first-child {
            flex-direction: column !important;
          }
          .desktop-br {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
