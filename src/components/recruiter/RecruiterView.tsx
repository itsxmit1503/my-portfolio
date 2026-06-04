export function RecruiterView() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 font-sans selection:bg-black selection:text-white">
      <header className="mb-24">
        <h1 className="text-6xl font-bold mb-4 font-outfit tracking-tight">Amit</h1>
        <p className="text-2xl text-neutral-600 mb-8 font-light">Social Systems Architect & Engineer</p>
        <div className="flex flex-wrap gap-8 text-sm font-mono uppercase tracking-widest">
          <a href="#" className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">GitHub</a>
          <a href="#" className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">LinkedIn</a>
          <a href="#" className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">Resume (PDF)</a>
          <a href="mailto:amit@example.com" className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">amit@example.com</a>
        </div>
      </header>

      <section className="mb-24">
        <h2 className="text-xs font-bold mb-8 uppercase tracking-widest text-neutral-400 font-mono">Profile</h2>
        <p className="text-xl text-neutral-800 leading-relaxed max-w-3xl">
          I build communication platforms and digital communities. I focus on full-stack web development with expertise in real-time systems, scalable architecture, and UX-driven engineering. My work centers on creating spaces where people connect and voices are heard.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-xs font-bold mb-12 uppercase tracking-widest text-neutral-400 font-mono">Selected Works</h2>
        
        <div className="mb-16 border-l-2 border-black pl-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
            <h3 className="text-3xl font-bold font-outfit">Tolkify</h3>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Real-time Communication</span>
          </div>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl">
            Architected a highly concurrent real-time messaging application. Built custom WebSocket pipelines ensuring zero perceivable latency with optimistic UI updates.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-mono text-neutral-600 uppercase">
            <span className="bg-neutral-100 px-3 py-1">React</span>
            <span className="bg-neutral-100 px-3 py-1">WebSockets</span>
            <span className="bg-neutral-100 px-3 py-1">Node.js</span>
            <span className="bg-neutral-100 px-3 py-1">Redis</span>
          </div>
        </div>

        <div className="border-l-2 border-black pl-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
            <h3 className="text-3xl font-bold font-outfit">Unsaid</h3>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Anonymous Network</span>
          </div>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl">
            Engineered an anonymous campus social network. Implemented strict privacy-preserving data models and AI-assisted content moderation to balance anonymity with community safety.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-mono text-neutral-600 uppercase">
            <span className="bg-neutral-100 px-3 py-1">Next.js</span>
            <span className="bg-neutral-100 px-3 py-1">PostgreSQL</span>
            <span className="bg-neutral-100 px-3 py-1">Prisma</span>
            <span className="bg-neutral-100 px-3 py-1">OpenAI</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold mb-8 uppercase tracking-widest text-neutral-400 font-mono">Core Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <ul className="space-y-2">
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
          <ul className="space-y-2">
            <li>React / Next.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Three.js / R3F</li>
          </ul>
          <ul className="space-y-2">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>Prisma</li>
          </ul>
          <ul className="space-y-2">
            <li>WebSockets</li>
            <li>Git / GitHub</li>
            <li>Docker</li>
            <li>AWS / Vercel</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
