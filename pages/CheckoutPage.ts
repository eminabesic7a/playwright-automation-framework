import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {
    }

    firstNameInput = this.page.locator('[data-test="firstName"]');
    lastNameInput = this.page.locator('[data-test="lastName"]');
    postalCodeInput = this.page.locator('[data-test="postalCode"]');

    continueButton = this.page.locator('[data-test="continue"]');
    finishButton = this.page.locator('[data-test="finish"]');

    confirmationMessage = this.page.getByText(
        'Thank you for your order!'
    );
    errorMessage = this.page.locator('[data-test="error"]');

    async fillCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToOverview() {
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}
