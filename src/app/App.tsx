import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { EducationSection } from '@/app/components/EducationSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { SoftSkillsSection } from '@/app/components/SoftSkillsSection';
import { LanguagesSection } from '@/app/components/LanguagesSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Dock } from '@/app/components/Dock';
import { Toaster } from 'sonner';

export default function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const formatted = istTime.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 transition-colors duration-500">
      {/* Toast Notifications */}
      <Toaster position="top-center" richColors />
      
      {/* macOS Menu Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 h-7 backdrop-blur-2xl bg-white/40 border-b border-white/30 z-40 flex items-center px-4 shadow-lg"
        style={{
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        }}
      >
        <motion.div 
          className="flex items-center gap-4 text-sm font-medium text-gray-700"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            <span>Ayush Aryan</span>
          </div>
        </motion.div>
        <motion.div 
          className="ml-auto text-xs text-gray-600"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {currentTime}
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="pt-7">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <SoftSkillsSection />
        <LanguagesSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pb-32 pt-8 text-center"
      >
        <motion.p 
          className="text-sm text-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Made with{' '}
          <motion.span
            className="inline-block text-red-500"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ❤️
          </motion.span>
          {' '}by Ayush Aryan
        </motion.p>
      </motion.footer>

      {/* macOS Dock */}
      <Dock />
    </div>
  );
}