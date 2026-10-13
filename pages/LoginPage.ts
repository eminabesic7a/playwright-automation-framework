import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {
    }

    usernameInput = this.page.getByPlaceholder('Username');
    passwordInput = this.page.getByPlaceholder('Password');
    loginButton = this.page.getByRole('button', { name: 'Login' });
    errorMessage = this.page.locator('[data-test="error"]');

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
