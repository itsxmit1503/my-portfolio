"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TiltCard } from "../ui/TiltCard";
import { MagneticButton } from "../ui/MagneticButton";
import { projects, Project } from "@/lib/projects";

function ChatTiltShowcase() {
  return (
    <TiltCard>
      <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative flex items-center justify-center p-8 group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
        
        <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
          <div 
            className="self-start bg-[#111] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-xl"
          >
            <div className="w-12 h-2 bg-white/20 rounded-full mb-2"></div>
            <div className="w-24 h-2 bg-white/10 rounded-full"></div>
          </div>
          
          <div 
            className="self-end bg-blue-600/20 border border-blue-500/30 px-4 py-3 rounded-2xl rounded-tr-sm shadow-xl"
          >
            <div className="w-32 h-2 bg-blue-400/50 rounded-full mb-2"></div>
            <div className="w-16 h-2 bg-blue-400/30 rounded-full"></div>
          </div>

          <div 
            className="self-start bg-[#111] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-xl"
          >
            <div className="w-20 h-2 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function GlassInteractiveShowcase() {
  const [balance, setBalance] = useState(0);
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => {
        if (prev >= 12450) return 12450;
        return prev + 415;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <TiltCard>
      <div className={`w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative flex items-center justify-center p-8 transition-colors duration-1000 ${isRaining ? 'bg-slate-900/50' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-1000 z-0 pointer-events-none ${isRaining ? 'from-blue-500/10 opacity-60' : 'from-emerald-500/10 opacity-30'}`} />
        
        <button 
          onClick={() => setIsRaining(!isRaining)}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
        >
          Toggle Weather
        </button>

        <div 
          className="relative z-10 w-full max-w-xs p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center gap-2"
        >
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
    </TiltCard>
  );
}

function FlowDiagramShowcase() {
  return (
    <TiltCard>
      <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-30 z-0 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-2xl justify-center">
          
          <div 
            className="w-24 h-24 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center gap-2 shadow-xl"
          >
            <div className="w-8 h-8 rounded bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Roadmap</span>
          </div>

          <div 
            className="hidden md:block w-10 h-px bg-gradient-to-r from-violet-500/50 to-transparent"
          />

          <div 
            className="w-24 h-24 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center gap-2 shadow-xl relative"
          >
            <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Topic</span>
            
            <div 
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div 
            className="hidden md:block w-10 h-px bg-gradient-to-r from-blue-500/50 to-transparent"
          />

          <div 
            className="w-24 h-24 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center justify-center gap-2 shadow-xl"
          >
            <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 relative overflow-hidden">
               <div 
                 className="absolute bottom-0 left-0 right-0 bg-emerald-500/30 h-[60%]"
               />
               <span className="relative z-10 text-xs font-mono">60%</span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Progress</span>
          </div>

        </div>
      </div>
    </TiltCard>
  );
}


function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col gap-8"
    >
      {project.showcaseType === 'chat-tilt' && <ChatTiltShowcase />}
      {project.showcaseType === 'glass-interactive' && <GlassInteractiveShowcase />}
      {project.showcaseType === 'flow-diagram' && <FlowDiagramShowcase />}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className={`px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-neutral-300 uppercase`}>
              {project.category.split(' ')[0]}
            </div>
            <h4 className="text-3xl font-medium tracking-tight text-white">{project.title}</h4>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton intensity={0.15}>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Live Demo
              </a>
            </MagneticButton>
            {project.repoUrl && (
              <MagneticButton intensity={0.15}>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-transparent border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors">
                  GitHub
                </a>
              </MagneticButton>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Category</h5>
            <p className="text-sm text-neutral-300">{project.category}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/[0.03] border border-white/5 rounded text-neutral-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="projects" className="relative w-full py-24 border-t border-white/5">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">Featured Projects</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
          Engineered for scale. Designed for humans.
        </h3>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
