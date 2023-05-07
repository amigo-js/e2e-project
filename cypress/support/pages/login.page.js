const {username, password} = require("../../fixtures/credentials/credentials.json");

class LogInPage {

    getLogIn(){
        return cy.get('#login2', {timeout: 30000});
    }
    clickLogIn(){
        return this.getLogIn().click({force:true});
    }
    
    getUserNameInput(){
        return cy.get('#loginusername', {timeout: 30000});
    }
    typeUserNameInput(value) {
    return this.getUserNameInput()
        .should('be.visible')
        .click({ force: true })
        .clear()
        .invoke('val', value)
        .trigger('input', { force: true });
    }

    getPasswordInput(){
        return cy.get('#loginpassword', {timeout: 30000});
    }

    typePasswordInput(value) {
        return this.getPasswordInput()
            .should('be.visible')
            .click({ force: true })
            .clear()
            .invoke('val', value)
            .trigger('input', { force: true });
        }


    clickLogInBttn(){
        return cy.get('.btn-primary', {timeout: 30000}).contains('Log in').click({force:true});
    }

    login = () => {
        cy.wait(3000)
        this.clickLogIn().then(() => {
            this.getUserNameInput().then(() => {
                this.typeUserNameInput(username).then(() => {
                    this.getPasswordInput().then(() => {
                        this.typePasswordInput(password)
                        this.clickLogInBttn()
                    })
                })
            }) 
            
        })
    }

    welcomeVerification() {
        return cy.get('#nameofuser', {timeout: 30000}).should('have.text', 'Welcome automatedUser26@example.com');
    }
    
}

module.exports = LogInPage;