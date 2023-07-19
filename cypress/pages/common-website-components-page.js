class WebdriverUniversity {
    static get getWebsiteHeader () {
        return cy.xpath(`//a[@id='nav-title']`)
    }

    static get getPageTitle () {
        return cy.get('#main-header h1');
    }

    static get getPageNavContainer () {
        return cy.xpath(`//ul[@class='nav navbar-nav']//li//a`);
    }

    static get getWebsiteFooter () {
        return cy.xpath(`//footer//div//div//p`);
    }

    static get getWebsiteTitle() {
        return cy.get('#main-header h1');
    }

}

export default WebdriverUniversity