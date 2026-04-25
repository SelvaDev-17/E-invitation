"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/content";
import { MapPin, Navigation, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Venue() {
  const { venueDetails } = siteData;
  // Use provided images or fallback to an array of placeholders to demonstrate the auto-changing space
  const images = venueDetails.images && venueDetails.images.length > 0 
    ? venueDetails.images 
    : ["placeholder-1", "placeholder-2", "placeholder-3"];
    
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-24 px-4 relative text-luxury-maroon">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-maroon mb-4">The Venue</h2>
          <div className="h-[1px] w-24 bg-luxury-maroon mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-md border border-luxury-maroon/20 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-xl"
        >
          {/* Image Slider Space */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto min-h-[400px] relative bg-luxury-maroon/5 border-b lg:border-b-0 lg:border-r border-luxury-maroon/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center flex-col gap-4"
              >
                {images[currentIndex].startsWith('placeholder') ? (
                  <>
                    <ImageIcon className="w-12 h-12 text-luxury-maroon/50" />
                    <p className="text-luxury-maroon/70 font-serif tracking-widest text-sm uppercase">
                      Venue Image Space {currentIndex + 1}
                    </p>
                  </>
                ) : (
                  <Image 
                    src={images[currentIndex]} 
                    alt={`Venue image ${currentIndex + 1}`} 
                    fill 
                    className="object-cover" 
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col items-center justify-center text-center">
            <MapPin className="w-12 h-12 text-luxury-maroon mb-6" />
            <h3 className="font-serif text-3xl text-luxury-maroon mb-4">{venueDetails.name}</h3>
            <p className="text-xl text-luxury-maroon/80 max-w-md mx-auto mb-10 leading-relaxed">
              {venueDetails.address}
            </p>
            
            <a 
              href={venueDetails.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-luxury-maroon hover:bg-luxury-maroon-light text-luxury-cream font-semibold tracking-widest uppercase py-4 px-8 rounded-none transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
