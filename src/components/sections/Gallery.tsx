"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easing for premium feel
  }
};

export function Gallery() {
  const images = [
    { id: 1, src: "/E-invitation/gallery/couple1.jpg", alt: "Couple photo 1", className: "col-span-2 row-span-2" },
    { id: 2, src: "/E-invitation/gallery/couple2.jpg", alt: "Couple photo 2", className: "col-span-1 row-span-1" },
    { id: 3, src: "/E-invitation/gallery/couple3.jpg", alt: "Couple photo 3", className: "col-span-1 row-span-2" },
    { id: 4, src: "/E-invitation/gallery/couple4.jpg", alt: "Couple photo 4", className: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-24 px-4 relative text-luxury-maroon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-maroon mb-4">Capturing Moments</h2>
          <div className="h-[1px] w-24 bg-luxury-maroon mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] bg-white/50 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-luxury-maroon/20 shadow-2xl"
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ scale: 0.97, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`relative overflow-hidden rounded-xl bg-luxury-maroon/10 cursor-pointer shadow-md ${img.className}`}
            >
              <div className="absolute inset-0 bg-luxury-maroon/5 flex items-center justify-center text-luxury-maroon/50 font-serif z-0">
                Photo {img.id}
              </div>

              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110 z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
