const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
  env: {
    kitchen: "https://kitchen.applitools.com/",
    demoblaze: "https://www.demoblaze.com/",
    demoqa: "https://demoqa.com",
  }
})
