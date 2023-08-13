// Utility function to generate a random index within a range
export function getRandomIndex(length) {
    return Cypress._.random(0, length - 1);
  }

// Utility function to generate a random year within a range
export function getRandomYear(min, max) {
    return Cypress._.random(min, max);
  }
  
// Utility function to check if a value is within a range
  export function isWithinRange(value, { min, max }) {
    return value >= min && value <= max;
  }