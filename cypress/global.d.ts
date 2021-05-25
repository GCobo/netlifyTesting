/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    matchImageSnapshot: (options?: any) => void;
  }
}
