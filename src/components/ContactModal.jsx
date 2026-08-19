import React, { useState } from 'react';
import { X, Send, Mail, User, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C084FC', '#A855F7', '#D8B4FE', '#FFFFFF']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onClose();
    }, 2800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(6, 2, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(18, 9, 32, 0.95)',
          border: '1px solid rgba(192, 132, 252, 0.35)',
          borderRadius: '24px',
          padding: '2.2rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(147, 51, 234, 0.35)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(35, 18, 60, 0.6)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: '#D8B4FE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(74, 222, 128, 0.15)',
                border: '2px solid #4ADE80',
                color: '#4ADE80',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto',
                boxShadow: '0 0 25px rgba(74, 222, 128, 0.4)'
              }}
            >
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Message Sent!
            </h3>
            <p style={{ color: '#D8B4FE', fontSize: '0.95rem' }}>
              Thank you for reaching out, {formData.name || 'friend'}! I will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="section-script-subtitle" style={{ fontSize: '1.25rem' }}>
                Say hello
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#FFFFFF' }}>
                Let's Talk About Your Project
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#D8B4FE', marginBottom: '0.35rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(28, 14, 50, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#D8B4FE', marginBottom: '0.35rem' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(28, 14, 50, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#D8B4FE', marginBottom: '0.35rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project goals or inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(28, 14, 50, 0.7)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '10px',
                    padding: '0.7rem 1rem',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '0.9rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', fontSize: '0.95rem' }}
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
