
describe('API ', () => {

    beforeEach(()  => {
        cy.visit('https://kitchen.applitools.com/ingredients/api');
    //     cy.visit(Cypress.env("kitchen") + '/ingredients/api');
	})

	// it('Should find recipes in the list', () => {
    //     cy.request('https://kitchen.applitools.com/ingredients/api').then(response => {
    //         const data  = response.body;
    //         // const data = JSON.parse(response.body).data;

    //         // console.log(typeof response.body)


    //         cy.get('#recipes-list li').each(($el, index) => {
    //             cy.wrap($el).find('h4').contains(data[index].title)
    //             cy.wrap($el).find('img').should('have.attr', 'src', data[index].image)
    //         })

    //         // cy.get('#recipes-list li').each((element, index) => {
    //         //     cy.wrap(element).find('h4').contains(response.body.data[index].title);
    //         //     cy.wrap(element).find('img').should('have.attr', 'src', response.body.data[index].image);
    //         //   });

            

    //     })
	// })	
	

    it('Should find recipes in the list', () => {
        cy.request('https://kitchen.applitools.com/ingredients/api').then(response => {
            const data = response.body.data;
        
            cy.get('#recipes-list li').each(($el, index) => {
                cy.wrap($el).find('h4').contains(data[index].title)
                cy.wrap($el).find('img').should('have.attr', 'src', data[index].image)
            })
        })
        

    })

});

  