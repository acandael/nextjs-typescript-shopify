const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  framework: {
    name: 'shopify_local',
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'nl'],
    defaultLocale: 'en-US',
  },
});
