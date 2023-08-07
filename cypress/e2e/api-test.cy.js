const baseURL = 'https://automationintesting.online/'
const userAdmin = {
    name: 'admin',
    password: 'password'
}

let token = 'test';
let regex = /token=([^;]+)/;
const match = token.match(regex);
let tokenValue;
let value;

let room = {
    "roomName": "222",
    "type": "Double",
    "accessible": "true",
    "description": "Please enter a description for this room",
    "image": "https://www.mwtestconsultancy.co.uk/img/room1.jpg",
    "roomPrice": "250",
    "features": [
        "WiFi",
        "TV",
        "Radio",
        "Refreshments",
        "Safe",
        "Views"
    ]
}

describe('API', () => {
    it(`Check data from API`, () => {
        cy.request('POST', `${baseURL}auth/login`, {
            "username": userAdmin.name,
            "password": userAdmin.password
        }).as('login');
        
        cy.get('@login').then((response) => {
            expect(response.status).to.equal(200);
            token = response.headers['set-cookie'];
            //let tokenValue = token[0].split(';')[0];
            let value = token[0].match(regex);
            console.log(value);
            // return tokenValue
            return value
        }).then(() => {
            cy.setCookie('token', `${value}`)
        }).then(() => {
            cy.getCookie('token').should('have.property', 'value', value)
        }).then(() => {
            cy.visit(`${baseURL}#/admin`)
        })

      })

      it.only('Create room', () => {
        cy.get('@login').then...
        cy.once('uncaught:exception', () => false);
        cy.visit(`${baseURL}#/admin`);
        // cy.get('#username').type(userAdmin.name);
        // cy.get('#password').type(userAdmin.password);
        // cy.get('#doLogin').click();
        // cy.getCookie()
        // cy.get('#createRoom').click();
        cy.intercept('POST', '**/room', {body: room}).as('createRoom');
      })
})