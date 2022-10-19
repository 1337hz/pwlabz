export default class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="firstname"]');
    this.lastNameInput = page.locator('input[name="lastname"]');
    this.emailInput = page.locator('input#guestFrm_email');
    this.addres1Input = page.locator('input[name="address_1"]');
    this.cityInput = page.locator('input[name="city"]');
    this.zoneSelect = page.locator('select[name="zone_id"]');
    this.postCodeInput = page.locator('input[name="postcode"]');
    this.continueButton = page.locator('button[title=Continue]');
    this.confirmOrderButton = page.locator('button:has-text("Confirm Order")');
    this.checkoutSuccessElement = page.locator(".checkout-success");
    this.adressError = page.locator('text=Address 1 must be greater than 3 and less than 128 characters!');
    this.cityValidationError = page.locator('text=City must be greater than 3 and less than 128 characters!');
    this.regionValidationError = page.locator('text=Please select a region / state!')
    this.zipValidationError = page.locator('text=Zip/postal code must be between 3 and 10 characters!')
  }
  async goto() {
    await this.page.goto('https://automationteststore.com/index.php?rt=checkout/guest_step_1');
  }


  async proceedThroughGuestCheckout() {
    await this.goto();

    await this.firstNameInput.fill('FirstName');
    await this.lastNameInput.fill('LastName');
    await this.emailInput.fill('em@i.lwdsd');
    await this.addres1Input.fill('addressLine1');
    await this.cityInput.fill('city');

    await this.zoneSelect.selectOption('3524');
    await this.postCodeInput.fill('30-3333');
    await this.continueButton.click();

    await this.confirmOrderButton.click();
  }

}
