const { test, expect } = require('@playwright/test');

import ContactUsPage from '../pages/contactUsPage';

test.describe('Contact Us form', () => {

  test('can send form with correct data', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    const data = {
      firstName: "TEXT", lastName: "TEXT",
      email: "ema@il.com", comments: "TEXT"
    }

    await contactUsPage.fillForm(data)
    await contactUsPage.resetButton.click();

    expect(contactUsPage.thankYouMessage).toHaveText
  });

  test('can clear form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    const data = {
      firstName: "TEXT", lastName: "TEXT",
      email: "TEXT", comments: "TEXT"
    }

    await contactUsPage.fillForm(data)
    await contactUsPage.resetButton.click();

    await expect(contactUsPage.firstNameInput).toBeEmpty();
    await expect(contactUsPage.lastNameInput).toBeEmpty();
    await expect(contactUsPage.emailInput).toBeEmpty();
    await expect(contactUsPage.commentsInput).toBeEmpty();
  });

  test('cannot send incomplete form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();

    const data = { email: 'em@i.com' }

    await contactUsPage.fillForm(data)
    await contactUsPage.submitButton.click();

    await expect(contactUsPage.errorMessage).toHaveText('Error: all fields are required');
  });
  test('requires correct email', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    const data = { firstName: "TEXT", lastName: "TEXT", email: "asd", comments: "TEXT" }

    await contactUsPage.fillForm(data)
    await contactUsPage.submitButton.click();

    await expect(contactUsPage.errorMessage).toHaveText('Error: Invalid email address')
  });
})
