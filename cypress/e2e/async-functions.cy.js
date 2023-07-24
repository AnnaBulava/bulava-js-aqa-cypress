describe('Test suite', () => {
    before((done) => {
        someAsyncFunction(() => { //check that the user is logged in
            //some logic is executed here
            done() //this is the callback for executing our request; we use this to stop the current function from running in a loop
        })
        //some async function is executed here, e.g. inserting the Cookie that we got from the Login
    })
})

cy.get('button').click().then((el) => {
    // let element = el;
    // cy.wrap(element).should('have.text', 'Hello')
    return cy.get('div').should('be.visible') //if we don't do "return", the next "then" will not work as it will receive "undefined".
}).then((div) => {
    expect(div).to.have.text('Hello');
})

//