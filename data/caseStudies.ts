export interface ApproachStep {
  step: number
  title: string
  body: string
}

export interface ImageGridItem {
  src: string
  caption: string
}

export interface Callout {
  emoji: string
  text: string
}

export interface CaseStudy {
  slug: string
  challenge: string
  pullQuote: string
  approach: ApproachStep[]
  imageGrid: ImageGridItem[]
  learned: string[]
  callout: Callout
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mosaik",
    challenge:
      "Agency work is a different skill. You're designing for clients you didn't choose, on timelines you didn't set, for users you've never met. Mosaik taught me how to do good work inside those constraints — and when to push back.",
    pullQuote: "Constraints are just a different kind of brief.",
    approach: [
      {
        step: 1,
        title: "Client intake",
        body: "Each project started with a structured discovery: business goals, user assumptions, success metrics, timeline reality.",
      },
      {
        step: 2,
        title: "Research lite",
        body: "Not every brief allows for full research cycles. I learned to do meaningful research in compressed time — desk research, proxy users, competitor analysis, heuristic review.",
      },
      {
        step: 3,
        title: "Design and ship",
        body: "Figma-first. Component systems. Working in a shared library. Handoff that developers could actually use.",
      },
      {
        step: 4,
        title: "Reflection",
        body: "What I learned most at Mosaik: the relationship between the designer and the brief matters as much as the design itself.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/mosaik-01.jpg", caption: "Discovery workshop output" },
      { src: "/images/portfolio/mosaik-02.jpg", caption: "Component library in Figma" },
      { src: "/images/portfolio/mosaik-03.jpg", caption: "Final prototype handoff" },
    ],
    learned: [
      "Speed and quality are not opposites — but they require different strategies. I got faster at making decisions, and better at knowing which ones to revisit.",
      "Working across multiple clients in parallel sharpened my ability to context-switch without losing the thread of each project.",
    ],
    callout: {
      emoji: "🏢",
      text: "The best training for a young designer is probably an agency. Nothing else exposes you to as many problem types as fast.",
    },
  },

  {
    slug: "m2m",
    challenge:
      "M2M is built around a simple, radical premise: human connection matters, and it can be designed for. Working with a non-profit means the brief isn't a product feature or a revenue target — it's a person's sense of belonging.",
    pullQuote: "Design for the margin, and you design for everyone.",
    approach: [
      {
        step: 1,
        title: "Community research",
        body: "Interviews with community members to understand moments of connection and moments of isolation. Where does the system fail people?",
      },
      {
        step: 2,
        title: "Service mapping",
        body: "Mapped the full service journey — not just the app touchpoints but the human moments around them.",
      },
      {
        step: 3,
        title: "Co-design",
        body: "Ran participatory design sessions with community members. The people closest to the problem have the most useful ideas.",
      },
      {
        step: 4,
        title: "Delivery",
        body: "Prototypes, documentation, and handoff to the M2M team.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/m2m-01.jpg", caption: "Service blueprint in progress" },
      { src: "/images/portfolio/m2m-02.jpg", caption: "Community co-design session" },
      { src: "/images/portfolio/m2m-03.jpg", caption: "Volunteer journey map" },
    ],
    learned: [
      "Non-profit design work radically recalibrated my instincts about what 'success' means. Engagement metrics don't capture belonging.",
      "Participatory design is slower. It's also more accurate. And the people you design with feel it.",
    ],
    callout: {
      emoji: "🤝",
      text: "This project reminded me why I got into design in the first place.",
    },
  },

  {
    slug: "carrots-lab",
    challenge:
      "Carrots Lab is a startup lab — which means the product is always half-formed, the user is always hypothetical, and the timeline is always yesterday. My job was to bring research and design rigour into an environment that moves faster than either.",
    pullQuote: "The best research isn't the most thorough — it's the most timely.",
    approach: [
      {
        step: 1,
        title: "Research in sprints",
        body: "Weekly research loops: question → method → insight → decision. No waiting for a 'research phase'. Research as continuous input.",
      },
      {
        step: 2,
        title: "Synthesis as design",
        body: "Insight frameworks and synthesis artefacts became design tools — not deliverables for a report, but shared understanding for the team.",
      },
      {
        step: 3,
        title: "Rapid prototyping",
        body: "Lo-fi → feedback → iterate. Sometimes the same day.",
      },
      {
        step: 4,
        title: "System thinking",
        body: "Even in early-stage products, I advocated for component systems. The cost of inconsistency compounds fast in startups.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/carrots-01.jpg", caption: "Research synthesis board" },
      { src: "/images/portfolio/carrots-02.jpg", caption: "Early wireframe explorations" },
      { src: "/images/portfolio/carrots-03.jpg", caption: "Design system foundations" },
    ],
    learned: [
      "Startups don't have time for research theatre. Every research activity has to earn its place by informing a real decision.",
      "Moving fast doesn't mean skipping thinking. It means making thinking faster.",
    ],
    callout: {
      emoji: "🥕",
      text: "This is where I learned to make research feel useful to people who've never valued it before.",
    },
  },

  {
    slug: "vandewiele",
    challenge:
      "Vandewiele makes industrial weaving machinery — precision engineering, global scale, deeply technical sales process. Their backoffice CRM had grown organically for years. It worked. Barely. The users were experienced, expert, and very frustrated. My brief was to redesign without breaking what they already knew.",
    pullQuote: "Good enterprise UX isn't about making things pretty. It's about making expertise feel effortless.",
    approach: [
      {
        step: 1,
        title: "Immersion",
        body: "Two weeks of shadowing. Watching sales reps move through their day. Listening to the workarounds they'd built. Mapping the cognitive load.",
      },
      {
        step: 2,
        title: "Problem framing",
        body: "Identified 47 distinct task types. Clustered into 6 pain areas. The biggest: information retrieval — finding the right order, the right client, the right spec — across disconnected data.",
      },
      {
        step: 3,
        title: "Design language",
        body: "Explored neumorphic design as a middle ground between flat (too clinical for an industrial brand) and skeuomorphic (too heavy). The tactile quality of neumorphism suited a company that makes things.",
      },
      {
        step: 4,
        title: "Validation",
        body: "3 rounds of prototype testing with actual Vandewiele sales reps. Critical finding: contrast and state clarity had to be rigorously tested — neumorphism can fail badly for users with visual differences.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/vandewiele-01.jpg", caption: "Legacy interface audit" },
      { src: "/images/portfolio/vandewiele-02.jpg", caption: "IA restructure mapping" },
      { src: "/images/portfolio/vandewiele-03.jpg", caption: "Final neumorphic UI" },
      { src: "/images/portfolio/vandewiele-team.jpg", caption: "Vandewiele sales team walkthrough" },
    ],
    learned: [
      "Enterprise users have muscle memory built over years. Any redesign has to honour those patterns first — you earn the right to change things slowly.",
      "Neumorphic design is polarising. The lighting direction, shadow depth, and contrast ratios are not stylistic choices — they're functional requirements. I spent more time on accessibility in this project than any other.",
      "The most useful feedback came 20 minutes into a session, not in the first five. The initial responses were polite. Then people started telling me the truth.",
    ],
    callout: {
      emoji: "🏭",
      text: "This is still the most technically complex UX challenge I've worked on. And the project I return to when I want to remind myself why research before design isn't optional.",
    },
  },

  {
    slug: "jora",
    challenge:
      "Jora is a job search platform serving millions of users across Asia-Pacific. At that scale, a 1% UX improvement affects hundreds of thousands of people. The stakes of small decisions are enormous.",
    pullQuote: "At scale, there are no minor interactions.",
    approach: [
      {
        step: 1,
        title: "Understanding the user",
        body: "Job seekers have a specific emotional state: hope, anxiety, urgency. The design has to hold all of that.",
      },
      {
        step: 2,
        title: "Research and insight",
        body: "Analysed user behaviour data alongside qualitative research. Where are people dropping off? What are they actually looking for?",
      },
      {
        step: 3,
        title: "Iteration at scale",
        body: "A/B testing is a design tool at this scale, not an afterthought. Learned to design for testability.",
      },
      {
        step: 4,
        title: "Cross-functional collaboration",
        body: "Working inside a large product team at SEEK Group — alignment, documentation, and communication as core skills.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/jora-01.jpg", caption: "User research synthesis" },
      { src: "/images/portfolio/jora-02.jpg", caption: "Exploration concepts" },
      { src: "/images/portfolio/jora-03.jpg", caption: "A/B test results review" },
    ],
    learned: [
      "Data tells you what is happening. Research tells you why. You need both — and they have to talk to each other.",
      "Designing for Asia-Pacific means designing for incredible user diversity — devices, contexts, languages, literacies.",
    ],
    callout: {
      emoji: "💼",
      text: "Jora taught me that good UX is invisible to the people it's helping, and only visible when it's missing.",
    },
  },

  {
    slug: "little-big-futures",
    challenge:
      "Speculative design asks a question conventional design doesn't: what if we design not for the world as it is, but as it might be? Little Big Futures was an exploration of children's futures — built with digital fabrication, research, and imagination.",
    pullQuote: "The future isn't a destination. It's a design decision.",
    approach: [
      {
        step: 1,
        title: "Futures research",
        body: "Explored signals of change in education, childhood, and technology. Mapped trajectories into possible futures.",
      },
      {
        step: 2,
        title: "Speculative scenarios",
        body: "Developed three distinct future scenarios and designed artefacts from those futures — objects, interfaces, experiences.",
      },
      {
        step: 3,
        title: "Fabrication",
        body: "Used digital fabrication tools to make the speculative real. Artefacts that you could hold made the futures feel less abstract.",
      },
      {
        step: 4,
        title: "Exhibition",
        body: "Shown publicly. Visitors engaged with the artefacts and reacted to the futures they represented.",
      },
    ],
    imageGrid: [
      { src: "/images/portfolio/little-big-futures-01.jpg", caption: "Futures mapping workshop" },
      { src: "/images/portfolio/little-big-futures-02.jpg", caption: "Fabrication process" },
      { src: "/images/portfolio/little-big-futures-exhibit.jpg", caption: "Exhibition installation" },
    ],
    learned: [
      "Making speculation tangible changes how people engage with it. An object from a possible future is more powerful than a slide about it.",
    ],
    callout: {
      emoji: "🔮",
      text: "Speculative design is the most honest form of design research. It admits that we don't know what's coming — and designs with that.",
    },
  },

  {
    slug: "game-uxr",
    challenge:
      "Forspoken was a PlayStation exclusive that divided players and critics alike. The magic traversal system was genuinely innovative — but reviewers said the story felt distant, the protagonist hard to connect with. I wanted to understand why. Not as a critic — as a UX researcher. What's happening in a player's head when a game loses them before the story lands?",
    pullQuote: "How people play tells us everything about how people live.",
    approach: [
      {
        step: 1,
        title: "Protocol design",
        body: "Recruited 7 participants with varied gaming backgrounds. Designed 2-hour play sessions with a specific focus: the first 20 minutes, the first major traversal unlock, and the first emotional beat in the narrative.",
      },
      {
        step: 2,
        title: "Session structure",
        body: "Retrospective think-aloud: participants played freely, then walked me back through key moments. I was listening for what they noticed — and what they didn't.",
      },
      {
        step: 3,
        title: "Analysis",
        body: "Used affinity mapping to find patterns across sessions. Synthesised into a three-part framework: Curiosity · Agency · Attachment. Players who felt curious got engaged. Players who felt agency got invested. Only then could attachment form.",
      },
      {
        step: 4,
        title: "Insight translation",
        body: "Translated findings into design recommendations — framed not as game design notes but as UX principles applicable beyond gaming.",
      },
    ],
    imageGrid: [
      { src: "/images/game-uxr/forspoken-01.png", caption: "Session log annotations" },
      { src: "/images/game-uxr/forspoken-02.png", caption: "Affinity map — Curiosity · Agency · Attachment" },
      { src: "/images/game-uxr/forspoken-03.png", caption: "Heuristic evaluation mapping" },
      { src: "/images/game-uxr/forspoken-hero.png", caption: "Forspoken traversal system" },
    ],
    learned: [
      "The first 20 minutes of a game are its onboarding. Forspoken front-loads lore and cutscenes before players have any agency — and players who haven't yet 'earned' the story mentally opt out of it.",
      "Players who discovered their own path through the traversal system — even if they did the same thing as everyone else — reported significantly higher enjoyment. The feeling of discovery matters more than the discovery itself.",
      "This research changed how I think about product onboarding entirely. Capability before attachment. Give people a win before you ask for investment.",
    ],
    callout: {
      emoji: "🎮",
      text: "Gaming is the most honest stress test of a design system I know. Players don't read documentation. They just try things. Watching them is revelatory.",
    },
  },
]
