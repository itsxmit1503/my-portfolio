export function Footer() {
  return (
    <footer className="w-full px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#000000]">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium tracking-wide text-neutral-400">All systems operational.</span>
      </div>
      
      <div className="flex gap-6 text-sm font-medium text-neutral-500">
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Resume</a>
      </div>
    </footer>
  );
}
