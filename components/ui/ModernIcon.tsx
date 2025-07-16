'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ModernIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'glow' | 'pulse';
  color?: string;
  className?: string;
}

export default function ModernIcon({ 
  icon: Icon, 
  size = 'md', 
  variant = 'default',
  color = 'text-emerald-400',
  className = ''
}: ModernIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variants = {
    default: '',
    gradient: 'bg-gradient-to-br from-emerald-400 to-blue-500 bg-clip-text text-transparent',
    glow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]',
    pulse: 'animate-pulse'
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.1, 
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Icon 
        className={`${sizeClasses[size]} ${color} ${variants[variant]} transition-all duration-300`}
      />
    </motion.div>
  );
}