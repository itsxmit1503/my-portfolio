"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "framer-motion";

function IcosahedronWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Auto-rotation
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.1;
      
      // Parallax effect reacting to mouse
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial 
        color="#C1FF72" 
        wireframe 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Return early if user prefers reduced motion (disable 3D canvas entirely)
  if (prefersReducedMotion) {
    return (
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] to-black"
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]} // limit dpr for performance
          gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
        >
          <IcosahedronWireframe />
        </Canvas>
      )}
    </div>
  );
}
