"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;
    
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-32 border-t border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-6"
      >
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } } }}
          className="flex flex-col items-start justify-center"
        >
          <h2 className="text-sm font-semibold tracking-widest text-[#C1FF72] uppercase mb-4">Contact</h2>
          <h3 className="text-4xl md:text-6xl font-[800] tracking-[-0.03em] leading-[0.95] text-white mb-6">
            Let&apos;s build something <br className="hidden md:block"/> extraordinary.
          </h3>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-md mb-12">
            Whether you have a project in mind, a question about my work, or just want to connect—my inbox is always open.
          </p>
          
          <div className="flex flex-col gap-6 w-full">
            <MagneticButton intensity={0.1} className="w-fit">
              <a href="mailto:itssxmitt@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group px-4 py-2 -ml-4 rounded-full hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-[#141416] border border-white/10 flex items-center justify-center group-hover:border-[#C1FF72]/30 group-hover:text-[#C1FF72] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-lg font-medium">itssxmitt@gmail.com</span>
              </a>
            </MagneticButton>
            <MagneticButton intensity={0.1} className="w-fit">
              <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group px-4 py-2 -ml-4 rounded-full hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-[#141416] border border-white/10 flex items-center justify-center group-hover:border-[#C1FF72]/30 group-hover:text-[#C1FF72] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.95, y: 20 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } } }}
          className="bg-[#141416] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative"
        >
          
          <form className="flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C1FF72] focus:ring-1 focus:ring-[#C1FF72] transition-all duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C1FF72] focus:ring-1 focus:ring-[#C1FF72] transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..." 
                className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C1FF72] focus:ring-1 focus:ring-[#C1FF72] transition-all duration-300 resize-none"
                required
              />
            </div>

            <MagneticButton intensity={0.1} className="w-full mt-4">
              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-[#C1FF72] text-black font-bold py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-80 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Message Sent
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </MagneticButton>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
}
