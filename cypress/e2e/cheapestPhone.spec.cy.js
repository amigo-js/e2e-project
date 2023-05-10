const CheapestPhonePage = require("../support/pages/cheapest.phone.page");
const LogInPage = require("../support/pages/login.page")

describe('Launches', () => {
    const cheapestPhonePage = new CheapestPhonePage();
	const logInPage = new LogInPage();

	beforeEach(()  => {
		cy.visit(Cypress.env("demoblaze"));
		// logInPage.login();	
		cy.logIn();
	})

	it('Add the cheapest phone to cart', () => {
		cy.visit(Cypress.env("demoblaze"));
		cheapestPhonePage.clicPhones();
		cheapestPhonePage.findCheapestProduct();
        cheapestPhonePage.clickAddToCart();
	})

	it('Add the cheapest phone to cart 2', () => {
		cy.visit(Cypress.env("demoblaze"));
		cheapestPhonePage.clicPhones();
		cheapestPhonePage.findCheapestProduct();
        cheapestPhonePage.clickAddToCart();
	})

})
