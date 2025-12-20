import React from "react";
import { motion } from "framer-motion";

// If image is in src/assets
import heroImage from "../../assets/about-hero.jpeg";
// OR if image is in public folder, comment above and use src="/about-hero.jpeg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image Wrapper */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[1800px] h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text On Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center">
              ABOUT&nbsp;US
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
