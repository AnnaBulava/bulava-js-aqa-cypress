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

    getElement(selector) {
        return cy.get(selector);
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
        this.getProducts().each($el => {
            expect($el).to.have.attr('data-toggle', 'modal')
        });
        this.getProducts().eq(Math.floor(Math.random() * products.length)).click();
        this.getModalDialog().should('be.visible');
        this.getModalDialogButtons().should('contain', 'Proceed').and('contain', 'Close');
        this.getModalDialogButtons().contains('Proceed').click();
        this.getModalDialog().should('not.be.visible');
        this.getProducts().eq(Math.floor(Math.random() * products.length)).click();
        this.getModalDialogButtons().contains('Close').click();
        this.getModalDialog().should('not.be.visible');
        this.getProducts().eq(Math.floor(Math.random() * products.length)).click();
        this.getModalDialogCloseIcon().click();
        this.getModalDialog().should('not.be.visible');
    }

    verifyProduct(product, containerSelector, titleSelector, imageSelector) {
        this.getElement(containerSelector).should('be.visible');
        this.getElement(titleSelector).should('have.text', product.title);
        this.getElement(imageSelector).should('have.id', product.imageId);
    };

};


export default OurProducts




