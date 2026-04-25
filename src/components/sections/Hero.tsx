"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-luxury-maroon">
      {/* Abstract elegant shapes / mandalas could go here */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-[600px] h-[600px] border border-luxury-maroon rounded-full z-0 pointer-events-none"
      />

      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-semibold text-white drop-shadow-[0_2px_4px_rgba(69,26,3,0.8)] md:text-luxury-maroon md:drop-shadow-none"
        >
          {siteData.hero.subtitle}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-4 drop-shadow-sm"
        >
          <span className="block">{siteData.couple.bride}</span>
          <span className="block text-4xl md:text-6xl my-4 text-luxury-maroon-light italic font-light">&amp;</span>
          <span className="block">{siteData.couple.groom}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-luxury-maroon-light" />
          <p className="tracking-[0.2em] font-serif text-xl font-medium">{siteData.hero.dateLocal}</p>
          <div className="h-[1px] w-12 bg-luxury-maroon-light" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 z-10 flex flex-col items-center"
      >
        <span className="text-xs tracking-widest uppercase mb-2 opacity-80">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-luxury-maroon" />
        </motion.div>
      </motion.div>
    </section>
  );
}
