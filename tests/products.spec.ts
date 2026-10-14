/* old way import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { usersData } from '../parameters/usersData';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can add Sauce Labs Bolt T-Shirt to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);

    await productsPage.addTShirtToCart();

    await cartPage.openCart();

    await expect(
        page.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');
});

test('User can remove Sauce Labs Bolt T-Shirt from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);

    await productsPage.addTShirtToCart();

    await cartPage.openCart();

    await expect(
        page.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');

    await cartPage.removeTShirtFromCart();

    await expect(
        page.locator('[data-test="item-1-title-link"]')
    ).toHaveCount(0);
});
test('User can complete checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);

    await productsPage.addTShirtToCart();

    await cartPage.openCart();

    await expect(
        page.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');

    await cartPage.checkoutButton.click();

    await checkoutPage.fillCustomerInformation(
        'Test',
        'LastName',
        '123456'
    );

    await checkoutPage.continueToOverview();

    await expect(page).toHaveURL(/checkout-step-two/);

    await checkoutPage.finishOrder();

    await expect(
        checkoutPage.confirmationMessage
    ).toBeVisible();
});

test('Checkout shows error when customer information is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    await productsPage.addTShirtToCart();

    await cartPage.openCart();

    await cartPage.checkoutButton.click();

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.errorMessage).toBeVisible();

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: First Name is required'
    );
});

test('Checkout shows error when last name is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    await productsPage.addTShirtToCart();
    await cartPage.openCart();
    await cartPage.checkoutButton.click();

    await checkoutPage.firstNameInput.fill('Test');
    await checkoutPage.postalCodeInput.fill('123456');

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Last Name is required'
    );
});

*/

import { test, expect } from '../fixtures/testFixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can add Sauce Labs Bolt T-Shirt to cart @smoke', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await productsPage.addTShirtToCart();
    await cartPage.openCart();

    await expect(
        loggedInPage.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');
});

test('User can remove Sauce Labs Bolt T-Shirt from cart', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await productsPage.addTShirtToCart();
    await cartPage.openCart();

    await expect(
        loggedInPage.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');

    await cartPage.removeTShirtFromCart();

    await expect(
        loggedInPage.locator('[data-test="item-1-title-link"]')
    ).toHaveCount(0);
});

test('User can complete checkout successfully @smoke', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await productsPage.addTShirtToCart();
    await cartPage.openCart();

    await expect(
        loggedInPage.locator('[data-test="item-1-title-link"]')
    ).toHaveText('Sauce Labs Bolt T-Shirt');

    await cartPage.checkoutButton.click();

    await checkoutPage.fillCustomerInformation(
        'Test',
        'LastName',
        '123456'
    );

    await checkoutPage.continueToOverview();

    await expect(loggedInPage).toHaveURL(/checkout-step-two/);

    await checkoutPage.finishOrder();

    await expect(
        checkoutPage.confirmationMessage
    ).toBeVisible();
});

test('Checkout shows error when customer information is empty @smoke', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await productsPage.addTShirtToCart();
    await cartPage.openCart();
    await cartPage.checkoutButton.click();

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.errorMessage).toBeVisible();

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: First Name is required'
    );
});

test('Checkout shows error when last name is empty', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await productsPage.addTShirtToCart();
    await cartPage.openCart();
    await cartPage.checkoutButton.click();

    await checkoutPage.firstNameInput.fill('Test');
    await checkoutPage.postalCodeInput.fill('123456');

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.errorMessage).toBeVisible();

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Last Name is required'
    );
});