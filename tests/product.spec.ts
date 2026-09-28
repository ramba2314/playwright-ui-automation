import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
test('Saucedemo product selection and add to cart', async ({ page }) => {
 const loginPage = new LoginPage(page);
 const productsPage = new ProductsPage(page);
 await page.goto('https://www.saucedemo.com/');
 // Login
 await loginPage.login('standard_user', 'secret_sauce');
 
await expect(page).toHaveURL(/inventory.html/);
 

 // Verify Products page
 await expect(productsPage.productsTitle).toBeVisible();
 // Add Backpack to cart
 await expect(productsPage.backpackAddToCartButton).toBeVisible();
await expect(productsPage.cartIcon).toBeVisible();
 
await productsPage.addFirstProductToCart();
 
await productsPage.openCart();
 

 
await expect(
page.getByText('Sauce Labs Backpack')
).toBeVisible();
 // Verify Backpack is in cart
 await expect(
   page.getByText('Sauce Labs Backpack')
 ).toBeVisible();
});