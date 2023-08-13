import dayjs from 'dayjs';

Cypress.Commands.add('getCurrentDate', () => {
    return dayjs().format('MM-DD-YYYY');
  });

Cypress.Commands.add('getCurrentDate', () => {
  const currentDate = dayjs().format('MM-DD-YYYY');
  const currentMonth = dayjs(currentDate).format('MMMM');
  const currentYear = dayjs(currentDate).format('YYYY')
  return { currentDate, currentMonth, currentYear};
  });

Cypress.Commands.add('getNextDayDate', () => {
  cy.getCurrentDate().then((currentDate) => {
    const nextDayDate = dayjs(currentDate).add(1, 'day').format('MM-DD-YYYY');
    const dayOfMonth = dayjs(nextDayDate).format('D');
    return { nextDayDate, dayOfMonth};
  })
});

Cypress.Commands.add('getNextMonthDate', (currentDate) => {
  const currentMonth = dayjs(currentDate).format('MMMM');
  const nextDayDate = dayjs(currentDate).add(1, 'day');
  const dayOfMonth = nextDayDate.format('D');
  const nextMonthDate = nextDayDate.add(1, 'month').format('MM-DD-YYYY');
  const nextMonthName = dayjs(nextMonthDate).format('MMM');
  return { currentMonth, dayOfMonth, nextMonthDate, nextMonthName };
  });

Cypress.Commands.add('getNextYearDate', (currentDate) => {
  const currentMonth = dayjs(currentDate).format('MMMM');
  const nextDayDate = dayjs(currentDate).add(1, 'day');
  const dayOfMonth = nextDayDate.format('D');
  const nextMonthDate = nextDayDate.add(1, 'month').format('MM-DD-YYYY');
  const nextMonthName = dayjs(nextMonthDate).format('MMM');
  const nextYearDate = dayjs(nextMonthDate).add(1, 'year').format('MM-DD-YYYY');
  return { currentMonth, dayOfMonth, nextMonthDate, nextMonthName, nextYearDate };
  });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })