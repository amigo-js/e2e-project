
describe('iFrame', () => {

    before(()  => {
        cy.visit(Cypress.env("herokuapp") + '/iframe');
	})

    it('Should type text in the iframe', () => {
		const iframe = cy.get('#mce_0_ifr').its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        .clear()
        .type('Hello')
	})	
});