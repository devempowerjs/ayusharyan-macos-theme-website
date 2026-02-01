import { motion } from 'motion/react';
import { X, Minus, Maximize2 } from 'lucide-react';

interface MacOSWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
}
 
export function MacOSWindow({ title, children, className = '', showControls = true }: MacOSWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01 }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'var(--window-bg, rgba(255, 255, 255, 0.8))',
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        border: '1px solid var(--window-border, rgba(255, 255, 255, 0.3))',
        boxShadow: '0 20px 60px 0 rgba(31, 38, 135, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
      }}
    >
      {/* Window Title Bar */}
      {showControls && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/30 bg-white/40 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors cursor-pointer" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors cursor-pointer" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors cursor-pointer" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          {title && (
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.div>
          )}
        </div>
      )}
      
      {/* Window Content */}
      <div className="p-6 text-gray-800">
        {children}
      </div>
    </motion.div>
  );
}