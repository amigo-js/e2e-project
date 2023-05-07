const CheapestPhonePage = require("../support/pages/cheapest.phone.page");


describe('Launches', () => {
    const cheapestPhonePage = new CheapestPhonePage();

	beforeEach(()  => {
		cy.login();	
	})

	it('Add the cheapest phone to cart', () => {
		cy.visit('/');
		cheapestPhonePage.clicPhones();
		cheapestPhonePage.findCheapestProduct();
        cheapestPhonePage.clickAddToCart();
	})

	it('Add the cheapest phone to cart 2', () => {
		cy.visit('/');
		cheapestPhonePage.clicPhones();
		cheapestPhonePage.findCheapestProduct();
        cheapestPhonePage.clickAddToCart();
	})

})
