const fs = require('fs');
const { defineConfig } = require('cypress');
const pdfParse = require('pdf-parse');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        deleteFile(path) {
          return new Promise((resolve, reject) => {
            fs.unlink(path, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve(null);
              }
            });
          });
        },
      });
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
  env: {
    kitchen: "https://kitchen.applitools.com/",
    demoblaze: "https://www.demoblaze.com/",
    demoqa: "https://demoqa.com",
    herokuapp: "https://the-internet.herokuapp.com",
  },
  pdfParse: pdfParse,
})

