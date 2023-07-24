import { dataTablesButtonStatesStep} from "../steps/data-tables-button-states-step";

describe('Check the Data Tables page content', () => {

    beforeEach(() => {
        dataTablesButtonStatesStep.visit();
      })

    it(`Open the page and verify the header, title and footer`, () => {
        dataTablesButtonStatesStep.verifyThatHeaderIsDisplayed();
        dataTablesButtonStatesStep.verifyHeaderText('WebdriverUniversity.com (Data Tables)');
        dataTablesButtonStatesStep.verifyHeaderIsDisplayedWhenUserIsAtTheBottom();
        dataTablesButtonStatesStep.verifyThatFooterIsDisplayed();
        dataTablesButtonStatesStep.verifyFooterText();
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

    it(`Check that text fields accept and display input`, () => {
        dataTablesButtonStatesStep.checkFirstNameTextField();
        dataTablesButtonStatesStep.checkLastNameTextField();
        dataTablesButtonStatesStep.checkTextArea();
    })

    it(`Check breadcrumbs' content`, () => {
        dataTablesButtonStatesStep.checkBreadcrumbsTitleIsVisible();
        dataTablesButtonStatesStep.checkBreadcrumbsText();
        dataTablesButtonStatesStep.checkActiveBreadcrumbsElement();
    })

    it(`Check badges content`, () => {
        dataTablesButtonStatesStep.checkBadgesTitleIsVisible();
        dataTablesButtonStatesStep.checkListGroupItems();
    })

    it(`Check pages length and behavior on click`, () => {
        dataTablesButtonStatesStep.checkPaginationLength();
        dataTablesButtonStatesStep.checkTablesPageIsStillOpenOnClickingPaginationButton();
    })

    it(`Check single table's rows and columns counts`, () => {
        dataTablesButtonStatesStep.checkSingleTableTitleIsVisible();
        dataTablesButtonStatesStep.checkSingleTableRowsCount();
        dataTablesButtonStatesStep.checkSingleTableColumnsCount();
    })

    it(`Check the content of each row in the single table`, () => {
        dataTablesButtonStatesStep.checkSingleTableColumnsTitles();
        dataTablesButtonStatesStep.checkSingleTableRowsContent();
    })

    it(`Check the traversal buttons length, names, states, actions`, () => {
        dataTablesButtonStatesStep.checkButtonsAndStatesTitleIsVisible();
        dataTablesButtonStatesStep.checkTraversalButtonsLength();
        dataTablesButtonStatesStep.checkTraversalButtonsNames();
        dataTablesButtonStatesStep.checkTraversalButtonsStates();
        dataTablesButtonStatesStep.checkTraversalLinkButton();
    })

    it(`Check the length, names, states of the second set of the traversal buttons`, () => {
        dataTablesButtonStatesStep.checkTraversalButtonStatesLength();
        dataTablesButtonStatesStep.checkTraversalButtonStatesNames();
        dataTablesButtonStatesStep.checkTraversalButtonDisabledState();
    })

    it(`Check the length, names, states of the third set of the traversal buttons`, () => {
        dataTablesButtonStatesStep.checkTraversalButtonOtherStatesLength();
        dataTablesButtonStatesStep.checkTraversalButtonOtherStatesNames();
        dataTablesButtonStatesStep.checkTraversalButtonActiveState();
    })

    it(`Check the Random Text paragraph's content`, () => {
        dataTablesButtonStatesStep.checkParahraphContextWithMarkedText();
        dataTablesButtonStatesStep.checkParentOfMarkedText();
        dataTablesButtonStatesStep.checkQuoteMainText();
        dataTablesButtonStatesStep.checkQuoteFooterText();
        dataTablesButtonStatesStep.checkParentOfCitedText();
    })

    it(`Check the Lists's content`, () => {
        dataTablesButtonStatesStep.checkDrinksListLengthAndContent();
        dataTablesButtonStatesStep.checkFruitsListLengthAndContent();
        dataTablesButtonStatesStep.checkVegetablesListLengthAndContent();
        dataTablesButtonStatesStep.checkJobsListLengthAndContent();
    })
    

})
