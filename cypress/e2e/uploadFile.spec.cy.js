import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'


describe('Upload the file', function() {

    beforeEach(()  => {
        cy.visit(Cypress.env("demoqa") + 'automation-practice-form');

	})

it('Successfull file upload', () => {
// cy.visit('https://demoqa.com/automation-practice-form');
// cy.get('input[type=file]').selectFile('cypress/filesForTests/sample.pdf')
cy.get('input[type=file]')
// .selectFile('../fixtures/sample.pdf')
// второй способ
// cy.get('.form-control-file')
//   .attachFile('../fixtures/sample.pdf');
})

// Upload file with default Cypress comands:

// cy.fixture('cypress/filesForTests/sample.pdf').as('photo');

// cy.get('#photo-upload').then(function (input) {
//     const blob = Cypress.Blob.base64StringToBlob(this.photo, 'image/jpeg');
//     const file = new File([blob], 'cypress/filesForTests/sample.pdf', {
//         type: 'image/jpeg'
//     })
//     const data = new DataTransfer()
//     data.items.add(file)
//     input[0].files = data.files;
//     const changeEvent = new Event('change', {
//         bubbles: true
//     })
//     input[0].dispatchEvent(changeEvent)
// })

// пример drag and drop без плагинов и библиотек:
// it('Successfull file drag and drop', () => {
//     const dataTransfer = new DataTransfer();
//     cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
//     cy.get('#menu-hamburger').trigger('dragstart', {
//         dataTransfer
//     });
//     cy.get('#plate-items').trigger('drop', {
//         dataTransfer
//     })   
// })

// пример с плагином drag and drop:
// it('Successfull file drag and drop', () => {
//     const dataTransfer = new DataTransfer();
//     cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
//     cy.get('#menu-hamburger').drag('#plate-items')
// })

// пример с плагином drag and drop:
// it('Successfull file drag and drop', function() {

//     cy.visit('https://demoqa.com/droppable');

//     cy.get('.drag-box.mt-4.ui-draggable.ui-draggable-handle').drag('.drop-box.ui-droppable', {force:true})
// })



})


