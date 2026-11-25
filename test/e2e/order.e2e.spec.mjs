import { browser, $, expect } from '@wdio/globals';
import { getRandomOrder } from './data/pizza-order-randomizer.js';

describe('Order Page - Successful Login and Order Placement', () => {
    it('should login successfully and place an order', async () => {

        // Step 1: Login
        await browser.url('/login');
        await $('input[data-testid="username-input"]').setValue('test');
        await $('input[data-testid="username-password"]').setValue('test');
        await $('button[data-testid="login-button"]').click();

        // Assertion: Verify redirect and heading
        await expect(browser).toHaveUrl(expect.stringContaining('/order'));
        const heading = await $(`[data-testid="order-heading"]`);
        await expect(heading).toHaveText('Place Your Order');

        // Step 2: Fill Order Form
        const newOrder = getRandomOrder();
        await $('input[data-testid="crust-input"]').setValue(newOrder.crust);
        await $('input[data-testid="flavor-input"]').setValue(newOrder.flavor);
        await $('input[data-testid="size-input"]').setValue(newOrder.size);
        await $('input[data-testid="table-no-input"]').setValue(newOrder.table_no.toString());

        // Step 3: Submit
        await $('button[data-testid="submit-button"]').click();

        // Assertion: Success message
        const successMessage = await $('p[data-testid="success-message"]').getText();
        expect(successMessage).toContain('Order placed successfully!');
    });
});