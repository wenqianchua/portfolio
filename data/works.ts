export interface WorkItem {
  id: number;
  slug: string;
  title: string;
  client: string;
  spectrum: string;
  year: string;
  tags: string[];
  shortDescription: string;
  teaser: string;
  coverColor: string;
  coverImage?: string;
  behanceUrl?: string;
  darkTheme: boolean;
}

export const works: WorkItem[] = [
  {
    id: 1,
    slug: "mosaik",
    title: "Mosaik",
    client: "Mosaik Agency",
    spectrum: "Agency Work",
    year: "2022–2023",
    tags: ["UX Research", "Product Design", "Agency", "Multi-client"],
    shortDescription:
      "Full-service UX and product design at a design agency — end-to-end delivery across multiple client verticals.",
    teaser:
      "What does it take to do good design inside a fast-paced agency? This is the work I'm most proud of shipping under pressure.",
    coverColor: "bg-amber-50",
    coverImage: "/images/portfolio/mosaik-team.jpg",
    darkTheme: false,
  },
  {
    id: 2,
    slug: "m2m",
    title: "M2M",
    client: "M2M Non-Profit",
    spectrum: "Social Impact",
    year: "2021–2022",
    tags: ["Non-Profit", "Research", "Service Design", "Community"],
    shortDescription:
      "Research and service design for a non-profit built around human connection and community resilience.",
    teaser:
      "Designing for a non-profit means every decision has to be defended — not to stakeholders, but to the people you're serving.",
    coverColor: "bg-teal-50",
    darkTheme: false,
  },
  {
    id: 3,
    slug: "carrots-lab",
    title: "Carrots Lab",
    client: "Carrots Lab",
    spectrum: "Product Design",
    year: "2023",
    tags: ["Product Design", "UX Research", "Startup", "AI"],
    shortDescription:
      "End-to-end product design at a startup lab — research synthesis, rapid iteration, and system thinking.",
    teaser:
      "Startups move fast. Research has to keep up. Here's how I made that work.",
    coverColor: "bg-orange-50",
    darkTheme: false,
  },
  {
    id: 4,
    slug: "vandewiele",
    title: "Vandewiele Backoffice",
    client: "Vandewiele NV",
    spectrum: "Enterprise UX",
    year: "2021",
    tags: ["Enterprise UX", "UI Design", "Neumorphic", "CRM", "Belgium"],
    shortDescription:
      "Redesigning a complex backoffice CRM for a Belgian industrial machinery company — neumorphic design, complex data flows.",
    teaser:
      "The hardest design problems aren't on consumer apps. They're in the tools people use every single day at work.",
    coverColor: "bg-slate-50",
    coverImage: "/images/portfolio/vandewiele-team.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/127220179/Sales-App-Neumorphic-Style-Interface",
    darkTheme: false,
  },
  {
    id: 5,
    slug: "jora",
    title: "Jora",
    client: "Jora (SEEK Group)",
    spectrum: "Product Design",
    year: "2023–2024",
    tags: ["Product Design", "Job Platform", "Research", "Global"],
    shortDescription:
      "Product design contributions to Jora — a global job search platform operating across Asia-Pacific.",
    teaser:
      "At the scale of millions of job seekers, small UX decisions carry enormous weight.",
    coverColor: "bg-blue-50",
    darkTheme: false,
  },
  {
    id: 6,
    slug: "little-big-futures",
    title: "Little Big Futures",
    client: "Independent / Academic",
    spectrum: "Speculative Design",
    year: "2023",
    tags: ["Speculative Design", "Digital Fabrication", "Research", "Futures"],
    shortDescription:
      "A speculative design and digital fabrication project exploring futures — exhibited and documented.",
    teaser:
      "What happens when you design not for now, but for a world that doesn't exist yet?",
    coverColor: "bg-violet-50",
    coverImage: "/images/portfolio/little-big-futures-exhibit.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/172799943/Little-Big-Futures",
    darkTheme: false,
  },
  {
    id: 7,
    slug: "game-uxr",
    title: "Game UXR — Forspoken",
    client: "Personal Research",
    spectrum: "Research & Play",
    year: "2023–Ongoing",
    tags: [
      "UX Research",
      "Gaming",
      "PlayStation",
      "Forspoken",
      "Speculative",
    ],
    shortDescription:
      "A UX research project into PlayStation's Forspoken — using gaming as a lens for understanding narrative, player agency, and immersion.",
    teaser:
      "Forspoken got polarising reviews. I wanted to know why — not as a critic, but as a UX researcher.",
    coverColor: "bg-zinc-900",
    coverImage: "/images/game-uxr/forspoken-hero.png",
    darkTheme: true,
  },
];
