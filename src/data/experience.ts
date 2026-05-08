// ============================================================
//  DATA — EXPERIENCE
//  Edit this file to update your work / education history.
// ============================================================

export interface ExperienceItem {
  id: string;
  type: "work" | "education" | "freelance";
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  progress?: number; // percentage width for the visual bar (0-100)
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-01",
    type: "freelance",
    title: "UI/UX & Graphic Designer",
    company: "Organizer on Club",
    period: "2024 — 2025",
    description: "Designing events identities, UI designs and digital experiences for participants for multiple events.",
    highlights: [
      "UI/UX for web and mobile applications",
      "Social media visual content creation",
      "Organizing events"
    ],
    progress: 85,
  },
  {
    id: "exp-02",
    type: "freelance",
    title: "Chef of the Design Department",
    company: "Organizer on Club",
    period: "2025 — Present",
    description: "Directing and managing the design department, ensuring the quality of the design work.",
    highlights: [
      "UI/UX for web and mobile applications",
      "Social media visual content creation",
      "Organizing events"
    ],
    progress: 72,
  },
  {
    id: "exp-03",
    type: "freelance",
    title: "Video Editor",
    company: "Creative Projects",
    period: "2024 — Present",
    description: "Editing short films, reels and commercials for brands and content creators.",
    highlights: [
      "Color grading and correction",
      "Social media content (Reels, Shorts)"
    ],
    progress: 60,
  },
  {
    id: "exp-04",
    type: "education",
    title: "Computer Science Degree",
    company: "University",
    period: "2023 — Present",
    description: "Bachelor's degree in Computer Science with a focus on web technologies, Machine Learning and software design.",
    highlights: [],
    progress: 85,
  },
];
