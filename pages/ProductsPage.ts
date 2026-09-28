import { Page, Locator, expect } from '@playwright/test';
 
export class ProductsPage {
readonly page: Page;
readonly productsTitle: Locator;
readonly backpackAddToCartButton: Locator;
readonly cartIcon: Locator;
 
constructor(page: Page) {
this.page = page;
this.productsTitle = page.getByText('Products');
 
this.backpackAddToCartButton =
page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

this.cartIcon =
page.locator('[data-test="shopping-cart-link"]');
}
 
async addFirstProductToCart() {
await this.backpackAddToCartButton.click();
 
await expect(
this.page.locator('[data-test="remove-sauce-labs-backpack"]')
).toBeVisible();
}
 
async openCart() {
await this.cartIcon.click();
}
}