exports.shopItems = class shopItems {
  constructor(page) {
    this.page = page;

    // Locators

    // Items Page
    this.backPack = page.locator(
      "//*[@id = 'add-to-cart-sauce-labs-backpack']"
    );
    this.bikeLight = page.locator(
      "//*[@id = 'add-to-cart-sauce-labs-bike-light']"
    );
    this.shoppingCart = page.locator("//*[@class = 'shopping_cart_link']");
    this.checkoutButton = page.locator("//*[@id = 'checkout']");
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.zipCode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator("//*[@id = 'continue']");
    this.finishButton = page.locator("//*[@id = 'finish']");
  }

  // Actions

  async buyItems() {
    await this.backPack.click();
    await this.bikeLight.click();
    await this.shoppingCart.click();
    await this.checkoutButton.click();
    await this.firstName.fill("John");
    await this.lastName.fill("Wick");
    await this.zipCode.fill("12049");
    await this.continueButton.click();
    await this.finishButton.click();
  }
};

// Thank you for your order!
