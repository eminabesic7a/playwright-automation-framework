
import { Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {
    }

    cartLink = this.page.locator(
        '[data-test="shopping-cart-link"]'
    );

    cartItemTitle = this.page.locator(
        '[data-test="item-1-title-link"]'
    );

    removeTShirtButton = this.page.locator(
        '[data-test="remove-sauce-labs-bolt-t-shirt"]'
    );

    checkoutButton = this.page.locator(
        '[data-test="checkout"]'
    );

    async openCart() {
        await this.cartLink.click();
    }

    async removeTShirtFromCart() {
        await this.removeTShirtButton.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}