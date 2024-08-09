import { Page, expect } from '@playwright/test';

export default class ProductsPageObject {
  private page: Page;

  private Elements = {
    menuButton: '#react-burger-menu-btn',
    logoutSidebarButton: '#logout_sidebar_link',
    productInventoryName: '[data-test="inventory-item-name"]',
    productInventoryPrice: '[data-test="inventory-item-price"]',
    addToCartButton: '#add-to-cart'
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

  async clickMenuButton() {
    await this.page.locator(this.Elements.menuButton).click();
  }

  async clickAddToCartButton() {
    await this.page.locator(this.Elements.addToCartButton).click();
  }

  async clickLogoutSidebarButton() {
    await this.page.locator(this.Elements.logoutSidebarButton).click();
  }

  async clickInAProductByName(productName: string) {
    await this.page.locator(this.Elements.productInventoryName).filter({ hasText: productName }).click();
  }
}
