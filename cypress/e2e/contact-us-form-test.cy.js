/// <reference types="Cypress" />

//const { fill } = require("cypress/types/lodash");

import { users } from "../test-data/user-test-data";
import ContactUsPage from "../pages/contact-us-page"; //треба створити об'єкт класу нижче, аби можна було з ним працювати

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];

describe('Contact Us form', () => {
  it(`Open and fill the Contact Us form - with test case name ${userWithValidData}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userWithValidData);
    contactUsPage.getSuccessSubmitMessage().should('exist');
    contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
    contactUsPage.getInvalidEmailError().should('not.exist');
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyEmail}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userEmptyEmail);
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
    contactUsPage.getInvalidEmailError().should('exist');
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyFirstName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userEmptyFirstName);
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
    contactUsPage.getInvalidEmailError().should('not.exist');
  })
  })


  /*it('Open and fill the Contact Us form with without the email', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click();
    fillContactUsForm(userWithoutEmail)
    cy.contains('Error: Invalid email address').click();
})

it('Open and fill the Contact Us form with without the first name', () => {
  cy.visit('http://www.webdriveruniversity.com/');
  cy.get('#contact-us').invoke('removeAttr', 'target').click();
  fillContactUsForm(userWithoutFirstName)
  cy.contains('Error: all fields are required').click();
});*/