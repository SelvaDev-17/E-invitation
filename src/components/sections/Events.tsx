"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { MapPin, Clock, Calendar } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export function Events() {
  return (
    <section className="py-24 px-4 text-luxury-maroon relative overflow-hidden perspective-1000">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-luxury-maroon) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-maroon mb-4">Wedding Events</h2>
          <div className="h-[1px] w-24 bg-luxury-maroon mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {siteData.events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25)",
                borderColor: "rgba(234, 88, 12, 0.5)"
              }}
              className="bg-white/60 border border-luxury-maroon/20 p-8 flex flex-col h-full rounded-tr-3xl rounded-bl-3xl transition-colors backdrop-blur-md relative overflow-hidden group shadow-lg"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-maroon/0 via-luxury-maroon/0 to-luxury-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="font-serif text-3xl mb-6 text-luxury-maroon relative z-10">{event.title}</h3>
              
              <div className="space-y-4 mb-8 flex-grow relative z-10">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-luxury-maroon-light mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-luxury-maroon-light mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>{event.time}</span>
                </div>
              </div>
              
              <p className="text-luxury-maroon/80 italic font-serif border-t border-luxury-maroon/20 pt-4 relative z-10 group-hover:text-luxury-maroon transition-colors duration-300">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
