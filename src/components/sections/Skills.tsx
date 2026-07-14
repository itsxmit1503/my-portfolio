"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../ui/SpotlightCard";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "NPM", "Vite"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 border-t border-white/5">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
          The technical foundation.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
            <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className={i >= 3 ? 'md:col-span-2 lg:col-span-1' : ''}
          >
            <SpotlightCard className="h-full flex flex-col rounded-3xl bg-[#050505] border border-white/5 p-8 transition-all duration-700 hover:border-emerald-500/30 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-xl font-medium tracking-tight text-white mb-6 group-hover:text-emerald-400 transition-colors">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 text-sm font-medium bg-white/[0.03] border border-white/5 rounded-lg text-neutral-400 transition-colors group-hover:border-emerald-500/20 group-hover:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
