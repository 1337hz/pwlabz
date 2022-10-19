import { headers, payloads } from "../testData/requestData";
import { PRODUCTS } from '../testData/enums';

export default class StorePage {
  constructor(page) {
    this.url = 'https://automationteststore.com/';
    this.page = page;
    this.searchInput = page.locator('[placeholder="Search Keywords"]');
    this.addToCartButton = page.locator('text=Add to Cart');
    this.checkoutButton = page.locator('#cart_checkout1');
    this.topBarTotalElement = page.locator('.topcart .cart_total');
    this.topBarItemCountElement = page.locator('.topcart span.label');
  }
  async goto() {
    await this.page.goto(this.url);
  }

  __getPayload(item) {
    return payloads[item];
  }

  async addItemToCart(item) {
    if (!(item in PRODUCTS)) {
      throw new Error('You need to provide item from PRODUCTS enum')
    }

    const payload = this.__getPayload(item);
    const ctx = this.page.context();

    return await ctx.request.post(`${this.url}index.php`, {
      headers: headers,
      data: Buffer.from(payload),
      params: {
        'rt': 'checkout/cart'
      }
    });
  }

  async searchForItem(item) {
    await this.searchInput.fill(item);
    await this.searchInput.press('Enter');
  }
  async addToCart() {
    await this.addToCartButton.click();
  }
  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
