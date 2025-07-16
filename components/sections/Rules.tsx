'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Heart, AlertTriangle, Ban, Info } from 'lucide-react';

export default function Rules() {
  const rules = [
    {
      icon: Shield,
      title: 'No Griefing',
      description: 'Respect other players\' builds and creations. Griefing results in immediate ban.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Users,
      title: 'Be Respectful',
      description: 'Treat all players with kindness and respect. Harassment will not be tolerated.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Heart,
      title: 'Help Others',
      description: 'Support new players and contribute to a positive community atmosphere.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: AlertTriangle,
      title: 'No Cheating',
      description: 'Use of hacks, exploits, or unauthorized mods will result in permanent ban.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Ban,
      title: 'No Spam',
      description: 'Avoid chat spam, advertising, or repetitive messages in any form.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Info,
      title: 'Follow Staff',
      description: 'Listen to staff members and follow their instructions at all times.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    }
  ];

  return (
    <section id="rules" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server Rules
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple rules to ensure everyone has a great experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 ${rule.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <rule.icon className={`w-8 h-8 ${rule.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {rule.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-300 mb-4">
              If you have questions about the rules or need assistance, don't hesitate to contact our staff members. 
              They're here to help make your experience enjoyable!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Staff
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}