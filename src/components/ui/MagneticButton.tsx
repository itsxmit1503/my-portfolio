"use client";

import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function MagneticButton({ children, className = "", intensity = 0.3, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center to cursor
    x.set((clientX - centerX) * intensity);
    y.set((clientY - centerY) * intensity);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{ x: springX, y: springY }}
      className={`inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
