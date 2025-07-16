'use client';

import { motion } from 'framer-motion';
import { Cuboid as Cube, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Discord', url: '#', icon: '🎮' },
    { name: 'YouTube', url: '#', icon: '📺' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Instagram', url: '#', icon: '📸' }
  ];

  const quickLinks = [
    { name: 'Vote for Server', url: '#status' },
    { name: 'Server Status', url: '#status' },
    { name: 'Ban Appeals', url: '#' },
    { name: 'How to Join', url: '#join' }
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Cube className="w-8 h-8 text-emerald-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">MINIWON</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join the ultimate Minecraft server experience with thousands of players, 
              custom game modes, and an amazing community. Your adventure starts here!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 inline-flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Server Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Server Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Version: 1.20.1</p>
              <p>Location: US East</p>
              <p>Max Players: 1000</p>
              <p className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Online</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 MINIWON. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400" />
            </motion.div>
            <span>for the Minecraft community</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}