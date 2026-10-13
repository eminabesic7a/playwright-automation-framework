
import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { usersData } from '../parameters/usersData';

type TestFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<TestFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await page.goto('/');

        await loginPage.login(
            usersData.standardUser.username,
            usersData.standardUser.password
        );

        await use(page);
    },
});

export { expect } from '@playwright/test';