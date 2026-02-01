import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { Lightbulb, Target, Zap, Users, BookOpen, Eye } from 'lucide-react';

export function SoftSkillsSection() {
  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Analytical Thinking', icon: Target, color: 'from-blue-400 to-blue-600' },
    { name: 'Automation Mindset', icon: Zap, color: 'from-purple-400 to-purple-600' },
    { name: 'Team Collaboration', icon: Users, color: 'from-green-400 to-green-600' },
    { name: 'Continuous Learning', icon: BookOpen, color: 'from-pink-400 to-pink-600' },
    { name: 'Attention to Detail', icon: Eye, color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <section id="soft-skills" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-4xl w-full">
        <MacOSWindow title="Soft Skills" showControls={true}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-lg bg-white/40 dark:bg-black/20 hover:bg-white/60 dark:hover:bg-black/30 transition-all duration-200 border border-white/20 dark:border-white/10 flex flex-col items-center text-center gap-3 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}
