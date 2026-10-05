export interface Project {
  id: string;
  name: string;
  category: "Desktop" | "Experiments" | "Infrastructure" | "Productivity";
  tagline: string;
  summary: string;
  description: string;
  technologies: string[];
  status: string;
  source?: string;
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
    summary:
      "Switch between individual windows with live previews, fuzzy search, and custom keyboard shortcuts. A macOS utility for moving through a busy desktop without losing track of your work.",
    description:
      "A window switcher with live thumbnails, fuzzy search, and custom keyboard shortcuts. Built around the way people actually move between windows.",
    technologies: ["Go", "Wails", "React"],
    status: "Available on Homebrew",
    source: github + "option-tab",
    website: "https://option-tab.vozniak.dev",
    install: "brew install --cask GuilhermeVozniak/tap/option-tab",
    symbol: "⌥",
    image: "/projects/option-tab.png",
  },
  {
    id: "tiles-spliter",
    name: "Tiles Spliter",
    category: "Desktop",
    tagline: "A place for every window.",
    summary:
      "Snap and arrange macOS windows by dragging, using a keyboard shortcut, or choosing a layout from the menu bar. Keep the apps you need visible side by side.",
    description:
      "A macOS utility for snapping, tiling, and arranging windows through dragging, keyboard shortcuts, and the menu bar.",
    technologies: ["Go", "Wails", "TypeScript"],
    status: "Available on Homebrew",
    source: github + "tiles-spliter",
    website: "https://guilhermevozniak.github.io/tiles-spliter/",
    install: "brew install --cask GuilhermeVozniak/tap/tiles-spliter",
    symbol: "▦",
    image: "/projects/tiles-spliter.png",
  },
  {
    id: "app-cleaner",
    name: "App Cleaner",
    category: "Desktop",
    tagline: "Less clutter. More room.",
    summary:
      "Find caches, duplicate files, and leftover app data on your Mac. A desktop app and terminal interface share one cleaning engine, with backups that let you undo supported cleans.",
    description:
      "A macOS cleaning suite with a desktop app and terminal interface sharing one Go engine. Find caches, duplicate files, and app leftovers, with move-based backups for undoing cleans.",
    technologies: ["Go", "Wails", "React"],
    status: "Available on Homebrew",
    source: github + "app-cleaner",
    website: "https://app-cleaner.vozniak.dev",
    install: "brew install --cask GuilhermeVozniak/tap/app-cleaner",
    attribution:
      "Built on mac-cleaner-cli by guhcostan, restructured around a shared engine.",
    symbol: "✳",
    image: "/projects/app-cleaner.png",
  },
  {
    id: "burner-wallet",
    name: "Burner Wallet",
    category: "Experiments",
    tagline: "Old phone. New purpose.",
    summary:
      "Turning an old Nokia phone into an offline Bitcoin wallet. The phone signs transactions; a companion app handles the network. A pre-alpha experiment, tested in emulators only.",
    description:
      "An experiment in air-gapped Bitcoin signing on Nokia feature phones, with companion apps handling network access. Pre-alpha: the flow runs in an emulator; physical Nokia testing is not yet verified. Not suitable for real funds.",
    technologies: ["Java ME", "Rust", "TypeScript"],
    status: "Pre-alpha",
    source: github + "burner-wallet",
    symbol: "▤",
    image: "/projects/burner-wallet.svg",
  },
  {
    id: "calendium",
    name: "Calendium",
    category: "Productivity",
    tagline: "Email and time, together.",
    summary:
      "An email and calendar workspace designed for keyboard-first workflows across web, desktop, and mobile. Still in development, with open-source clients and a backend designed to run on your own server.",
    description:
      "An open-source email and calendar project designed around fast, keyboard-first workflows across web, desktop, and mobile. Self-hosting is part of the architecture; explore the repository for current progress.",
    technologies: ["Go", "React", "React Native"],
    status: "In development",
    source: github + "calendium",
    symbol: "▦",
    image: "/projects/calendium.png",
  },
  {
    id: "9router",
    name: "9Router",
    category: "Infrastructure",
    tagline: "Many providers. One endpoint.",
    summary:
      "Connect coding tools to multiple AI providers through one local endpoint. This Go and Wails port of 9Router pairs a routing core with a desktop dashboard for managing connections.",
    description:
      "A local AI router that connects coding tools to multiple providers through one endpoint, with a Go routing core and a desktop dashboard.",
    technologies: ["Go", "Wails", "React"],
    status: "Open source",
    source: github + "9router",
    website: "https://guilhermevozniak.github.io/9router/",
    attribution: "A Go + Wails port of 9Router by decolua.",
    symbol: "⌘",
    image: "/projects/9router.png",
  },
  {
    id: "drag-zone",
    name: "DragZone",
    category: "Desktop",
    tagline: "Drop files. Get things done.",
    summary:
      "A macOS menu-bar utility for moving, copying, archiving, and sending files. Drop them onto an action or keep them on a temporary shelf, ready to drag into another app.",
    description:
      "A menu-bar home for file actions: move, copy, archive, and send files, or keep them on a temporary shelf for later.",
    technologies: ["Go", "Wails", "React"],
    status: "Open source",
    source: github + "drag-zone",
    website: "https://drag-zone.vozniak.dev",
    attribution: "An open-source reimplementation of Dropzone 4 by Aptonic.",
    symbol: "↧",
    image: "/projects/drag-zone.png",
  },
  {
    id: "rockpi-penta-golang",
    name: "RockPi Penta",
    category: "Infrastructure",
    tagline: "Software meets the hardware.",
    summary:
      "A Go controller for Penta SATA hardware that monitors temperatures, adjusts fan speed, and displays system information on an OLED screen. Configurable button actions bring everyday controls to the board.",
    description:
      "A Go controller for Penta SATA hardware: temperature monitoring, fan control, OLED information, and button interactions. A look at the hardware side of my work.",
    technologies: ["Go", "Linux", "GPIO"],
    status: "Open source",
    source: github + "rockpi-penta-golang",
    attribution: "A Go implementation of Radxa's RockPi Penta controller.",
    symbol: "▥",
  },
  {
    id: "blue-macaw",
    name: "Blue Macaw",
    category: "Desktop",
    tagline: "Speak it. Type it anywhere.",
    summary:
      "A desktop dictation app for macOS and Windows, built with a friend. Use a global shortcut to turn speech into text in the focused app with your own provider key.",
    description:
      "An open-source speech-to-text app for macOS and Windows. Dictate with a global shortcut and paste the transcript into the focused app. Bring your own transcription provider key; credentials stay in the OS keychain, and requests go directly to the chosen provider.",
    technologies: ["Rust", "Tauri", "React"],
    status: "Open source",
    source: "https://github.com/VH-Technology/bluemacaw",
    website: "https://bluemacaw.org/",
    install: "brew install --cask vh-technology/tap/bluemacaw",
    attribution: "Built with a friend and published through VH-Technology.",
    symbol: "↗",
    image: "/projects/blue-macaw.svg",
  },
];
export const getProject = (id: string) => projects.find((p) => p.id === id);
