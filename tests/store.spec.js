const { test, expect } = require('@playwright/test');
import { PRODUCTS } from '../testData/enums';
import { getPriceString } from "../utils/stringUtils";
import productData from '../testData/productData';
import StorePage from '../pages/storePage';
import CheckoutPage from '../pages/checkoutPage';

test.describe('Store tests', () => {
  test('Can checkout as guest', async ({ page }) => {
    page.on('console', console.log)
    const storePage = new StorePage(page);
    await storePage.goto();
    await storePage.addItemToCart(PRODUCTS.SHIRT);
    await storePage.addItemToCart(PRODUCTS.SHOE);

    await storePage.searchForItem('Lipstick');
    await storePage.addToCart();
    await storePage.goToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.proceedThroughGuestCheckout();
    await expect(checkoutPage.checkoutSuccessElement).toBeVisible()
  });
  test.only('Updates topbar total sum', async ({ page }) => {
    page.on('console', console.log)
    const storePage = new StorePage(page);
    await storePage.goto();
    await storePage.searchForItem(PRODUCTS.LIPSTICK);
    await storePage.addToCart();

    const price = productData[PRODUCTS.LIPSTICK].price
    const priceString = getPriceString(price);

    await expect(storePage.topBarTotalElement).toHaveText(priceString);
    await expect(storePage.topBarItemCountElement).toHaveText("1")
    await page.pause();
  });
})
