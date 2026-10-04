# Guilherme's studio portfolio

## Intent

Rebuild the existing portfolio around Guilherme Vozniak's real public projects, personal studio, and childhood ambition to run an operating system inside an HTML page. Visitors should remember the room and understand the work without needing to learn a game. Keep Next.js and migrate package management and development commands to Bun.

The user approved the workbench direction, expanded it into an explorable office with an interactive computer, and supplied four photographs. The latest explicit constraint is to preserve the shape of the setup while removing clutter. This document makes that direction concrete for review; implementation has not started.

## Scene and visual identity

Build a stylized, proportionally faithful room vignette rather than a photorealistic replica. Use the photographs as modeling references, not public page assets. The fourth photo supplies the clearest three-quarter composition; the first and third establish the front silhouette, and the second establishes the server corner.

Preserve these spatial anchors:

- Wide, dark standing desk with a broad gray felt surface and black legs; retain the exposed right-hand strip and standing-desk controls.
- Large landscape monitor slightly left of center, with a light bar across its top.
- Tall portrait monitor immediately to the right, with its top substantially above the landscape monitor. Preserve the asymmetry and relative scale.
- Open silver laptop centered below the landscape display, with a slim external keyboard in front and mouse to the right.
- Two compact black speakers beneath the main screen, small audio interface, headphones, and articulated microphone arm reaching from the left across the foreground.
- Black chair in the foreground, positioned so it does not hide interactive objects.
- Separate, lower wooden drawer cabinet to the right with an exposed compact server, visible stacked hardware, fan, and a few deliberate cables.
- Window behind the displays, pale walls, wood furniture, and simplified terrazzo floor to ground the scene in this particular room.

Remove water bottles, cloths, bags, loose adapters, excess keyboards, and most cable clutter. Keep a small book stack and simplified decorative frames for balance. Do not reproduce private notes, photographed screen contents, or personal photographs as textures. Use original abstract screen artwork rather than copying the bear wallpaper.

Use warm wood and gray felt as recognizable materials. Add fluorescent orange (#FF5A00) and electric green (#B6FF00) through screen graphics, interaction highlights, equipment indicators, and restrained accent lighting. Black (#080808), silver (#C5C9CB), and white (#F5F5F5) support contrast. Preserve readable surfaces and the room's warmth; avoid an all-neon room. Space Grotesk supplies the main type, with a restrained monospace face for editable-looking code and terminal content.

## Visitor journey

The opening view shows the desk and server cabinet together from a three-quarter angle. Guilherme's name, software-engineer introduction, and direct controls for Open desktop and View projects appear immediately in HTML. Scene loading never blocks those controls.

Allow constrained orbit exploration around the desk, with clear bounds and reset-view control. Avoid first-person walking or required keyboard movement. Interactive objects receive a subtle hover/focus cue and a readable label. All object actions also have ordinary HTML controls.

Clicking the main monitor or Open desktop transitions toward the screen, then presents a full-sized HTML desktop. Text and controls remain real DOM elements rather than being rendered into a canvas texture. Returning to the room restores the overview. Escape closes the active overlay or returns from the desktop when no overlay is open; focus returns to the initiating control.

The portrait screen supports the composition with original graphics and optional project information. The laptop shows simplified decorative code. Neither creates a second competing navigation system.

## Browser desktop

Create an original desktop-style interface with a launcher, taskbar, and project windows. This is a portfolio interface, not an emulator or an executable loader.

Applications opens the Mac utilities; Experiments opens experimental work; About explains Guilherme's background and childhood HTML story; Contact exposes verified contact links. A desktop file named first-computer.html introduces the childhood idea with a short, clearly illustrative HTML snippet. It must not claim to execute Windows or native binaries.

Support opening, focusing, closing, minimizing, restoring, and maximizing windows. Desktop windows can be dragged within usable bounds. Provide visible controls and keyboard-accessible alternatives. On narrow screens, use a single maximized panel with straightforward back navigation instead of draggable overlapping windows.

Window tiling and switching can provide a small browser demonstration inspired by Tiles Spliter and Option Tab, clearly identified as a demonstration. Project descriptions and links stay available without using it. Do not embed functioning copies of the native tools or imply those tools run in the browser.

## Project content

Use a typed, curated local project catalog as the single content source for the desktop and accessible project list. Include short purpose, technologies verified from the repository, maturity, local imagery where available, source URL, upstream attribution where relevant, and verified install/download links.

Initial public selection:

- Option Tab: window switching, live thumbnails, and keyboard workflow.
- Tiles Spliter: window tiling and arrangement.
- App Cleaner: shared Go engine for desktop cleaning and terminal interfaces; credit its documented upstream origin.
- Calendium: integrated email and calendar across clients; verify implementation maturity before writing feature claims.
- Burner Wallet: experimental air-gapped Bitcoin signer for Nokia feature phones; retain pre-alpha status and the documented lack of physical-device validation.
- DragZone: menu-bar file actions; retain attribution to the project it reimplements.
- 9Router: local AI routing with Go/Wails; retain upstream attribution.
- Homebrew tap: distribution entry point for the shipped Mac utilities.

The public rockpi-penta-golang repository is a candidate for the server interaction after verifying its relationship to the photographed hardware. Until verified, clicking the server may open an infrastructure-project view without claiming a specific hardware model or deployed software.

No private repository content is included. GitHub visibility was inspected during discovery; no visibility changes are needed or authorized. Status has no configured remote in the inspected checkout and is excluded from the initial selection.

Remove reliance on signed LinkedIn image URLs, which have expired. Store approved screenshots and original artwork locally. Missing media receives an intentional illustrated fallback instead of a broken image. Do not invent project screenshots, usage metrics, testimonials, current employment, or release status.

## Music

Retain speakers, microphone, headphones, and audio interface as important personal details. Speakers may expose an optional user-triggered synthesized sound interaction labeled as an interactive sound experiment. Do not present generated sound as Guilherme's music. Playback of personal tracks is deferred until he supplies an authorized audio asset. Audio never autoplays, and a persistent mute/stop control is available whenever sound is active.

## Architecture

Keep Next.js/React/TypeScript. Adopt Bun with a committed Bun lockfile, updated scripts and README, and removal of the npm lockfile after successful migration. Select compatible maintained dependency versions during implementation.

Use Three.js through React Three Fiber for the lazily loaded client scene. Separate room geometry/materials, camera transitions, interactive hotspots, and rendering quality controls from portfolio content and desktop state. Start with original procedural geometry for recognizable equipment silhouettes; introduce local optimized models only when needed for visual quality.

Render project content and navigation independently of WebGL. A small desktop state module manages window identity, focus order, bounds, and minimized/maximized states. Keep scene state limited to view selection, transition, quality level, and active hotspot. Avoid a backend, authentication, live GitHub API dependency, and arbitrary terminal command execution.

## Performance and resilience

Keep a single canvas, cap pixel ratio, limit shadows and postprocessing, and pause scene animation when the page is hidden. Use lower rendering quality on mobile. Reduced-motion preference removes the camera travel and decorative animation. A manual motion control remains available.

WebGL initialization failure or context loss shows a static representation and the same project navigation. Failed model, image, or audio loading must not prevent access to content. Keyboard navigation, visible focus, adequate text contrast, accessible dialog/window semantics, and touch-sized controls are required.

## Validation and acceptance

- Bun install, type checking, lint, and production build succeed.
- Browser checks cover room-to-desktop transition, direct project access, window lifecycle, focus restoration, and back/Escape behavior.
- Inspect desktop and mobile screenshots; verify that the paired landscape/portrait monitors, laptop, microphone arm, and separate server cabinet retain the photographed silhouette.
- Validate project and download links and local asset loading. Check that no expired LinkedIn image URLs or private repository details ship.
- Verify reduced motion, keyboard-only access, narrow-screen layout, and a forced WebGL failure path.
- Confirm the first screen offers useful content before 3D finishes loading; check rendering behavior on a mobile viewport and inspect asset/bundle cost before completion.

## Scope boundary

Initial release includes the recognizable room, bounded exploration, browser desktop, public project catalog, childhood-story interaction, and accessible fallback. It excludes a full operating-system emulator, first-person game, private-project publishing, personal-music playback without supplied assets, and replication of every physical object. Hosting/deployment is a separate action from local implementation.
