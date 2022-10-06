export default class AutocompletePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.input = page.locator('#myInput');

  }
  async goto() {
    await this.page.goto('/Autocomplete-TextField/autocomplete-textfield.html');
  }

  async fillInput(value) {
    await this.input.fill(value);
  }

  async selectAutoCompleteOptionByIndex(index) {
    await this.page.locator(`#myInputautocomplete-list div >> nth=${index}`).click()
  }
}
