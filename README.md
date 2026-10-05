# Guilherme's studio

A personal portfolio built around my actual desk and a childhood idea: running a computer inside an HTML page. Explore the Three.js room, enter the browser desktop, or go straight to the public projects.

## Run locally

Requires Bun 1.3.13+ and Node.js 20.9+ (used by the Next.js production builder).

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. A custom port works with `bun run dev --port 3040`.

```sh
bun run test          # Bun unit tests
bun run typecheck
bun run lint
bunx playwright install chromium
bun run test:e2e      # Starts/reuses a preview on port 3040
bun run build
bun run start
```

Bun manages dependencies, development, tests, and the production server. The build script uses Next's Node entry point: Bun 1.3.13 currently fails during page-data collection when running this Next.js builder directly. Development and production output are separated (`.next-dev` / `.next`) so a build cannot invalidate the live preview.

## Content and structure

- `lib/projects.ts`: curated public projects, summaries, verified websites, technologies, maturity, attribution and install commands. No live API or credentials required.
- `components/studio/room.tsx`: procedural room based on desk photographs; geometry and surface art are original.
- `components/studio/scene.tsx`: bounded camera controls, transition, rendering quality and context-loss handling.
- `components/desktop/`: accessible HTML desktop, window controls, project details, personal story and contact.
- `lib/desktop.ts`: tested window state and viewport bounds.
- `public/projects/`: local app icons copied from the corresponding public repositories. 9Router uses its custom Darwin icon. Blue Macaw uses the official logo from `https://bluemacaw.org/logo.svg`. Burner Wallet uses its official web app icon from `companion/web/src/app/icon.svg`. Original product origins remain attributed in project details.
- `public/studio-fallback.svg`: local original illustration shown when WebGL is unavailable.

All nine project illustrations are original concept sketches, not application screenshots. Each project has a summary and a direct link to its website or public source. Photographs, private notes, and private repositories are not included. Personal music is not included; the speaker interaction plays a quiet, seven-second synthesized chord, explicitly labeled a sound experiment.

## Controls and accessibility

- Drag the room to look around; use Reset view to restore the camera.
- Click the main monitor or Open desktop. The laptop opens the childhood HTML story; the server opens the complete Projects collection.
- The same actions have HTML buttons. Projects remain available before the room loads.
- Open, move, minimize, maximize, restore, or close desktop windows. Focus the move control and use arrow keys for keyboard movement.
- Escape closes the top window, then returns to the room. Focus returns to the originating control. The background is inert while the desktop is open.
- Mobile uses full-size panels and a taskbar. Reduced motion removes camera travel and damping. The sound control sits at the right end of the taskbar. No audio autoplays.
- Missing WebGL, lost graphics contexts and failed images have local fallbacks. Rendering pauses while the document is hidden and otherwise runs on demand.

## Verification

Playwright exercises desktop window lifecycle, mobile layout, reduced motion, forced WebGL failure, graphics-context loss, room orbit/reset, multiple windows, dragging, resizing, taskbar sound, the childhood story, and direct project links. It also saves desktop/mobile screenshots in ignored `test-results/` for visual inspection.

Design and execution notes are under `docs/superpowers/`. This repository does not automatically publish or deploy the site.
