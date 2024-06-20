// @ts-check
const { test, expect } = require("@playwright/test");
const { loginPage } = require("../Pages/Locators/loginPage");
const { shopItems } = require("../Pages/Locators/shopItems");

test.describe("Login and buy items", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://www.saucedemo.com/");
  });

  test("Login to the app", async ({ page }) => {
    const LoginPage = new loginPage(page);
    await LoginPage.login();
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  });

  test("Buy any 2 item", async ({ page }) => {
    const LoginPage = new loginPage(page);
    const Shopitems = new shopItems(page);
    await LoginPage.login();
    await Shopitems.buyItems();
    await expect(page.getByText("Thank you for your order!")).toBeVisible();
  });
});
