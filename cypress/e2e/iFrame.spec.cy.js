

describe.skip('iFrame ', () => {

    beforeEach(()  => {
        cy.visit(Cypress.env("kitchen") + '/ingredients/iframe');
	})

	it('Should find a table in the iframe', () => {
		cy.get('#the-kitchen-table').its('0.contentDocument.body')
        .then(cy.wrap)
        .find('#fruits-vegetables')
        .should('be.visible');
	})	
	
    it('Should find a video in the iframe', () => {
		cy.get('#youtube-table-cypress').its('0.contentDocument.body')
        .then(cy.wrap)
        .find('#player')
        .should('be.visible');
	})	


    it('Should find a video in the iframe', () => {
        cy.visit('');
        cy.get('#iframe-selector').then(function($iframe) {

            let iframeBody = $iframe.contents().find('body');
            cy.wrap(iframeBody)
            .clear()
            .type('Hello world!')
            .type('{selectall}')
        })
	})	

});