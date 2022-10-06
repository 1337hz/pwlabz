const { test } = require('@playwright/test');

import AjaxLoaderPage from '../pages/ajaxLoaderPage';

test.describe('Ajax loader', () => {
  test('can wait for button', async ({ page }) => {
    const ajaxLoaderPage = new AjaxLoaderPage(page);
    await ajaxLoaderPage.goto();

    await ajaxLoaderPage.waitForButton();
    await ajaxLoaderPage.openModal();
  });
})
