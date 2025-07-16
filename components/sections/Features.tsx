'use client';

import { motion } from 'framer-motion';
import { Sword, Shield, Users, Trophy, Zap, Heart } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import ModernIcon from '@/components/ui/ModernIcon';

export default function Features() {
  const features = [
    {
      icon: Sword,
      title: 'PvP Arena',
      description: 'Test your skills in intense player vs player combat zones with custom weapons and abilities.',
      color: 'text-red-400',
      glowColor: 'red'
    },
    {
      icon: Shield,
      title: 'Survival Mode',
      description: 'Experience enhanced survival gameplay with custom mobs, biomes, and crafting recipes.',
      color: 'text-green-400',
      glowColor: 'emerald'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a friendly community of players, participate in events, and make lasting friendships.',
      color: 'text-blue-400',
      glowColor: 'blue'
    },
    {
      icon: Trophy,
      title: 'Tournaments',
      description: 'Compete in regular tournaments and challenges to earn exclusive rewards and recognition.',
      color: 'text-yellow-400',
      glowColor: 'yellow'
    },
    {
      icon: Zap,
      title: 'Custom Plugins',
      description: 'Enjoy unique gameplay mechanics with our custom-developed plugins and features.',
      color: 'text-purple-400',
      glowColor: 'purple'
    },
    {
      icon: Heart,
      title: 'Economy System',
      description: 'Trade, sell, and build your wealth in our balanced economy with shops and auctions.',
      color: 'text-pink-400',
      glowColor: 'purple'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent mb-4">
            ⚡ Server Features ⚡
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes MINIWON the ultimate Minecraft server experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              delay={index * 0.1}
              glowColor={feature.glowColor}
              className="p-8"
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0],
                    boxShadow: `0 0 30px ${feature.color.replace('text-', 'rgba(').replace('-400', ', 0.3)')}`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ModernIcon 
                    icon={feature.icon} 
                    size="xl" 
                    color={feature.color}
                    variant="glow"
                  />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-center">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <AnimatedCard glowColor="emerald" className="p-8 text-center">
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎯 And Much More!
            </motion.h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience custom enchantments, unique items, special events, leaderboards, 
              cross-server chat, and countless other features that make MINIWON stand out 
              from the crowd. Join today and discover everything we have to offer!
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              {[Sword, Shield, Trophy, Heart].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    x: [0, 10, 0, -10, 0],
                    y: [0, -5, 0, -3, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
              >
                  <ModernIcon 
                    icon={Icon} 
                    size="lg" 
                    color="text-emerald-400"
                    variant="glow"
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  );
}