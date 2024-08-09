import { Page, expect } from '@playwright/test';

export default class CartPageObject {
  private page: Page;

  private Elements = {
    cartButton: '[data-test="shopping-cart-link"]',
    productInventoryName: '[data-test="inventory-item-name"]',
    productInventoryPrice: '[data-test="inventory-item-price"]',
    checkoutButton: '#checkout'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async assertProductName(productName: string) {
    await expect(this.page.locator(this.Elements.productInventoryName)).toHaveText(productName);
  }

  async assertProductPrice(productPrice: string) {
    await expect(this.page.locator(this.Elements.productInventoryPrice)).toHaveText(productPrice);
  }

  async clickCartButton() {
    await this.page.locator(this.Elements.cartButton).click();
  }

  async clickCheckoutButton() {
    await this.page.locator(this.Elements.checkoutButton).click();
  }
}
