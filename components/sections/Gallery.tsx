'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      url: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Epic Castle Build',
      description: 'Amazing medieval castle built by our community'
    },
    {
      url: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'PvP Arena',
      description: 'Intense battles in our custom PvP arena'
    },
    {
      url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Survival Base',
      description: 'Stunning survival builds in the wilderness'
    },
    {
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Community Event',
      description: 'Players gathering for a special event'
    },
    {
      url: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Modern City',
      description: 'Futuristic city built by our builders'
    },
    {
      url: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Adventure Map',
      description: 'Custom adventure map for exploration'
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore amazing builds and moments from our Minecraft community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {screenshot.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Screenshot Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
            <img
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-gray-200">
                {screenshots[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[selectedImage].url}
              alt={screenshots[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                {screenshots[selectedImage].title}
              </h3>
              <p className="text-gray-200">
                {screenshots[selectedImage].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}