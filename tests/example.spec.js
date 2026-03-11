// // @ts-check
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

// @ts-check
import { test, expect } from '@playwright/test';

test('contact page title', async ({page}) => {
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