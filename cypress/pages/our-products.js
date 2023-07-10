/// <reference types="Cypress" />

import { products } from "../test-data/products";
import { productModalTexts } from "../test-data/products-modal-text";

class OurProducts {
    static openOurProducts() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    static get getProducts () {
        return cy.xpath('(//div[@class="row"])[2]').children();
    }

    static getElement(selector) {
        return cy.xpath(selector);
    }

    static get getModalDialog () {
        return cy.xpath('//div[@class="modal-content"]');
    }

    static get getModalDialogTitle () {
        return cy.xpath('//h4[@class="modal-title"]');
    }

    static get getModalDialogBody () {
        return cy.xpath('//div[@class="modal-body"]');
    }

    static get getModalDialogButtons () {
        return cy.xpath('//button[@class="btn btn-default"]');
    }

    static get getModalDialogCloseIcon () {
        return cy.xpath('//button[@class="close"]');
    }

    static verifyModalText () {
        this.getModalDialogTitle().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[0].text);
        this.getModalDialogBody().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[1].text);
    }

    static verifyModalAppearanceAndButtons () {
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

    static verifyProduct(product) {
        this.getElement(product.containerSelector).should('be.visible');
        this.getElement(product.titleSelector).should('have.text', product.title);
        this.getElement(product.imageSelector).should('have.id', product.imageId);
    };

};


export default OurProducts




