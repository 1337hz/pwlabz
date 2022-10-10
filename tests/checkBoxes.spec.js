const { test, expect } = require('@playwright/test');

import CheckBoxesPage from '../pages/checkBoxesPage';

test.describe('Checkboxes, radio buttons', () => {

  test.describe("Drodpowns", () => {
    test('Dropdown #1 can select correct option', async ({ page }) => {
      const checkBoxesPage = new CheckBoxesPage(page);
      await checkBoxesPage.goto();

      await checkBoxesPage.selectFirstDropdownByLabel("C#");
      expect(await checkBoxesPage.getFirstDropdownValue()).toEqual("c#");

      await checkBoxesPage.selectFirstDropdownByLabel("Python");
      expect(await checkBoxesPage.getFirstDropdownValue()).toEqual("python");

      await checkBoxesPage.selectFirstDropdownByLabel("SQL");
      expect(await checkBoxesPage.getFirstDropdownValue()).toEqual("sql");

      await checkBoxesPage.selectFirstDropdownByLabel("JAVA");
      expect(await checkBoxesPage.getFirstDropdownValue()).toEqual("java");
    });
    test('Dropdown #2 can select correct option', async ({ page }) => {
      const checkBoxesPage = new CheckBoxesPage(page);
      await checkBoxesPage.goto();

      await checkBoxesPage.selectSecondDropdownByLabel("Eclipse");
      expect(await checkBoxesPage.getSecondDropdownValue()).toEqual("eclipse");

      await checkBoxesPage.selectSecondDropdownByLabel("Maven");
      expect(await checkBoxesPage.getSecondDropdownValue()).toEqual("maven");

      await checkBoxesPage.selectSecondDropdownByLabel("TestNG");
      expect(await checkBoxesPage.getSecondDropdownValue()).toEqual("testng");

      await checkBoxesPage.selectSecondDropdownByLabel("JUnit");
      expect(await checkBoxesPage.getSecondDropdownValue()).toEqual("junit");
    });
  })

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
