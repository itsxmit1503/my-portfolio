"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 flex flex-col gap-32 pb-32">
        <Hero />
        <About />
        <Products />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
