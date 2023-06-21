/// <reference types="Cypress" />

import { products } from "../test-data/products";
import OurProducts from "../pages/our-products";

const ourProducts = new OurProducts();

describe('Our Products', () => {
  products.forEach(product => {
    it(`Open the page and verify the product ${product.title}`, () => {
      ourProducts.openOurProducts();//TODO: Check it!!!
      ourProducts.verifyProduct(product, product.containerSelector, product.titleSelector, product.imageSelector);
    })
  })

  it('Verify the modal dialog', () => {
    ourProducts.openOurProducts();
    ourProducts.getModalDialog().should('exist');
    ourProducts.verifyModalText();
    ourProducts.verifyModalAppearanceAndButtons();
  });
});
