import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('Saucedemo valid login test', async ({ page }) => {
 const loginPage = new LoginPage(page);
 await page.goto('https://www.saucedemo.com/');
 await loginPage.login('standard_user', 'secret_sauce');
 await expect(page).toHaveURL(/inventory.html/);
 await expect(page.getByText('Products')).toBeVisible();
});
test('Saucedemo invalid login test', async ({ page }) => {
 const loginPage = new LoginPage(page);
 await page.goto('https://www.saucedemo.com/');
 await loginPage.login('invalid_user', 'wrong_password');
 await expect(loginPage.errorMessage).toBeVisible();
});