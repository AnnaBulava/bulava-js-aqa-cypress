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

  beforeEach(() => {
    contactUsStep.visit();
  })

  it(`Open the Contact Us form and verify the header and footer`, () => {
    contactUsStep.verifyTitleText('CONTACT US');
    contactUsStep.verifyThatHeaderIsDisplayed();
    contactUsStep.verifyHeaderText('WebdriverUniversity.com (New Approach To Learning)');
    contactUsStep.verifyThatFooterIsDisplayed();
    contactUsStep.verifyFooterText();
    contactUsStep.logMessage('Test message');
    //cy.task for name, age
    cy.task('checkCountOfFilesInFolder', 'cypress/fixtures').then((count) => {
      cy.log(count); //will give us the length of the array with the files
    })
  })
  
  it(`Open and fill the Contact Us form - with test case name ${userWithValidData.testName}`, () => {
    contactUsStep.verifyRedirectToContactUsPage();
    contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifySuccessMessageIsDisplayed();
    contactUsStep.openHomePage();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyEmail.testName}`, () => {
    contactUsStep.fillAndVerifyContactUsForm(userEmptyEmail);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllErrorMessagesAreDisplayed();
  })

  it(`Open and fill the Contact Us form - with test case name ${userEmptyFirstName.testName}`, () => {
    contactUsStep.fillAndVerifyContactUsForm(userEmptyFirstName);
    contactUsStep.submitContactUsForm();
    contactUsStep.verifyAllFieldsAreRequiredErrorDisplayed();
    contactUsStep.verifyInvalidEmailErrorNotDisplayed();
  })

  it('Check that user was created in the database', () => {
    cy.task('queryToDb', 'SELECT * FROM test.users WHERE id = 1').then((rows) => {
      expect(rows[0].name).to.equal('Test'); //we connect to the DB, got the rows and found our user. We need "then" here because we wait till the query has been executed. We test using "expect" because we received a JQuery element after "then".
      expect(rows[0].email).to.equal('abc@test.com');
      expect(rows[0].age).to.equal(23);
    })
  })

  it.only('Check data from API', () => {
    cy.task('fetchDataFromAPI', 'https://restful-booker.kerokuapp.com/booking'.then((data) => {
      expect(data[0].bookingid).to.greaterThan(0);
    }))
  })
  })