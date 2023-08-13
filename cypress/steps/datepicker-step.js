import DatepickerPage from "../pages/datepicker-page";
import { GeneralStep } from "./general-step";
import '../support/commands';
import { validYearRange } from "../test-data/datepicker-data";
import { getRandomIndex, isWithinRange } from "../support/utilities";

export class DatepickerStep extends GeneralStep {
    openDatepickerPage() {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
        cy.url().should('contain', 'Datepicker')
    }

    checkThatCurrentDateIsSelected() {
        cy.getCurrentDate().then(({ currentDate }) => {
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', currentDate);
        });
    }

    selectNextDayDate() {
        cy.getNextDayDate().then(({ dayOfMonth }) => {
            DatepickerPage.getDatepickerCalendarIcon.click();
            DatepickerPage.getDatepickerDayByTitle(dayOfMonth).click();
        });
        };

    checkThatNextDayDateIsSelected() {
        cy.getNextDayDate().then(({ nextDayDate }) => {
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', nextDayDate);
        })
    }

    selectNextMonthDate() {
        cy.getNextMonthDate().then(({ currentMonth, nextMonthDate, dayOfMonth, nextMonthName }) => {
            DatepickerPage.getDatepickerCalendarIcon.click();
            DatepickerPage.getDatepickerSwitch(currentMonth).click();
            DatepickerPage.getDatepickerMonthByTitle(nextMonthName).click();
            DatepickerPage.getDatepickerDayByTitle(dayOfMonth).click()
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', nextMonthDate);
        });
    }
        
    checkThatNextMonthDateIsSelected() {
        cy.getNextMonthDate().then(({ nextMonthDate }) => {
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', nextMonthDate);
        });
    }

    selectNextYearDate() {
        cy.getNextYearDate().then(({ currentMonth, dayOfMonth, nextMonthName }) => {
            DatepickerPage.getDatepickerCalendarIcon.click();
            DatepickerPage.getDatepickerSwitch(currentMonth).click();
            DatepickerPage.getDatepickerMonthsNextButton.click();
            DatepickerPage.getDatepickerMonthByTitle(nextMonthName).click();
            DatepickerPage.getDatepickerDayByTitle(dayOfMonth).click();
        });
    }

    checkThatNextYearDateIsSelected() {
        cy.getNextYearDate().then(({ nextYearDate }) => {
            DatepickerPage.getDatepickerReadonlyInput.invoke('val').should('eq', nextYearDate);
        });
    }


    selectRandomYearDayMonth() {
        DatepickerPage.getDatepickerCalendarIcon.click();
        DatepickerPage.getDatepickerYears.then(($yearElements) => {
            const randomYearIndex = getRandomIndex($yearElements.length)
            console.log(randomYearIndex);
            const randomYearText = $yearElements.eq(randomYearIndex).text();
            const randomYear = parseInt(randomYearText);
            console.log(randomYear);

            if (isWithinRange(randomYear, validYearRange)) {
                cy.getCurrentDate().then(({ currentMonth, currentYear }) => {
                    DatepickerPage.getDatepickerSwitch(currentMonth).click();
                    DatepickerPage.getDatePickerSwitchByYear(currentYear).click();
                });
                DatepickerPage.getDatepickerYears.contains(randomYearText).click();
            }

            const randomMonthIndex = getRandomIndex(12);
            DatepickerPage.getDatepickerCalendarIcon.click();
            DatepickerPage.getDatepickerMonth.eq(randomMonthIndex).click();

            const daysInMonth = new Date(randomYear, randomMonthIndex + 1, 0).getDate();
            const randomDay = getRandomIndex(daysInMonth) + 1;
            DatepickerPage.getCurrentMonthDays().contains(randomDay).click();

            DatepickerPage.getDatepickerReadonlyInput.invoke('val').then((selectedDate) => {
                const [selectedMonth, selectedDay, selectedYear] = selectedDate.split('-');
                expect(parseInt(selectedYear)).to.equal(randomYear);
                expect(parseInt(selectedMonth)).to.equal(randomMonthIndex + 1);
                expect(parseInt(selectedDay)).to.equal(randomDay);
            })
        })
    }
};


export const datepickerStep = new DatepickerStep();