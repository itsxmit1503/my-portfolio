"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

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
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start relative z-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-xl font-semibold text-white">Amit</h1>
            <p className="text-sm text-neutral-400">Full Stack Developer</p>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-medium tracking-tight text-balance leading-[1.1] text-white mb-8"
          >
            Building real-world <span className="text-neutral-500">web applications</span>, communities, and digital experiences.
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 max-w-xl text-balance leading-relaxed mb-12"
          >
            I enjoy transforming ideas into modern web applications that solve real problems. From real-time communication platforms to community-driven products, I focus on creating smooth, functional, and meaningful user experiences.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton intensity={0.2}>
              <a href="#contact" className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                Contact Me
              </a>
            </MagneticButton>
            
            <MagneticButton intensity={0.2}>
              <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-transparent text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                Resume
              </a>
            </MagneticButton>
            
            <div className="flex items-center gap-2 ml-2">
              <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-neutral-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-neutral-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Integration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end pointer-events-none"
        >
          {/* Depth Glows */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-[100px]" />
          
          {/* Portrait Image with heavy radial & linear gradient masking to dissolve hard edges into the dark background */}
          <div 
            className="relative w-[120%] lg:w-[140%] h-full right-0 lg:-right-20"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
            }}
          >
            <img 
              src="/assets/profilepic.jpeg" 
              alt="Amit - Full Stack Developer" 
              className="w-full h-full object-cover object-center opacity-80"
              style={{
                // Additional mix-blend-mode just in case the jpeg has a solid background that can be blended out
                mixBlendMode: 'lighten'
              }}
            />
          </div>
          
          {/* Subtle foreground noise/texture overlay over the image for blending */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}
