import ContactUsPage from "../pages/contact-us-page";
import HomePage from "../pages/home-page";
import { GeneralStep } from "./general-step";

export class ContactUsStep extends GeneralStep {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('include', 'contactus')
    }

    fillAndVerifyContactUsForm(user) {
        if (user.first_name) {
            ContactUsPage.getFirstName.type(user.first_name).should('have.value', user.first_name);
        }
        if (user.last_name) {
            ContactUsPage.getLastNameByXpath.type(user.last_name).should('have.value', user.last_name);
        }
        if (user.email) {
            ContactUsPage.getEmail.type(user.email).should('have.value', user.email);
        }
        if (user.comment) {
            ContactUsPage.getComment.type(user.comment).should('have.value', user.comment);
        }
    }

    submitContactUsForm() {
        ContactUsPage.getSubmitButton.click();
    }

    verifySuccessMessageIsDisplayed () {
        ContactUsPage.getSuccessSubmitMessage.should('exist');
        ContactUsPage.getAllFieldsAreRequiredError.should('not.exist');
        ContactUsPage.getInvalidEmailError.should('not.exist');
    }

    verifyRedirectToContactUsPage() {
        HomePage.openHomePage();
        HomePage.getContactUsButton.click();
        cy.url().should('include', 'contactus');
    }

    verifyAllErrorMessagesAreDisplayed() {
        ContactUsPage.getAllFieldsAreRequiredError.should('exist');
        ContactUsPage.getInvalidEmailError.should('exist');
    }

    verifyAllFieldsAreRequiredErrorDisplayed() {
        ContactUsPage.getAllFieldsAreRequiredError.should('exist')
    }

    verifyInvalidEmailErrorNotDisplayed() {
        ContactUsPage.getInvalidEmailError.should('not.exist')
    }
        
}

export const contactUsStep = new ContactUsStep();