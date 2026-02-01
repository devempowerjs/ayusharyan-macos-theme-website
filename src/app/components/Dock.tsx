import { motion } from 'motion/react';
import { Home, User, GraduationCap, Code, Briefcase, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { icon: Home, label: 'Home', section: 'hero' },
    { icon: User, label: 'About', section: 'about' },
    { icon: GraduationCap, label: 'Education', section: 'education' },
    { icon: Code, label: 'Skills', section: 'skills' },
    { icon: Briefcase, label: 'Projects', section: 'projects' },
    { icon: MessageSquare, label: 'Contact', section: 'contact' },
  ];

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-2"
    >
      <div
        className="flex items-end gap-1 md:gap-2 px-3 md:px-4 py-2.5 rounded-2xl border border-white/30 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          boxShadow: '0 20px 60px 0 rgba(31, 38, 135, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15) inset',
        }}
      >
        {/* Dock Items */}
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;
          const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : 0;
          const scale = isHovered ? 1.5 : distance === 1 ? 1.2 : distance === 2 ? 1.1 : 1;

          return (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.section)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale, y: isHovered ? -10 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative group"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              
              {/* Tooltip */}
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none"
                >
                  <div className="px-3 py-1.5 rounded-lg bg-gray-900/95 text-white text-xs font-medium whitespace-nowrap backdrop-blur-xl shadow-xl border border-white/20">
                    {item.label}
                  </div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}