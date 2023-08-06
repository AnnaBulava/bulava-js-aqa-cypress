import DatepickerPage from "../pages/datepicker-page";
//import { currentDate } from "../test-data/datepicker-data";
import { nextDayDate } from "../test-data/datepicker-data";
import { GeneralStep } from "./general-step";
import dayjs from "dayjs";
import '../support/commands';

export class DatepickerStep extends GeneralStep {
    openDatepickerPage() {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
        cy.url().should('contain', 'Datepicker')
    }

    checkThatCurrentDateIsSelected() {
        cy.getCurrentDate().then((currentDate) => {
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', currentDate);
        });
    }


    selectNextDayDate() {
        cy.getCurrentDate().then((currentDate) => {
        const nextDayDate = dayjs(currentDate).add(1, 'day').format('MM-DD-YYYY');
        console.log(nextDayDate);
        const dayOfMonth = dayjs(nextDayDate).format('D');
        console.log(dayOfMonth);
        DatepickerPage.getDatepickerCalendarIcon.click();
        DatepickerPage.getDatepickerDayByTitle(dayOfMonth).click();
        DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', nextDayDate);
        })
        }
    
}

export const datepickerStep = new DatepickerStep();