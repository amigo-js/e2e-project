const LogInPage = require("../support/pages/login.page")
const logInPage = new LogInPage();

describe('Login', () => {

	beforeEach(() => {
		cy.visit(Cypress.env("demoblaze"));
		cy.logIn();
	});

	it('Successfully login', function() {
		cy.visit(Cypress.env("demoblaze"));
		logInPage.welcomeVerification();
	});

	it('Successfully login with restored the session', function() {
		cy.visit(Cypress.env("demoblaze"));
		console.log('TEST');
	});
});