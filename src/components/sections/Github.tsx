"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../ui/SpotlightCard";

export function Github() {
  // Generate mock contribution data (53 weeks * 7 days)
  const weeks = Array.from({ length: 53 });
  
  return (
    <section id="github" className="relative w-full py-24 border-t border-white/5 overflow-hidden">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">Activity</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
          Continuous shipping.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="lg:col-span-8 w-full rounded-2xl bg-[#050505] border border-white/5 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <div>
                <h4 className="text-xl font-medium text-white">GitHub Activity</h4>
                <p className="text-sm text-neutral-500">Commits, PRs, and Issues</p>
              </div>
            </div>
            <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              @itsxmit1503 ↗
            </a>
          </div>

          {/* Abstract Contribution Graph */}
          <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-none opacity-80">
            {weeks.map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  // Deterministic pseudo-random generation to prevent hydration mismatches
                  const index = weekIdx * 7 + dayIdx;
                  const intensity = ((index * 137) % 100) / 100;
                  
                  let colorClass = "bg-white/[0.03]";
                  if (intensity > 0.8) colorClass = "bg-emerald-400";
                  else if (intensity > 0.6) colorClass = "bg-emerald-500/70";
                  else if (intensity > 0.4) colorClass = "bg-emerald-600/40";
                  else if (intensity > 0.2) colorClass = "bg-emerald-900/40";

                  return (
                    <div 
                      key={dayIdx} 
                      className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-1 hover:ring-white/50 transition-all cursor-crosshair`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="lg:col-span-4 rounded-2xl"
        >
          <SpotlightCard className="w-full h-full bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-center rounded-2xl transition-colors duration-500 hover:border-white/20">
             <h4 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-6">Repository Highlights</h4>
             <div className="space-y-4 relative z-10">
                {["Tolkify", "Unsaid", "Track My Rail", "Hill Basket"].map(repo => (
                  <a key={repo} href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group hover:border-white/20">
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{repo}</span>
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                ))}
             </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
