'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Server, Trophy, Clock } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import ModernIcon from '@/components/ui/ModernIcon';

export default function Statistics() {
  const [counters, setCounters] = useState({
    players: 0,
    servers: 0,
    tournaments: 0,
    uptime: 0
  });

  const finalStats = {
    players: 2547,
    servers: 8,
    tournaments: 156,
    uptime: 99.8
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          players: Math.floor(finalStats.players * progress),
          servers: Math.floor(finalStats.servers * progress),
          tournaments: Math.floor(finalStats.tournaments * progress),
          uptime: Math.floor(finalStats.uptime * progress * 10) / 10
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalStats);
        }
      }, increment);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.players.toLocaleString(),
      label: 'Active Players',
      color: 'text-blue-400',
      glowColor: 'blue'
    },
    {
      icon: Server,
      value: counters.servers,
      label: 'Game Servers',
      color: 'text-green-400',
      glowColor: 'emerald'
    },
    {
      icon: Trophy,
      value: counters.tournaments,
      label: 'Tournaments Won',
      color: 'text-yellow-400',
      glowColor: 'yellow'
    },
    {
      icon: Clock,
      value: `${counters.uptime}%`,
      label: 'Server Uptime',
      color: 'text-emerald-400',
      glowColor: 'emerald'
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent mb-4">
            📊 Server Statistics 📊
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of players in our thriving Minecraft community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCard
              key={stat.label}
              delay={index * 0.1}
              glowColor={stat.glowColor}
              className="text-center p-8"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: `0 0 30px ${stat.color.replace('text-', 'rgba(').replace('-400', ', 0.4)')}`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ModernIcon 
                    icon={stat.icon} 
                    size="xl" 
                    color={stat.color}
                    variant="glow"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              >
                {stat.value}
              </motion.div>
              
              <p className="text-gray-300 text-lg font-medium">
                {stat.label}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/* Live Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <AnimatedCard glowColor="emerald" className="p-8 text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 text-emerald-400 text-lg font-semibold mb-4"
            >
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Live Statistics - Updated Every 30 Seconds</span>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </motion.div>
            <p className="text-gray-300">
              All statistics are updated in real-time to give you the most accurate 
              information about our server's current status and activity.
            </p>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  );
}