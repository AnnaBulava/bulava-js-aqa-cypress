import OurProducts from "../pages/our-products";
import { productModalTexts } from "../test-data/products-modal-text";
import { products } from "../test-data/products";

export class OurProductsStep {
    openOurProducts() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
        cy.url().should('contain', 'products');
    }

    verifyModalDialogExists () {
        return cy.xpath('//div[@class="modal-content"]').should('exist');
    }
    
    verifyModalText () {
        OurProducts.getModalDialogTitle.then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[0].text);
        OurProducts.getModalDialogBody.then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[1].text);
    }

    verifyModalAppearanceAndButtons () {
        OurProducts.getProducts.each($el => {
            expect($el).to.have.attr('data-toggle', 'modal')
        });
        OurProducts.getProducts.eq(Math.floor(Math.random() * products.length)).click();
        OurProducts.getModalDialog.should('be.visible');
        OurProducts.getModalDialogButtons.should('contain', 'Proceed').and('contain', 'Close');
        OurProducts.getModalDialogButtons.contains('Proceed').click();
        OurProducts.getModalDialog.should('not.be.visible');
        OurProducts.getProducts.eq(Math.floor(Math.random() * products.length)).click();
        OurProducts.getModalDialogButtons.contains('Close').click();
        OurProducts.getModalDialog.should('not.be.visible');
        OurProducts.getProducts.eq(Math.floor(Math.random() * products.length)).click();
        OurProducts.getModalDialogCloseIcon.click();
        OurProducts.getModalDialog.should('not.be.visible');
    }

    verifyProduct(product) {
        OurProducts.getElement(product.containerSelector).should('be.visible');
        OurProducts.getElement(product.titleSelector).should('have.text', product.title);
        OurProducts.getElement(product.imageSelector).should('have.id', product.imageId);
    };
}

export const ourProductsStep = new OurProductsStep();