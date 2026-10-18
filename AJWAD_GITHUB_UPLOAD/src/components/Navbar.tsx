import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { id: 'about', name: 'About', href: '#about' },
    { id: 'experience', name: 'Experience', href: '#experience' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'credentials', name: 'Credentials', href: '#credentials' },
    { id: 'volunteering', name: 'Volunteering', href: '#volunteering' },
  ];

  // Scroll tracking to dynamically snap the active indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // navbar clearance offset

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            return;
          }
        }
      }

      // Default to first link if above all sections
      if (window.scrollY < 300) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const yOffset = -72; // fixed nav height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F9F9FA] border-b border-gray-300 rounded-none select-none">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left: AA Logo in ultra-bold, black geometric sans-serif */}
        <a 
          href="#" 
          aria-label="Ajwad Abdulla Alavi, home"
          className="font-sans text-2xl sm:text-3xl font-black tracking-tighter text-[#111111] hover:text-[#E03C1A] transition-colors py-1 rounded-none"
        >
          AA
        </a>

        {/* Center: The Links with the "HaloNav" Framer Motion Glide Effect */}
        <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id, link.href)}
                className={`relative py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                  isActive ? 'text-[#111111]' : 'text-gray-600 hover:text-[#111111]'
                }`}
              >
                {link.name}

                {/* The "HaloNav" Gliding Line Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E03C1A]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: The "Contact" CTA Button as a sharp red-orange rectangle */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact', '#contact')}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-none bg-[#E03C1A] hover:bg-[#c53214] text-white transition-colors min-h-[42px] flex items-center justify-center shadow-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] hover:text-[#E03C1A] focus:outline-none rounded-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer (Strict Brutalist Styling) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-300 bg-[#F9F9FA] px-6 py-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id, link.href)}
                  className={`text-xs font-bold uppercase tracking-widest py-3 border-b border-gray-200 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#111111]' : 'text-gray-600 hover:text-[#111111]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 bg-[#E03C1A]" />}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact', '#contact')}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none bg-[#E03C1A] hover:bg-[#c53214] text-white transition-colors shadow-sm"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
