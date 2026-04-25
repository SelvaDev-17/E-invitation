"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";

export function Invitation() {
  return (
    <section className="py-24 px-4 text-center text-luxury-maroon relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-8 font-serif bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-luxury-maroon/20 shadow-xl"
      >
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-luxury-maroon drop-shadow-sm">
            {siteData.parents.father} <span className="font-light italic text-luxury-gold">&amp;</span> {siteData.parents.mother}
          </h3>
        </div>

        <div className="space-y-6 text-xl md:text-2xl text-luxury-maroon/80 font-serif leading-relaxed py-6 border-y border-luxury-maroon/10">
          <p>request the honour of your presence</p>
          <p>with your family and friends</p>
          <p>on the marriage occasion of their son</p>
        </div>
        
        <div className="pt-4 space-y-6">
          <h2 className="text-5xl md:text-7xl text-luxury-maroon drop-shadow-sm">{siteData.couple.groomFullName}</h2>
          <p className="text-3xl italic text-luxury-gold font-light">with</p>
          <h2 className="text-5xl md:text-7xl text-luxury-maroon drop-shadow-sm">{siteData.couple.brideFullName}</h2>
        </div>
      </motion.div>
    </section>
  );
}
