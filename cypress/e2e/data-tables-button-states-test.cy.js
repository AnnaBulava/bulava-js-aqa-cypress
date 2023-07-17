import { dataTablesButtonStatesStep} from "../steps/data-tables-button-states-step";

describe('Check the Data Tables page content', () => {

    beforeEach(() => {
        dataTablesButtonStatesStep.visit();
      })

    it(`Check Table 1's content`, () => {
        dataTablesButtonStatesStep.checkFirstTableRowsCount();
        dataTablesButtonStatesStep.checkFirstTableColumnsCount();
    })

    it(`Check the content of each row in Table 1`, () => {
        dataTablesButtonStatesStep.checkFirstTableRowsContent();
    })

    it(`Check Table 2's content`, () => {
        dataTablesButtonStatesStep.checkSecondTableRowsCount();
        dataTablesButtonStatesStep.checkSecondTableColumnsCount();
    })

    it(`Check the content of each row in Table 2`, () => {
        dataTablesButtonStatesStep.checkSecondTableRowsContent();
    })

    it.only(`Check text fields`, () => {
        dataTablesButtonStatesStep.checkTextFields();
    })

})
