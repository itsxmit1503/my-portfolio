export type ShowcaseType = 'glass-interactive' | 'flow-diagram' | 'chat-tilt';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  showcaseType: ShowcaseType;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "tolkify",
    title: "Tolkify Chat",
    category: "Real-Time Communication Platform",
    description: "A modern real-time chat application focused on seamless communication and user experience. Built to provide fast, responsive, and engaging conversations through a clean and modern interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://tolkifychat.tech/",
    repoUrl: "https://github.com/itsxmit1503/Tolkify",
    showcaseType: "chat-tilt",
    accentColor: "from-blue-500/20 to-transparent"
  },
  {
    id: "pocketpilot",
    title: "PocketPilot",
    category: "Personal Finance App",
    description: "A gamified personal finance app for students, built around reserve-balance logic, spending-impact previews, and savings-goal targeting, with an AI companion named Pilo.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "MongoDB", "Express", "Gemini API"],
    liveUrl: "https://pocketpilot-nine.vercel.app/",
    repoUrl: "https://github.com/itsxmit1503/PocketPilot",
    showcaseType: "glass-interactive",
    accentColor: "from-emerald-500/20 to-transparent"
  },
  {
    id: "roadmate",
    title: "RoadMate",
    category: "Collaborative Learning Platform",
    description: "Learn Together. Progress Together. Build structured learning roadmaps, get automatic progress calculation, pair up via Partner Codes, chat in realtime, manage learning tasks, and save resource links.",
    stack: ["Next.js App Router", "TypeScript", "Tailwind", "MongoDB Atlas", "Socket.io", "Firebase"],
    liveUrl: "https://road-mate-five.vercel.app/",
    repoUrl: "https://github.com/itsxmit1503/RoadMate",
    showcaseType: "flow-diagram",
    accentColor: "from-violet-500/20 to-transparent"
  }
];
