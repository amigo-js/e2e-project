import * as pdfParse from 'pdf-parse';
import * as fs from 'fs';

describe.skip('PDF Text Content', function(){

it ('Write on a file test', function(){
  
  // Этот метод создания и проверка текста работает:
  cy.writeFile('cypress/filesForTests/data.json', { name: 'Eliza', email: 'eliza@example.com' })
  cy.readFile('data.json').then((user) => {
  expect(user.name).to.equal('Eliza') // true
})

})

it ('Write on a file test', function(){
  
// тоже рабочьи метод:
cy.readFile('cypress/filesForTests/sample.pdf').then((text) => {
  expect(text.trim()).to.equal('Hello again')
})

})

const pdfParse = require('pdf-parse');

it('should include expected text', () => {
  const expectedText = 'hello world';
  // create options object
  const options = { encoding: 'binary' };

  cy.task('readFile', '../pdf/sample.pdf', options).then((pdfData) => {
    pdfParse(pdfData, options).then((pdf) => {
      const pdfText = pdf.text;
      expect(pdfText).to.include(expectedText);
    });
  });
});



// TypeScript:
  // it('should include expected text', () => {
  //   const expectedText = 'hello world';
  //   // create options object
  //   const options = { encoding: 'binary' }; 

  //   cy.task('readFile', '../pdf/sample.pdf', options).then((pdfData: string) => {
  //     pdfParse(pdfData, options).then((pdf: pdfParse.PDFData) => {
  //       const pdfText = pdf.text;
  //       expect(pdfText).to.include(expectedText);
  //     });
  //   });
  // });



});
