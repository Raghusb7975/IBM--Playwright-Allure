import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Gildan Men\'s Crew T-Shirts,' }).click();
  await page.getByRole('button', { name: 'Buy Now' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('raghh');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Invalid email address').click();
});