import { datepickerStep } from "../steps/datepicker-step";
import '../support/commands';

describe('Datepicker', () =>  {
 
    beforeEach(() => {
      datepickerStep.openDatepickerPage();
    })
  
    it(`Open the page and verify the header`, () => {
      datepickerStep.verifyThatHeaderIsDisplayed();
      datepickerStep.verifyHeaderText('WebdriverUniversity.com (Datepicker)')
    })

    it(`Check that today's date is selected by default`, () => {
      datepickerStep.checkThatCurrentDateIsSelected();
        // cy.getCurrentDate().then((currentDate) => {
        //   console.log('Current Date:', currentDate);
        // });
    })

    it.only(`Select the next day and check that it's selected`, () => {
        datepickerStep.selectNextDayDate();
    })

    
  
  });