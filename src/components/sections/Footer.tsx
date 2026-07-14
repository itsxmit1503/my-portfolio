import { MagneticButton } from "../ui/MagneticButton";

export function Footer() {
  return (
    <footer className="w-full px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#141416]">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#C1FF72] absolute animate-ping opacity-75" />
          <div className="w-2 h-2 rounded-full bg-[#C1FF72] relative" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">All systems operational</span>
      </div>
      
      <div className="flex gap-2 text-sm font-medium text-neutral-500">
        <MagneticButton intensity={0.1}>
          <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="px-5 py-2.5 hover:text-[#C1FF72] hover:bg-white/5 rounded-full transition-colors inline-block">GitHub</a>
        </MagneticButton>
        <MagneticButton intensity={0.1}>
          <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="px-5 py-2.5 hover:text-[#C1FF72] hover:bg-white/5 rounded-full transition-colors inline-block">LinkedIn</a>
        </MagneticButton>
      </div>
    </footer>
  );
}
