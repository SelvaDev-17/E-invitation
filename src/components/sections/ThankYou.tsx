"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteData } from "@/data/content";

export function ThankYou() {
  return (
    <section className="py-32 px-4 relative flex items-center justify-center overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="bg-gradient-to-br from-luxury-maroon to-luxury-dark p-12 md:p-16 rounded-3xl border-2 border-luxury-gold shadow-2xl relative z-10 overflow-hidden"
        >
          {/* Decorative internal elements */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-luxury-gold) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-4 border border-luxury-gold/30 rounded-2xl pointer-events-none" />

          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-8 relative z-10"
          >
            <Heart className="w-14 h-14 text-luxury-gold fill-luxury-gold drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-cream mb-6 relative z-10 drop-shadow-sm leading-tight">Bless Our New Beginning</h2>
          <p className="text-luxury-cream/90 font-serif text-lg md:text-xl leading-relaxed mb-10 relative z-10 max-w-xl mx-auto">
            Your presence and heartfelt blessings are the greatest gifts we could ever ask for. We eagerly await to share the joy of this beautiful milestone with you and our families.
          </p>
          
          <div className="pt-8 relative z-10 flex flex-col items-center">
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mb-6" />
            <p className="tracking-[0.3em] uppercase text-sm text-luxury-gold font-semibold mb-3">With Love</p>
            <p className="font-serif text-4xl md:text-5xl text-luxury-cream tracking-wide">
              {siteData.couple.bride} <span className="text-luxury-gold font-light italic text-3xl md:text-4xl mx-2">&amp;</span> {siteData.couple.groom}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
