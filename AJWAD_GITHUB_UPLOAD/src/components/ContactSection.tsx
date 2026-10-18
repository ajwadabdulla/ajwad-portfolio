import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Download } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const iconButtons = [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:ajwadabdulla42@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      isExternal: false,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/97333831233',
      icon: <MessageSquare className="w-4 h-4" />,
      isExternal: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ajwadabdulla',
      icon: <LinkedInIcon className="w-4 h-4" />,
      isExternal: true,
    },
    {
      id: 'cv',
      label: 'CV',
      href: '/Ajwad_Abdulla_Alavi_CV.pdf',
      download: 'Ajwad_Abdulla_Alavi_CV.pdf',
      icon: <Download className="w-4 h-4" />,
      isExternal: false,
    },
  ];

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="contact" 
      className="min-h-[45vh] py-24 md:py-36 border-b border-neutral-200 bg-[#F9F9FA] text-[#111111] flex flex-col justify-center"
    >
      <div className="max-w-[1180px] w-full mx-auto px-6 sm:px-8 lg:px-12 text-left">
        
        {/* Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-widest text-[#C83415] font-bold block mb-3"
        >
          06 &mdash; Get in Touch
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight mb-4"
        >
          Let&apos;s Connect.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-12 max-w-xl"
        >
          Whether it&apos;s an opportunity or quick chat &mdash; my inbox is open.
        </motion.p>

        {/* Staggered row of four contact buttons */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          {iconButtons.map((btn) => (
            <motion.a
              key={btn.id}
              variants={buttonItemVariants}
              href={btn.href}
              download={btn.download}
              target={btn.isExternal ? '_blank' : undefined}
              rel={btn.isExternal ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2.5 px-6 py-3 min-h-[48px] rounded-none border border-neutral-300 bg-white text-[#111111] hover:bg-[#E03C1A] hover:text-white hover:border-[#E03C1A] transition-all duration-200 shadow-sm"
              aria-label={btn.label}
            >
              <span className="text-[#C83415] group-hover:text-white transition-colors">
                {btn.icon}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                {btn.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
