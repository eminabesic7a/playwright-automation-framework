import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { usersData } from '../parameters/usersData';

test('Standard user can login successfully @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.standardUser.username,
        usersData.standardUser.password
    );

    //await expect(page).toHaveURL(/inventory/);
    await expect(page).toHaveURL(/this-page-should-not-exist/);
});

test('Invalid user cannot login successfully @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        usersData.invalidUser.username,
        usersData.invalidUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
});