const { test, expect } = require('@playwright/test');

import ContactUsPage from '../pages/contactUsPage';

test.describe('Contact Us form', () => {
  test('can clear form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    const data = { firstName: "TEXT", lastName: "TEXT", email: "TEXT", comments: "TEXT" }

    await contactUsPage.fillForm(data)
    await contactUsPage.resetButton.click();

    await expect(contactUsPage.firstNameInput).toBeEmpty(); sx
    await expect(contactUsPage.lastNameInput).toBeEmpty();
    await expect(contactUsPage.emailInput).toBeEmpty();
    await expect(contactUsPage.commentsInput).toBeEmpty();
  });
})
