import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { Cloud, Container, Repeat, BarChart3, Shield, GitBranch, Terminal } from 'lucide-react';

export function SkillsSection() {
  const skillGroups = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['AWS'],
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Containers & Orchestration',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Argo CD'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'CI/CD & Automation',
      icon: Repeat,
      skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'GitHub'],
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Observability & Monitoring',
      icon: BarChart3,
      skills: ['Prometheus', 'Grafana', 'Elasticsearch', 'Fluentd'],
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Security & DevSecOps',
      icon: Shield,
      skills: ['Trivy', 'SonarQube', 'HashiCorp Vault'],
      color: 'from-red-400 to-red-600',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab'],
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Scripting & OS',
      icon: Terminal,
      skills: ['Python', 'Bash', 'Linux'],
      color: 'from-teal-400 to-teal-600',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-6xl w-full">
        <MacOSWindow title="Technical Skills" showControls={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-5 rounded-xl transition-all duration-300 border border-white/30 dark:border-white/10 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-sm rounded-lg text-foreground/90 border border-white/40 dark:border-white/20 cursor-default"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}