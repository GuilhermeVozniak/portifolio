export interface Project {
  id: string;
  name: string;
  category: "Desktop" | "Experiments" | "Infrastructure" | "Productivity";
  tagline: string;
  description: string;
  technologies: string[];
  status: string;
  source: string;
  color: string;
  symbol: string;
  image?: string;
  install?: string;
  website?: string;
  attribution?: string;
}
const github = "https://github.com/GuilhermeVozniak/";
export const projects: Project[] = [
  {
    id: "option-tab",
    name: "Option Tab",
    category: "Desktop",
    tagline: "Find the window. Keep your flow.",
    description:
      "A window switcher with live thumbnails, fuzzy search, and custom keyboard shortcuts. Built around the way people actually move between windows.",
    technologies: ["Go", "Wails", "React"],
    status: "Available on Homebrew",
    source: github + "option-tab",
    website: "https://option-tab.vozniak.dev",
    install: "brew install --cask GuilhermeVozniak/tap/option-tab",
    color: "#b6ff00",
    symbol: "⌥",
    image: "/projects/option-tab.png",
  },
  {
    id: "tiles-spliter",
    name: "Tiles Spliter",
    category: "Desktop",
    tagline: "A place for every window.",
    description:
      "A macOS utility for snapping, tiling, and arranging windows through dragging, keyboard shortcuts, and the menu bar.",
    technologies: ["Go", "Wails", "TypeScript"],
    status: "Available on Homebrew",
    source: github + "tiles-spliter",
    install: "brew install --cask GuilhermeVozniak/tap/tiles-spliter",
    color: "#ff723d",
    symbol: "▦",
    image: "/projects/tiles-spliter.png",
  },
  {
    id: "app-cleaner",
    name: "App Cleaner",
    category: "Desktop",
    tagline: "Less clutter. More room.",
    description:
      "A macOS cleaning suite with a desktop app and terminal interface sharing one Go engine. Find caches, duplicate files, and app leftovers, with move-based backups for undoing cleans.",
    technologies: ["Go", "Wails", "React"],
    status: "Available on Homebrew",
    source: github + "app-cleaner",
    install: "brew install --cask GuilhermeVozniak/tap/app-cleaner",
    attribution:
      "Built on mac-cleaner-cli by guhcostan, restructured around a shared engine.",
    color: "#c9b7ff",
    symbol: "✳",
    image: "/projects/app-cleaner.png",
  },
  {
    id: "burner-wallet",
    name: "Burner Wallet",
    category: "Experiments",
    tagline: "Old phone. New purpose.",
    description:
      "An experiment in air-gapped Bitcoin signing on Nokia feature phones, with companion apps handling network access. Pre-alpha: the flow runs in an emulator; physical Nokia testing is not yet verified. Not suitable for real funds.",
    technologies: ["Java ME", "Rust", "TypeScript"],
    status: "Pre-alpha",
    source: github + "burner-wallet",
    color: "#ff9d43",
    symbol: "▤",
  },
  {
    id: "calendium",
    name: "Calendium",
    category: "Productivity",
    tagline: "Email and time, together.",
    description:
      "An open-source email and calendar project designed around fast, keyboard-first workflows across web, desktop, and mobile. Self-hosting is part of the architecture; explore the repository for current progress.",
    technologies: ["Go", "React", "React Native"],
    status: "In development",
    source: github + "calendium",
    color: "#9ccaff",
    symbol: "▦",
    image: "/projects/calendium.png",
  },
  {
    id: "9router",
    name: "9Router",
    category: "Infrastructure",
    tagline: "Many providers. One endpoint.",
    description:
      "A local AI router that connects coding tools to multiple providers through one endpoint, with a Go routing core and a desktop dashboard.",
    technologies: ["Go", "Wails", "React"],
    status: "Open source",
    source: github + "9router",
    attribution: "A Go + Wails port of 9Router by decolua.",
    color: "#b6ff00",
    symbol: "⌘",
    image: "/projects/9router.png",
  },
  {
    id: "drag-zone",
    name: "DragZone",
    category: "Desktop",
    tagline: "Drop files. Get things done.",
    description:
      "A menu-bar home for file actions: move, copy, archive, and send files, or keep them on a temporary shelf for later.",
    technologies: ["Go", "Wails", "React"],
    status: "Open source",
    source: github + "drag-zone",
    attribution: "An open-source reimplementation of Dropzone 4 by Aptonic.",
    color: "#f4c8a8",
    symbol: "↧",
  },
  {
    id: "rockpi-penta-golang",
    name: "RockPi Penta",
    category: "Infrastructure",
    tagline: "Software meets the hardware.",
    description:
      "A Go controller for Penta SATA hardware: temperature monitoring, fan control, OLED information, and button interactions. A look at the hardware side of my work.",
    technologies: ["Go", "Linux", "GPIO"],
    status: "Open source",
    source: github + "rockpi-penta-golang",
    color: "#b6ff00",
    symbol: "▥",
  },
  {
    id: "homebrew-tap",
    name: "Homebrew tap",
    category: "Infrastructure",
    tagline: "From source code to your Mac.",
    description:
      "Homebrew casks and formulae for my published Mac apps. The place to install Option Tab, Tiles Spliter, and App Cleaner.",
    technologies: ["Homebrew", "Ruby", "GitHub Actions"],
    status: "Public distribution",
    source: github + "homebrew-tap",
    color: "#e7bf85",
    symbol: "⌂",
  },
];
export const getProject = (id: string) => projects.find((p) => p.id === id);
