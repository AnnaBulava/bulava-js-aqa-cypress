import ContactUsPage from "../pages/contact-us-page";
import HomePage from "../pages/home-page";

export class ContactUsPageStep {
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

    verifySubmitMessageIsDisplayed () {
        ContactUsPage.getSuccessSubmitMessage.should('exist');
        ContactUsPage.getAllFieldsAreRequiredError.should('not.exist');
        ContactUsPage.getInvalidEmailError.should('not.exist');
    }

    verifyRedirectToContactUsPage() {
        HomePage.visit();
        HomePage.getContactUsButton;
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

export const contactUsStep = new ContactUsPageStep();