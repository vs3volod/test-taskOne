import { test } from "@playwright/test";

test('Gmail unread messages count', async ({ page }) => {
  await page.goto('https://mail.google.com/');

  await page.locator('[type="email"]').type('testertesting2032@gmail.com');
  await page.locator('#identifierNext > div > button > span').click();
  await page.waitForSelector('#passwordNext > div > button > span');
  await page.locator('[autocomplete="current-password"]').type('testing2032');
  await page.locator('//*[@id="passwordNext"]/div/button/span').click();
  await page.waitForSelector('.aim.ain');
  console.log(await page.locator('.aim.ain').allTextContents());
});