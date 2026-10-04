# Studio implementation notes

Plan: `plans/2026-10-04-studio-portfolio.md`

- Tasks 1–3 implemented: Bun setup, curated public catalog, pure desktop reducer, DOM window manager, procedural studio, responsive editorial project section and childhood HTML interaction.
- Unit tests: six passing (catalog provenance and window lifecycle/bounds).
- Initial browser test execution found missing browser installation, now installed. First visual pass confirmed the monitor silhouette, desk, microphone, chair and separate server cabinet.
- Ruling: production build invokes Next through Node rather than `bun --bun next build`. Bun 1.3.13 throws a CommonJS wrapper exception during Next's page-data collection. Bun remains the package manager, script runner, development runtime and test runner. Production startup uses Bun pending verification.
- Ruling: development writes `.next-dev`, production writes `.next`, preventing concurrent checks from invalidating the live preview cache.
- Ruling: project illustrations are clearly labeled concepts; local app icons come from their actual repositories. No invented screenshots or private photos are published.
- Ruling: the server links to hardware/infrastructure projects without claiming the photographed board is a specific supported model.
- Ruling: user's “work on it until done” authorizes proceeding through plan and implementation without another approval checkpoint.

## Review and fixes

Fresh reviewer found two material issues, each reproduced with a failing browser regression:
- Short-height landscape layouts clipped application launchers. Added height-aware wrapping and a scrollable launcher region.
- Closing a mobile project focused a covered launcher. Track invoking controls, restore visible focus, and make covered launchers/windows inert and hidden from assistive navigation.

The reviewer also identified identical rendering quality on mobile and desktop. Mobile/coarse-pointer devices now use DPR 1 and 512px shadow maps; desktop caps DPR at 1.5 and uses 1024px shadows.

The reviewer deferred photo fidelity, external claims, and real-device/Safari behavior. Photo fidelity was inspected against all four supplied references by the implementer. GitHub authenticated metadata confirms all nine repositories public; releases for the three Homebrew apps exist. Real-device/Safari behavior remains an explicitly unclaimed validation boundary; Chromium desktop/mobile emulation and forced failure paths are tested.

## Final evidence

- `bun install --frozen-lockfile`: succeeds without lockfile changes.
- `bun run test`: 6 tests / 30 assertions passing.
- `bun run typecheck` and `bun run lint`: clean.
- `bun run build`: successful prerender, 118 kB initial route JavaScript reported by Next. Three.js loads in separate lazy chunks.
- Production server: `bun run start --port 3041` succeeds under Bun.
- Production Playwright run: 8/8 passing, including both review regressions.
- Additional browser checks: actual 3D monitor click opens desktop; aborted Option Tab icon request renders the symbol fallback; high-DPR mobile uses capped rendering resolution.
- Desktop and mobile hero/full-page/window screenshots inspected. Narrow-screen framing retains the separate server cabinet; mobile footer fits one line.
- The portfolio remains local. No deployment, push, private repository publication, or external messages were performed.
