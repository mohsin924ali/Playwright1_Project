exports.loginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators

    // LoginPage

    this.userName = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.locator("//*[@name='login-button']");
  }

  // Actions

  async login() {
    await this.userName.fill("standard_user");
    await this.password.fill("secret_sauce");
    await this.loginButton.click();
  }
};
