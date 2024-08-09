import { Page, expect } from '@playwright/test';

export default class CheckoutPageObject {
  private page: Page;

  private Elements = {
    continueButton: '#continue',
    cancelButton: '#cancel',
    finishButton: '#finish',
    firstName: '#first-name',
    lastName: '#last-name',
    zipCode: '#postal-code',
    productInventoryName: '[data-test="inventory-item-name"]',
    productInventoryPrice: '[data-test="inventory-item-price"]',
    paymentInfoLabel: '[data-test="payment-info-label"]',
    shippingInfoLabel: '[data-test="shipping-info-label"]',
    totalInfoLabel: '[data-test="total-info-label"]',
    totalLabel: '[data-test="total-label"]',
    paymentInfoValue: '[data-test="payment-info-value"]',
    shippingInfoValue: '[data-test="shipping-info-value"]',
    subTotalLabel: '[data-test="subtotal-label"]',
    taxLabel: '[data-test="tax-label"]',
    checkouCompleteContainer: '#checkout_complete_container',
    completeHeader: '[data-test="complete-header"]',
    completeText: '[data-test="complete-text"]'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async assertPaymentInfoLabel() {
    await expect(this.page.locator(this.Elements.paymentInfoLabel)).toHaveText("Payment Information:");
  }

  async assertShippingInfoLabel() {
    await expect(this.page.locator(this.Elements.shippingInfoLabel)).toHaveText("Shipping Information:");
  }

  async assertCompleteHeaderText() {
    await expect(this.page.locator(this.Elements.completeHeader)).toHaveText("Thank you for your order!");
  }

  async assertCompleteText() {
    await expect(this.page.locator(this.Elements.completeText)).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
  }

  async assertTotalInfoLabel() {
    await expect(this.page.locator(this.Elements.totalInfoLabel)).toHaveText("Price Total");
  }

  async assertTotalLabel() {
    await this.page.locator(this.Elements.totalLabel).isVisible();
  }

  async assertCheckoutCompleteContainer() {
    await this.page.locator(this.Elements.checkouCompleteContainer).isVisible();
  }

  async assertPaymentInfoValue() {
    await this.page.locator(this.Elements.paymentInfoValue).isVisible();
  }

  async assertShippingInfoValue() {
    await this.page.locator(this.Elements.shippingInfoValue).isVisible();
  }

  async assertSubTotalLabel() {
    await this.page.locator(this.Elements.subTotalLabel).isVisible();
  }

  async assertTaxlLabel() {
    await this.page.locator(this.Elements.taxLabel).isVisible();
  }

  async assertProductName(productName: string) {
    await expect(this.page.locator(this.Elements.productInventoryName)).toHaveText(productName);
  }

  async assertProductNameNotPresent(productName: string) {
    const locator = this.page.locator(this.Elements.productInventoryName, { hasText: productName });
    await expect(locator).toHaveCount(0);
  }

  async assertProductPrice(productPrice: string) {
    await expect(this.page.locator(this.Elements.productInventoryPrice)).toHaveText(productPrice);
  }

  async clickContinueButton() {
    await this.page.locator(this.Elements.continueButton).click();
  }

  async clickRemoveSpecificProducs(productName: string) {
    const formattedProductName = productName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    const removeButtonLocator = `#remove-${formattedProductName}`;
    await this.page.locator(removeButtonLocator).click();
  }

  async clickFinishButton() {
    await this.page.locator(this.Elements.finishButton).click();
  }

  async typeFirstName(firstName: string) {
    await this.page.locator(this.Elements.firstName).fill(firstName);
  }

  async typeLastName(lastName: string) {
    await this.page.locator(this.Elements.lastName).fill(lastName);
  }

  async typeZipCode(zipCode: string) {
    await this.page.locator(this.Elements.zipCode).fill(zipCode);
  }
}
