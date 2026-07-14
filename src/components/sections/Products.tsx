"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { projects, Project } from "@/lib/projects";

// Mapping project IDs to their specific accent colors
const projectAccents: Record<string, string> = {
  "tolkify": "#A78BFA", // violet-400
  "pocketpilot": "#34D399", // emerald-400
  "roadmate": "#60A5FA", // blue-400
};

function ChatTiltShowcase() {
  return (
    <div className="w-full aspect-video md:aspect-[16/9] rounded-xl bg-[#0B0B0D] border border-white/5 overflow-hidden relative flex items-center justify-center p-6 group-hover:border-violet-500/30 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="w-full max-w-sm flex flex-col gap-4 relative z-10 transition-transform duration-500 group-hover:scale-105">
        <div className="self-start bg-[#141416] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-xl">
          <div className="w-12 h-2 bg-white/20 rounded-full mb-2"></div>
          <div className="w-24 h-2 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="self-end bg-violet-600/20 border border-violet-500/30 px-4 py-3 rounded-2xl rounded-tr-sm shadow-xl">
          <div className="w-32 h-2 bg-violet-400/50 rounded-full mb-2"></div>
          <div className="w-16 h-2 bg-violet-400/30 rounded-full"></div>
        </div>

        <div className="self-start bg-[#141416] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-xl">
          <div className="w-20 h-2 bg-white/20 rounded-full"></div>
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
      className="w-full aspect-video md:aspect-[21/9] rounded-xl bg-[#0B0B0D] border border-white/5 overflow-hidden relative flex items-center justify-center p-8 transition-colors duration-500 group-hover:border-emerald-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-xs p-6 rounded-2xl bg-[#1C1C1F] border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-2 transition-transform duration-500 group-hover:scale-105">
        <div className="text-white/50 text-sm tracking-wider uppercase">Available Reserve</div>
        <div className="text-4xl font-light text-white tracking-tight tabular-nums">
          ${balance.toLocaleString()}
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />
        <div className="flex justify-between w-full text-xs">
          <span className="text-white/40">Safe to spend</span>
          <span className="text-emerald-400">$3,200</span>
        </div>
      </div>
    </div>
  );
}

function FlowDiagramShowcase() {
  return (
    <div className="w-full aspect-video md:aspect-[16/9] rounded-xl bg-[#0B0B0D] border border-white/5 overflow-hidden relative flex items-center justify-center p-6 group-hover:border-blue-500/30 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 w-full max-w-sm justify-center transition-transform duration-500 group-hover:scale-105">
        
        <div className="w-16 h-16 rounded-xl bg-[#141416] border border-white/10 flex flex-col items-center justify-center gap-1 shadow-xl">
          <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
        </div>

        <div className="hidden md:block w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

        <div className="w-16 h-16 rounded-xl bg-[#141416] border border-white/10 flex flex-col items-center justify-center gap-1 shadow-xl relative">
          <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line></svg>
          </div>
          
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-150 transition-transform">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping absolute" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
        </div>

        <div className="hidden md:block w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

        <div className="w-16 h-16 rounded-xl bg-[#141416] border border-white/10 flex flex-col items-center justify-center gap-1 shadow-xl">
          <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 right-0 bg-blue-500/30 h-[60%] group-hover:h-full transition-all duration-1000" />
          </div>
        </div>

      </div>
    </div>
  );
}

function ProjectCard({ project, isFeatured }: { project: Project; isFeatured: boolean }) {
  const accentColor = projectAccents[project.id.toLowerCase()] || "#C1FF72";
  
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
      }}
      className={`group flex flex-col gap-6 p-6 md:p-8 bg-[#141416] rounded-2xl border border-white/[0.08] hover:border-[${accentColor}] hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_10px_40px_-10px_${accentColor}33] ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      {/* Showcase area */}
      {project.showcaseType === 'glass-interactive' && <GlassInteractiveShowcase />}
      {project.showcaseType === 'chat-tilt' && <ChatTiltShowcase />}
      {project.showcaseType === 'flow-diagram' && <FlowDiagramShowcase />}

      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="px-2.5 py-1 rounded-full bg-[#1C1C1F] border border-white/5 text-[10px] font-bold tracking-widest uppercase" style={{ color: accentColor }}>
            {project.category.split(' ')[0]}
          </div>
          <h4 className="text-2xl font-bold tracking-tight text-white">{project.title}</h4>
        </div>
        
        <p className="text-base text-neutral-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1 text-[11px] font-medium bg-[#1C1C1F] border border-white/5 rounded-full" style={{ color: accentColor }}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          <MagneticButton intensity={0.1}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity">
              <span style={{ color: accentColor }}>Live Demo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </MagneticButton>
          {project.repoUrl && (
            <MagneticButton intensity={0.1}>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors ml-4">
                GitHub
              </a>
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  const featured = projects.find(p => p.id === 'pocketpilot');
  const others = projects.filter(p => p.id !== 'pocketpilot');

  return (
    <section id="projects" className="relative w-full py-32 border-t border-white/5">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-[#C1FF72] uppercase mb-4">Featured Projects</h2>
        <h3 className="text-4xl md:text-6xl font-[800] tracking-[-0.03em] leading-[0.95] text-white max-w-2xl">
          Engineered for scale. <br/> Designed for humans.
        </h3>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {featured && <ProjectCard project={featured} isFeatured={true} />}
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} isFeatured={false} />
        ))}
      </motion.div>
    </section>
  );
}
