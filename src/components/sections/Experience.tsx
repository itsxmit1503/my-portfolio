"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    topic: "Full Stack Development",
    details: "Architecting end-to-end applications.",
    highlight: true
  },
  {
    topic: "MongoDB",
    details: "NoSQL databases and data modeling.",
    highlight: false
  },
  {
    topic: "Node.js & Express",
    details: "Backend servers and API architecture.",
    highlight: false
  },
  {
    topic: "React & Next.js",
    details: "Component-based UIs and SSR.",
    highlight: false
  },
  {
    topic: "JavaScript & TypeScript",
    details: "Core programming and type safety.",
    highlight: false
  },
  {
    topic: "HTML & CSS",
    details: "The building blocks of the web.",
    highlight: false
  }
];

export function Experience() {
  return (
    <section id="journey" className="relative w-full py-24 border-t border-white/5">
      <div className="w-full mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">Journey</h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
          Continuous Learning.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* The Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 py-4">
          {milestones.map((milestone, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full border-2 ${milestone.highlight ? 'bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-black border-white/20'}`} />
              
              <h4 className={`text-xl font-medium tracking-tight mb-2 ${milestone.highlight ? 'text-white' : 'text-neutral-300'}`}>
                {milestone.topic}
              </h4>
              <p className="text-sm text-neutral-500">
                {milestone.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Current Focus Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl self-start sticky top-32 group overflow-hidden relative transition-all duration-700 hover:border-violet-500/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <h4 className="text-xl font-medium text-white tracking-tight">Currently Learning</h4>
            </div>
            
            <ul className="space-y-4">
              {["PHP", "DBMS (Database Management Systems)", "Data Structures", "OOP using C++"].map((topic, i) => (
                <li key={i} className="flex items-center gap-4 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  <svg className="w-4 h-4 text-violet-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
