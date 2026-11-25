import { browser, $, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js';

describe('Login Page - Failed Login', () => {
    it('should display an error message for invalid credentials', async () => {
        await browser.url('/login');
        
        await $('input[data-testid="username-input"]').setValue('wrongUser');
        await $('input[data-testid="username-password"]').setValue('wrongPass');
        await $('button[data-testid="login-button"]').click();

        const errorMessage = await $('div[data-testid="error-message"]').getText();
        expect(errorMessage).toBe('Invalid username or password.');
    });
});
