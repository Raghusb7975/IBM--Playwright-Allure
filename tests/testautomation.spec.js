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
  await page.getByText('Password123').first().click();
  await expect(page.getByText('Password123')).toBeVisible
});

test('test3', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Enroll in this course on Udemy' }).first().click();
  const page1 = await page1Promise;

  await expect(page.getByRole('heading',{name:/Courses/})).toBeVisible();
});
