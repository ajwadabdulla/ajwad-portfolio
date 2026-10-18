import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { AboutSection } from './components/AboutSection';
import { ExperienceAndProjects } from './components/ExperienceAndProjects';
import { CredentialsAndSkills } from './components/CredentialsAndSkills';
import { VolunteeringSection } from './components/VolunteeringSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollControls } from './components/ScrollControls';
import { ScrollBlurOverlay } from './components/ScrollBlurOverlay';
import { DotFieldCanvas } from './components/DotFieldCanvas';

export const App: React.FC = () => {
  useEffect(() => {
    // Check prefers-reduced-motion: if enabled, disable Lenis completely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.09,
      syncTouch: false, // native touch scrolling left alone on mobile
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9FA] text-[#111111] font-sans selection:bg-[#E03C1A]/20 selection:text-[#E03C1A] relative">
      {/* 1. Scroll Progress Bar (Top Edge) & Back to Top Button */}
      <ScrollControls />

      {/* Dynamic Scroll Blur Overlay (z-40) */}
      <ScrollBlurOverlay />

      {/* Background dot field canvas */}
      <DotFieldCanvas />

      {/* Top Sticky Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Sideways Ticker */}
        <Ticker />

        {/* About Section */}
        <AboutSection />

        {/* Experience & Projects */}
        <ExperienceAndProjects />

        {/* Credentials & Skills */}
        <CredentialsAndSkills />

        {/* Volunteering */}
        <VolunteeringSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
