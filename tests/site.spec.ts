import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with title and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Leo Games");
    await expect(page.getByRole("heading", { name: "LEO GAMES", exact: true })).toBeVisible();
    await expect(page.getByText("Games by Leo & the community")).toBeVisible();
  });

  test("hero has both CTA buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Play Bounceback" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Browse Games" })).toBeVisible();
  });

  test("What's New section shows posts", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "What's New" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Welcome to Leo Games!" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: /Bounceback v1\.2/ }).first()).toBeVisible();
  });

  test("Featured Games section shows Bounceback spotlight", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Featured Games" })).toBeVisible();
    await expect(page.getByText("A fast-paced arcade game").first()).toBeVisible();
  });

  test("YouTube section shows videos", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "YouTube" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Visit Channel" })).toBeVisible();
  });

  test("Community section shows posts with expandable comments", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Community", exact: true })).toBeVisible();

    // Scroll down and click to expand comments
    const commentToggle = page.getByRole("button", { name: "0 comments" }).first();
    await commentToggle.scrollIntoViewIfNeeded();
    await commentToggle.click();
    await expect(page.getByText("No comments yet").first()).toBeVisible();
    await expect(page.getByText("Comments are saved locally").first()).toBeVisible();
  });

  test("navbar is visible with logo and links", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
    await expect(nav.getByText("LEO GAMES")).toBeVisible();
    await expect(nav.getByRole("link", { name: "Home", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Games", exact: true })).toBeVisible();
  });

  test("footer is visible", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Made by Leo")).toBeVisible();
  });
});

test.describe("Games Page", () => {
  test("shows all games", async ({ page }) => {
    await page.goto("/games");
    await expect(page.getByRole("heading", { name: "All Games" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Bounceback", exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pixel Dash" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Star Dodge" })).toBeVisible();
  });

  test("clicking a game navigates to detail page", async ({ page }) => {
    await page.goto("/games");
    await page.locator("a[href='/games/bounceback']").first().click();
    await expect(page).toHaveURL(/\/games\/bounceback/);
    await expect(page.getByRole("heading", { name: "Bounceback" })).toBeVisible();
  });
});

test.describe("Game Detail Page", () => {
  test("shows game info and click-to-play embed", async ({ page }) => {
    await page.goto("/games/bounceback");
    await expect(page.getByRole("heading", { name: "Bounceback" })).toBeVisible();
    await expect(page.getByText("Click to Play Bounceback")).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Games" })).toBeVisible();
  });

  test("clicking play loads the iframe", async ({ page }) => {
    await page.goto("/games/bounceback");
    await page.getByText("Click to Play Bounceback").click();
    const iframe = page.locator("iframe#game-frame");
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute("src", "/games/bounceback/index.html");
  });

  test("back link returns to games page", async ({ page }) => {
    await page.goto("/games/bounceback");
    await page.getByRole("link", { name: "Back to Games" }).click();
    await expect(page).toHaveURL(/\/games$/);
  });

  test("non-existent game shows not found", async ({ page }) => {
    await page.goto("/games/does-not-exist");
    await expect(page.getByText("Game Not Found")).toBeVisible();
  });
});

test.describe("Routing", () => {
  test("client-side navigation works without full reload", async ({ page }) => {
    await page.goto("/");

    // Navigate to games via desktop nav link
    await page.locator("nav").getByRole("link", { name: "Games", exact: true }).click();
    await expect(page).toHaveURL(/\/games$/);
    await expect(page.getByRole("heading", { name: "All Games" })).toBeVisible();

    // Navigate back home
    await page.locator("nav").getByRole("link", { name: "Home", exact: true }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { name: "LEO GAMES", exact: true })).toBeVisible();
  });

  test("404 page for unknown routes", async ({ page }) => {
    await page.goto("/some-random-page");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByRole("link", { name: "Go Home" })).toBeVisible();
  });

  test("404 Go Home button navigates to home", async ({ page }) => {
    await page.goto("/some-random-page");
    await page.getByRole("link", { name: "Go Home" }).click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Comments (localStorage)", () => {
  test("can post a comment and it persists", async ({ page }) => {
    await page.goto("/");

    // Scroll to community and expand comments
    const commentToggle = page.getByRole("button", { name: "0 comments" }).first();
    await commentToggle.scrollIntoViewIfNeeded();
    await commentToggle.click();

    // Fill out comment form
    await page.getByPlaceholder("Your name").first().fill("TestUser");
    await page.getByPlaceholder("Write a comment...").first().fill("This is a test comment!");

    // Submit
    await page.getByRole("button", { name: "Post" }).first().click();

    // Comment should appear
    await expect(page.getByText("TestUser").first()).toBeVisible();
    await expect(page.getByText("This is a test comment!")).toBeVisible();

    // Reload page and verify persistence
    await page.reload();

    // Re-expand comments — count should now be 1
    const updatedToggle = page.getByRole("button", { name: "1 comment" }).first();
    await updatedToggle.scrollIntoViewIfNeeded();
    await updatedToggle.click();
    await expect(page.getByText("This is a test comment!")).toBeVisible();
  });
});

test.describe("Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("mobile nav hamburger works", async ({ page }) => {
    await page.goto("/");

    // Hamburger should be visible
    const hamburger = page.getByRole("button", { name: "Toggle menu" });
    await expect(hamburger).toBeVisible();

    // Open mobile menu
    await hamburger.click();

    // Mobile menu links should be visible
    const mobileMenu = page.locator("nav > div.border-t");
    await expect(mobileMenu.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(mobileMenu.getByRole("link", { name: "Games" })).toBeVisible();
  });

  test("homepage sections stack on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "LEO GAMES", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Featured Games" })).toBeVisible();
  });
});
