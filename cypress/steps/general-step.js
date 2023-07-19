import WebdriverUniversity from "../pages/common-website-components-page";

export class GeneralStep {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/index.html');
    }

    verifyThatHeaderIsDisplayed() {
        WebdriverUniversity.getWebsiteHeader.should('be.visible');
    }

    verifyHeaderText(text) {
        WebdriverUniversity.getWebsiteHeader.then($el => $el.text().trim()).should('eq', text);
    }

    verifyThatFooterIsDisplayed() {
        WebdriverUniversity.getWebsiteFooter.should('be.visible');
    }

    verifyFooterText() {
        WebdriverUniversity.getWebsiteFooter.then($el => $el.text().trim()).should('eq', 'Copyright © www.GianniBruno.com');
    }

    verifyTitleText(text) {
        WebdriverUniversity.getPageTitle.then($el => $el.text().trim()).should('eq', text);
    }

    verifyNavPageContainer() {
        WebdriverUniversity.getPageNavContainer.then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', ['Home', 'Our Products', 'Contact Us']);
    }

}