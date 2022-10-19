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
  test('Updates topbar total sum', async ({ page }) => {
    page.on('console', console.log)
    const storePage = new StorePage(page);
    await storePage.goto();
    await storePage.searchForItem(PRODUCTS.LIPSTICK);
    await storePage.addToCart();

    const price = productData[PRODUCTS.LIPSTICK].price
    const priceString = getPriceString(price);

    await expect(storePage.topBarTotalElement).toHaveText(priceString);
    await expect(storePage.topBarItemCountElement).toHaveText("1")
  });
  test.only('Can validate address on checkout', async ({ page }) => {
    page.on('console', console.log)
    const storePage = new StorePage(page);
    await storePage.goto();
    await storePage.addItemToCart(PRODUCTS.SHIRT);

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.goto();

    await checkoutPage.continueButton.click();

    await expect(checkoutPage.adressValidationError).toBeVisible
    await expect(checkoutPage.cityValidationError).toBeVisible
    await expect(checkoutPage.regionValidationError).toBeVisible
    await expect(checkoutPage.zipValidationError).toBeVisible

    await checkoutPage.addres1Input.fill('addr');
    await checkoutPage.cityInput.fill('cit3');
    await checkoutPage.zoneSelect.selectOption('3524');
    await checkoutPage.postCodeInput.fill('30-3333');

    await expect(checkoutPage.adressValidationError).not.toBeVisible
    await expect(checkoutPage.cityValidationError).not.toBeVisible
    await expect(checkoutPage.regionValidationError).not.toBeVisible
    await expect(checkoutPage.zipValidationError).not.toBeVisible
  });
})
