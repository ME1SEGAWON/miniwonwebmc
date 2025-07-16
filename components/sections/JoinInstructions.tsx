'use client';

import { motion } from 'framer-motion';
import { Download, Server, Play, Users, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function JoinInstructions() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const serverIP = 'play.miniwon.com';

  const copyToClipboard = async (text: string, stepIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const steps = [
    {
      icon: Download,
      title: 'Download Minecraft',
      description: 'Make sure you have Minecraft Java Edition installed on your computer.',
      action: 'Get Minecraft',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Server,
      title: 'Add Server',
      description: 'Open Minecraft, go to Multiplayer, and click "Add Server".',
      action: 'Open Multiplayer',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Copy,
      title: 'Enter Server IP',
      description: `Copy our server IP: ${serverIP} and paste it in the server address field.`,
      action: serverIP,
      copyable: true,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Play,
      title: 'Join & Play',
      description: 'Click "Done" to save the server, then double-click to join and start playing!',
      action: 'Start Playing',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const requirements = [
    { label: 'Minecraft Version', value: '1.20.1 or higher' },
    { label: 'Java Edition', value: 'Required' },
    { label: 'Mods', value: 'Vanilla (No mods needed)' },
    { label: 'Connection', value: 'Stable internet required' }
  ];

  return (
    <section id="join" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Join
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to join the MINIWON community and start your adventure
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 ${step.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {step.description}
              </p>

              {step.copyable ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(serverIP, index)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {copiedStep === index ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy IP</span>
                    </>
                  )}
                </motion.button>
              ) : (
                <div className="text-emerald-400 font-semibold text-center">
                  {step.action}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              System Requirements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg"
                >
                  <span className="text-gray-300">{req.label}:</span>
                  <span className="text-emerald-400 font-semibold">{req.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-300 mb-4">
              Having trouble connecting? Our friendly community and staff are here to help! 
              Join our Discord server for instant support and to connect with other players.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>🎮</span>
              <span>Join Discord</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}