export default class CheckBoxesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstDropdownMenu = page.locator('#dropdowm-menu-1');
    this.secondDropdownMenu = page.locator('#dropdowm-menu-2');
    this.thirdDropdownMenu = page.locator('#dropdowm-menu-3');
    this.checkBoxes = page.locator('#checkboxes input');
  }

  async goto() {
    await this.page.goto('/Dropdown-Checkboxes-RadioButtons/index.html');
  }

  async selectFirstDropdownByLabel(label) {
    await this.firstDropdownMenu.selectOption({ label: label });
  }
  async getFirstDropdownValue() {
    // return await page.$eval('#dropdowm-menu-1', el => el.value)
    // return (await this.firstDropdownMenu.innerText()).valueOf()
    const x = await this.firstDropdownMenu.getAttribute("value", { timeout: 3000 });
    return x
  }

  //-------Checkboxes
  async checkAllCheckboxes() {
    for (const el of await this.checkBoxes.elementHandles()) {
      await el.check();
    }
  }

  async getCheckboxByLabel(value) {
    return this.page.locator(`text=${value}`);
  }
  async isCheckboxCheckedByLabel(value) {
    const cb = await this.getCheckboxByLabelValue(value);
    return cb.isChecked();
  }
  async uncheckCheckboxByLabel(value) {
    const cb = await this.getCheckboxByLabelValue(value);
    await cb.uncheck();
  }
  //-------Radio buttons
  async getRadioButtonByValue(value) {
    return this.page.locator(`input[type=radio][value=${value.toLowerCase()}]`);
  }
  async checkRadioButtonByLabel(value) {
    const rb = await this.getRadioButtonByValue(value);
    await rb.check();
  }

  async isRadioButtonCheckedByLabel(value) {
    const rb = await this.getRadioButtonByValue(value);
    return rb.isChecked();
  }
}
