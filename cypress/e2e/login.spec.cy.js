const LogInPage = require("../support/pages/login.page")

const logInPage = new LogInPage();

describe('Launches', () => {

	beforeEach(() => {
		cy.login();
	});

	it('Successfully login', function() {
		cy.visit('/');
		cy.wait(1000); // подождать 3 секунды
		logInPage.welcomeVerification();
	});


	it('Successfully login 2', function() {
		cy.visit('/');
		cy.wait(1000); // подождать 3 секунды
		console.log('TEST');
	
	});

});