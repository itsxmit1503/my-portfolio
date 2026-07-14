"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("../ui/ThreeBackground"), { 
  ssr: false,
});

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  // Split kinetic headline for word-by-word animation
  const headline = "Building real-world web applications, communities, and digital experiences.";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-transparent">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-12 relative z-20">
        
        {/* Left Side: Content (60%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start w-full md:w-[60%] pointer-events-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 flex flex-col gap-1">
            <span className="text-[#C1FF72] text-xs font-bold tracking-[0.2em] uppercase">
              Full Stack Developer
            </span>
            <h1 className="text-xl font-medium text-white tracking-tight">Amit</h1>
          </motion.div>

          <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-[800] tracking-[-0.03em] leading-[0.95] text-white mb-8 flex flex-wrap gap-x-4 gap-y-2">
            {words.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={word.includes("web") || word.includes("applications") ? "text-[#C1FF72]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 max-w-xl text-balance leading-relaxed mb-12"
          >
            I enjoy transforming ideas into modern web applications that solve real problems. From real-time communication platforms to community-driven products, I focus on creating smooth, functional, and meaningful user experiences.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <MagneticButton intensity={0.2}>
              <a href="#contact" className="px-8 py-4 bg-[#C1FF72] text-black text-sm font-bold rounded-full hover:scale-105 transition-transform inline-block">
                Contact Me
              </a>
            </MagneticButton>
            
            <div className="flex items-center gap-3">
              <MagneticButton intensity={0.1}>
                <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C1FF72] hover:border-[#C1FF72] hover:text-black transition-colors text-white inline-flex group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </MagneticButton>
              <MagneticButton intensity={0.1}>
                <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C1FF72] hover:border-[#C1FF72] hover:text-black transition-colors text-white inline-flex group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Object (40%) */}
        <div className="w-full md:w-[40%] h-[400px] md:h-[600px] relative pointer-events-none">
          <ThreeBackground />
        </div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
