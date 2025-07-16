'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Play, Sparkles, Zap } from 'lucide-react';
import GlowButton from '@/components/ui/GlowButton';
import ModernIcon from '@/components/ui/ModernIcon';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.miniwon.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 40px rgba(16, 185, 129, 0.8)',
                  '0 0 20px rgba(16, 185, 129, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MINI
            </motion.span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              WON
            </span>
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ModernIcon icon={Sparkles} size="lg" variant="glow" />
            </motion.div>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            🎮 Join the ultimate Minecraft experience with custom game modes, 
            amazing community, and endless adventures awaiting you! ⚡
          </motion.p>

          {/* Server IP Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12"
          >
            <motion.p 
              className="text-gray-400 mb-4 flex items-center justify-center space-x-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ModernIcon icon={Zap} size="sm" color="text-emerald-400" />
              <span>Server IP:</span>
              <ModernIcon icon={Zap} size="sm" color="text-emerald-400" />
            </motion.p>
            <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
                }}
                className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-xl"
              >
                <code className="text-emerald-400 text-lg font-mono font-bold tracking-wider">
                  {serverIP}
                </code>
              </motion.div>
              <GlowButton
                size="md"
                onClick={copyToClipboard}
                className="p-4 rounded-xl"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </GlowButton>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <GlowButton size="lg" className="inline-flex items-center space-x-3">
              <ModernIcon icon={Play} size="md" color="text-white" />
              <span>Join Adventure</span>
              <ModernIcon icon={Sparkles} size="sm" color="text-white" />
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-emerald-400 rounded-full mt-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}