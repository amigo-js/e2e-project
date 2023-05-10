
describe("Invoke test scripts", () => {
    
    beforeEach( function() {
        cy.visit(Cypress.env("kitchen") + '/ingredients/links');
    });

    it("Invoke to remove target attribute", () =>  {
        cy.get('#button-the-kitchen-table').invoke('removeAttr', 'target');
        cy.get('#button-the-kitchen-table').click();
        cy.location().then(yieldedObject => cy.log(yieldedObject.href))
    });

    it("Invoke to get an attribute", function() {
        cy.get('#button-the-kitchen-table').invoke('attr', 'target')
        .then(targetValue => cy.log(targetValue))
        cy.get('#button-the-kitchen-table').should('have.attr', 'target', '_blank')
    });

    it("Invoke to get text", function() {
        cy.get('.css-1vyua5b').invoke('text')
        .then(textValue => cy.log(textValue))
    });

})

