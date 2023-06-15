/// <reference types="Cypress" />

class OurProducts {
    openOurProducts() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }
};



export default OurProducts