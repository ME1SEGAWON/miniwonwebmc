'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Server, Users, Clock, Wifi, Activity, Zap } from 'lucide-react';

export default function LiveStatus() {
  const [serverData, setServerData] = useState({
    online: true,
    players: 0,
    maxPlayers: 1000,
    ping: 0,
    uptime: '99.8%',
    tps: 20.0,
    version: '1.20.1'
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate live server data updates
  useEffect(() => {
    const updateServerData = () => {
      setServerData(prev => ({
        ...prev,
        players: Math.floor(Math.random() * 200) + 150, // 150-350 players
        ping: Math.floor(Math.random() * 50) + 10, // 10-60ms ping
        tps: Math.floor((Math.random() * 0.5 + 19.5) * 10) / 10 // 19.5-20.0 TPS
      }));
    };

    // Initial load
    setTimeout(() => {
      setIsLoading(false);
      updateServerData();
    }, 1000);

    // Update every 5 seconds
    const interval = setInterval(updateServerData, 5000);
    return () => clearInterval(interval);
  }, []);

  const statusItems = [
    {
      icon: Server,
      label: 'Server Status',
      value: serverData.online ? 'Online' : 'Offline',
      color: serverData.online ? 'text-green-400' : 'text-red-400',
      bgColor: serverData.online ? 'bg-green-500/10' : 'bg-red-500/10'
    },
    {
      icon: Users,
      label: 'Players Online',
      value: `${serverData.players}/${serverData.maxPlayers}`,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Wifi,
      label: 'Ping',
      value: `${serverData.ping}ms`,
      color: serverData.ping < 50 ? 'text-green-400' : serverData.ping < 100 ? 'text-yellow-400' : 'text-red-400',
      bgColor: serverData.ping < 50 ? 'bg-green-500/10' : serverData.ping < 100 ? 'bg-yellow-500/10' : 'bg-red-500/10'
    },
    {
      icon: Clock,
      label: 'Uptime',
      value: serverData.uptime,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Activity,
      label: 'TPS',
      value: serverData.tps.toFixed(1),
      color: serverData.tps >= 19.5 ? 'text-green-400' : serverData.tps >= 18 ? 'text-yellow-400' : 'text-red-400',
      bgColor: serverData.tps >= 19.5 ? 'bg-green-500/10' : serverData.tps >= 18 ? 'bg-yellow-500/10' : 'bg-red-500/10'
    },
    {
      icon: Zap,
      label: 'Version',
      value: serverData.version,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const playerActivity = [
    { time: '2 min ago', player: 'Steve_Builder', action: 'joined the server', color: 'text-green-400' },
    { time: '5 min ago', player: 'Alex_Warrior', action: 'completed a quest', color: 'text-blue-400' },
    { time: '8 min ago', player: 'Creeper_Hunter', action: 'won a PvP match', color: 'text-yellow-400' },
    { time: '12 min ago', player: 'Diamond_Miner', action: 'found rare ore', color: 'text-purple-400' },
    { time: '15 min ago', player: 'Redstone_Master', action: 'built a contraption', color: 'text-red-400' }
  ];

  return (
    <section id="status" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Server Status
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time information about our Minecraft server performance and activity
          </p>
        </motion.div>

        {/* Server Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statusItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: `0 0 30px ${item.color.replace('text-', 'rgba(').replace('-400', ', 0.4)')}`
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center relative overflow-hidden group`}
                >
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 0.6,
                      times: [0, 0.2, 0.4, 0.6, 1]
                    }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    
                    {/* Cracking overlay effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Crack lines */}
                      <motion.div
                        className="absolute top-2 left-3 w-4 h-0.5 bg-white/30 rotate-45"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute top-4 right-2 w-3 h-0.5 bg-white/30 -rotate-45"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute bottom-3 left-2 w-5 h-0.5 bg-white/30 rotate-12"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute bottom-2 right-3 w-3 h-0.5 bg-white/30 -rotate-12"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white/30 rotate-90 -translate-x-1/2 -translate-y-1/2"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ delay: 0.5, duration: 0.2 }}
                      />
                    </motion.div>
                    
                    {/* Particle effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/40 rounded-full"
                          style={{
                            top: `${20 + i * 10}%`,
                            left: `${15 + i * 12}%`,
                          }}
                          initial={{ 
                            scale: 0,
                            x: 0,
                            y: 0,
                            opacity: 0
                          }}
                          whileHover={{
                            scale: [0, 1, 0],
                            x: [0, (i % 2 ? 10 : -10)],
                            y: [0, (i % 3 ? -15 : 15)],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            delay: 0.3 + i * 0.1,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <div className="flex-1">
                  <p className="text-gray-300 text-sm mb-1">{item.label}</p>
                  <motion.p
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-2xl font-bold ${item.color}`}
                  >
                    {isLoading ? '...' : item.value}
                  </motion.p>
                </div>

                {/* Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-3 h-3 rounded-full ${
                    item.label === 'Server Status' 
                      ? serverData.online ? 'bg-green-400' : 'bg-red-400'
                      : 'bg-emerald-400'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Player Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Activity className="w-6 h-6 text-emerald-400" />
              <span>Recent Activity</span>
            </h3>
            
            <div className="space-y-4">
              {playerActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors duration-200"
                >
                  <div className="text-gray-400 text-sm min-w-[80px]">
                    {activity.time}
                  </div>
                  <div className={`font-semibold ${activity.color}`}>
                    {activity.player}
                  </div>
                  <div className="text-gray-300">
                    {activity.action}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Server Performance (Last 24 Hours)
            </h3>
            
            {/* Simulated Performance Bars */}
            <div className="grid grid-cols-12 gap-2 h-32 items-end">
              {Array.from({ length: 24 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm"
                />
              ))}
            </div>
            
            <div className="flex justify-between text-gray-400 text-sm mt-4">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}