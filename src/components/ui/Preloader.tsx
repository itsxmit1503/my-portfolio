"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("portfolio_preloader_shown");
    
    if (hasLoadedBefore) {
      setIsLoading(false);
      return;
    }

    // Lock scroll
    document.body.style.overflow = "hidden";
    
    // Simulate loading time (1.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("portfolio_preloader_shown", "true");
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F7F3EC]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#C1502E] text-4xl font-serif font-bold tracking-widest uppercase"
            >
              Amit
            </motion.div>
            <motion.div
              className="w-32 h-px bg-[#1A1714]/10 relative overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#1B2A4A]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
