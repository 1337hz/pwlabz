const { test, expect } = require('@playwright/test');

import AutocompletePage from '../pages/autocompletePage';

test.describe('Autocomplete', () => {
  test('can select autocomplete option', async ({ page }) => {
    const autocompletePage = new AutocompletePage(page);
    await autocompletePage.goto();

    await autocompletePage.fillInput('chi');
    await autocompletePage.selectAutoCompleteOptionByIndex(1);
  });
})
