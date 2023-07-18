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
};


export default OurProducts




