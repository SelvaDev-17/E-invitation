"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2
    }
  }
};

const cardVariants = (isEven: boolean) => ({
  hidden: { opacity: 0, x: isEven ? 80 : -80, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring", stiffness: 60, damping: 15 }
  }
});

// Animation for the central line
const lineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "100%", 
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

export function Story() {
  return (
    <section className="py-24 px-4 relative text-luxury-maroon overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-maroon mb-4">Our Journey</h2>
          <div className="h-[1px] w-24 bg-luxury-maroon mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Central Line Animated Reveal */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineVariants}
            className="absolute left-[29px] md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-transparent via-luxury-maroon to-transparent origin-top z-0"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 relative z-10"
          >
            {siteData.story.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  custom={isEven}
                  variants={cardVariants(isEven)}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    whileHover={{ scale: 1.3, boxShadow: "0 0 20px 5px rgba(234, 88, 12, 0.4)" }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-luxury-cream bg-luxury-maroon shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl transition-transform duration-300 cursor-pointer z-20" 
                  />
                  
                  {/* Card Content */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(234, 88, 12, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-xl border border-luxury-maroon/20 bg-white/70 backdrop-blur-md shadow-xl transition-colors duration-300"
                  >
                    <div className="flex flex-col mb-2">
                      <span className="font-serif text-xl text-luxury-maroon-light font-semibold tracking-wider">{item.year}</span>
                      <h3 className="font-serif text-2xl mb-1 text-luxury-maroon">{item.title}</h3>
                    </div>
                    <p className="text-luxury-maroon/80 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
