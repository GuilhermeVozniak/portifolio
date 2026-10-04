import { describe, expect, test } from "bun:test";
import { desktopReducer, type DesktopWindow } from "../lib/desktop";
const open = (state: DesktopWindow[], id: string) =>
  desktopReducer(state, { type: "open", id });
describe("desktop windows", () => {
  test("opening an existing window restores and focuses without duplicates", () => {
    let state = open(open([], "projects"), "about");
    state = desktopReducer(state, { type: "minimize", id: "projects" });
    state = open(state, "projects");
    expect(state.map((w) => w.id)).toEqual(["about", "projects"]);
    expect(state[1].minimized).toBe(false);
  });
  test("focus, maximize, minimize and close preserve other windows", () => {
    let state = open(open([], "projects"), "about");
    state = desktopReducer(state, { type: "focus", id: "projects" });
    expect(state.at(-1)?.id).toBe("projects");
    state = desktopReducer(state, { type: "maximize", id: "projects" });
    expect(state.at(-1)?.maximized).toBe(true);
    state = desktopReducer(state, { type: "maximize", id: "projects" });
    expect(state.at(-1)?.maximized).toBe(false);
    state = desktopReducer(state, { type: "close", id: "projects" });
    expect(state.map((w) => w.id)).toEqual(["about"]);
  });
  test("dragged windows are clamped to usable viewport and resize recovers them", () => {
    let state = open([], "projects");
    state = desktopReducer(state, {
      type: "move",
      id: "projects",
      x: 2000,
      y: -50,
      width: 1000,
      height: 700,
    });
    expect(state[0].x).toBeLessThanOrEqual(360);
    expect(state[0].y).toBeGreaterThanOrEqual(12);
    state = desktopReducer(state, { type: "resize", width: 400, height: 500 });
    expect(state[0].x).toBe(12);
  });
  test("tiling restores visible windows to deterministic positions", () => {
    const state = desktopReducer(open(open([], "projects"), "about"), {
      type: "tile",
      width: 1400,
      height: 900,
    });
    expect(state[0].x).toBe(12);
    expect(state[1].x).toBeGreaterThan(state[0].x);
  });
});
