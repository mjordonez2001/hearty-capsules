import { test, expect } from "@playwright/test";

test("Home page renders", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Hearty Capsules");
  await expect(page.getByText("Home")).toBeVisible();
});

test("Account page renders", async ({ page }) => {
  await page.goto("/account");
  await expect(page.getByText("Account")).toBeVisible();
});

test("Cart page renders", async ({ page }) => {
  await page.goto("/cart");
  await expect(page.getByText("Cart").first()).toBeVisible();
});

test("Checkout page renders", async ({ page }) => {
  await page.goto("/checkout");
  await expect(page.getByText("Checkout")).toBeVisible();
});

test("Contact page renders", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByText("Contact").first()).toBeVisible();
});

test("Login page renders", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByText("Log in")).toBeVisible();
});

test("Quiz page renders", async ({ page }) => {
  await page.goto("/quiz");
  await expect(page.getByText("Quiz").first()).toBeVisible();
});

test("Shop page lists supplements", async ({ page }) => {
  await page.goto("/shop");
  await expect(page.getByText("Vitamin B-12")).toBeVisible();
});

test("Supplement page renders", async ({ page }) => {
  await page.goto("/supplement/iron");
  await expect(page.getByText("Add to Cart")).toBeVisible();
});
