'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
}

export default function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '',
  hoverScale = 1.02,
  glowColor = 'emerald'
}: AnimatedCardProps) {
  const glowColors = {
    emerald: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    purple: 'hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]',
    yellow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    red: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        y: -10, 
        scale: hoverScale,
        transition: { duration: 0.3 }
      }}
      className={`
        bg-gradient-to-br from-gray-800/50 to-gray-900/50 
        backdrop-blur-xl border border-gray-700/50 rounded-2xl 
        transition-all duration-500 cursor-pointer
        ${glowColors[glowColor as keyof typeof glowColors]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}