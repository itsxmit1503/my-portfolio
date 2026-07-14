"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative w-full py-32 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-8">About Me</h2>
        
        <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-neutral-400 leading-relaxed relative z-10">
            <div>
              <p className="mb-6 text-white font-medium text-xl tracking-tight">
                I am a BCA student and Full Stack Developer passionate about building real-world applications.
              </p>
              <p>
                I enjoy working with modern web technologies and continuously improving my development skills through practical projects. I like transforming ideas into polished products while focusing on user experience, performance, and clean development practices.
              </p>
            </div>
            <div>
              <p className="mb-6">
                Currently based in Bhiwani, Haryana, I am studying at Dr. Harisingh Gaur Vishwavidyalaya, Sagar.
              </p>
              <p>
                I am actively learning advanced full-stack development concepts, databases, software engineering fundamentals, and scalable web application development to push my technical boundaries further.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
