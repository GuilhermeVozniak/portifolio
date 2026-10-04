import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { projects } from "../lib/projects";
test("catalog uses unique projects with public destinations and local artwork", () => {
  expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);
  expect(projects.length).toBeGreaterThanOrEqual(8);
  for (const p of projects) {
    expect(Boolean(p.source || p.website)).toBe(true);
    if (p.source) {
      const source = new URL(p.source);
      expect(source.origin).toBe("https://github.com");
      expect(["GuilhermeVozniak", "VH-Technology"]).toContain(
        source.pathname.split("/")[1],
      );
    }
    if (p.website) expect(new URL(p.website).protocol).toBe("https:");
    if (p.image) expect(existsSync(`public${p.image}`)).toBe(true);
  }
});
test("Blue Macaw replaces the distribution tap with its verified public destinations", () => {
  expect(projects.some((p) => p.id === "homebrew-tap")).toBe(false);
  expect(projects.some((p) => p.id === "blue-mccall")).toBe(false);
  const blueMacaw = projects.find((p) => p.id === "blue-macaw");
  expect(blueMacaw?.website).toBe("https://bluemacaw.org/");
  expect(blueMacaw?.source).toBe("https://github.com/VH-Technology/bluemacaw");
  expect(blueMacaw?.attribution).toContain("with a friend");
  expect(blueMacaw?.category).toBe("Desktop");
});
test("every project has a concise card summary, including experimental limitations", () => {
  for (const project of projects) {
    expect(project.summary.trim()).not.toBeEmpty();
  }
  const wallet = projects.find((p) => p.id === "burner-wallet");
  expect(wallet?.summary).toContain("Nokia");
  expect(wallet?.summary).toContain("pre-alpha");
  expect(wallet?.summary).toContain("emulators only");
});
test("published app sites are directly accessible from the catalog", () => {
  const publishedSites = {
    "option-tab": "https://option-tab.vozniak.dev",
    "tiles-spliter": "https://guilhermevozniak.github.io/tiles-spliter/",
    "app-cleaner": "https://app-cleaner.vozniak.dev",
    "9router": "https://guilhermevozniak.github.io/9router/",
    "drag-zone": "https://drag-zone.vozniak.dev",
    "blue-macaw": "https://bluemacaw.org/",
  };
  for (const [id, website] of Object.entries(publishedSites)) {
    expect(projects.find((p) => p.id === id)?.website).toBe(website);
  }
});
test("experimental wallet and upstream ports retain honest context", () => {
  const wallet = projects.find((p) => p.id === "burner-wallet");
  expect(wallet?.status).toBe("Pre-alpha");
  expect(wallet?.description).toContain("emulator");
  expect(wallet?.description).toContain(
    "physical Nokia testing is not yet verified",
  );
  expect(wallet?.description).toContain("Not suitable for real funds");
  expect(projects.find((p) => p.id === "9router")?.attribution).toBeTruthy();
  expect(
    projects.find((p) => p.id === "app-cleaner")?.attribution,
  ).toBeTruthy();
  expect(projects.find((p) => p.id === "drag-zone")?.attribution).toBeTruthy();
  expect(
    projects.find((p) => p.id === "rockpi-penta-golang")?.attribution,
  ).toBeTruthy();
});
