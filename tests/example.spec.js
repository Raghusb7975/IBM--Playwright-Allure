//  @ts-check
// import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


import { test, expect } from '@playwright/test';

test.skip('contact page title', async ({page}) => {
  await page.goto('http://localhost:5500/public/contact.html');
  await expect(page).toHaveTitle(/Contact Support/);
});

test('contact page submit', async ({ page }) => {
  await page.goto('http://localhost:5500/public/contact.html');

  const email = page.getByPlaceholder(/Enter/); // Locator
  const msg = page.locator('#userMessage');     // Locator
  const btn = page.locator('.btn-primary.w-100'); // Corrected CSS selector

  // Fill inputs
  await email.fill('aaryan@gmail.com');
  await msg.fill('hajasjjshbjshsh');

  // Click button
  await btn.click();

  // Take screenshots
  await msg.screenshot({ path: './msg.png' });
  await btn.screenshot({ path: './button.png' });
  await page.screenshot({ path: './meow.png', fullPage: true });
});

[
  {email:"raghu1@gmail.com",msg:"hello raghu"},

  {email:"aaryan2@gamil.com",msg:"hello aaryan"}
].forEach(Obj =>{
  test(`localhost 5500 contact test for ${Obj.email}`,async({page})=>{
    await page.goto('https://localhost:5500/public/contact.html');
    await page.getByRole('textbox',{name:'Enter your email'});
    await page.getByRole('textbox',{name:'Enter your email'}).fill(Obj.email);
    await page.locator('#userMessage').click();
    await page.locator('#userMessage').fill(Obj.msg);
    page.once('dialog',dialog=>{
      console.log(`Dialog message:${dialog.message()}`);
      dialog.dismiss().catch(()=>{});

    });
    await page.getByRole('button',{name:'Submit'}).click();
  });
})