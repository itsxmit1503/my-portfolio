import { MagneticButton } from "../ui/MagneticButton";

export function Footer() {
  return (
    <footer className="w-full px-6 lg:px-12 py-12 border-t border-[#1A1714]/15 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#FDFBF7]">
      <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#1A1714] font-sans">© {new Date().getFullYear()} Amit</span>
        <span className="hidden md:block text-[#1A1714]/20">•</span>
        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#6B6459] font-sans">Designed for humans</span>
      </div>
      
      <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-[#6B6459] font-sans">
        <MagneticButton intensity={0.1}>
          <a href="https://github.com/itsxmit1503" target="_blank" rel="noreferrer" className="hover:text-[#1A1714] transition-colors relative group">
            GitHub
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#1A1714] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </MagneticButton>
        <MagneticButton intensity={0.1}>
          <a href="https://www.linkedin.com/in/amit-b82142396" target="_blank" rel="noreferrer" className="hover:text-[#1A1714] transition-colors relative group">
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#1A1714] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </MagneticButton>
      </div>
    </footer>
  );
}
