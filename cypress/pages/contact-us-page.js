import { errors } from "../test-data/error-messages";

class ContactUsPage {

    static get getFirstName(){
        return cy.get('input[name="first_name"]')
    }

    static get getLastName(){
        return cy.get('input[name="last_name"]')
    }

    static get getLastNameByXpath(){
        return cy.xpath('//input[@name="last_name"]')
    }

    static get getEmail(){
        return cy.get('input[name="email"]')
    }

    static get getComment(){
        return cy.get('textarea[name="message"]')
    }

    static get getSubmitButton(){
        return cy.get('#form_buttons').contains('SUBMIT')
    }

    static get getResetButton(){
        return cy.get('#form_buttons').contains('RESET')
    }

    static get getContactUsHeader(){
        return cy.get('name="contactme"]')
    }

    static get getSuccessSubmitMessage(){
        return cy.get('div#contact_reply > h1').contains('Thank You for your Message!')
    }


static fillContactUsForm(user) {
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

static get getInvalidEmailError(){
    return cy.contains(errors.invalidEmail);
}

static get getAllFieldsAreRequiredError(){
    return cy.contains(errors.allFieldsAreRequired);
}

static getErrorFromContactUs(error) {
    return cy.contains(error)
}

}


export default ContactUsPage