const { test, expect } = require('@playwright/test');


test('Browser Context playwright test', async ({ browser }) => {
   //chrome- plugins/ cookies
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");



});

test('page playwright test', async ({ page }) => {
   await page.goto("https://rahulshettyacademy.com/loginpagepractice/");

   //get title-assertion
   console.log(await page.title());

   await expect(page).toHaveTitle("Google");
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");


   //css, type fill
   await page.locator('#username').fill("Aditi");
   await page.locator("[type='password']").fill("BHosale");

   await page.locator("#signInbtn").click();


   //wait until this locator shown up page
   //await expect(page.locator('.alert-danger')).toBeVisible();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("style*='block']")).toContainText('Incorrect');

   //type -fill
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await signIn.click();
   console.log(await page.locator(".card-body a").first().textContent());
   console.log(await page.locator(".card-body a").nth(0).textContent());



});

test('Client App login', async ({ page }) => {
   const productName = 'Zara Coast 4';
   const products = page.locator(".card-body")
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("anshika@gmail.com");
   await page.locator("#userPassword").type("Iamking@00");
   await page.locator("[value='login']").click();
   await page.waitForLoadState('networkkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   const count = await products.count();
   for (let i = 0; i < count; i++) {
      if (await products.nth(i).locator('dfh').textContent() == productName) {
         //add to cart
         await products.nth(i).locator("text=Add to Cart").click();
         break;

      }
   }
   await page.pause();



})
