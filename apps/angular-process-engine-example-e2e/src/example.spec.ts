import { test, expect } from '@playwright/test';

test('user creation process', async ({ page }) => {
  // Navigate to the application
  await page.goto('http://localhost:4201');

  await page.getByPlaceholder('Enter username').fill( 'testuser');

  await page.click('text=Next');

  await expect(page.locator('app-process-summary')).toHaveText('testuser')
  await page.click('text=Next');

  await page.getByPlaceholder('Firstname').fill('John');
  await page.getByPlaceholder('Lastname').fill('Doe');
  await page.getByPlaceholder('Email').fill('Smith');
  await page.click('text=Next');

  await expect(page.locator('app-process-summary > div:has-text("username")')).toContainText('username: testuser');
  await expect(page.locator('app-process-summary > div:has-text("firstName")')).toContainText('firstName: John');
  await expect(page.locator('app-process-summary > div:has-text("lastName")')).toContainText('lastName: Doe');
  await expect(page.locator('app-process-summary > div:has-text("email")')).toContainText('email: Smith');
});
