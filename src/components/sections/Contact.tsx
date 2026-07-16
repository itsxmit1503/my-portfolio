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
    <section id="contact" className="relative w-full py-32 bg-[#F7F3EC] border-t border-[#1A1714]/10">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center w-full mb-16"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#C1502E] uppercase mb-6 font-sans">Contact</h2>
          <h3 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-[600] text-[#1A1714] leading-[1.05] tracking-normal max-w-2xl">
            Let's build something.
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#1A1714] uppercase tracking-widest font-sans">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent border-b border-[#1A1714]/20 px-0 py-3 text-[#1A1714] placeholder-[#6B6459] font-sans focus:outline-none focus:border-[#1B2A4A] focus:border-b-2 transition-all duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#1A1714] uppercase tracking-widest font-sans">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border-b border-[#1A1714]/20 px-0 py-3 text-[#1A1714] placeholder-[#6B6459] font-sans focus:outline-none focus:border-[#1B2A4A] focus:border-b-2 transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-[#1A1714] uppercase tracking-widest font-sans">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..." 
                className="w-full bg-transparent border-b border-[#1A1714]/20 px-0 py-3 text-[#1A1714] placeholder-[#6B6459] font-sans focus:outline-none focus:border-[#1B2A4A] focus:border-b-2 transition-all duration-300 resize-none"
                required
              />
            </div>

            <div className="flex justify-center mt-8">
              <MagneticButton intensity={0.1}>
                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="px-12 py-4 bg-[#1B2A4A] text-[#F7F3EC] text-sm font-semibold uppercase tracking-widest hover:bg-[#1A1714] transition-colors disabled:opacity-80 disabled:pointer-events-none flex items-center justify-center gap-3 relative group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#F7F3EC]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="absolute bottom-3 left-12 right-12 h-px bg-[#F7F3EC] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </>
                  )}
                </button>
              </MagneticButton>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
