import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import profileImage from '../../mypic.png';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* macOS Desktop Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Profile Card */}
      <MacOSWindow className="max-w-2xl w-full" showControls={true}>
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/60 shadow-2xl">
              <motion.img
                src={profileImage}
                alt="Ayush Aryan"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-2"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold text-foreground"
              whileHover={{ scale: 1.02 }}
            >
              Ayush Aryan
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              DevOps Engineer | Cloud & Automation Specialist
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-base md:text-lg text-foreground/70 max-w-lg"
          >
            Designing, automating, and scaling reliable cloud-native systems
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-2xl backdrop-blur-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
              }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-2xl border border-white/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(20px) saturate(150%)',
                WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </MacOSWindow>
    </section>
  );
}
