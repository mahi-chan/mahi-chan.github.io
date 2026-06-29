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

export const profile: Profile = {
  name: "Mahi",
  initials: "M",
  role: "AI & Computer Vision Developer",
  roles: [
    "Machine Learning Developer",
    "Computer Vision Enthusiast",
    "Robotics & Autonomy",
    "CSE @ Khulna University",
  ],
  tagline:
    "I build machine-learning and computer-vision systems — from camouflaged-object detection to autonomous racing and real-world detection on microcontrollers. CSE student, mostly writing Python.",
  location: "Khulna, Bangladesh",
  email: "mahi2113@cseku.ac.bd",
  avatarUrl: "https://avatars.githubusercontent.com/u/130440048?v=4",
  githubUrl: "https://github.com/mahi-chan",
  resumeUrl: "",
  about: [
    "I'm a Computer Science & Engineering student focused on AI, machine learning and computer vision. I like teaching machines to see — my main project, camoXpert, detects camouflaged objects, and I've explored mixture-of-experts variants to push it further.",
    "Beyond vision, I tinker with autonomous systems — reinforcement-learning racing agents — and applied builds like a microcontroller-based traffic-rule-violation detector for three-wheelers. Most of my work is in Python, with C++ and JavaScript along the way.",
    "I learn in the open: my experiments, labs and projects all live on GitHub. I care about clean, reproducible code and projects that solve real problems.",
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
      title: "Machine Learning",
      description:
        "Designing, training and fine-tuning models — from detection networks to mixture-of-experts experiments.",
      icon: "brain",
    },
    {
      title: "Computer Vision",
      description:
        "Object detection, segmentation and image processing, including camouflaged-object detection.",
      icon: "eye",
    },
    {
      title: "Robotics & Autonomy",
      description:
        "Reinforcement learning and control — autonomous racing agents and embedded, real-world vision.",
      icon: "bot",
    },
    {
      title: "Software & Tooling",
      description: "Clean, reproducible Python, plus C++ and JavaScript for everything around the models.",
      icon: "code",
    },
  ],
  experience: [
    {
      role: "Computer Vision Research — camoXpert",
      org: "Independent / academic",
      period: "2024 — Present",
      description:
        "Building camoXpert, a deep-learning model for camouflaged object detection, and exploring a model-level mixture-of-experts design to improve it.",
      tags: ["PyTorch", "OpenCV", "Deep Learning"],
      kind: "work",
    },
    {
      role: "Robotics & Applied ML",
      org: "Course & personal projects",
      period: "2023 — Present",
      description:
        "Reinforcement-learning agents for autonomous racing, and a microcontroller-based traffic-rule-violation detector for three-wheelers.",
      tags: ["Reinforcement Learning", "Computer Vision", "Embedded"],
      kind: "work",
    },
    {
      role: "B.Sc. in Computer Science & Engineering",
      org: "Khulna University",
      period: "2022 — Present",
      description:
        "Studying CSE with hands-on labs in image processing, compiler design, databases and algorithms.",
      tags: ["Algorithms", "DBMS", "Compilers"],
      kind: "education",
    },
  ],
  skills: [
    { category: "Languages", items: ["Python", "C++", "JavaScript", "C", "SQL"] },
    { category: "ML & Vision", items: ["PyTorch", "OpenCV", "NumPy", "scikit-learn", "TensorFlow"] },
    { category: "Tools", items: ["Git", "Linux", "Jupyter", "VS Code", "Docker"] },
    { category: "CS foundations", items: ["Algorithms", "DBMS", "Compiler Design", "Image Processing"] },
  ],
  marquee: [
    "Python",
    "PyTorch",
    "OpenCV",
    "NumPy",
    "C++",
    "TensorFlow",
    "scikit-learn",
    "Git",
    "Linux",
    "JavaScript",
    "Jupyter",
    "SQL",
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
  awards: [],
  stats: { repos: 17, stars: 0, followers: 4, following: 3, joined: "2023" },
};
