const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
  baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    requestTimeout: 50000,
    defaultCommandTimeout: 50000,
    //setupNodeEvents(on, config) {
    // implement node event listeners here
    //},
  },
  projectId: 'hh9rfs',
})
