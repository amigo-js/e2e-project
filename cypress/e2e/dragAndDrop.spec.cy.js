import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'

const kitchen = 'https://kitchen.applitools.com/ingredients/drag-and-drop';
const demoqa = 'https://demoqa.com/droppable';

describe.skip('Upload the file', function() {

    beforeEach(()  => {
        // cy.visit(Cypress.env("demoqa") + 'automation-practice-form');

	})



// пример drag and drop без плагинов и библиотек:
it('Successfull file drag and drop', () => {
    const dataTransfer = new DataTransfer();
    // cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
    cy.visit(kitchen);
    cy.get('#menu-hamburger').trigger('dragstart', {
        dataTransfer
    });
    cy.get('#plate-items').trigger('drop', {
        dataTransfer
    })   
})

// пример с плагином drag and drop:
it('Successfull file drag and drop', () => {
    const dataTransfer = new DataTransfer();
    // cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
    cy.visit(kitchen);
    cy.get('#menu-hamburger').drag('#plate-items')
})

// пример с плагином drag and drop:
it('Successfull file drag and drop', function() {

    // cy.visit('https://demoqa.com/droppable');
    cy.visit(demoqa);

    cy.get('.drag-box.mt-4.ui-draggable.ui-draggable-handle').drag('.drop-box.ui-droppable', {force:true})
})



})


