import { test, expect } from '@playwright/test';
 
test('should navigate to the about page', async ({ page }) => {
 
  await page.goto('http://localhost:3000/');

  await page.click('text=About');
  await expect(page).toHaveURL('http://localhost:3000/#about');
  await page.waitForSelector('h1.test');
  
  // Check that the about page contains an h1 element with text 'About Us'
  await expect(page.locator('h1.test')).toContainText('About us');
}
)
