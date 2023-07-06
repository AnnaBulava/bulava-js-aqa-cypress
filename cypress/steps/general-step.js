export class GeneralStep {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/index.html');
    }

    verifyThatHeadeIsDisplayed() {
        cy.get('h1').should('be.visible');
    }

    verifyThatFooterIsDisplayed() {
        
    }

}