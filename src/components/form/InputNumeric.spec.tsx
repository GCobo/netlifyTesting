/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputNumeric } from './InputNumeric';
import { WrapperTheme } from '../../utils/test';

describe('Input component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <InputNumeric label='This is a label' />
      </WrapperTheme>
    );
    cy.contains('This is a label').should('be.visible');
  });

  it('should be possible to operate with the buttons', () => {
    mount(
      <WrapperTheme>
        <InputNumeric label='This is a label' testId='numeric' />
      </WrapperTheme>
    );

    cy.get('[data-test="numeric"]').should('have.value', 0);
    cy.get('[data-test="button-add-numeric"]').click();
    cy.get('[data-test="button-add-numeric"]').click();
    cy.get('[data-test="button-add-numeric"]').click();
    cy.get('[data-test="numeric"]').should('have.value', 3);
    cy.get('[data-test="button-minus-numeric"]').click();
    cy.get('[data-test="numeric"]').should('have.value', 2);
  });

  it('should be deactivated the button add with a max', () => {
    mount(
      <WrapperTheme>
        <InputNumeric label='This is a label' testId='numeric' max={2} />
      </WrapperTheme>
    );

    cy.get('[data-test="numeric"]').should('have.value', 0);
    cy.get('[data-test="button-add-numeric"]').click();
    cy.get('[data-test="button-add-numeric"]').click();
    cy.get('[data-test="numeric"]').should('have.value', 2);
    cy.get('[data-test="button-add-numeric"]').should('be.disabled');
  });
});
