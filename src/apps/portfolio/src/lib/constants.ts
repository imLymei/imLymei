import {
  FaArrowRotateLeft,
  FaCheck,
  FaCopy,
  FaEye,
  FaLink,
  FaLock,
  FaLockOpen,
  FaStar,
} from "react-icons/fa6";

const default_icon_size = 15;
export const ICON_SIZES = {
  EXTRA_SMALL: default_icon_size * 0.5,
  SMALL: default_icon_size,
  MEDIUM: default_icon_size * 1.25,
  LARGE: default_icon_size * 1.5,
  EXTRA_LARGE: default_icon_size * 2,
  EXTRA_EXTRA_LARGE: default_icon_size * 4,
  ULTRA_LARGE: default_icon_size * 8,
};

export const ICONS = {
  LINK: FaLink,
  COPY: FaCopy,
  CHECK: FaCheck,
  EYE: FaEye,
  RESET: FaArrowRotateLeft,
  OPEN_SOURCE: FaLockOpen,
  CLOSE_SOURCE: FaLock,
  STAR: FaStar,
};

export type Project = {
  name: string;
  description: string;
  isOpenSource: boolean;
  image?: string;
  href?: string;
  isFavorite?: boolean;
  tags: string[];
  externalLinksButtons?: { description: string; href: string }[];
};
export const PROJECTS: Project[] = [
  {
    name: "Zenith",
    description:
      "A desktop comic reader that aggregates comics from multiple websites using a plugin-based scraping system.",
    isOpenSource: true,
    isFavorite: true,
    tags: [
      "Rust",
      "Tauri",
      "React.js",
      "TypeScript",
      "Web Scraping",
      "Plugin Architecture",
      "SQLite",
    ],
  },
  {
    name: "Foji CLI",
    description:
      "A command-line tool designed to automate common development workflows such as project scaffolding, Git automation, and environment setup.",
    isOpenSource: true,
    tags: [
      "Rust",
      "CLI",
      "Automation",
      "Git",
      "Developer Tools",
      "Productivity",
    ],
  },
  {
    name: "Nebula Tasks",
    description:
      "A lightweight self-hostable project management platform focused on developers, supporting multiple workflows like Agile and Kanban.",
    isOpenSource: true,
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Kanban",
      "Agile",
    ],
  },
  {
    name: "SafeSwap",
    description:
      "A secure middleman platform that allows users to buy and sell digital products safely with escrow-based transaction protection.",
    isOpenSource: false,
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Authentication",
      "Payments",
    ],
  },
  {
    name: "FocusQuest",
    description:
      "A gamified Pomodoro productivity app where users level up characters, earn rewards, and complete quests by staying focused.",
    isOpenSource: false,
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Gamification",
      "Productivity",
      "Local Storage",
    ],
  },
];
export const PROJECTS_TAGS = Array.from(
  new Set(PROJECTS.flatMap((project) => project.tags)),
);
