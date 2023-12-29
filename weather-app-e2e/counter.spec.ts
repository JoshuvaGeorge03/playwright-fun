import { test, expect } from "@playwright/test";

const url = 'http://localhost:5173';

test('Ensure Counter has a value of 0 at the start', async ({page}) => {

    await page.goto(url);

    const countText = page.getByText(/Count/i);

    await expect(countText).toBeAttached();

    await expect(countText).toContainText('0');

});