/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
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

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <InputNumeric label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });

  it('should be able to add numbers manually', () => {
    mount(
      <WrapperTheme>
        <InputNumeric label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('input').clear();

    cy.get('input').type('12.20');

    cy.get('input').should('be.value', '12.20');
  });
});
