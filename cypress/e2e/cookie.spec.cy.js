
describe('Cookie kitchen', () => {

    beforeEach(()  => {
        cy.visit(Cypress.env("kitchen") + '/ingredients/cookie');

	})

	it('Should get the value of a cookie', () => {
		cy.getCookie('protein').should('have.property', 'value', 'chicken');
        cy.getCookie('vegetable').should('have.property', 'value', 'broccoli');
	})	
	

	it('Should update the value of a cookie', () => {
		cy.clearCookie('protein').then(() => {
            cy.setCookie('protein', 'pork').then(() => {
                cy.getCookie('protein').should('have.property', 'value', 'pork');
            })
        })
	})	

	it('Should delete the value of a cookie', () => {
        cy.clearCookie('protein').then(() => {
            cy.getCookie('protein').should('be.null');
        })
	})	

    it('Should add a new cookie', () => {
        cy.setCookie('fruit', 'papaya').then(() => {
            cy.getCookie('fruit').should('have.property', 'value', 'papaya');
        })
	})	


});