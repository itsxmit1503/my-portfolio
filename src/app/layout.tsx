import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-fraunces",
  axes: ["SOFT"],
});

export const metadata: Metadata = {
  title: "Amit | Full Stack Developer",
  description: "BCA Student & Full Stack Developer building real-world web applications and communities.",
};

import { EditorialCursor } from "@/components/ui/EditorialCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-[#F7F3EC] text-[#1A1714] antialiased selection:bg-[#1B2A4A] selection:text-[#F7F3EC]`}>
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
        />
        <EditorialCursor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
