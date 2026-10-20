import React, { useEffect, lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

// Critical Above-the-Fold Components (Rendered immediately for fastest FCP/LCP)
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Deferred Non-Critical UI Components (Code-split to reduce main bundle)
const ScrollControls = lazy(() => import('./components/ScrollControls').then(m => ({ default: m.ScrollControls })));
const DotFieldCanvas = lazy(() => import('./components/DotFieldCanvas').then(m => ({ default: m.DotFieldCanvas })));

// Code-Split Below-the-Fold Components via React.lazy() to eliminate unused JavaScript
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

    let lenisInstance: any = null;
    let rafId: number;

    // Dynamically import Lenis to eliminate it from the initial critical rendering path
    import('lenis').then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        lerp: 0.09,
        syncTouch: false, // native touch scrolling left alone on mobile
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict={false}>
      <div className="min-h-screen bg-[#F9F9FA] text-[#111111] font-sans selection:bg-[#E03C1A]/20 selection:text-[#E03C1A] relative">
        {/* Deferred Floating Controls & Background Canvas */}
        <Suspense fallback={null}>
          <ScrollControls />
          <DotFieldCanvas />
        </Suspense>

        {/* Top Sticky Navbar */}
        <Navbar />

        {/* Hero Section - Pinned backdrop with preloaded high-priority WebP portrait */}
        <div className="relative lg:sticky lg:top-0 z-0 w-full min-h-screen">
          <Hero />
        </div>

        {/* Main Dossier Curtain - Overlaps the Hero cleanly on scroll */}
        <main className="relative z-10 bg-[#F9F9FA] shadow-[0_-25px_50px_rgba(0,0,0,0.06)] border-t border-gray-300">
          <Suspense fallback={<div className="min-h-[200px] bg-[#F9F9FA]" />}>
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
        <div className="relative z-10 bg-[#F9F9FA]">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
