import { browser, $, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js';

describe('Order Page - Successful Login and Order Placement', () => {
    it('should login successfully and place an order', async () => {
        // Step 1: Login
        await browser.url(`${config.baseUrl}/login`);
        await $('input[data-testid="username-input"]').setValue('test');
        await $('input[data-testid="username-password"]').setValue('test');
        await $('button[data-testid="login-button"]').click();

        // Assertion: Verify redirect and heading
        await expect(browser).toHaveUrl(expect.stringContaining('/order'));
        const heading = await $(`[data-testid="order-heading"]`);
        await expect(heading).toHaveText('Place Your Order');

        // Step 2: Fill Order Form

        await $('input[data-testid="crust-input"]').setValue('Thin');
        await $('input[data-testid="flavor-input"]').setValue('Pepperoni');
        await $('input[data-testid="size-input"]').setValue('Medium');
        const randomTableNo = Math.floor(Math.random() * 1000) + 1;
        await $('input[data-testid="table-no-input"]').setValue(randomTableNo.toString());

        // Step 3: Submit
        await $('button[data-testid="submit-button"]').click();

        // Assertion: Success message
        const successMessage = await $('p[data-testid="success-message"]').getText();
        expect(successMessage).toContain('Order placed successfully!');
    });
});
