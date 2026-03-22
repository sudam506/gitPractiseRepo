import {test, expect} from '@playwright/test'


test('@Reg Child windows handl', async ({})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagepractice/");
    const documentationLink = page.locator("href*='documents-request']");
   // const page2 = context.waitForEvent('page'); // listen for any few pages

   const [newPage] =Promise.all(
    [context.waitForEvent('page'), //Listen for any new page pending, rejected,fulfilled
     documentLink.click(),
]  )//new page is opened

text =await newPage.locator(".red").textContent();
const arrayText= text.split("@")
const domain =arrayText[1].split(" ")[0]
//console.log(domain);
await page.locator("#username").type(domain);
await page.pause();
console.log(await page.locator("#username").inputValue());









  



})
