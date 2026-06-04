"use client";

import { motion } from "framer-motion";
import { TiltCard } from "../ui/TiltCard";
import { MagneticButton } from "../ui/MagneticButton";

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
        <TolkifyShowcase />
        <UnsaidShowcase />
        <TrackMyRailShowcase />
        <HillBasketShowcase />
      </div>
    </section>
  );
}

function TolkifyShowcase() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <TiltCard>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative group flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          
          {/* Actual Project Screenshot */}
          <img 
            src="/assets/tolkifychat.png" 
            alt="Tolkify Chat Interface" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </TiltCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Live</div>
            <h4 className="text-3xl font-medium tracking-tight text-white">Tolkify Chat</h4>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            A modern real-time chat application focused on seamless communication and user experience. Built to provide fast, responsive, and engaging conversations through a clean and modern interface.
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton intensity={0.15}>
              <a href="https://www.tolkifychat.tech/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Live Demo
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Category</h5>
            <p className="text-sm text-neutral-300">Real-Time Communication Platform</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function UnsaidShowcase() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <TiltCard>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative group flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          
          {/* Actual Project Screenshot */}
          <img 
            src="/assets/unsaid.png" 
            alt="Unsaid Interface" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </TiltCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono tracking-widest text-purple-400 uppercase">Currently in Development</div>
            <h4 className="text-3xl font-medium tracking-tight text-white">Unsaid</h4>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            A privacy-first anonymous discussion platform built for university students to share confessions, discussions, academic help, campus updates, and community interactions.
          </p>
          <div className="flex items-center gap-4">
            <span className="px-5 py-2.5 bg-white/5 text-neutral-500 text-sm font-medium rounded border border-white/10 cursor-not-allowed">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Category</h5>
            <p className="text-sm text-neutral-300">Anonymous Campus Community Platform</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrackMyRailShowcase() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <TiltCard>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative group flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          
          {/* Actual Project Screenshot */}
          <img 
            src="/assets/trackmyrail.png" 
            alt="Track My Rail Interface" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </TiltCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono tracking-widest text-blue-400 uppercase">Prototype</div>
            <h4 className="text-3xl font-medium tracking-tight text-white">Track My Rail</h4>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            A railway tracking platform currently under active development. Visitors may explore the current prototype version to experience the tracking interface and core functionalities.
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton intensity={0.15}>
              <a href="https://track-my-rail.vercel.app/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Live Demo
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Category</h5>
            <p className="text-sm text-neutral-300">Railway Tracking Platform</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HillBasketShowcase() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <TiltCard>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden relative group flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          
          {/* Actual Project Screenshot */}
          <img 
            src="/assets/hillsbasket.png" 
            alt="Hill Basket Interface" 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </TiltCard>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono tracking-widest text-orange-400 uppercase">Team Project</div>
            <h4 className="text-3xl font-medium tracking-tight text-white">Hill Basket</h4>
          </div>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            A team-based local delivery platform. Experience the official live deployment and core functionalities.
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton intensity={0.15}>
              <a href="https://hillsbasket.vercel.app/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Live Demo
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Category</h5>
            <p className="text-sm text-neutral-300">Local Delivery Platform</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
