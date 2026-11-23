import github from "./github.json";

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "globe";
}

export interface Project {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  repoUrl: string;
  homepage?: string | null;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: "code" | "server" | "layout" | "database" | "cpu" | "git" | "brain" | "eye" | "bot";
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  kind: "work" | "education";
}

export interface LanguageStat {
  name: string;
  pct: number;
}

export interface Award {
  title: string;
  org?: string;
  year?: string;
  description?: string;
}

export interface Stats {
  repos: number;
  stars: number;
  followers: number;
  following: number;
  joined: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  roles: string[];
  tagline: string;
  location: string;
  email: string;
  avatarUrl: string;
  githubUrl: string;
  resumeUrl?: string;
  about: string[];
  highlights: { label: string; value: string }[];
  socials: Social[];
  services: Service[];
  experience: Experience[];
  skills: SkillGroup[];
  marquee: string[];
  projects: Project[];
  topLanguages: LanguageStat[];
  awards: Award[];
  stats: Stats;
}

const base: Profile = {
  name: "Mahi",
  initials: "M",
  role: "M.Sc. Student & Graduate Research Assistant",
  roles: [
    "Graduate Research Assistant",
    "Computer Vision Researcher",
    "Reinforcement Learning & Multi-Agent Systems",
    "MLOps",
  ],
  tagline: 
    "M.Sc. CSE student and Graduate Research Assistant at Khulna University. I research computer vision, and build with reinforcement learning, multi-agent LLM systems and MLOps — the point where a model leaves the notebook and has to work for real.",
  location: "Khulna, Bangladesh",
  email: "mahi2113@cseku.ac.bd",
  avatarUrl: "https://avatars.githubusercontent.com/u/130440048?v=4",
  githubUrl: "https://github.com/mahi-chan",
  resumeUrl: "",
  about: [
    "I'm an M.Sc. CSE student and Graduate Research Assistant at Khulna University, previously an AI/ML Engineer at MindPixel BD. My research is in computer vision; outside it I build with reinforcement learning, multi-agent LLM systems and MLOps.",
    "I care most about the point where a model leaves the notebook and has to work for real. I'm now exploring how simulation and reinforcement learning can be used to test public policy before it reaches people.",
    "I learn in the open — my experiments and projects live on GitHub, and I write AI tutorials on a GitHub Pages site. I also organise: the gaming segment and the datathon at the regional CSE fest, and a student Discord community for study resources and game development.",
  ],
  highlights: [
    { label: "Focus", value: "AI / CV" },
    { label: "Main language", value: "Python" },
    { label: "Based in", value: "Bangladesh" },
    { label: "Open to", value: "Roles & research" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/mahi-chan", icon: "github" },
    { label: "Email", href: "mailto:mahi2113@cseku.ac.bd", icon: "mail" },
  ],
  services: [
    {
      title: "Computer Vision",
      description: "Detection and segmentation research, including camouflaged object detection with Mamba and Mixture-of-Experts.",
      icon: "eye",
    },
    {
      title: "Reinforcement Learning",
      description: "Racing and simulation agents in Gymnasium/MuJoCo — SAC, PPO+LSTM, Dreamer and Meta-RL compared head to head.",
      icon: "bot",
    },
    {
      title: "Agents & MLOps",
      description: "Multi-agent systems on LangGraph and MCP, with experiments tracked and monitored in MLflow, Prometheus and Grafana.",
      icon: "brain",
    },
    {
      title: "Web & Backend",
      description: "FastAPI, Django and Next.js services backed by PostgreSQL, Redis and Qdrant.",
      icon: "server",
    },
  ],
  experience: [
    {
      role: "M.Sc. in Computer Science & Engineering",
      org: "Khulna University",
      period: "Jan 2026 — Present",
      description: "Research in machine learning and computer vision, as a Graduate Research Assistant.",
      tags: ["Machine Learning", "Computer Vision"],
      kind: "education",
    },
    {
      role: "AI/ML Engineer",
      org: "MindPixel BD",
      period: "Jun 2025 — Mar 2026",
      description: "",
      tags: [],
      kind: "work",
    },
    {
      role: "Intern",
      org: "Khulna City Corporation",
      period: "Jan 2025 — Mar 2025",
      description: "",
      tags: [],
      kind: "work",
    },
    {
      role: "B.Sc. in Computer Science & Engineering",
      org: "Khulna University",
      period: "Feb 2022 — Mar 2026",
      description: "",
      tags: [],
      kind: "education",
    },
  ],
  skills: [
    { category: "Machine Learning", items: ["Deep Learning", "Computer Vision", "Reinforcement Learning", "Gymnasium", "MuJoCo"] },
    { category: "Agents & MLOps", items: ["LangGraph", "MCP", "MLflow", "Prometheus", "Grafana"] },
    { category: "Web & Backend", items: ["FastAPI", "Django", "Next.js"] },
    { category: "Databases", items: ["PostgreSQL", "Redis", "Qdrant"] },
    { category: "Game Engines", items: ["Unreal Engine 4", "Godot"] },
    { category: "Operating System", items: ["Linux (Ubuntu)"] },
  ],
  marquee: [
    "Python", "PyTorch", "LangGraph", "MCP", "MLflow", "FastAPI", "Django", "Next.js",
    "PostgreSQL", "Redis", "Qdrant", "Unreal Engine", "Godot", "Linux",
  ],
  projects: [
    {
      name: "camoXpert",
      description:
        "Complete integration of camoXpert — a deep-learning model for camouflaged object detection.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["computer-vision", "deep-learning", "pytorch"],
      repoUrl: "https://github.com/mahi-chan/camoXpert",
      homepage: null,
      featured: true,
    },
    {
      name: "autonomous-racing",
      description:
        "Reinforcement-learning experiments for autonomous racing agents — perception and control.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["reinforcement-learning", "robotics", "autonomy"],
      repoUrl: "https://github.com/mahi-chan/autonomous-racing",
      homepage: null,
      featured: true,
    },
    {
      name: "Traffic Violation Detection",
      description:
        "Microcontroller-based system that detects traffic-rule violations for three-wheelers using computer vision.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["computer-vision", "embedded", "microcontroller"],
      repoUrl:
        "https://github.com/mahi-chan/integrated-traffic-rules-violation-detection-for-three-wheelers-using-microcontroller",
      homepage: null,
      featured: true,
    },
    {
      name: "camoXpert_v2",
      description:
        "Second iteration of camoXpert with a model-level mixture-of-experts design for camouflaged object detection.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["computer-vision", "mixture-of-experts"],
      repoUrl: "https://github.com/mahi-chan/camoXpert_v2",
      homepage: null,
    },
    {
      name: "pac-man",
      description: "A Pac-Man build with AI-driven agent behaviour and pathfinding.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["game", "ai", "pathfinding"],
      repoUrl: "https://github.com/mahi-chan/pac-man",
      homepage: null,
    },
    {
      name: "digital-image-processing-lab",
      description: "Hands-on digital image-processing algorithms and experiments.",
      language: "Python",
      stars: 0,
      forks: 0,
      topics: ["image-processing", "opencv"],
      repoUrl: "https://github.com/mahi-chan/digital-image-processing-lab",
      homepage: null,
    },
  ],
  topLanguages: [
    { name: "Python", pct: 85 },
    { name: "C++", pct: 8 },
    { name: "JavaScript", pct: 7 },
  ],
  awards: [
    {
      title: "Graduate Research Assistantship",
      org: "Khulna University",
      year: "2026",
      description: "Awarded a Graduate Research Assistantship.",
    },
    {
      title: "Merit-Based Scholarship",
      org: "Khulna University",
      year: "2022",
      description: "Awarded a scholarship for academic performance.",
    },
  ],
  stats: { repos: 17, stars: 0, followers: 4, following: 3, joined: "2023" },
};

const synced = github as Partial<Profile>;

const cvBlurbs: Record<string, string> = {
  camoxpert: "Camouflaged object detection pairing Mamba state space layers with Mixture-of-Experts; benchmarked against COD methods from 2020–2024.",
  racebrain: "F1 racing agent in Gymnasium/MuJoCo comparing SAC, PPO+LSTM, Dreamer and Meta-RL, with every experiment tracked in an MLOps pipeline.",
  researchops: "Eight agents (literature scout, gap hunter, experiment designer, critic and more) splitting up a research workflow on LangGraph, MCP, FastAPI, Qdrant and MLflow.",
  fleetsim: "Multi-robot warehouse simulation with the robots coordinated through LangGraph.",
};
const key = (n: string) => n.toLowerCase().replace(/[^a-z0-9]/g, "");
const projects = (synced.projects ?? base.projects).map((p) => ({
  ...p,
  description: cvBlurbs[key(p.name)] ?? p.description,
}));
const autoGroups = new Set((synced.skills ?? []).map((g) => g.category));

export const profile: Profile = {
  ...base,
  ...synced,
  projects,
  skills: [...(synced.skills ?? []), ...base.skills.filter((g) => !autoGroups.has(g.category))],
};
