export default class WcagPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.hiltoncolumbus.com/');
  }

}
