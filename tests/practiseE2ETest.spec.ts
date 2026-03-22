import {test, expect} from 'playwright/test'

test('E2E test', async ({page})=> {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle('Practice Page');
    const wind = page.getByRole('button', {name : 'Open Window'});
    // await expect(wind).toBeVisible({timeout : 4000});

    // const [newpages] = await Promise.all([
    //      page.waitForEvent('popup'),
    //      page.click('//button[text()="Open Window"]'),
    // ])

    // await expect(newpages).toHaveTitle('Foundations of Modern Higher Education | .Consulting');

    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();
    await page.getByRole('button', {name: 'Hide'}).click();
    await expect(page.getByPlaceholder('Hide/Show Example')).not .toBeVisible();

})