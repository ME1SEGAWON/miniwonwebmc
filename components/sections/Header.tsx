'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cuboid as Cube, Sparkles } from 'lucide-react';
import ModernIcon from '@/components/ui/ModernIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Stats', href: '#statistics' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Status', href: '#status' },
    { label: 'Join', href: '#join' },
    { label: 'Rules', href: '#rules' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border-b border-gray-700/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))'
            }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ 
                rotate: 0,
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <ModernIcon 
                icon={Cube} 
                size="lg" 
                color="text-emerald-400"
                variant="glow"
              />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ModernIcon 
                  icon={Sparkles} 
                  size="sm" 
                  color="text-yellow-400"
                />
              </motion.div>
            </motion.div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
              MINIWON
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  color: '#10b981',
                  textShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                }}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium relative"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(16, 185, 129, 0.1)'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
        >
          <div className="py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}