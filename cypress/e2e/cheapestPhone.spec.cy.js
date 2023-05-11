const CheapestPhonePage = require("../support/pages/cheapest.phone.page");

describe('Launches', () => {
    const cheapestPhonePage = new CheapestPhonePage();

	beforeEach(()  => {
		cy.visit(Cypress.env("demoblaze"));
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
