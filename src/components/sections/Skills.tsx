"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "React.js", "Next.js"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"]
  },
  {
    title: "Styling & Motion",
    skills: ["Tailwind CSS", "Framer Motion", "GSAP", "React Three Fiber"]
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Postman"]
  }
];

export function Skills() {
  return (
    <section id="capabilities" className="w-full py-24 bg-[#FDFBF7] border-t border-[#1A1714]/10">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#C1502E] uppercase mb-4 font-sans">Index</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-[600] text-[#1A1714]">
            Capabilities
          </h3>
        </div>

        <div className="flex flex-col border-t border-[#1A1714]/15">
          {skillCategories.map((category, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={category.title}
              className="flex flex-col md:flex-row py-8 md:py-12 border-b border-[#1A1714]/15 group"
            >
              {/* Category Title */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="font-serif text-2xl text-[#1A1714] font-[600] group-hover:text-[#C1502E] transition-colors">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="w-full md:w-2/3">
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-[#6B6459] text-base md:text-lg font-sans flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#C1502E]/30" />
                      {skill}
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
