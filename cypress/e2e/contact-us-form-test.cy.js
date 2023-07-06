/// <reference types="Cypress" />

//const { fill } = require("cypress/types/lodash");

import { users } from "../test-data/user-test-data";
import ContactUsPage from "../pages/contact-us-page"; //треба створити об'єкт класу нижче, аби можна було з ним працювати
import HomePage from "../pages/home-page";
import { contactUsStep } from "../steps/contact-us-step";

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];
const homePage = new HomePage();

//homePage.getButtonName(`Hello, ${test.name}`).click(); //just an example

describe('Contact Us form', () => {
  it(`Open and fill the Contact Us form - with test case name ${userWithValidData}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifySubmitMessageIsDisplayed();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyEmail}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyEmail);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllErrorMessagesAreDisplayed();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyFirstName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequiredErrorDisplayed();
    contactUsStep.verifyInvalidEmailErrorNotDisplayed();
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