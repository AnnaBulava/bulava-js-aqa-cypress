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
  it(`Open and fill the Contact Us form - with test case name ${userWithValidData.testName}`, () => {
    contactUsStep.verifyRedirectToContactUsPage();
    contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifySuccessMessageIsDisplayed();
    contactUsStep.openHomePage();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyEmail.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyEmail);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllErrorMessagesAreDisplayed();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyFirstName.testName}`, () => {
    contactUsStep.visit();
    contactUsStep.fillAndVerifyContactUsForm(userEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequiredErrorDisplayed();
    contactUsStep.verifyInvalidEmailErrorNotDisplayed();
  })
  })