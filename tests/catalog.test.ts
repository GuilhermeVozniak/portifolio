import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { projects } from "../lib/projects";
test("catalog uses unique public projects with local artwork", () => {
  expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);
  expect(projects.length).toBeGreaterThanOrEqual(8);
  for (const p of projects) {
    expect(p.source).toStartWith("https://github.com/GuilhermeVozniak/");
    if (p.image) expect(existsSync(`public${p.image}`)).toBe(true);
  }
});
test("experimental wallet and upstream ports retain honest context", () => {
  expect(projects.find((p) => p.id === "burner-wallet")?.status).toBe(
    "Pre-alpha",
  );
  expect(projects.find((p) => p.id === "9router")?.attribution).toBeTruthy();
  expect(
    projects.find((p) => p.id === "app-cleaner")?.attribution,
  ).toBeTruthy();
});
