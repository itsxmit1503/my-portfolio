"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-[#1A1714]/10 z-50 hidden md:block">
      <motion.div
        className="w-[2px] -ml-[0.5px] bg-[#1A1714] origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}
