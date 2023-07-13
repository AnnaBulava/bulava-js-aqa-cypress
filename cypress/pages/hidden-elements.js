export class HiddenElementsPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Hidden-Elements/index.html');
    }
    
    static get getNotDisplayedButton() {
        return cy.get('#button1')
    }

    static get getNotDisplayedDiv() {
        return cy.get('div#not-displayed.section-title')
    }

    static get getVisibilityButton() {
        return cy.get('#button2')
    }

    static get getZeroOpacityButton() {
        return cy.get('#button3')
    }

    static get getZeroOpacityModal() {
        return cy.get('div#zero-opacity.section-title')
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