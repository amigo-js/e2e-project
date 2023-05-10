
describe('API test', () => {

    before(()  => {
        cy.visit(Cypress.env("kitchen") + '/ingredients/api');
	})

	it('Should find recipes in the list', () => {
        cy.request('https://kitchen.applitools.com/api/recipes').then(response => {
            const { data }  = response.body;

            cy.get('#recipes-list li').each(($el, index) => {
                cy.wrap($el).find('h4').contains(data[index].title)
                cy.wrap($el).find('img').should('have.attr', 'src', data[index].image)
            })
        })
	})	
});
