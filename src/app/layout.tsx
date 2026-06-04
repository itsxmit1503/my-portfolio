import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Amit | Full Stack Developer",
  description: "BCA Student & Full Stack Developer building real-world web applications and communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#000000] text-white antialiased selection:bg-white/90 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
