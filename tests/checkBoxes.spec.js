const { test, expect } = require('@playwright/test');

import CheckBoxesPage from '../pages/checkBoxesPage';

test.describe('Contact Us form', () => {

  test.skip('can select correct option', async ({ page }) => {
    const checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.goto();

    await checkBoxesPage.selectFirstDropdownByLabel("C#")

    await page.waitForTimeout(3000)

    expect(page.locator('#dropdowm-menu-1').getAttribute("value")).toBe("c#");
  });

  test('checkboxes', async ({ page }) => {
    const checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.goto();

    await checkBoxesPage.checkAllCheckboxes();

    await checkBoxesPage.uncheckCheckboxByLabel('Option 2');
    await checkBoxesPage.uncheckCheckboxByLabel('Option 4');

    expect(await checkBoxesPage.isCheckboxCheckedByLabel('Option 1')).toBeTruthy();
    expect(await checkBoxesPage.isCheckboxCheckedByLabel('Option 2')).toBeFalsy();
    expect(await checkBoxesPage.isCheckboxCheckedByLabel('Option 1')).toBeTruthy();
    expect(await checkBoxesPage.isCheckboxCheckedByLabel('Option 4')).toBeFalsy();
  });

  test('radio buttons', async ({ page }) => {
    const checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.goto();

    await checkBoxesPage.checkRadioButtonByLabel('Green');
    expect(await checkBoxesPage.isRadioButtonCheckedByLabel('Green')).toBeTruthy();

    await checkBoxesPage.checkRadioButtonByLabel('Blue');
    expect(await checkBoxesPage.isRadioButtonCheckedByLabel('Blue')).toBeTruthy();

    await checkBoxesPage.checkRadioButtonByLabel('Yellow');
    expect(await checkBoxesPage.isRadioButtonCheckedByLabel('Yellow')).toBeTruthy();

    await checkBoxesPage.checkRadioButtonByLabel('Orange');
    expect(await checkBoxesPage.isRadioButtonCheckedByLabel('Orange')).toBeTruthy();

    await checkBoxesPage.checkRadioButtonByLabel('Purple');
    expect(await checkBoxesPage.isRadioButtonCheckedByLabel('Purple')).toBeTruthy();
  });
})
