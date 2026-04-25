"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map the scroll position for parallax
  // Background faint mandalas move very slowly
  const yBgMandalas = useTransform(scrollY, [0, 8000], [0, -200]);
  
  // Foreground corner mandalas move a bit faster to create depth
  const yFgMandalas = useTransform(scrollY, [0, 8000], [0, -600]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
         style={{ background: 'radial-gradient(circle at center, #fef08a 0%, #f59e0b 100%)' }}>
      
      {/* Layer 1: Background Faint Mandalas */}
      <motion.div style={{ y: yBgMandalas }} className="absolute inset-0 z-10 opacity-[0.15]">
        <MandalaSVG className="absolute top-[10%] left-[5%] w-[800px] h-[800px] text-yellow-700" />
        <MandalaSVG className="absolute top-[60%] right-[-10%] w-[1000px] h-[1000px] text-yellow-700" />
        <MandalaSVG className="absolute top-[120%] left-[20%] w-[600px] h-[600px] text-yellow-700" />
      </motion.div>

      {/* Layer 2: Foreground Corner Mandalas (Fixed at corners, repeating down) */}
      <motion.div style={{ y: yFgMandalas }} className="absolute inset-0 z-20">
        
        {/* Top Left */}
        <div className="absolute top-[-150px] left-[-150px] md:top-[-250px] md:left-[-250px]">
          <CornerMandalaSVG className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] drop-shadow-2xl" />
        </div>
        
        {/* Bottom Right of first screen */}
        <div className="absolute top-[80vh] right-[-150px] md:right-[-250px] transform rotate-180">
          <CornerMandalaSVG className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] drop-shadow-2xl" />
        </div>

        {/* Repeating down the scroll track */}
        <div className="absolute top-[200vh] left-[-150px] md:left-[-250px]">
          <CornerMandalaSVG className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] drop-shadow-2xl" />
        </div>
        
        <div className="absolute top-[320vh] right-[-150px] md:right-[-250px] transform rotate-180">
          <CornerMandalaSVG className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] drop-shadow-2xl" />
        </div>
        
        <div className="absolute top-[480vh] left-[-150px] md:left-[-250px]">
          <CornerMandalaSVG className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] drop-shadow-2xl" />
        </div>

      </motion.div>
    </div>
  );
}

// A full repeating mandala for the faint background
function MandalaSVG({ className }: { className?: string }) {
  const petals = Array.from({ length: 16 });
  return (
    <motion.svg 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      viewBox="-200 -200 400 400" 
      fill="currentColor" 
      className={className}
    >
      <circle cx="0" cy="0" r="30" />
      <circle cx="0" cy="0" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
      {petals.map((_, i) => (
        <g key={`inner-${i}`} transform={`rotate(${(i * 360) / 16})`}>
          <path d="M0 45 Q 20 80 0 120 Q -20 80 0 45 Z" />
        </g>
      ))}
      <circle cx="0" cy="0" r="130" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
      {petals.map((_, i) => (
        <g key={`outer-${i}`} transform={`rotate(${(i * 360) / 16 + 11.25})`}>
          <path d="M0 120 Q 30 160 0 200 Q -30 160 0 120 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="0" cy="215" r="5" />
        </g>
      ))}
    </motion.svg>
  );
}

// The intricate, vibrant corner mandala from the reference image
function CornerMandalaSVG({ className }: { className?: string }) {
  const petals = Array.from({ length: 16 });
  return (
    <motion.svg 
      animate={{ rotate: -360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      viewBox="-220 -220 440 440" 
      className={className}
    >
      
      {/* Outer pointed layer (Dark red/brown outline) */}
      {petals.map((_, i) => (
        <g key={`p1-${i}`} transform={`rotate(${(i * 360) / 16})`}>
          <path d="M0 120 L 40 190 L 0 220 L -40 190 Z" fill="var(--color-luxury-maroon)" />
          <path d="M0 130 L 25 180 L 0 200 L -25 180 Z" fill="var(--color-luxury-maroon-light)" />
          <path d="M0 145 L 12 170 L 0 185 L -12 170 Z" fill="var(--color-luxury-gold)" />
          {/* Small floating dots */}
          <circle cx="0" cy="235" r="5" fill="var(--color-luxury-maroon)" />
        </g>
      ))}
      
      {/* Middle rounded layer */}
      {petals.map((_, i) => (
        <g key={`p2-${i}`} transform={`rotate(${(i * 360) / 16 + 11.25})`}>
          <path d="M0 80 Q 40 130 0 180 Q -40 130 0 80 Z" fill="var(--color-luxury-gold)" stroke="var(--color-luxury-maroon)" strokeWidth="4" />
          <path d="M0 100 Q 20 130 0 160 Q -20 130 0 100 Z" fill="var(--color-luxury-gold-light)" />
          {/* Tiny dots inside */}
          <circle cx="0" cy="145" r="3" fill="var(--color-luxury-maroon)" />
        </g>
      ))}
      
      {/* Inner scalloped layer */}
      <circle cx="0" cy="0" r="90" fill="var(--color-luxury-maroon-light)" stroke="var(--color-luxury-maroon)" strokeWidth="5" />
      {petals.map((_, i) => (
        <g key={`p3-${i}`} transform={`rotate(${(i * 360) / 16})`}>
          <path d="M0 30 Q 20 60 0 85 Q -20 60 0 30 Z" fill="var(--color-luxury-gold-light)" stroke="var(--color-luxury-maroon)" strokeWidth="2" />
          <path d="M0 45 Q 10 60 0 70 Q -10 60 0 45 Z" fill="var(--color-luxury-gold)" />
        </g>
      ))}
      
      {/* Center core */}
      <circle cx="0" cy="0" r="35" fill="var(--color-luxury-gold)" stroke="var(--color-luxury-maroon)" strokeWidth="4" />
      <circle cx="0" cy="0" r="15" fill="var(--color-luxury-gold-light)" />
      <circle cx="0" cy="0" r="5" fill="var(--color-luxury-maroon)" />
      
      {/* Tiny decorative rings */}
      {Array.from({length: 32}).map((_, i) => (
         <circle key={`dot1-${i}`} cx={Math.sin((i * 360/32) * Math.PI / 180) * 110} cy={Math.cos((i * 360/32) * Math.PI / 180) * 110} r="3" fill="var(--color-luxury-maroon)" />
      ))}
    </motion.svg>
  );
}
