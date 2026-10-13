import { Page } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {
    }

    addTShirtButton = this.page.locator(
        '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    );

    async addTShirtToCart() {
        await this.addTShirtButton.click();
    }
}