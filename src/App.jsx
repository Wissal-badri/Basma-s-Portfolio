import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceAndTestimonials from './components/ExperienceAndTestimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app-layout" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <ExperienceAndTestimonials />
        <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
