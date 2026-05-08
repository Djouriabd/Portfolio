// ============================================================
//  DATA — MY THOUGHTS
//  Edit this file to add your personal thoughts, quotes,
//  or short blog-like journal entries.
// ============================================================

export interface Thought {
  id: string;
  quote?: string;    // A short quote displayed large
  title: string;
  body: string;
  date?: string;
  stickyColor?: "yellow" | "green" | "pink" | "blue";
  rotation?: number;
  isHandwritten?: boolean; // renders in italic cursive style
}

export const thoughts: Thought[] = [
  {
    id: "th-01",
    quote: "Design is not just what it looks like — it's how it works.",
    title: "On Design",
    body: "Every pixel has a purpose. I believe great design lives at the intersection of beauty and function — where aesthetics serve the user, not the ego of the designer.",
    date: "2025",
    stickyColor: "yellow",
    rotation: -1.5,
    isHandwritten: false,
  },
  {
    id: "th-02",
    quote: "Code is poetry written for machines, but read by humans.",
    title: "On Development",
    body: "Writing clean, readable code is an art form. The best code tells a story — one that the next developer can follow without getting lost.",
    date: "2026",
    stickyColor: "blue",
    rotation: 2,
    isHandwritten: false,
  },
  {
    id: "th-03",
    title: "A little reminder",
    body: "Every great designer was once a beginner who refused to give up. Keep learning, keep creating, keep pushing.",
    stickyColor: "green",
    rotation: -2,
    isHandwritten: true,
  },
  {
    id: "th-04",
    quote: "Motion tells stories that static images cannot.",
    title: "On Video",
    body: "A great edit doesn't just cut clips together — it creates rhythm, emotion and meaning. Timing is everything.",
    date: "2024",
    stickyColor: "pink",
    rotation: 1,
    isHandwritten: false,
  },
];
