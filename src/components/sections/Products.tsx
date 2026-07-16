"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { projects, Project } from "@/lib/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// SHOWCASE COMPONENTS (Fixing Skeleton Bug)
// ==========================================

function ChatTiltShowcase() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#FDFBF7] flex items-center justify-center p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#F0EBE1]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="w-full max-w-sm flex flex-col gap-4 relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
        <div className="self-start bg-[#F7F3EC] border border-[#1A1714]/10 px-5 py-4 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]">
          <p className="text-[#1A1714] text-sm font-sans font-medium leading-relaxed">
            Translate this document to Spanish, keeping the technical terminology intact.
          </p>
          <span className="text-[9px] text-[#6B6459] mt-2 block font-mono">10:42 AM</span>
        </div>
        
        <div className="self-end bg-[#1B2A4A] border border-[#1B2A4A]/20 px-5 py-4 rounded-xl rounded-tr-sm shadow-sm max-w-[85%]">
          <p className="text-[#F7F3EC] text-sm font-sans font-medium leading-relaxed">
            Here is the translated document. Technical terms like 'API' and 'Webhooks' have been preserved.
          </p>
          <span className="text-[9px] text-[#F7F3EC]/70 mt-2 block font-mono text-right">10:43 AM</span>
        </div>
      </div>
    </div>
  );
}

function GlassInteractiveShowcase() {
  const [balance, setBalance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setBalance(0);
      return;
    }
    const interval = setInterval(() => {
      setBalance(prev => {
        if (prev >= 12450) return 12450;
        return prev + 415;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="w-full h-full min-h-[250px] bg-[#FDFBF7] flex items-center justify-center p-6 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[#F0EBE1]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-xs p-8 bg-[#F7F3EC] border border-[#1A1714]/10 flex flex-col items-center justify-center gap-2 shadow-sm transition-transform duration-700 group-hover:scale-105">
        <div className="text-[#6B6459] text-xs font-bold tracking-widest uppercase mb-2">Available Reserve</div>
        <div className="text-4xl md:text-5xl font-serif text-[#1A1714] font-semibold tracking-tight tabular-nums">
          ${balance.toLocaleString()}
        </div>
        <div className="w-full h-px bg-[#1A1714]/10 my-4" />
        <div className="flex justify-between w-full text-xs font-mono font-medium">
          <span className="text-[#6B6459]">Safe to spend</span>
          <span className="text-[#C1502E]">$3,200</span>
        </div>
        <div className="mt-4 flex items-center justify-between w-full px-4 py-2 bg-[#FDFBF7] border border-[#1A1714]/5 rounded-sm">
          <span className="text-[10px] uppercase font-bold text-[#1A1714]">Weather Sync</span>
          <div className={`w-8 h-4 rounded-full transition-colors flex items-center px-1 ${isHovered ? 'bg-[#1B2A4A]' : 'bg-[#1A1714]/20'}`}>
            <div className={`w-2.5 h-2.5 rounded-full bg-[#F7F3EC] transition-transform ${isHovered ? 'translate-x-3.5' : 'translate-x-0'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowDiagramShowcase() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#FDFBF7] flex items-center justify-center p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#F0EBE1]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 w-full justify-center transition-transform duration-700 group-hover:-translate-y-2">
        
        {/* Node 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#F7F3EC] border border-[#1A1714]/15 flex items-center justify-center text-[#1A1714] shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#1A1714] tracking-wider">Origin</span>
          <span className="text-[9px] text-[#6B6459] font-mono">Bhiwani, HR</span>
        </div>

        {/* Edge */}
        <div className="hidden md:flex flex-col items-center">
           <div className="w-16 h-px bg-[#1A1714]/20 relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-[#C1502E] group-hover:w-full transition-all duration-1000 ease-in-out" />
           </div>
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#1B2A4A] border border-[#1B2A4A] flex items-center justify-center text-[#F7F3EC] shadow-sm relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#C1502E] rounded-full border-2 border-[#FDFBF7] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-75" />
            </div>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#1A1714] tracking-wider">Optimize</span>
          <span className="text-[9px] text-[#6B6459] font-mono">AI Routing</span>
        </div>

        {/* Edge */}
        <div className="hidden md:flex flex-col items-center">
           <div className="w-16 h-px bg-[#1A1714]/20 relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-[#C1502E] group-hover:w-full transition-all duration-1000 ease-in-out delay-300" />
           </div>
        </div>

        {/* Node 3 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#F7F3EC] border border-[#1A1714]/15 flex items-center justify-center text-[#1A1714] shadow-sm overflow-hidden relative">
             <div className="absolute bottom-0 left-0 right-0 bg-[#C1502E]/20 h-0 group-hover:h-full transition-all duration-1000 delay-500" />
             <svg className="relative z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#1A1714] tracking-wider">Dest</span>
          <span className="text-[9px] text-[#6B6459] font-mono">Sagar, MP</span>
        </div>

      </div>
    </div>
  );
}


// ==========================================
// GSAP SCROLL SECTION
// ==========================================

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Prepare ordered array of projects (featured first, then the rest)
  const featured = projects.find(p => p.id === 'pocketpilot');
  const others = projects.filter(p => p.id !== 'pocketpilot');
  const orderedProjects = featured ? [featured, ...others] : others;

  useGSAP(() => {
    // Only apply GSAP pinning on desktop to avoid mobile jank, or apply globally but carefully.
    // For safety, apply it globally but ensure the container is tall enough.
    const cards = cardsRef.current;
    
    // Set initial states
    gsap.set(cards, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" });
    // First card is fully visible, others are hidden/translated
    gsap.set(cards.slice(1), { opacity: 0, y: 100, scale: 0.95 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${100 * cards.length}%`, // Scroll distance proportional to number of cards
        pin: true,
        scrub: 1, // Smooth scrubbing
      }
    });

    // Animate from frame to frame
    cards.forEach((card, i) => {
      if (i === 0) return; // skip first as it's already in place
      
      const prevCard = cards[i - 1];

      // Animate previous card out
      tl.to(prevCard, {
        opacity: 0,
        scale: 0.9,
        y: -50,
        ease: "power2.inOut",
        duration: 1
      }, i * 2);

      // Animate current card in
      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.inOut",
        duration: 1
      }, i * 2);
    });

  }, { scope: containerRef });

  return (
    <section id="projects" className="relative w-full border-t border-[#1A1714]/10 bg-[#F7F3EC]">
      <div className="w-full py-24 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#C1502E] uppercase mb-4 font-sans">Featured Work</h2>
        <h3 className="font-serif text-4xl md:text-5xl font-[600] text-[#1A1714] mb-8 text-center">
          Engineered for scale. <br/> Designed for humans.
        </h3>
      </div>

      {/* The pinned container */}
      <div ref={containerRef} className="relative w-full h-[100vh] max-w-7xl mx-auto px-6 lg:px-12 pb-24 overflow-hidden">
        {orderedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const indexNum = `0${index + 1}`;

          return (
            <div 
              key={project.id}
              ref={el => { cardsRef.current[index] = el }}
              className="flex flex-col md:flex-row bg-[#FDFBF7] border border-[#1A1714]/10 h-full max-h-[70vh] shadow-sm relative overflow-hidden"
            >
              {/* Background Index Number */}
              <div className="absolute top-4 left-4 md:-top-8 md:-left-8 text-[8rem] md:text-[16rem] font-serif font-bold text-[#C1502E] opacity-[0.03] select-none pointer-events-none leading-none z-0">
                {indexNum}
              </div>

              {/* Layout varies by index: Image Left vs Image Right */}
              <div className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#1A1714]/10 z-10 ${!isEven ? 'md:order-2 md:border-l md:border-r-0' : ''}`}>
                <div className="w-full h-full relative">
                  {project.showcaseType === 'glass-interactive' && <GlassInteractiveShowcase />}
                  {project.showcaseType === 'chat-tilt' && <ChatTiltShowcase />}
                  {project.showcaseType === 'flow-diagram' && <FlowDiagramShowcase />}
                </div>
              </div>

              {/* Content Side */}
              <div className={`w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center z-10 ${!isEven ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B6459] font-sans">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-serif font-[600] text-[#1A1714] mb-6">
                  {project.title}
                </h4>
                
                <p className="text-base md:text-lg text-[#6B6459] leading-relaxed mb-8 max-w-md font-sans">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-[10px] font-mono font-medium border border-[#1A1714]/20 text-[#1A1714]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" data-cursor="VISIT" className="text-sm font-semibold uppercase tracking-widest text-[#1B2A4A] hover:text-[#C1502E] transition-colors relative group font-sans">
                    Live Demo
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C1502E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </a>
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" data-cursor="CODE" className="text-sm font-semibold uppercase tracking-widest text-[#6B6459] hover:text-[#1A1714] transition-colors relative group font-sans">
                      Source
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#1A1714] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
