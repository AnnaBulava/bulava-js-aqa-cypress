/// <reference types="Cypress" />

class OurProducts {
    openOurProducts() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    getProducts () {
        return cy.get('div.col-md-12 > div.row').children();
    }

    getSpecialOffersContainer () {
        return cy.get('#container-special-offers');
    }

    getSpecialOffersTitle () {
        return cy.get('#container-special-offers > div.section-title');
    }

    getSpecialOffersImage () {
        return cy.get('#container-special-offers > div.caption img');
    }

    getCamerasContainer () {
        return cy.get('#container-product1');
    }

    getCamerasTitle () {
        return cy.get('#container-product1 > div.section-title');
    }

    getCamerasImage () {
        return cy.get('#container-product1 > div.caption img');
    }

    getNewLaptopsContainer () {
        return cy.get('#container-product2');
    }

    getNewLaptopsTitle () {
        return cy.get('#container-product2 > div.section-title');
    }

    getNewLaptopsImage () {
        return cy.get('#container-product2 > div.caption img');
    }

    getUsedLaptopsContainer () {
        return cy.get('#container-product3');
    }

    getUsedLaptopsTitle () {
        return cy.get('#container-product3 > div.section-title');
    }

    getUsedLaptopsImage () {
        return cy.get('#container-product3 > div.caption img');
    }

    getGameConsolesContainer () {
        return cy.get('#container-product4');
    }

    getGameConsolesTitle () {
        return cy.get('#container-product4 > div.section-title');
    }

    getGameConsolesImage () {
        return cy.get('#container-product4 > div.caption img');
    }

    getComponentsContainer () {
        return cy.get('#container-product5');
    }

    getComponentsTitle () {
        return cy.get('#container-product5 > div.section-title');
    }

    getComponentsImage () {
        return cy.get('#container-product5 > div.caption img');
    }

    getDesktopSystemsContainer () {
        return cy.get('#container-product6');
    }

    getDesktopSystemsTitle () {
        return cy.get('#container-product6 > div.section-title');
    }

    getDesktopSystemsImage () {
        return cy.get('#container-product6 > div.caption img');
    }

    getAudioContainer () {
        return cy.get('#container-product7');
    }

    getAudioTitle () {
        return cy.get('#container-product7 > div.section-title');
    }

    getAudioImage () {
        return cy.get('#container-product7 > div.caption img');
    }

    getModalDialog () {
        return cy.get('#myModal > div > div.modal-content');
    }

    getModalDialogTitle () {
        return cy.get('.modal-title');
    }

    getModalDialogBody () {
        return cy.get('.modal-body');
    }

    getModalDialogButtons () {
        return cy.get('.btn.btn-default');
    }



};



export default OurProducts