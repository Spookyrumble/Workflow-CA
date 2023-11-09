const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    correctEmail: "cypressTesterHMA@noroff.no",
    correctPassword: "socialmedia",
    wrongEmail: "wrongEmail@wrong.wrong",
    wrongPassword: "wrongPassword",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
