import '@4tw/cypress-drag-drop'

describe('Drag and drop the file', function() {

    beforeEach(()  => {
        cy.visit(Cypress.env("kitchen") + '/ingredients/drag-and-drop');
	})

    it('Successfull file drag and drop with Cypress default method', () => {
        const dataTransfer = new DataTransfer();
        cy.get('#menu-hamburger').trigger('dragstart', {
            dataTransfer
        });
        cy.get('#plate-items').trigger('drop', {
            dataTransfer
        })   
    })

    it('Successfull file drag and drop with drag and drop plugin', () => {
        const dataTransfer = new DataTransfer();
        cy.get('#menu-hamburger').drag('#plate-items');
    })

})


