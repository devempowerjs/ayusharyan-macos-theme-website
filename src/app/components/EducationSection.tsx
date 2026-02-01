import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { GraduationCap, Calendar } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'GNIOT College, Greater Noida',
      period: '2023 – 2026',
      status: 'Completed',
    },
    {
      degree: 'Senior Secondary (12th Grade)',
      institution: 'Completed',
      period: '2023',
      status: 'Completed',
    },
    {
      degree: 'Secondary (10th Grade)',
      institution: 'Completed',
      period: '2021',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-4xl w-full">
        <MacOSWindow title="Education" showControls={true}>
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg bg-white/40 hover:bg-white/60 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{item.degree}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-700 text-xs">
                      {item.status}
                    </span>
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