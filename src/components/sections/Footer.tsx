import { MagneticButton } from "../ui/MagneticButton";

export function Footer() {
  return (
    <footer className="w-full px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#000000]">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm font-medium tracking-wide text-neutral-400">All systems operational.</span>
      </div>
      
      <div className="flex gap-4 text-sm font-medium text-neutral-500">
        <MagneticButton intensity={0.1}>
          <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-lg transition-colors inline-block">GitHub</a>
        </MagneticButton>
        <MagneticButton intensity={0.1}>
          <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="px-4 py-2 hover:text-white hover:bg-white/5 rounded-lg transition-colors inline-block">LinkedIn</a>
        </MagneticButton>
      </div>
    </footer>
  );
}
