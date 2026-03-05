import { Locator, Page } from "@playwright/test";
export class LoginPage {
  constructor(private page: Page) {}

  get usernameInput(): Locator {
    return this.page.locator("#user-name");
  }

  get passwordInput(): Locator {
    return this.page.locator("#password");
  }

  get loginButton(): Locator {
    return this.page.locator("#login-button");
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-test="error"]');
  }

  async goTo() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithStandardUser() {
    await this.login(USERS.STANDARD.username, USERS.STANDARD.password);
  }
}
