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
    })

    it(`Select the next day and check that it's selected`, () => {
        datepickerStep.selectNextDayDate();
        datepickerStep.checkThatNextDayDateIsSelected();
    })

    it(`Select the next month and check that it's selected`, () => {
      datepickerStep.selectNextMonthDate();
      datepickerStep.checkThatNextMonthDateIsSelected();
    })

    it(`Select the next year and check that it's selected`, () => {
      datepickerStep.selectNextYearDate();
      datepickerStep.checkThatNextYearDateIsSelected();
    })

    it.only(`Select a random year, month, day and check that this random date is selected`, () => {
      datepickerStep.selectRandomYearDayMonth();
    })
    
  
  });