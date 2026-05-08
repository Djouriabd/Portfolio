// ============================================================
//  DATA — TOOLS & TECH STACK
//  Edit this file to update your tools.
// ============================================================

export interface Tool {
  id: string;
  name: string;
  category: "design" | "development" | "video" | "other";
  icon?: string; // emoji fallback
  stickyColor?: "yellow" | "green" | "pink" | "blue";
  rotation?: number;
}

export const tools: Tool[] = [
  // Design
  { id: "t-01", name: "Figma",        category: "design",       icon: "🎨", stickyColor: "yellow", rotation: -2 },
  { id: "t-02", name: "Illustrator",  category: "design",       icon: "✒️", stickyColor: "yellow", rotation: 1  },
  { id: "t-03", name: "Canva",    category: "design",       icon: "🖼️", stickyColor: "yellow", rotation: -1 },

  // Development
  { id: "t-05", name: "React",        category: "development",  icon: "⚛️", stickyColor: "blue",   rotation: 1  },
  { id: "t-06", name: "Next.js",      category: "development",  icon: "▲",  stickyColor: "blue",   rotation: -1.5 },
  { id: "t-08", name: "CSS / SCSS",   category: "development",  icon: "🎨", stickyColor: "blue",   rotation: -2 },
  { id: "t-09", name: "HTML",         category: "development",  icon: "🌐", stickyColor: "blue",   rotation: 1  },

  // Video
  { id: "t-10", name: "CapCut", category: "video",        icon: "🎬", stickyColor: "pink",   rotation: -1 },

  // Other
  { id: "t-13", name: "Git / GitHub", category: "other",        icon: "🐙", stickyColor: "green",  rotation: 1.5 },
  { id: "t-14", name: "VS Code",      category: "other",        icon: "💻", stickyColor: "green",  rotation: -1  },
];

export const toolCategories = ["design", "development", "video", "other"] as const;
