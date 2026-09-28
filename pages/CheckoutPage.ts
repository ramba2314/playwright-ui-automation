import { Page, Locator } from '@playwright/test';
 
export class CheckoutPage {
readonly page: Page;
readonly firstName: Locator;
readonly lastName: Locator;
readonly postalCode: Locator;
readonly continueButton: Locator;
 
constructor(page: Page) {
this.page = page;
this.firstName = page.getByTestId('firstName');
this.lastName = page.getByTestId('lastName');
this.postalCode = page.getByTestId('postalCode');
this.continueButton = page.getByTestId('continue');
}
 
async enterCheckoutDetails(
firstName: string,
lastName: string,
postalCode: string
) {
await this.firstName.fill(firstName);
await this.lastName.fill(lastName);
await this.postalCode.fill(postalCode);
await this.continueButton.click();
}
}