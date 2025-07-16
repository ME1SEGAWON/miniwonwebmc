'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Statistics from '@/components/sections/Statistics';
import Gallery from '@/components/sections/Gallery';
import LiveStatus from '@/components/sections/LiveStatus';
import JoinInstructions from '@/components/sections/JoinInstructions';
import Rules from '@/components/sections/Rules';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Statistics />
        <Gallery />
        <LiveStatus />
        <JoinInstructions />
        <Rules />
        <Footer />
      </div>
    </main>
  );
}