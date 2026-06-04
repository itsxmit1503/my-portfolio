"use client";

import { motion } from "framer-motion";

const releases = [
  {
    version: "v2.0",
    date: "Current",
    title: "Production Ready",
    notes: [
      "Architected Tolkify engine for zero-latency concurrent connections.",
      "Engineered Unsaid anonymous network with privacy-first data models.",
      "Mastered React, Next.js, and complex state management.",
      "Focused on high-performance UX and expensive motion design."
    ]
  },
  {
    version: "v1.0",
    date: "2021 - 2024",
    title: "The Foundation",
    notes: [
      "Studied core computer science principles and Data Structures.",
      "Built initial monolithic applications in PHP and raw JavaScript.",
      "Designed relational database schemas with MySQL and DBMS.",
      "Learned to navigate the noise to find signal clarity."
    ]
  }
];

export function Changelog() {
  return (
    <section className="relative w-full px-6 py-32 flex flex-col items-center border-t border-white/5">
      
      <div className="max-w-3xl w-full">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-16">Changelog</h2>
        
        <div className="space-y-24">
          {releases.map((release, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
            >
              {/* Vertical timeline line */}
              {i !== releases.length - 1 && (
                <div className="absolute left-[39px] top-16 bottom-[-96px] w-[1px] bg-white/10 hidden md:block" />
              )}
              
              <div className="flex-shrink-0 md:w-32 pt-1">
                <span className="text-sm font-mono text-neutral-500">{release.date}</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-2 py-1 rounded bg-white/10 text-xs font-mono font-medium text-white">
                    {release.version}
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-white">{release.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {release.notes.map((note, j) => (
                    <li key={j} className="flex gap-4 text-neutral-400">
                      <span className="text-neutral-600 mt-1">-</span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
