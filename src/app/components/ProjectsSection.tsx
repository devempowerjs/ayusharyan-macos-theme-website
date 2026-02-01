import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      name: 'JarvisAI',
      description: 'AI-based automation assistant project that leverages machine learning to provide intelligent task automation and natural language processing capabilities.',
      github: 'https://github.com/ayusharyan28/JarvisAI',
      tags: ['AI', 'Automation', 'Python'],
    },
    {
      name: 'SnakeGame',
      description: 'Classic snake game built with clean logic and modern programming principles. Features smooth gameplay, score tracking, and responsive controls.',
      github: 'https://github.com/ayusharyan28/SnakeGame',
      tags: ['Game', 'Logic', 'Development'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-5xl w-full">
        <MacOSWindow title="Projects" showControls={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                {/* macOS App Window Style */}
                <div 
                  className="rounded-xl overflow-hidden border border-white/40 dark:border-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  }}
                >
                  {/* Window Controls */}
                  <div 
                    className="flex items-center gap-2 px-4 py-3 border-b border-white/30 dark:border-white/10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#ff5f57]"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#febc2e]"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#28c840]"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.name}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + tagIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-xs rounded-full text-blue-700 dark:text-blue-300 border border-blue-500/40 dark:border-blue-400/40"
                          style={{
                            background: 'rgba(59, 130, 246, 0.2)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.div>
                      <span className="text-sm font-medium">View on GitHub</span>
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}