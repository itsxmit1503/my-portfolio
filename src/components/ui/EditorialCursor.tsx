"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EditorialCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("VIEW");

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor]");
      
      if (interactiveEl) {
        setIsVisible(true);
        const cursorText = interactiveEl.getAttribute("data-cursor") || (interactiveEl.tagName.toLowerCase() === 'a' ? "READ" : "VIEW");
        setText(cursorText);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
          style={{
            transform: `translate3d(${position.x + 16}px, ${position.y + 16}px, 0)`
          }}
        >
          <div className="bg-[#1A1714] text-[#F7F3EC] px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase whitespace-nowrap">
            {text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
