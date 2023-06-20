/// <reference types="Cypress" />

import OurProducts from "../pages/our-products";
import { products } from "../test-data/products";
import { productModalTexts } from "../test-data/products-modal-text";

const ourProducts = new OurProducts();

describe('Our Products', () => {
  it(`Open the page and verify the products`, () => {
    ourProducts.openOurProducts();
    ourProducts.getProducts().should('have.length', 8);
    ourProducts.getSpecialOffersContainer().should('be.visible');
    ourProducts.getSpecialOffersTitle().should('have.text', 'Special Offers');
    ourProducts.getSpecialOffersImage().should('have.id', 'amp-img');
    ourProducts.getCamerasContainer().should('be.visible');
    ourProducts.getCamerasTitle().should('have.text', 'Cameras');
    ourProducts.getCamerasImage().should('have.id', 'camera-img');
    ourProducts.getNewLaptopsContainer().should('be.visible');
    ourProducts.getNewLaptopsTitle().should('have.text', 'New Laptops');
    ourProducts.getNewLaptopsImage().should('have.id', 'laptop1');
    ourProducts.getUsedLaptopsContainer().should('be.visible');
    ourProducts.getUsedLaptopsTitle().should('have.text', 'Used Laptops');
    ourProducts.getUsedLaptopsImage().should('have.id', 'laptop2');
    ourProducts.getGameConsolesContainer().should('be.visible');
    ourProducts.getGameConsolesTitle().should('have.text', 'Game Consoles');
    ourProducts.getGameConsolesImage().should('have.id', 'nintendo');
    ourProducts.getComponentsContainer().should('be.visible');
    ourProducts.getComponentsTitle().should('have.text', 'Components');
    ourProducts.getComponentsImage().should('have.id', 'graphic-card');
    ourProducts.getDesktopSystemsContainer().should('be.visible');
    ourProducts.getDesktopSystemsTitle().should('have.text', 'Desktop Systems');
    ourProducts.getDesktopSystemsImage().should('have.id', 'computer');
    ourProducts.getAudioContainer().should('be.visible');
    ourProducts.getAudioTitle().should('have.text', 'Audio');
    ourProducts.getAudioImage().should('have.id', 'boombox');
  });

  it.only('Verify the modal dialog', () => {
    ourProducts.openOurProducts();
    ourProducts.getModalDialog().should('exist');
    ourProducts.getModalDialogTitle().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[0].text);
    ourProducts.getModalDialogBody().then($el => $el.text().trim().replace(/[\n\t]/g, '')).should('eq', productModalTexts[1].text);
    ourProducts.getModalDialogButtons().should('contain', 'Proceed').and('contain', 'Close') ;
    ourProducts.verifyProductsTriggerModal();
  });
});
