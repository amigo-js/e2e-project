
describe('File Text Content assertion', () => {

  it ('Create a file with text and assert the content', () => {
    cy.writeFile('cypress/filesForTests/data.json', { name: 'Eliza', email: 'eliza@example.com' })
    cy.readFile('data.json').then((user) => {
      expect(user.name).to.equal('Eliza');
      expect(user.email).to.equal('eliza@example.com');
    })
    cy.task('deleteFile', 'cypress/filesForTests/data.json');
  })

  it ('Asser a pdf file content text', function(){
    cy.readFile('cypress/filesForTests/sample.pdf').then((text) => {
      expect(text.trim()).to.equal('Hello again')
    })
  })

  it ('Assert PDF file text', function(){
    const expectedText = 'Hello again';
    cy.readFile('cypress/filesForTests/sample.pdf').then((text) => {
      expect(text.trim()).to.equal(expectedText)
    })
    
  })
});
