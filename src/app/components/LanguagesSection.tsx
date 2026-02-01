import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { Globe } from 'lucide-react';

export function LanguagesSection() {
  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Hindi', level: 'Fluent', percentage: 95 },
  ];

  return (
    <section id="languages" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-3xl w-full">
        <MacOSWindow title="Languages" showControls={true}>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{lang.name}</h3>
                      <p className="text-sm text-foreground/70">{lang.level}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/70">{lang.percentage}%</span>
                </div>
                <div className="h-2 bg-white/40 dark:bg-black/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}
