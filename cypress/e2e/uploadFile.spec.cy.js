import 'cypress-file-upload';

describe('Upload the file', function() {

    before(()  => {
        cy.visit(Cypress.env("demoqa") + '/automation-practice-form');
	})

    it('Successfull file upload', async () => {
        await cy.get('input[type=file]')
        .selectFile('cypress/filesForTests/sample.pdf', { force: true })
    })
});


