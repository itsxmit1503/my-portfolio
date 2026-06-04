"use client";

import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';

export function RecruiterToggle() {
  const { isRecruiterMode, toggleRecruiterMode } = useStore();

  return (
    <motion.div 
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <button 
        onClick={toggleRecruiterMode}
        className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-colors ${
          isRecruiterMode 
            ? "border-black text-black hover:bg-black hover:text-white" 
            : "border-white/30 text-white/70 hover:bg-white hover:text-black hover:border-white"
        }`}
      >
        {isRecruiterMode ? "Enter the Multiverse" : "Skip The Multiverse"}
      </button>
    </motion.div>
  );
}
