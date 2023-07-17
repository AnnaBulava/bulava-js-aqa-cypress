import DataTablesButtonStatesPage from "../pages/data-tables-button-states-page";
import { firstTableRowsData } from "../test-data/tables-data";
import { secondTableRowsData } from "../test-data/tables-data";
import { faker } from '@faker-js/faker';
import { LoremIpsum } from "lorem-ipsum";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  let textAreaInput = lorem.generateSentences(5);

export class DataTablesButtonStatesStep {
    visit () {
        DataTablesButtonStatesPage.visit();
        cy.url().should('include', 'Data-Table')
    }

    checkFirstTableRowsCount() {
        DataTablesButtonStatesPage.getFirstTableRows.should('have.length', 4)
    }

    checkFirstTableColumnsCount() {
        DataTablesButtonStatesPage.getFirstTableColumns.should('have.length', 3)
    }

    checkSecondTableRowsCount() {
        DataTablesButtonStatesPage.getSecondTableRows.should('have.length', 4)
    }

    checkSecondTableColumnsCount() {
        DataTablesButtonStatesPage.getSecondTableColumns.should('have.length', 3)
    }

    checkFirstTableRowsContent() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesButtonStatesPage.getFirstTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.eq(firstTableRowsData[index].row)
            }
        )}

    checkSecondTableRowsContent() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesButtonStatesPage.getSecondTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.eq(secondTableRowsData[index].row)
            }
            )
    }

    checkTextFields() {
        DataTablesButtonStatesPage.getFirstNameField.type(firstName).should('have.value', firstName);
        DataTablesButtonStatesPage.getLastNameField.type(lastName).should('have.value', lastName);
        DataTablesButtonStatesPage.getTextArea.type(textAreaInput).invoke('val').should($el => expect($el.trim()).to.equal(textAreaInput));
    }

    // checkFirstTableRowsContent() {

    //     function rowCells(row) {
    //         return Cypress._.map(row.children, (cell) => cell.innerText)
    //     }
    //     DataTablesButtonStatesPage.getFirstTable.contains('John').parent()
    //     .then(rows => Cypress._.map(rows, rowCells))
    //         .should('deep.eq', tableRowsData[0].row2)

    //     }
    }


export const dataTablesButtonStatesStep = new DataTablesButtonStatesStep()