"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(ease * to));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-[#F7F3EC] border-t border-[#1A1714]/10">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
          }
        }}
        className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12"
      >
        <div className="w-full md:w-1/3">
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-xs font-semibold tracking-[0.2em] text-[#C1502E] uppercase mb-4 font-sans"
          >
            About
          </motion.h2>
          <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-serif text-3xl md:text-4xl font-[600] text-[#1A1714] leading-tight mb-8"
          >
            Developer & <br/> Problem Solver
          </motion.h3>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex gap-8 border-t border-[#1A1714]/15 pt-6"
          >
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-[#1B2A4A] font-[600] mb-1">
                <Counter to={3} />
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#6B6459] uppercase font-sans">
                Full-Stack<br/>Projects
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl text-[#1B2A4A] font-[600] mb-1">
                <Counter to={2} suffix="+" />
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#6B6459] uppercase font-sans">
                Years of<br/>Learning
              </span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
          className="w-full md:w-2/3 bg-[#FDFBF7] border border-[#1A1714]/10 p-8 md:p-12 transition-colors hover:border-[#1A1714]/30 group"
        >
          <div className="flex flex-col gap-6 text-base md:text-lg text-[#6B6459] leading-relaxed font-sans relative z-10">
            <p className="text-[#1A1714] font-medium text-xl md:text-2xl tracking-tight leading-[1.4] font-serif">
              I am a BCA student and Full Stack Developer passionate about building real-world applications.
            </p>
            <p>
              I enjoy working with modern web technologies and continuously improving my development skills through practical projects. I like transforming ideas into polished products while focusing on user experience, performance, and clean development practices.
            </p>
            <p>
              Currently based in Bhiwani, Haryana, I am studying at Dr. Harisingh Gaur Vishwavidyalaya, Sagar. I am actively learning advanced full-stack development concepts, databases, software engineering fundamentals, and scalable web application development to push my technical boundaries further.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
