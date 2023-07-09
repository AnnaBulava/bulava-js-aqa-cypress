export class GeneralStep {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/index.html');
    }

    verifyThatHeaderIsDisplayed() {
        cy.get('h1').should('be.visible');
    }

    verifyThatFooterIsDisplayed() {
        
    }

}