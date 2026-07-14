"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Backend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    skills: ["Node.js", "Express.js"],
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Database",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    skills: ["MongoDB", "MySQL"],
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Languages",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"],
    span: "md:col-span-2 lg:col-span-1"
  },
  {
    title: "Tools",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    skills: ["Git", "GitHub", "Vercel", "NPM", "Vite"],
    span: "md:col-span-1 lg:col-span-1"
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 border-t border-white/5">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-[#C1FF72] uppercase mb-4">Capabilities</h2>
        <h3 className="text-4xl md:text-6xl font-[800] tracking-[-0.03em] leading-[0.95] text-white max-w-2xl">
          The technical foundation.
        </h3>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
            }}
            className={`group h-full flex flex-col rounded-2xl bg-[#141416] border border-white/[0.08] p-8 transition-all duration-300 hover:border-[#C1FF72] hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(193,255,114,0.15)] overflow-hidden relative ${category.span}`}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#1C1C1F] border border-white/5 text-neutral-400 group-hover:text-[#C1FF72] transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold tracking-tight text-white">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="px-4 py-2 text-xs font-medium bg-[#1C1C1F] border border-white/5 rounded-full text-neutral-300 transition-colors group-hover:border-[#C1FF72]/30 group-hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
