import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('Raghu S B');
  await page.getByRole('button', { name: 'Get XPath cheat sheet' }).click();
  await page.getByText('This field is required.').click();

  await expect(page.getByAltText('This feild is required.')).toBeVisible
});



test('test1', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('textbox', { name: 'First' }).click();
  await page.getByRole('textbox', { name: 'First' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Last' }).click();
  await page.getByRole('textbox', { name: 'Last' }).fill('b');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('raghu@gmail.com');
  await page.getByRole('textbox', { name: 'Comment or Message *' }).click();
  await page.getByRole('textbox', { name: 'Comment or Message *' }).fill('hiiii');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Google reCAPTCHA verification').click();

   await expect(page.getByAltText('Google reCAPTCHA verification failed, please try again later.')).toBeVisible
});


test('test2', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  await page.getByRole('link', { name: 'Practice', exact: true }).click();
  await page.getByRole('link', { name: 'Test Login Page' }).click();

  await expect(page.getByRole('heading', { name: /Test login/ })).toBeVisible();
});