class DatepickerPage {
    static get getDatepickerCalendarIcon() {
        return cy.xpath(`//i[@class='glyphicon glyphicon-calendar']`);
    }

    static get getDatepickerReadonlyInput() {
        return cy.xpath(`//input[@class='form-control']`);
    }

    static get getDatepickerActiveDays() {
        return cy.xpath(`//tbody//tr//td[@class='day']`);
    }

    static getDatepickerDayByTitle(dayOfMonth) {
        return cy.xpath(`//tbody//tr//td[@class='day' and text()='${dayOfMonth}']`);
    }

}

export default DatepickerPage