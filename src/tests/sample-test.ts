import { test, expect } from "@playwright/test";

test("Page renders", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Hearty Capsules");
  await expect(page.getByText("Hearty Capsules")).toBeVisible();
});
