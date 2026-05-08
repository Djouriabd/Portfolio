// ============================================================
//  DATA — PROJECTS
//  Edit this file to update your portfolio projects.
//  Each project appears as a photo-pin card on the right page.
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string; // path to image in /public/images/
  imageColor?: string; // placeholder bg color if no image
  stickyColor?: "yellow" | "green" | "pink" | "blue";
  rotation?: number; // slight tilt in degrees (-5 to 5)
}

// ---- PAGE 1 of Projects (Page 3 of notebook) ---------------
export const projectsPage1: Project[] = [
  {
    id: "proj-01",
    title: "ISTACHERNI",
    description: "UI/UX design for ISTACHERNI, a platform for lawyers and merchants.",
    tags: ["Branding", "UI/UX", "Figma"],
    link: "https://www.figma.com/design/CVVdM0ZqV2vKSYoZnElcrd/ISTECHERNI?node-id=0-1&t=tHXKVetnloqTmpoJ-1",
    image: "/images/image1.png", 
    imageColor: "#A8C8DC",
    stickyColor: "yellow",
    rotation: -2,
  },
  {
    id: "proj-02",
    title: "ELEVATE",
    description: "UI/UX design for ELEVATE, an platform for registering on designathon.",
    tags: ["UI/UX", "Figma", "Mobile","Website"],
    link: "https://www.figma.com/design/KmAczmD5LTxQy76DW9on2a/elevate-ui-ux?node-id=0-1&t=DyZTyCMyhquZuaGr-1",
    image: "/images/image2.png",
    imageColor: "#D7D4B1",
    stickyColor: "green",
    rotation: 1.5,
  },
  {
    id: "proj-03",
    title: "ELEVATE Posts",
    description: "Social media posts for ELEVATE, an announcement for registering on designathon.",
    tags: ["Social Media", "Posters", "Figma"],
    link: "https://www.figma.com/design/3QrLX4LHOHcle18ZEOfMmh/elevate-2?node-id=0-1&t=sBkrUczZl9A7YhzH-1",
    image: "/images/image3.png",
    imageColor: "#F2D5CE",
    stickyColor: "pink",
    rotation: -1,
  },
  {
    id: "proj-04",
    title: "Workshops Ramadan 2026",
    description: "Social media kit for workshops including posts and stories.",
    tags: ["Social Media", "Posters", "Figma"],
    link: "https://www.figma.com/design/j6AZqAeRhqYSdNe3kPmZeH/workshops?node-id=0-1&t=8S30kt0VaddClZ4H-1",
    image: "/images/image4.png",
    imageColor: "#C9DFF0",
    stickyColor: "blue",
    rotation: 2,
  },
];

// ---- PAGE 2 of Projects (Page 4 of notebook) ---------------
export const projectsPage2: Project[] = [
  {
    id: "proj-05",
    title: "IGNITE Participant Guide",
    description: "Participant guide for IGNITE, an ideathon event organized by NCS Club.",
    tags: ["Graphic Design", "Figma"],
    link: "https://www.figma.com/design/7LvfB3NMUg454hpRtqVtkE/ignite-participant-guide?node-id=0-1&t=CMZRHWNnDi8zljsY-1",
    image: "/images/image5.png",
    imageColor: "#B8D4C0",
    stickyColor: "green",
    rotation: 1,
  },
  {
    id: "proj-06",
    title: "Event Announcement",
    description: "Announcement for a designathon event organized by NCS Club.",
    tags: ["Social Media", "Reels", "Capcut"],
    link: "https://www.instagram.com/reel/DUbJxxgiI92/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/images/image6.png",
    imageColor: "#F0E4C8",
    stickyColor: "yellow",
    rotation: -2.5,
  },
  {
    id: "proj-07",
    title: "NCS Hack Participant guide",
    description: "Participant guide for NCS Hack, an hackathon event organized by NCS Club.",
    tags: ["UI/UX", "Figma"],
    link: "https://www.figma.com/design/UtQPPIniQBlGsnWOD3GK2l/participant-guide?node-id=0-1&t=AI7YXNn3wWOqKgHU-1",
    image: "/images/image7.png",
    imageColor: "#D4C9E0",
    stickyColor: "pink",
    rotation: 1.5,
  },
  {
    id: "proj-08",
    title: "ELEVATE Announcement",
    description: "Announcement for ELEVATE an event organized by NCS Club.",
    tags: ["Video Editing", "CapCut"],
    link: "https://www.instagram.com/reel/DIYoEIBNEVi/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    image: "/images/image8.png",
    imageColor: "#C9DFF0",
    stickyColor: "blue",
    rotation: -1.5,
  },
];


