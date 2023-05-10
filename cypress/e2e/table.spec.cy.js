
describe('Table assertion', () => {

	beforeEach(() => {
		cy.visit(Cypress.env("kitchen") + '/ingredients/table');
	})

	const tableHeader = [
	'Name',
	'Type',
	'Flavor'
	]

	const tableDataUnsorted = [
	['Apple', 'Fruit', 'Sweet'],
	['Lemon', 'Fruit', 'Bitter'],
	['Onion', 'Vegetable', 'Bitter'],
	['Pepper', 'Vegetable', 'Sweet'],
	['Carrots', 'Vegetable', 'Sweet'],
	['Banana', 'Fruit', 'Sweet']
	]

	const tableDataSortedAsc = [
	['Apple', 'Fruit', 'Sweet'],
	['Banana', 'Fruit', 'Sweet'],
	['Carrots', 'Vegetable', 'Sweet'],
	['Lemon', 'Fruit', 'Bitter'],
	['Onion', 'Vegetable', 'Bitter'],
	['Pepper', 'Vegetable', 'Sweet']
	]

	const tableDataSortedDesc = [
	['Pepper', 'Vegetable', 'Sweet'],
	['Onion', 'Vegetable', 'Bitter'],
	['Lemon', 'Fruit', 'Bitter'],
	['Carrots', 'Vegetable', 'Sweet'],
	['Banana', 'Fruit', 'Sweet'],
	['Apple', 'Fruit', 'Sweet']
	]

	it('should verify table headers loads', () => {
		cy.get('#fruits-vegetables thead th').each(($el, index) => {
			cy.wrap($el).contains(tableHeader[index]);
		});
	});

	it('should verify table data loads', () => {
		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
			});
		});
	});

	it('should verify table data is sorted ascending', () => {
		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
			});
		});

		cy.get('#column-button-name').click();

		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataSortedAsc[rowIndex][cellIndex]);
			});
		});
	});

	it('should verify table data is sorted descending', () => {
		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
			});
		});

		cy.get('#column-button-name').click().click();

		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataSortedDesc[rowIndex][cellIndex]);
			});
		});
	});

	it('should verify table data is unsorted', () => {
		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
			});
		});

		cy.get('#column-button-name').click().click().click();

		cy.get('#fruits-vegetables tbody tr').each(($row, rowIndex) => {
			cy.wrap($row).find('td').each(($cell, cellIndex) => {
			cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
			});
		});
	});
});
	