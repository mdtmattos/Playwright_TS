import { Given, When, Then, setDefaultTimeout, Before } from '@cucumber/cucumber';
import { page } from '../../hooks/hooks';
import LoginPageObject from '../pages/loginPage.po';
import ProductsPageObject from '../pages/productsPage.po';
import config from '../../config/config';

let loginPageObject: LoginPageObject;
let productsPageObject: ProductsPageObject;

Before(() => {
  loginPageObject = new LoginPageObject(page);
  productsPageObject = new ProductsPageObject(page);
});

setDefaultTimeout(60 * 1000 * 2);

Given('I access the application', async function () {
  await loginPageObject.accessApplication();
});

Given('I login with standard user', async function () {
  await loginPageObject.loginUser(config.standarUserName, config.password);
});

Given('I login with a locked out user', async function () {
  await loginPageObject.loginUser(config.lockedOutUserName, config.password);
});

Given('I dont fill username field', async function () {
  await loginPageObject.loginUser("", config.password);
});

Given('I dont fill password field', async function () {
  await loginPageObject.loginUser(config.standarUserName, "");
});

Given('I dont fill username and password', async function () {
  await loginPageObject.loginUser("", "");
});

Given('I login with a nonexistent user', async function () {
  await loginPageObject.loginNonExistentdUser("nonExistentUser", config.password);
});

When('I click on Log in button', async function () {
  await loginPageObject.clickLoginButton();
});

When('I assert the page title', async function () {
  await loginPageObject.assertAppLogo();
});

Then('I logout from application', async function () {
  await productsPageObject.clickMenuButton();
  await productsPageObject.clickLogoutSidebarButton();
  await loginPageObject.assertLoginPage();
});

Then('I assert the error message {string}', async function (errorMessage) {
  await loginPageObject.assertLoginPageErrorMessage(errorMessage);
});
