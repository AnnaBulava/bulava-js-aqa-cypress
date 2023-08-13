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

    static getDatepickerSwitch(month) {
        return cy.xpath(`//thead//tr//th[@class='datepicker-switch' and contains(text(), '${month}')]`);
    }

    static getDatepickerMonthByTitle(month) {
        return cy.xpath(`//tbody//tr//td//span[@class='month' and text()='${month}']`);
    }

    static get getDatepickerMonth() {
        return cy.xpath(`//tbody//tr//td//span[@class='month']`)
    }

    static get getDatepickerMonthsNextButton() {
        return cy.xpath(`//div[@class='datepicker-months']//th[@class='next']`);
    }

    static get getDatepickerYears() {
        return cy.xpath(`//div[@class='datepicker-years']//td//span`);
    }

    static getDatePickerSwitchByYear(year) {
        return cy.xpath(`//div[@class='datepicker-months']//th[@class='datepicker-switch' and text()='${year}']`)
    }

    static getCurrentMonthDays() {
        return cy.xpath(`//td[contains(@class, "day") and not(contains(@class, "old")) and not(contains(@class, "new"))]`);
    }

    // static get getDatepickerYears() {
    //     return cy.get('.datepicker-years tbody tr td');
    // }
    


}

export default DatepickerPage