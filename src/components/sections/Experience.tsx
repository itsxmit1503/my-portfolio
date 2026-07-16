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
    <section id="journey" className="relative w-full py-24 bg-[#F7F3EC] border-t border-[#1A1714]/10 overflow-hidden">
      <div className="w-full mb-24 flex flex-col items-center text-center">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#C1502E] uppercase mb-4 font-sans">Journey</h2>
        <h3 className="font-serif text-4xl md:text-5xl font-[600] text-[#1A1714] max-w-2xl">
          Continuous Learning
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1A1714]/15 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {timeline.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className={`relative flex items-center justify-start md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 rounded-full z-10 ${item.active ? 'w-3 h-3 bg-[#C1502E]' : 'w-2 h-2 bg-[#1A1714]'}`} />

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className={`p-6 md:p-8 bg-[#FDFBF7] border border-[#1A1714]/10 transition-colors hover:border-[#1A1714]/30`}>
                    <h4 className={`font-serif text-xl md:text-2xl font-[600] mb-3 ${item.active ? 'text-[#C1502E]' : 'text-[#1A1714]'}`}>
                      {item.topic}
                    </h4>
                    <p className="text-base text-[#6B6459] leading-relaxed font-sans">
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
