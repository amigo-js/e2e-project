// import 'cypress-file-upload';
// import '@4tw/cypress-drag-drop';
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')
// const {username, password} = require("../fixtures/credentials/credentials.json");
const LogInPage = require("../support/pages/login.page");

Cypress.Commands.add('visitEnv', (envName, endpoint = '') => {
    const url = Cypress.env(envName) + endpoint;
    cy.visit(url);
});

// Cypress.Commands.add('visitEnv', (envName, endpoint = '') => {
//     const url = Cypress.config('e2e')[envName].baseUrl + endpoint;
//     cy.visit(url);
// });
// Cypress.Commands.add('visitEnv', (envName, endpoint = '') => {
//     const url = Cypress.config('e2e')[envName].baseUrl + endpoint;
//     cy.visit(url);
// });


  
const logInPage = new LogInPage();

Cypress.Commands.add('login', () => {
    cy.fixture('credentials/credentials.json').then(credentials => {
        cy.session(credentials, () => {
        cy.visit('/', { failOnStatusCode: false })
        logInPage.clickLogIn().then(() => {
            logInPage.getUserNameInput().then(() => {
            logInPage.typeUserNameInput(credentials.username).then(() => {
                logInPage.getPasswordInput().then(() => {
                logInPage.typePasswordInput(credentials.password);
                logInPage.clickLogInBttn();
                cy.wait(2000);
                cy.url().should('include', 'https://www.demoblaze.com/');
                });
            });
            });
        });
        });
    });
});

