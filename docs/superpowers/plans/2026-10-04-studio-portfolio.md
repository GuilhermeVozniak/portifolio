# Studio portfolio implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver a recognizable interactive 3D studio and browser desktop presenting Guilherme's public projects.
**Architecture:** Server-rendered project content and a client desktop sit alongside a lazy React Three Fiber room. A pure window reducer owns desktop behavior; scene failure never blocks content.
**Tech stack:** Next.js, React, TypeScript, Bun, Three.js, React Three Fiber, Playwright.
**Spec:** `docs/superpowers/specs/2026-10-04-studio-portfolio-design.md`

## Global constraints
- Preserve the photographed desk silhouette and separate server cabinet.
- Only public repositories; truthful project maturity and upstream attribution.
- Locally stored assets; no signed LinkedIn URLs.
- Useful HTML navigation before WebGL loads; mobile and reduced-motion support.
- No deployment, real OS emulation, or private-project publishing.

## Review focus
- WebGL unavailable/context lost: content and desktop remain accessible.
- Resize after dragging: window controls remain reachable.
- Several windows open: focusing/minimizing/restoring maintains usable order.
- Keyboard navigation: escape and focus restoration behave consistently.
- Missing audio/image: no broken interface or blocked navigation.

### Task 1: Content and Bun foundation
Files: package.json, bun.lock, app/layout.tsx, lib/projects.ts, public/projects, tests/catalog.test.ts.
- [x] Curate local public project descriptions, attribution and icons; verify repository and release URLs.
- [x] Replace package tooling with Bun, use a maintained Next.js 15 release, add Three/Fiber/Drei and test tools.
- [x] Add catalog tests checking unique slugs, public GitHub owner links, explicit experimental status and asset existence. Run `bun test tests/catalog.test.ts` before/after implementation.
- [x] Render semantic project list from the catalog; replace old LinkedIn profile content.
Expected: valid local catalog, dependencies installed with Bun, readable route without canvas.

### Task 2: Desktop behavior
Files: lib/desktop.ts, tests/desktop.test.ts, components/desktop/{desktop,window,content}.tsx.
Interface: `desktopReducer(state: DesktopWindow[], action: DesktopAction): DesktopWindow[]`; windows have id, minimized, maximized, x, y; array order is focus order.
- [x] Write tests: opening same id restores without duplication; focus raises; close removes; minimize then reopen restores; maximize toggles; move clamps to bounds; tile arranges visible windows.
- [x] Run `bun test tests/desktop.test.ts`, observe missing implementation, implement reducer, rerun to green.
- [x] Build DOM desktop with draggable panels, titlebar controls, launcher/taskbar, project details, about/contact, childhood HTML editor reveal and optional synthesized speaker sound.
Expected: desktop navigation works independently of WebGL, narrow screens use one panel, escape/focus behavior verified in browser.

### Task 3: Studio and visual system
Files: components/studio/{experience,room,objects,scene}.tsx, app/globals.css, app/page.tsx, public/studio-fallback.svg.
Interface: scene receives onOpenDesktop, onOpenProject, onSound, reducedMotion, resetKey, entering. Scene is decorative/interactive enhancement over HTML controls.
- [x] Add browser tests for initial project access, desktop window lifecycle, mobile layout, reduced-motion preference, forced WebGL failure, and scene interactions.
- [x] Run tests against baseline to observe absent new UI.
- [x] Model desk, monitor pair, laptop, audio gear, microphone, chair, server cabinet, window and room using procedural geometry and locally generated screen textures.
- [x] Add bounded orbit, monitor camera approach, object hotspot labels, static fallback, visibility suspension, capped DPR, and motion control.
- [x] Style room presentation, desktop, project catalog, about/contact, and responsive states with the agreed palette.
Expected: screenshot review demonstrates room fidelity and original coherent design; no required scroll hijacking or forced audio.

### Task 4: Verification and delivery
Files: tests/e2e/portfolio.spec.ts, playwright.config.ts, README.md, docs/superpowers/implementation-notes.md.
- [x] Run `bun test tests`, `bun run typecheck`, `bun run lint`, `bun run build`, and Playwright browser suite.
- [x] Inspect desktop/mobile screenshots and fix visual defects; exercise room, window lifecycle, audio, keyboard, context loss and direct links.
- [x] Request one fresh reviewer per executing-plans skill; resolve material findings and rerun affected checks.
- [x] Record final production checks and integrate verified changes locally; keep preview running.
Expected: verified complete local implementation with reviewable source and preview, no external publish.

## Execution decisions
User's “work on it until done” and “continue” authorize continuous implementation of the agreed design. Execute inline without further approval checkpoints. Orca created isolated worktree `studio-portfolio` from the design commit. No existing test suite or installed dependencies were present at baseline.
