export default class AjaxLoaderPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.button = page.locator('#button1');

  }
  async goto() {
    await this.page.goto('/Ajax-Loader/index.html');
  }

  async waitForButton() {
    await this.button.waitFor({ state: "visible" });
  }

  async openModal() {
    await this.button.click();
  }
}
