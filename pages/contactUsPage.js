// playwright-dev-page.js
const { expect } = require('@playwright/test');

export default class ContactUsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name=first_name]');
    this.lastNameInput = page.locator('input[name=last_name]');
    this.emailInput = page.locator('input[name=email]');
    this.commentsInput = page.locator('textarea[name=message]');
    this.resetButton = page.locator('input[type=reset]');
    this.submitButton = page.locator('input[type=submit]');
    this.errorMessage = page.locator('body');
    this.thankYouMessage = page.locator('h1');
  }

  async goto() {
    await this.page.goto('/Contact-Us/contactus.html');
  }

  // Fills form with provided data, omits fields that are not provided
  async fillForm({ firstName, lastName, email, comments } = {}) {
    if (!!firstName) {
      await this.firstNameInput.fill(firstName);
      await expect(this.firstNameInput).toHaveValue(firstName);
    }

    if (!!lastName) {
      await this.lastNameInput.fill(lastName);
      await expect(this.lastNameInput).toHaveValue(lastName);
    }

    if (!!email) {
      await this.emailInput.fill(email);
      await expect(this.emailInput).toHaveValue(email);
    }

    if (!!comments) {
      await this.commentsInput.fill(comments);
      await expect(this.commentsInput).toHaveValue(comments);
    }
  }
}
