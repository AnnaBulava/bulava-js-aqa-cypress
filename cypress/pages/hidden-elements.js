export class HiddenElementsPage {
    static get getNotDisplayedButton() {
        return cy.get('#button1')
    }

    static get getVisibilityButton() {
        return cy.get('#button2')
    }

    static get getZeroOpacityButton() {
        return cy.get('#button3')
    }

    static get getModalClick() {
        return cy.get('#myModalClick');
    }

    static get getModalJSClick() {
        return cy.get('#myModalJSClick');
    }

    static get getModalMoveClick() {
        return cy.get('#myModalMoveClick');
    }


}