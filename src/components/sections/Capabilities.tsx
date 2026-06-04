"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const capabilities = [
  {
    title: "Concurrent State Management",
    description: "Designing predictable global state architectures using Zustand and React Context that scale without unnecessary re-renders.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  },
  {
    title: "Real-time Synchronization",
    description: "Building robust WebSocket pipelines that handle dropped connections, optimistic updates, and message queueing seamlessly.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Scalable Data Pipelines",
    description: "Architecting relational database schemas with PostgreSQL and Prisma for high-throughput, structured data environments.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "High-Performance UIs",
    description: "Executing complex animations and fluid layouts targeting 60-120fps using Framer Motion and modern React patterns.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

export function Capabilities() {
  return (
    <section className="relative w-full px-6 py-32 flex flex-col items-center border-t border-white/5 bg-[#030303]">
      
      <div className="max-w-5xl w-full">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-16">Platform Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <FeatureCard key={i} capability={cap} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}

function FeatureCard({ capability, index }: { capability: typeof capabilities[0], index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={capability.icon} />
          </svg>
        </div>
        <h3 className="text-2xl font-medium tracking-tight text-white mb-3">{capability.title}</h3>
        <p className="text-neutral-400 leading-relaxed">
          {capability.description}
        </p>
      </div>
    </motion.div>
  );
}
