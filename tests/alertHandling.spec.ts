import {test, expect} from '@playwright/test'

test('name', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page).toHaveTitle('Practice Page');

    // page.once('dialog', dialog => dialog.accept());
    // await page.locator("input[value='Alert']").click();
    // await page.waitForTimeout(3000);

    await page.getByPlaceholder('Enter Your Name').fill("Sudam");
    page.on('dialog', dialog => dialog.dismiss());
    await page.locator("input[value='Confirm']").click();
    // await page.waitForTimeout(3000);

    
    const fname =page.frameLocator('#courses-iframe');
    // console.log(await fname.locator("//a[text()='Home'] :visible").textContent());
    await fname.locator("//a[text()='All Access plan']").filter({visible : true}).click();
    // console.log(await fname.locator("h2 span :visible").textContent());
    console.log(await fname.locator("//div[@class='text']//h2/span").textContent());
});
