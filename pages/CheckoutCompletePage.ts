import { Page, Locator } from '@playwright/test';
 
export class CheckoutCompletePage {
readonly page: Page;
readonly finishButton: Locator;
readonly successMessage: Locator;
 
constructor(page: Page) {
this.page = page;
this.finishButton = page.getByTestId('finish');
this.successMessage = page.getByText('Thank you for your order!');
}
 
async finishOrder() {
await this.finishButton.click();
}
}