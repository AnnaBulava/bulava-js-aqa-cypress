import { errors } from "../test-data/error-messages";

class ContactUsPage {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    }

    getFirstName(){
        return cy.get('input[name="first_name"]')
    }

    getLastName(){
        return cy.get('input[name="last_name"]')
    }

    getLastNameByXpath(){
        return cy.xpath('//input[@name="last_name"]')
    }

    getEmail(){
        return cy.get('input[name="email"]')
    }

    getComment(){
        return cy.get('textarea[name="message"]')
    }

    getSubmitButton(){
        return cy.get('#form_buttons').contains('SUBMIT')
    }

    getResetButton(){
        return cy.get('#form_buttons').contains('RESET')
    }

    getContactUsHeader(){
        return cy.get('name="contactme"]')
    }

    getSuccessSubmitMessage(){
        return cy.get('div#contact_reply > h1').contains('Thank You for your Message!')
    }


fillContactUsForm(user) {
    if (user.first_name) {
        this.getFirstName().type(user.first_name);
    }
    if (user.last_name) {
        this.getLastNameByXpath().type(user.last_name);
    }
    if (user.email) {
        this.getEmail().type(user.email);
    }
    if (user.comment) {
        this.getComment().type(user.comment);
    }
    this.getSubmitButton().click(); //this тут допомагає звертатися до об'єктів нашого класу, н-д ім'я, емейл тощо.
}

getInvalidEmailError(){
    return cy.contains(errors.invalidEmail);
}

getAllFieldsAreRequiredError(){
    return cy.contains(errors.allFieldsAreRequired);
}

getErrorFromContactUs(error) {
    return cy.contains(error)
}

}


export default ContactUsPage