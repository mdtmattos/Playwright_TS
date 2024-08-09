import { Page, expect } from '@playwright/test';
import config from '../../config/config';

export default class LoginPageObject {
  private page: Page;

  private Elements = {
    loginLogo: 'div[class="login_logo"]',
    appLogo: 'div[class="app_logo"]',
    loginContainer: '[data-test="login-container"]',
    inputUserName: '#user-name',
    inputPassword: '#password',
    loginButton: '#login-button',
    errorMessageContainer: 'h3[data-test="error"]'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async accessApplication() {
    await this.page.goto(config.baseUrl);
    await expect(this.page.locator(this.Elements.loginLogo)).toHaveText("Swag Labs");
    await this.page.locator(this.Elements.loginContainer).isVisible();
  }

  async assertLoginPage() {
    await expect(this.page.locator(this.Elements.loginLogo)).toHaveText("Swag Labs");
    await this.page.locator(this.Elements.loginContainer).isVisible();
  }

  async assertLoginPageErrorMessage(errorMessage: string) {
    await expect(this.page.locator(this.Elements.errorMessageContainer)).toHaveText(errorMessage);
  }

  async assertAppLogo() {
    await expect(this.page.locator(this.Elements.appLogo)).toHaveText("Swag Labs");
  }

  async clickLoginButton() {
    await this.page.locator(this.Elements.loginButton).click();
  }

  async loginUser(standardUserName: string, password: string) {
    await this.page.locator(this.Elements.inputUserName).fill(standardUserName);
    await this.page.locator(this.Elements.inputPassword).fill(password);
  }

  async loginNonExistentdUser(nonExistentUserName: string, password: string) {
    await this.page.locator(this.Elements.inputUserName).fill(nonExistentUserName);
    await this.page.locator(this.Elements.inputPassword).fill(password);
  }
}
