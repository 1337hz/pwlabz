const base = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
import WcagPage from '../pages/wcagPage';

exports.test = base.test.extend({
  wcagPage: async ({ page }, use) => {
    const wcagPage = new WcagPage(page);
    await use(wcagPage);
  },
  axeBuilder: async ({ page }, use) => {
    const axeBuilder = await new AxeBuilder({ page })
    await use(axeBuilder);
  }
});

exports.expect = base.expect;
