"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    topic: "Currently Learning",
    details: "PHP, DBMS, Data Structures, OOP using C++",
    active: true,
  },
  {
    topic: "Full Stack Development",
    details: "Architecting end-to-end applications.",
    active: false,
  },
  {
    topic: "MongoDB",
    details: "NoSQL databases and data modeling.",
    active: false,
  },
  {
    topic: "Node.js & Express",
    details: "Backend servers and API architecture.",
    active: false,
  },
  {
    topic: "React & Next.js",
    details: "Component-based UIs and SSR.",
    active: false,
  },
  {
    topic: "JavaScript & TypeScript",
    details: "Core programming and type safety.",
    active: false,
  },
  {
    topic: "HTML & CSS",
    details: "The building blocks of the web.",
    active: false,
  }
];

export function Experience() {
  return (
    <section id="journey" className="relative w-full py-32 border-t border-white/5 overflow-hidden">
      <div className="w-full mb-24 flex flex-col items-center text-center">
        <h2 className="text-sm font-semibold tracking-widest text-[#C1FF72] uppercase mb-4">Journey</h2>
        <h3 className="text-4xl md:text-6xl font-[800] tracking-[-0.03em] leading-[0.95] text-white max-w-2xl">
          Continuous Learning.
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {timeline.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className={`relative flex items-center justify-start md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${item.active ? 'bg-[#C1FF72] border-[#C1FF72] shadow-[0_0_20px_rgba(193,255,114,0.6)]' : 'bg-[#0B0B0D] border-white/20'}`}>
                  {item.active && <div className="absolute inset-0 rounded-full bg-[#C1FF72] animate-ping opacity-50" />}
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className={`p-6 md:p-8 rounded-2xl bg-[#141416] border border-white/[0.08] transition-colors hover:border-white/20 ${item.active ? 'border-[#C1FF72]/30 bg-[#C1FF72]/[0.02]' : ''}`}>
                    <h4 className={`text-xl md:text-2xl font-bold tracking-tight mb-3 ${item.active ? 'text-[#C1FF72]' : 'text-white'}`}>
                      {item.topic}
                    </h4>
                    <p className="text-base text-neutral-400 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
