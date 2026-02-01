import { motion } from 'motion/react';
import { MacOSWindow } from './MacOSWindow';
import { Mail, Linkedin, Github, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aayushjha2014@gmail.com',
      link: 'mailto:aayushjha2014@gmail.com',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ayush-aryan-7b5578294',
      link: 'https://www.linkedin.com/in/ayush-aryan-7b5578294',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ayusharyan28',
      link: 'https://github.com/ayusharyan28',
      color: 'from-gray-400 to-gray-600',
    },
  ];

  const copyEmail = async () => {
    const email = 'aayushjha2014@gmail.com';
    
    // Use the more reliable fallback method first
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
      } else {
        toast.error('Failed to copy email');
      }
    } catch (err) {
      document.body.removeChild(textArea);
      console.error('Failed to copy:', err);
      toast.error('Failed to copy email');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-3xl w-full">
        <MacOSWindow title="Contact Me" showControls={true}>
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Let's Connect</h2>
              <p className="text-foreground/70">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/40 hover:bg-white/60 transition-all duration-200 border border-white/20 group"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{contact.label}</p>
                      <p className="font-medium text-gray-800">{contact.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Copy Email Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <button
                onClick={copyEmail}
                className="w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}