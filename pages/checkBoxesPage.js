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
    return await this.firstDropdownMenu.inputValue();
  }

  async selectSecondDropdownByLabel(label) {
    await this.secondDropdownMenu.selectOption({ label: label });
  }
  async getSecondDropdownValue() {
    return await this.secondDropdownMenu.inputValue();
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
    const cb = await this.getCheckboxByLabel(value);
    return cb.isChecked();
  }
  async uncheckCheckboxByLabel(value) {
    const cb = await this.getCheckboxByLabel(value);
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
