import 'cypress-file-upload';

describe('Upload the file', () => {

    before(()  => {
        cy.visit(Cypress.env("kitchen") + '/ingredients/file-picker');
	})

    it('Successfull file upload', () => {
        cy.get('input[type=file]')
        .selectFile('cypress/filesForTests/sample.pdf', { force: true })
    })
});


