import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';

// Critical Above-the-Fold Components (Bundled immediately for instant First Contentful Paint)
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollControls } from './components/ScrollControls';
import { DotFieldCanvas } from './components/DotFieldCanvas';
import { ScrollBlurOverlay } from './components/ScrollBlurOverlay';

// Code-Split Below-the-Fold Components via React.lazy() to reduce initial JS payload
const Ticker = lazy(() => import('./components/Ticker'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ExperienceAndProjects = lazy(() => import('./components/ExperienceAndProjects'));
const CredentialsAndSkills = lazy(() => import('./components/CredentialsAndSkills'));
const VolunteeringSection = lazy(() => import('./components/VolunteeringSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

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

      {/* Background dot field canvas */}
      <DotFieldCanvas />

      {/* Dynamic Scroll Blur Overlay (Framer Motion) */}
      <ScrollBlurOverlay />

      {/* Top Sticky Navbar */}
      <Navbar />

      {/* Hero Section - Sticky pinned backdrop with crystal-clear portrait */}
      <div className="relative lg:sticky lg:top-0 z-0 w-full min-h-screen">
        <Hero />
      </div>

      {/* Main Dossier Curtain - Overlaps the Hero cleanly on scroll */}
      <main className="relative z-20 bg-[#F9F9FA] shadow-[0_-25px_50px_rgba(0,0,0,0.06)] border-t border-gray-300">
        <Suspense fallback={<div className="min-h-[160px] bg-[#F9F9FA]" />}>
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
        </Suspense>
      </main>

      {/* Footer */}
      <div className="relative z-20 bg-[#F9F9FA]">
        <Suspense fallback={<div className="h-24 bg-[#F9F9FA]" />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
