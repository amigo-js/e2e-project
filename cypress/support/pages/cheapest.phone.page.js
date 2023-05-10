
class CheapestPhonePage {

  getPhones(){
    return cy.get('.list-group-item', {timeout: 30000}).contains('Phones');
  }

  clicPhones(){
    return this.getPhones().click({force:true});
  }

  clickAddToCart(){
    return cy.get('.btn.btn-success.btn-lg', {timeout: 30000}).contains('Add to cart').click({force:true});
  }

  findCheapestProduct() {
    cy.get('div.col-lg-4.col-md-6.mb-4')
      .invoke('text')
      .then(text => {
        const prices = text.match(/\$(\d+(\.\d{1,2})?)/g)
          .map(price => Number(price.replace('$', '')));
        const minPrice = Math.min(...prices);
        console.log('Minimum price is:', minPrice);
        cy.contains(`$${minPrice}`)
          .closest('.col-lg-4.col-md-6.mb-4')
          .find('a')
          .invoke('attr', 'href')
          .then(href => {
            console.log(href);
            cy.visit(`https://www.demoblaze.com/${href}`);
          });
      });
  }
  
}

module.exports = CheapestPhonePage;