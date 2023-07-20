/// <reference types="Cypress" />

import { products } from "../test-data/products";
import OurProducts from "../pages/our-products";
import { ourProductsStep } from "../steps/our-products-step";

const ourProducts = new OurProducts();

describe('Our Products', () =>  {
 
  beforeEach(() => {
    ourProductsStep.openOurProducts();
  })

  it(`Open the page and verify the header, navigation bar and footer`, () => {
    ourProductsStep.verifyThatHeaderIsDisplayed();
    ourProductsStep.verifyHeaderText('WebDriver (New Approach To Learning)')
    ourProductsStep.verifyNavPageContainer();
    ourProductsStep.verifyThatFooterIsDisplayed();
    ourProductsStep.verifyFooterText();
  })

  products.forEach(product => {
    it(`Open the page and verify the product ${product.title}`, () => {
      ourProductsStep.verifyProduct(product);
    })
  })

  it('Verify the modal dialog', () => {
    ourProductsStep.verifyModalDialogExists();
    ourProductsStep.verifyModalText();
    ourProductsStep.verifyModalAppearanceAndButtons();
  });

});
