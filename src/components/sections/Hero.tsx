"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax and fade out on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    tl.to(headlineRef.current, {
      y: 150,
      opacity: 0,
      scale: 0.95,
      ease: "none"
    }, 0);

    tl.to(contentRef.current, {
      y: -50, // moves slightly up or stays slower
      opacity: 0,
      ease: "none"
    }, 0);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#F7F3EC]">
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-20 flex flex-col min-h-[75vh]">
        
        {/* Top Eyebrow / Masthead */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-start w-full border-b border-[#1A1714]/15 pb-6 mb-12"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[#6B6459] text-[10px] font-bold tracking-[0.2em] uppercase font-sans">
              Issue — Full Stack Developer
            </span>
            <span className="text-[#1A1714] text-sm font-semibold uppercase tracking-wider font-sans">
              Amit
            </span>
          </div>
          <span className="text-[#6B6459] text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-right hidden sm:block">
            Folio / 2026<br/>
            Bhiwani, HR
          </span>
        </motion.div>

        {/* Big Serif Headline */}
        <div className="w-full mb-16 flex-1 flex items-center">
          <motion.h1 
            ref={headlineRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-[600] text-[#1A1714] leading-[1.05] tracking-normal max-w-4xl"
          >
            Building real-world <span className="text-[#C1502E] italic">web applications</span>, communities, and digital experiences.
          </motion.h1>
        </div>

        {/* Asymmetric Lower Right Content */}
        <div className="w-full flex justify-end">
          <motion.div 
            ref={contentRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 flex flex-col gap-8 md:-mt-32 bg-[#F7F3EC] md:p-6 lg:p-8"
          >
            <p className="text-base md:text-lg text-[#6B6459] leading-relaxed font-sans">
              I enjoy transforming ideas into modern web applications that solve real problems. From real-time communication platforms to community-driven products, I focus on creating smooth, functional, and meaningful user experiences.
            </p>

            <div className="flex items-center gap-6 border-t border-[#1A1714]/15 pt-8">
              <MagneticButton intensity={0.2}>
                <a href="#contact" data-cursor="CONNECT" className="px-8 py-3 bg-[#1B2A4A] text-[#F7F3EC] text-sm font-semibold uppercase tracking-widest hover:bg-[#1A1714] transition-colors inline-block relative group">
                  Contact Me
                  <span className="absolute bottom-2 left-8 right-8 h-px bg-[#F7F3EC] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </MagneticButton>
              
              <div className="flex items-center gap-4">
                <MagneticButton intensity={0.1}>
                  <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="text-[#1A1714] hover:text-[#C1502E] transition-colors group">
                    <svg className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </MagneticButton>
                <MagneticButton intensity={0.1}>
                  <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="text-[#1A1714] hover:text-[#1B2A4A] transition-colors group">
                    <svg className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-6 flex items-center gap-3 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A1714] to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B6459] font-sans" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
