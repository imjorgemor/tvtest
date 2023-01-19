import {test, expect} from '@playwright/test';

const home_url = 'http://localhost.rakuten.tv:3000/';

test('Render test checking navbar', async ({page})=> {
    await page.goto(home_url);
    const pageNavbar = await page.getByTestId('tv-navbar');
    await expect(pageNavbar).toBeTruthy();
});