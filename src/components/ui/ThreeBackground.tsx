"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "framer-motion";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate a very low-poly geometry (500 points max for high performance)
  const [positions] = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // GPU accelerated transform animations only
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
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
          <ParticleField />
        </Canvas>
      )}
    </div>
  );
}
