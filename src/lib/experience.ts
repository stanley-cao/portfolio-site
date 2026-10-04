export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Super.com",
    dates: "Sep 2026 – Present",
    location: "Toronto, ON",
    summary:
      "Building booking and checkout features for a travel savings platform used by 30M+ people.",
  },
  {
    role: "Software Engineer Intern",
    company: "Morphace",
    dates: "Oct 2025 – Dec 2025",
    location: "Toronto, ON",
    summary:
      "Led full-stack development of an iOS community app, from SwiftUI front end to FastAPI and PostgreSQL back end.",
  },
  {
    role: "Software Engineer Intern",
    company: "Western University (Earth Sciences)",
    dates: "May 2025 – Aug 2025",
    location: "London, ON",
    summary:
      "Built web pages and reusable components for the Earth Sciences department's Angular site.",
  },
  {
    role: "Software Engineer Intern",
    company: "Wouessi Inc",
    dates: "Feb 2025 – Apr 2025",
    location: "Toronto, ON",
    summary:
      "Built reusable React components and data tables for client-facing web products.",
  },
  {
    role: "Data Engineer Intern",
    company: "Johnson & Johnson",
    dates: "May 2024 – Aug 2024",
    location: "Toronto, ON",
    summary:
      "Applied computer vision and dashboard automation to speed up internal data review.",
  },
  {
    role: "Software Engineer Intern",
    company: "Prabbis Consulting",
    dates: "Mar 2024 – May 2024",
    location: "Halifax, NS",
    summary:
      "Helped migrate Proen AI's website from Laravel to Next.js as part of an Agile team.",
  },
];

export const education = [
  {
    school: "University of Toronto",
    degree: "MSc in Applied Computing, Artificial Intelligence",
    dates: "Expected Jun 2028",
    detail: "Neural Networks & Deep Learning, Machine Learning, Computational Imaging, Advanced Data Systems",
  },
  {
    school: "Western University",
    degree: "Honours Specialization in Computer Science",
    dates: "Oct 2025",
    detail: "",
  },
];

export const skills = [
  {
    title: "ML / AI",
    items: "PyTorch, PyTorch Lightning, scikit-learn, YOLOv8, LLMs, RAG, pgvector, AI Agents",
  },
  {
    title: "Languages",
    items: "Python, Java, C/C++, C#, JavaScript, TypeScript, SQL, HTML, CSS, R, Swift",
  },
  {
    title: "Frameworks & Libraries",
    items: "React, Next.js, Angular, Node.js, Prisma, FastAPI, SwiftUI",
  },
  {
    title: "Databases & Cloud",
    items: "PostgreSQL, SQL, Supabase, AWS, Docker, Heroku",
  },
  {
    title: "Tools",
    items: "Git/GitHub, Claude Code, Cursor, Figma, Tableau",
  },
  {
    title: "Concepts & Methodologies",
    items: "Agile Development, CI/CD, UI/UX Design",
  },
  {
    title: "Other",
    items: "Systems Programming, Object-Oriented Design, Data Visualization",
  },
];
