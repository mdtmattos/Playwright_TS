import { Given, When, Then, setDefaultTimeout, Before } from '@cucumber/cucumber';
import { page } from '../../hooks/hooks';
import ProductsPageObject from '../pages/productsPage.po';
import CartPageObject from '../pages/cartPage.po'
import CheckoutPageObject from '../pages/checkoutPage.po'
import UserFactory from '../faker/factory/userPage.factory';

let productsPageObject: ProductsPageObject;
let cartPageObject: CartPageObject;
let checkoutPageObject: CheckoutPageObject;

interface UsertData {
  firstName: string,
  lastName: string,
  zipcode: string,
}

let usertData: UsertData;

Before(() => {
  productsPageObject = new ProductsPageObject(page);
  cartPageObject = new CartPageObject(page);
  checkoutPageObject = new CheckoutPageObject(page);
});

setDefaultTimeout(60 * 1000 * 2);

Given('I pick a product', async function () {
  await productsPageObject.clickInAProductByName("Sauce Labs Backpack");
});

When('I assert the product details', async function () {
  await productsPageObject.assertProductName("Sauce Labs Backpack");
  await productsPageObject.assertProductPrice("$29.99");
});

When('I click on Add to cart button', async function () {
  await productsPageObject.clickAddToCartButton();
});

Then('I assert the product on Cart', async function () {
  await cartPageObject.clickCartButton();
  await cartPageObject.assertProductName("Sauce Labs Backpack");
  await cartPageObject.assertProductPrice("$29.99");
});

Then('I checkout the product on Cart', async function () {
  usertData = UserFactory.generateUserData();
  await cartPageObject.clickCheckoutButton();
  await checkoutPageObject.typeFirstName(usertData.firstName);
  await checkoutPageObject.typeLastName(usertData.lastName);
  await checkoutPageObject.typeZipCode(usertData.zipcode);
  await checkoutPageObject.clickContinueButton();
});

Then('I assert the product on Checkout', async function () {
  await checkoutPageObject.assertProductName("Sauce Labs Backpack");
  await checkoutPageObject.assertProductPrice("$29.99");
  await checkoutPageObject.assertPaymentInfoLabel();
  await checkoutPageObject.assertShippingInfoLabel();
  await checkoutPageObject.assertTotalInfoLabel();
  await checkoutPageObject.assertTotalLabel();
  await checkoutPageObject.assertPaymentInfoValue();
  await checkoutPageObject.assertShippingInfoValue();
  await checkoutPageObject.assertSubTotalLabel();
  await checkoutPageObject.assertTaxlLabel();
});

Then('I click on finish button on Checkout page', async function () {
  await checkoutPageObject.clickFinishButton();
});

Then('I assert checkout complete', async function () {
  await checkoutPageObject.assertCheckoutCompleteContainer();
  await checkoutPageObject.assertCompleteHeaderText();
  await checkoutPageObject.assertCompleteText();
});

Then('I remove the product from cart', async function () {
  await checkoutPageObject.clickRemoveSpecificProducs("Sauce Labs Backpack");
});

Then('I assert if the product was removed', async function () {
  await checkoutPageObject.assertProductNameNotPresent("Sauce Labs Backpack");
});
