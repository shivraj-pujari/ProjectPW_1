const {test, expect}=require('@playwright/test');

test('Use of browser fixture', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('Use of page fixture', async ({page})=>{
    await page.goto("https://www.netflix.com/in");
    console.log(await page.title());
    await expect(page).toHaveTitle("Netflix India – Watch TV Shows Online, Watch Movies Online");
});