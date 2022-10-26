const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/**/**/*.cy.{js,jsx,ts,tsx}"
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}"
  }
});
