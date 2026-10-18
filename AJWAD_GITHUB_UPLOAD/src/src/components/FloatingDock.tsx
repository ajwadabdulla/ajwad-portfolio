import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Download } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const FloatingDock: React.FC = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scrolling down past 220px, become compact
      // When scrolling up, bounce open into full expanded view
      if (currentScrollY > 220 && currentScrollY > lastScrollY) {
        setIsCompact(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
        setIsCompact(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dockLinks = [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:ajwadabdulla42@gmail.com',
      icon: <Mail className="w-4 h-4 text-[#111111]" />,
      isExternal: false,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/97333831233',
      icon: <MessageSquare className="w-4 h-4 text-[#111111]" />,
      isExternal: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ajwadabdulla',
      icon: <LinkedInIcon className="w-4 h-4 text-[#111111]" />,
      isExternal: true,
    },
    {
      id: 'cv',
      label: 'Download CV',
      href: '/Ajwad_Abdulla_Alavi_CV.pdf',
      download: 'Ajwad_Abdulla_Alavi_CV.pdf',
      icon: <Download className="w-4 h-4 text-white" />,
      isExternal: false,
    },
  ];

  return (
    <motion.aside
      layout
      transition={{ type: 'spring', stiffness: 420, damping: 25 }}
      aria-label="Quick contact dock"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 pointer-events-auto select-none"
    >
      <motion.nav 
        layout
        transition={{ type: 'spring', stiffness: 420, damping: 25 }}
        className={`flex items-center gap-2 p-1.5 rounded-none bg-white/95 border border-neutral-300 shadow-2xl backdrop-blur-md transition-shadow ${
          isCompact ? 'px-2 py-1.5' : 'px-3 py-2'
        }`}
      >
        {dockLinks.map((link) => (
          <div key={link.id} className="relative flex items-center justify-center">
            
            {/* Tooltip Label with Bouncy Spring Pop */}
            <AnimatePresence>
              {activeTooltip === link.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                  className="absolute -top-11 px-2.5 py-1 rounded-none bg-[#111111] text-white text-[11px] font-mono border border-neutral-800 shadow-lg whitespace-nowrap pointer-events-none"
                  role="tooltip"
                >
                  {link.label}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              layout
              href={link.href}
              download={link.download}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setActiveTooltip(link.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onFocus={() => setActiveTooltip(link.id)}
              onBlur={() => setActiveTooltip(null)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              aria-label={link.label}
              className={`flex items-center justify-center gap-2 min-w-[44px] min-h-[44px] px-3 rounded-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E03C1A] ${
                link.id === 'cv' 
                  ? 'bg-[#E03C1A] hover:bg-[#c53214] text-white' 
                  : 'hover:bg-neutral-100 text-[#111111]'
              }`}
            >
              <span className="flex-shrink-0">{link.icon}</span>

              {/* Text label: smoothly expands when scrolling up, collapses on scroll down */}
              <AnimatePresence>
                {!isCompact && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 25 }}
                    className="text-xs font-sans font-bold uppercase tracking-wider overflow-hidden whitespace-nowrap"
                  >
                    {link.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>
          </div>
        ))}
      </motion.nav>
    </motion.aside>
  );
};

export default FloatingDock;
