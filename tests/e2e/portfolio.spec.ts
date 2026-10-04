import { test, expect } from "@playwright/test";
test("room and direct content are available; desktop supports a full window lifecycle", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Built out of curiosity." }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Open desktop", exact: true })
    .first()
    .click();
  const desktop = page.getByRole("dialog", { name: "Vozniak OS" });
  await expect(desktop).toBeVisible();
  await desktop
    .getByRole("button", { name: "Projects", exact: true })
    .first()
    .click();
  const projects = page.getByRole("region", { name: "Projects window" });
  await expect(projects).toBeVisible();
  await projects.getByRole("button", { name: "Minimize Projects" }).click();
  await expect(projects).toBeHidden();
  await desktop.getByRole("button", { name: "Restore Projects" }).click();
  await expect(projects).toBeVisible();
  await projects.getByRole("button", { name: "Maximize Projects" }).click();
  await expect(projects).toHaveClass(/maximized/);
  await projects.getByRole("button", { name: "Close Projects" }).click();
  await expect(projects).toBeHidden();
  await page.keyboard.press("Escape");
  await expect(desktop).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Open desktop", exact: true }).first(),
  ).toBeFocused();
});
test("mobile and reduced motion retain direct project access", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("link", { name: "View projects", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Different ideas. Same curiosity." }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Explore Option Tab" }).click();
  await expect(
    page.getByRole("region", { name: "Option Tab window" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View source", exact: true }),
  ).toBeVisible();
});
test("WebGL failure keeps desktop and project content usable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      type: string,
      ...args: unknown[]
    ) {
      if (type.includes("webgl")) return null;
      return original.apply(this, [type, ...args] as never);
    } as typeof original;
  });
  await page.goto("/");
  await expect(page.getByText("A quieter view of the studio.")).toBeVisible();
  await page
    .getByRole("button", { name: "Open desktop", exact: true })
    .first()
    .click();
  await expect(page.getByRole("dialog", { name: "Vozniak OS" })).toBeVisible();
});

test("studio renders, can be explored, and survives context loss", async ({
  page,
}) => {
  await page.goto("/");
  const canvas = page.locator(".scene-canvas canvas");
  await expect(canvas).toBeVisible({ timeout: 20000 });
  await page.screenshot({
    path: "test-results/studio-desktop.png",
    fullPage: true,
  });
  const box = (await canvas.boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.7);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.75, box.y + box.height * 0.65, {
    steps: 12,
  });
  await page.mouse.up();
  await page.getByRole("button", { name: "Reset room view" }).click();
  await canvas.evaluate((element) => {
    const gl = (element as HTMLCanvasElement).getContext("webgl2");
    if (!gl) throw new Error("Rendered canvas has no WebGL2 context");
    gl.getExtension("WEBGL_lose_context")!.loseContext();
  });
  await expect(page.getByText("A quieter view of the studio.")).toBeVisible();
  await page.getByRole("button", { name: "The server", exact: true }).click();
  await expect(
    page.getByRole("region", { name: "Hardware & infrastructure window" }),
  ).toBeVisible();
});
test("multiple windows, dragging, sound, resize and keyboard remain usable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 950 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open desktop", exact: true }).click();
  const desktop = page.getByRole("dialog", { name: "Vozniak OS" });
  await desktop
    .getByRole("button", { name: "Projects", exact: true })
    .first()
    .click();
  await page
    .getByRole("region", { name: "Projects window" })
    .getByRole("button", { name: /Burner Wallet/ })
    .click();
  const wallet = page.getByRole("region", { name: "Burner Wallet window" });
  await expect(wallet).toBeVisible();
  await expect(wallet.getByText("Pre-alpha", { exact: true })).toBeVisible();
  const title = wallet.locator(".window-title");
  const box = (await title.boundingBox())!;
  await page.mouse.move(box.x + 20, box.y + 8);
  await page.mouse.down();
  await page.mouse.move(1390, 820, { steps: 10 });
  await page.mouse.up();
  const moved = (await wallet.boundingBox())!;
  expect(moved.x).toBeGreaterThan(400);
  await expect(
    desktop.getByRole("button", { name: "Tile windows" }),
  ).toHaveCount(0);
  await expect(desktop.getByText("Made for the web.")).toHaveCount(0);
  const sound = desktop
    .locator(".desktop-taskbar")
    .getByRole("button", { name: "Play sound experiment" });
  await expect(sound).toBeInViewport();
  await sound.click();
  await expect(
    desktop
      .locator(".desktop-taskbar")
      .getByRole("button", { name: "Mute sound" }),
  ).toBeVisible();
  await desktop
    .locator(".desktop-taskbar")
    .getByRole("button", { name: "Mute sound" })
    .click();
  await page.screenshot({ path: "test-results/desktop-windows.png" });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(
    wallet.getByRole("button", { name: "Close Burner Wallet" }),
  ).toBeInViewport();
  await page.screenshot({ path: "test-results/desktop-mobile.png" });
  await page.keyboard.press("Escape");
  await expect(wallet).toBeHidden();
  await expect(
    page.getByRole("region", { name: "Projects window" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");
  await expect(desktop).toBeHidden();
});
test("story, sound, mobile layout and assets are functional", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".scene-canvas canvas")).toBeVisible({
    timeout: 20000,
  });
  await page.screenshot({
    path: "test-results/studio-mobile.png",
    fullPage: true,
  });
  await page
    .getByRole("button", { name: "Play sound experiment", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mute sound", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Mute sound", exact: true }).click();
  await page.getByRole("button", { name: "Open first-computer.html" }).click();
  await page.getByRole("button", { name: "Run my childhood idea" }).click();
  await expect(page.getByText("Unknown element: computer")).toBeVisible();
  await page.getByRole("button", { name: "Back to the studio" }).click();
  expect(
    await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.every(
          (img) =>
            (img as HTMLImageElement).complete &&
            (img as HTMLImageElement).naturalWidth > 0,
        ),
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("short landscape desktop keeps every launcher reachable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 844, height: 390 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open desktop", exact: true }).click();
  const desktop = page.getByRole("dialog", { name: "Vozniak OS" });
  for (const label of [
    "Projects",
    "Experiments",
    "Hardware",
    "About me",
    "Say hello",
    "first-computer.html",
  ]) {
    const launcher = desktop
      .getByRole("navigation", { name: "Desktop applications" })
      .getByRole("button", { name: label, exact: true });
    await expect(launcher).toBeInViewport();
  }
  await desktop
    .getByRole("button", { name: "first-computer.html", exact: true })
    .click();
  await expect(
    page.getByRole("region", { name: "first-computer.html window" }),
  ).toBeVisible();
});
test("mobile close restores the invoking project and tab skips covered launchers", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open desktop", exact: true }).click();
  const desktop = page.getByRole("dialog", { name: "Vozniak OS" });
  await desktop
    .getByRole("button", { name: "Projects", exact: true })
    .first()
    .click();
  const projects = page.getByRole("region", { name: "Projects window" });
  const opener = projects.getByRole("button", { name: /Burner Wallet/ });
  await opener.click();
  await page.getByRole("button", { name: "Close Burner Wallet" }).click();
  await expect(opener).toBeFocused();
  await expect(
    desktop.getByRole("navigation", { name: "Desktop applications" }),
  ).toHaveCount(0);
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(
        () => !!document.activeElement?.closest("[data-launcher]"),
      ),
    ).toBe(false);
  }
});

test("portfolio story and all projects are clear without opening the desktop", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".intro-label")).toHaveText(
    "The portfolio of Guilherme Vozniak",
  );
  await expect(page.locator(".hero-copy > p")).toContainText("As a kid");
  await expect(page.locator(".hero-copy > p")).toContainText("HTML tag");
  const cards = page.locator(".featured-project");
  await expect(cards).toHaveCount(9);
  await expect(cards.nth(1).getByRole("heading")).toHaveText("Burner Wallet");
  await expect(cards.nth(1)).toContainText("Nokia");
  await expect(cards.nth(1)).toContainText("Bitcoin");
  await expect(cards.nth(2).getByRole("heading")).toHaveText("Blue Macaw");
  for (const card of await cards.all()) {
    await expect(card.locator(":scope > p")).not.toBeEmpty();
    await expect(card.getByRole("link")).toHaveAttribute("href", /^https:\/\//);
  }
  await expect(
    page.getByRole("link", { name: "Blue Macaw website" }),
  ).toHaveAttribute("href", "https://bluemacaw.org/");
  await expect(page.getByRole("heading", { name: "Homebrew tap" })).toHaveCount(
    0,
  );
  await page
    .getByRole("button", { name: "Explore Blue Macaw", exact: true })
    .click();
  const blue = page.getByRole("region", { name: "Blue Macaw window" });
  await expect(
    blue.getByRole("link", { name: "Visit website" }),
  ).toHaveAttribute("href", "https://bluemacaw.org/");
  await expect(blue).toContainText("friend");
});
