const { test, expect } = require('../fixtures/accessibilityFixtures');
test.describe('Ajax loader', () => {
  test('can wait for button', async ({ axeBuilder, wcagPage }) => {

    await wcagPage.goto();

    const accessibilityScanResults = await axeBuilder.analyze();
    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
})
