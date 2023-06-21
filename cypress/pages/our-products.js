/// <reference types="Cypress" />

import { products } from "../test-data/products";
import { productModalTexts } from "../test-data/products-modal-text";

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

    getModalDialogCloseIcon () {
        return cy.get('button.close');
    }

    verifyModalText () {
        this.getModalDialogTitle().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[0].text);
        this.getModalDialogBody().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[1].text);
    }

    verifyModalAppearanceAndButtons () {
        this.getProducts().each(($el, index) => {
            expect($el).to.have.attr('data-toggle', 'modal')
        });
        this.getProducts().eq(Math.floor(Math.random() * 8)).click();
        this.getModalDialog().should('be.visible');
        this.getModalDialogButtons().should('contain', 'Proceed').and('contain', 'Close');
        this.getModalDialogButtons().contains('Proceed').click();
        this.getModalDialog().should('not.be.visible');
        this.getProducts().eq(Math.floor(Math.random() * 8)).click();
        this.getModalDialogButtons().contains('Close').click();
        this.getModalDialog().should('not.be.visible');
        this.getProducts().eq(Math.floor(Math.random() * 8)).click();
        this.getModalDialogCloseIcon().click();
        this.getModalDialog().should('not.be.visible');
    }

    verifySpecialOffers() {
        this.getSpecialOffersContainer().should('be.visible');
        this.getSpecialOffersTitle().should('have.text', products[0].title);
        this.getSpecialOffersImage().should('have.id', products[0].imageId);
    };

    verifyCameras() {
        this.getCamerasContainer().should('be.visible');
        this.getCamerasTitle().should('have.text', products[1].title);
        this.getCamerasImage().should('have.id', products[1].imageId);
    }

    verifyNewLaptops() {
        this.getNewLaptopsContainer().should('be.visible');
        this.getNewLaptopsTitle().should('have.text', products[2].title);
        this.getNewLaptopsImage().should('have.id', products[2].imageId);
    }

    verifyUsedLaptops() {
        this.getUsedLaptopsContainer().should('be.visible');
        this.getUsedLaptopsTitle().should('have.text', products[3].title);
        this.getUsedLaptopsImage().should('have.id', products[3].imageId);
    }

    verifyGameConsoles() {
        this.getGameConsolesContainer().should('be.visible');
        this.getGameConsolesTitle().should('have.text', products[4].title);
        this.getGameConsolesImage().should('have.id', products[4].imageId);
    }

    verifyComponents() {
        this.getComponentsContainer().should('be.visible');
        this.getComponentsTitle().should('have.text', products[5].title);
        this.getComponentsImage().should('have.id', products[5].imageId);
    }

    verifyDesktopSystems() {
        this.getDesktopSystemsContainer().should('be.visible');
        this.getDesktopSystemsTitle().should('have.text', products[6].title);
        this.getDesktopSystemsImage().should('have.id', products[6].imageId);
    }

    verifyAudio() {
        this.getAudioContainer().should('be.visible');
        this.getAudioTitle().should('have.text', products[7].title);
        this.getAudioImage().should('have.id', products[7].imageId);
    }

};


export default OurProducts

    
   //I was trying to create a function below :(

   /*getProductId(product) {
        if (product.id = "special-offers") {
            this.getSpecialOffersContainer();
        }
        if (product.id = "container-product1") {
            this.getCamerasContainer()
        }
        if (product.id = "container-product2") {
            this.getNewLaptopsContainer()
        }
        if (product.id = "container-product3") {
            this.getUsedLaptopsContainer()
        }
        if (product.id = "container-product4") {
            this.getGameConsolesContainer()
        }
        if (product.id = "container-product5") {
            this.getComponentsContainer()
        }
        if (product.id = "container-product6") {
            this.getDesktopSystemsContainer()
        }
        if (product.id = "container-product7") {
            this.getAudioContainer()
        }
    this.getSpecialOffersContainer().click()
    }*/




