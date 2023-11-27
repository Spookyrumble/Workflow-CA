const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    correctEmail: "cypressTesterHMA@noroff.no",
    correctPassword: "socialmedia",
    wrongEmail: "wrongEmail@wrong.wrong",
    wrongPassword: "wrongPassword",
    shortPassword: "short",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
