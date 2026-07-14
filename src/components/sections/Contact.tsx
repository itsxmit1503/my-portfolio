"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 border-t border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } } }}>
          <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Let&apos;s build something <br className="hidden md:block"/> extraordinary.
          </h3>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-md mb-8">
            Whether you have a project in mind, a question about my work, or just want to connect—my inbox is always open.
          </p>
          
          <div className="flex flex-col gap-4">
            <MagneticButton intensity={0.1} className="w-fit">
              <a href="mailto:itssxmitt@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group px-4 py-2 -ml-4 rounded-lg hover:bg-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                itssxmitt@gmail.com
              </a>
            </MagneticButton>
            <MagneticButton intensity={0.1} className="w-fit">
              <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group px-4 py-2 -ml-4 rounded-lg hover:bg-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                LinkedIn Profile
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } } }}
          className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative group overflow-hidden transition-all duration-700 hover:border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..." 
                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <MagneticButton intensity={0.1} className="w-full mt-2">
              <button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Send Message
              </button>
            </MagneticButton>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
}
