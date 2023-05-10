import '@4tw/cypress-drag-drop';

describe('Upload the file', function() {

    before(()  => {
        cy.visit(Cypress.env("demoqa") + '/droppable');
	})

    it('Successfull file drag and drop', function() {
        cy.get('.drag-box.mt-4.ui-draggable.ui-draggable-handle').drag('.drop-box.ui-droppable', {force:true});
    })

})


