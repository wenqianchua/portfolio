export interface ApproachStep {
  step: number;
  title: string;
  body: string;
}

export interface ImageGridItem {
  src: string;
  caption: string;
}

export interface Callout {
  emoji: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  challenge: string;
  pullQuote: string;
  approach: ApproachStep[];
  imageGrid: ImageGridItem[];
  learned: string[];
  callout: Callout;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mosaik",
    challenge:
      "Agencies rarely slow down long enough to do research well. At Mosaik, I was brought in to help close the gap between what clients asked for and what their users actually needed — across verticals I had to learn fast.",
    pullQuote:
      "The brief is never the brief. The real problem is always one conversation deeper.",
    approach: [
      {
        step: 1,
        title: "Immerse in each client's world",
        body: "Before touching Figma, I spent time with each client's users and stakeholders to understand the real constraints — not the ones in the brief.",
      },
      {
        step: 2,
        title: "Synthesise fast, share early",
        body: "I built lightweight research readouts that non-designers could act on within a week, not a month.",
      },
      {
        step: 3,
        title: "Design to the constraint",
        body: "Agency timelines are real. I learned to make high-quality decisions under pressure and advocate for the minimum viable research needed.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/mosaik-01.jpg", caption: "Discovery workshop output" },
      { src: "/images/portfolio/mosaik-02.jpg", caption: "Affinity mapping session" },
      { src: "/images/portfolio/mosaik-03.jpg", caption: "Final prototype handoff" },
    ],
    learned: [
      "Speed and quality aren't opposites — they require different rituals.",
      "Client trust is built by being honest about what the research can't tell you.",
      "Good agency design means leaving behind something the team can maintain.",
    ],
    callout: {
      emoji: "🏃",
      text: "I shipped more in 12 months here than in any other role. The pressure was real, and so were the learnings.",
    },
  },
  {
    slug: "m2m",
    challenge:
      "M2M exists to create human connection — but their internal processes made it hard to scale that mission without burning out the volunteers who ran it. The design challenge was less about a product and more about a system.",
    pullQuote:
      "The people running this organisation cared deeply. My job was to make sure the structure cared back.",
    approach: [
      {
        step: 1,
        title: "Shadow the volunteers",
        body: "I spent time with the people doing the work, not just the leadership. The pain was mostly invisible until you were in the room.",
      },
      {
        step: 2,
        title: "Map the service, not the app",
        body: "The solution wasn't a better interface — it was a clearer flow of who does what, when, and why.",
      },
      {
        step: 3,
        title: "Co-design with the community",
        body: "Every design decision went back to the people it would affect. That slowed things down in the best way.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/m2m-01.jpg", caption: "Service blueprint in progress" },
      { src: "/images/portfolio/m2m-02.jpg", caption: "Community co-design session" },
      { src: "/images/portfolio/m2m-03.jpg", caption: "Volunteer journey map" },
    ],
    learned: [
      "Non-profit doesn't mean non-complex. The constraints are just different.",
      "The community holds the answers — your job is to create conditions for them to surface.",
      "Service design is humbling. There's always more of the system you haven't seen yet.",
    ],
    callout: {
      emoji: "🤝",
      text: "This project reminded me why I got into design. Not for the outputs, but for the conversations that make them possible.",
    },
  },
  {
    slug: "carrots-lab",
    challenge:
      "Carrots Lab was building in AI before it was everywhere. The challenge was doing research fast enough to be useful in a startup cycle — without sacrificing the rigour that makes research worth doing.",
    pullQuote:
      "In a startup, the window for research is short. You learn to open it fast and close it cleanly.",
    approach: [
      {
        step: 1,
        title: "Embed in the sprint",
        body: "I matched my research cadence to the product cycle rather than working around it. Weekly insights, not monthly reports.",
      },
      {
        step: 2,
        title: "Prototype to learn, not to show",
        body: "Early prototypes were conversation starters with users — rough on purpose, specific in what they were testing.",
      },
      {
        step: 3,
        title: "Build the system, not just the screen",
        body: "I spent time establishing design language and component logic so the team could move faster without me in every decision.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/carrots-01.jpg", caption: "Research synthesis board" },
      { src: "/images/portfolio/carrots-02.jpg", caption: "Early wireframe explorations" },
      { src: "/images/portfolio/carrots-03.jpg", caption: "Design system foundations" },
    ],
    learned: [
      "Good startup research is ruthlessly prioritised. Not everything can be tested.",
      "AI products need even more user grounding, not less. The tech moves fast; people don't.",
      "System thinking from day one saves weeks later.",
    ],
    callout: {
      emoji: "🥕",
      text: "Startups are where you learn what you're actually made of as a designer. I found out I'm pretty good at ambiguity.",
    },
  },
  {
    slug: "vandewiele",
    challenge:
      "Vandewiele's internal sales team was using a backoffice CRM that hadn't kept pace with the complexity of their work. The interface was cluttered, the data flows were opaque, and the team had workarounds for everything.",
    pullQuote:
      "Enterprise UX is about respect — for the expertise of the people using the tool, and for the complexity of what they do.",
    approach: [
      {
        step: 1,
        title: "Learn the domain",
        body: "Industrial machinery sales is specific. I spent the first weeks just listening — not to find problems, but to understand the language.",
      },
      {
        step: 2,
        title: "Audit the workarounds",
        body: "Every sticky note and spreadsheet next to the CRM was a design failure. I catalogued them all before proposing anything.",
      },
      {
        step: 3,
        title: "Design for clarity, not novelty",
        body: "Neumorphic styling was the visual direction, but the real work was information architecture — making complex data legible at a glance.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/vandewiele-01.jpg", caption: "Legacy interface audit" },
      { src: "/images/portfolio/vandewiele-02.jpg", caption: "IA restructure mapping" },
      { src: "/images/portfolio/vandewiele-03.jpg", caption: "Final neumorphic UI" },
    ],
    learned: [
      "Domain expertise in the room changes everything. Never design without it.",
      "Neumorphic design is beautiful and unforgiving — accessibility requires extra attention.",
      "The best enterprise UX is invisible. Users should feel capable, not impressed.",
    ],
    callout: {
      emoji: "🏭",
      text: "This was my first fully enterprise project. I underestimated the complexity and overdelivered because of it.",
    },
  },
  {
    slug: "jora",
    challenge:
      "Jora connects millions of people to jobs across Asia-Pacific. Working on a platform at that scale means your design decisions affect people in real, material ways — job offers, income, livelihoods.",
    pullQuote:
      "At scale, edge cases aren't edge cases anymore. They're millions of people.",
    approach: [
      {
        step: 1,
        title: "Root every decision in data",
        body: "With millions of sessions to learn from, intuition had to be backed. I worked closely with data teams to validate direction before committing.",
      },
      {
        step: 2,
        title: "Design for the whole spectrum",
        body: "Jora's users range from first-time job seekers to experienced professionals. The design had to work for both without condescending to either.",
      },
      {
        step: 3,
        title: "Ship, measure, iterate",
        body: "Features went through careful A/B testing. I learned to separate what I thought would work from what the data showed.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/jora-01.jpg", caption: "User research synthesis" },
      { src: "/images/portfolio/jora-02.jpg", caption: "Exploration concepts" },
      { src: "/images/portfolio/jora-03.jpg", caption: "A/B test results review" },
    ],
    learned: [
      "Scale is humbling. Your assumptions don't survive contact with a million users.",
      "Cross-functional alignment at product companies is a design skill in itself.",
      "The most impactful changes are often the least glamorous.",
    ],
    callout: {
      emoji: "🌏",
      text: "Jora taught me how to operate inside a large organisation without losing my design voice.",
    },
  },
  {
    slug: "little-big-futures",
    challenge:
      "What does it mean to design for a future that doesn't exist yet? Little Big Futures was an exploration of speculative design and digital fabrication — building artefacts from imagined worlds to ask better questions about this one.",
    pullQuote:
      "Speculative design isn't about prediction. It's about expanding the space of what people think is possible.",
    approach: [
      {
        step: 1,
        title: "Research futures, not trends",
        body: "I started with futures studies methodology — mapping signals, drivers, and scenarios before touching any materials.",
      },
      {
        step: 2,
        title: "Make the future tangible",
        body: "Digital fabrication turned abstract scenarios into physical artefacts people could hold, question, and react to.",
      },
      {
        step: 3,
        title: "Exhibit and listen",
        body: "The exhibition was itself a research method. Watching people interact with the artefacts told me more than any survey could.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/little-big-futures-01.jpg", caption: "Futures mapping workshop" },
      { src: "/images/portfolio/little-big-futures-02.jpg", caption: "Fabrication process" },
      { src: "/images/portfolio/little-big-futures-03.jpg", caption: "Exhibition installation" },
    ],
    learned: [
      "Design can be a form of argument — not just a solution.",
      "Physical artefacts create conversations that screens can't.",
      "The future is more useful as a provocation than a prediction.",
    ],
    callout: {
      emoji: "🔮",
      text: "This project expanded my idea of what design can do. I came back to product work with questions I hadn't thought to ask before.",
    },
  },
  {
    slug: "game-uxr",
    challenge:
      "Forspoken launched to polarising reviews in 2023. Players and critics disagreed on almost everything. As a UX researcher and a gamer, I wanted to understand the disconnect — not through opinion, but through structured inquiry.",
    pullQuote:
      "Games are one of the most complex UX systems humans have built. Studying them seriously changes how you see everything else.",
    approach: [
      {
        step: 1,
        title: "Play with intention",
        body: "I played Forspoken as both a player and a researcher — keeping session logs, annotating moments of friction, and noting emotional responses.",
      },
      {
        step: 2,
        title: "Apply UX frameworks to game systems",
        body: "I mapped the game's onboarding, feedback loops, and narrative scaffolding against UX heuristics — finding the gaps critics felt but couldn't name.",
      },
      {
        step: 3,
        title: "Synthesise across the player spectrum",
        body: "I gathered reactions from players across experience levels to understand where the disconnect was systemic vs. personal preference.",
      },
    ],
    imageGrid: [
      { src: "/images/game-uxr/forspoken-01.png", caption: "Session log annotations" },
      { src: "/images/game-uxr/forspoken-02.png", caption: "Heuristic evaluation mapping" },
      { src: "/images/game-uxr/forspoken-03.png", caption: "Player experience spectrum" },
    ],
    learned: [
      "Games surface UX problems that enterprise software hides behind tolerance.",
      "Polarising reactions are almost always a sign of misaligned expectations, not bad design.",
      "Play is serious research material. Treat it that way.",
    ],
    callout: {
      emoji: "🎮",
      text: "This is ongoing because the questions keep getting better. Forspoken was the starting point, not the destination.",
    },
  },
];
