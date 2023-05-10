const LogInPage = require("../support/pages/login.page");

const logInPage = new LogInPage();

Cypress.Commands.add('logIn', () => {
    cy.fixture('credentials/credentials.json').then(credentials => {
        cy.session(credentials, () => {
        cy.visit(Cypress.env("demoblaze"), { failOnStatusCode: false });
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

