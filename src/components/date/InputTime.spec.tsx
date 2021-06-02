/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputTime } from './InputTime';
import { WrapperTheme } from '../../utils/test';

describe('Input Time component', () => {
  it('should works', () => {
    mount(
      <WrapperTheme>
        <InputTime placeHolder='hh:mm' testId='input-time' />
      </WrapperTheme>
    );
  });

  it('should display the selected time', () => {
    const selectDate = '12:20';

    mount(
      <WrapperTheme>
        <InputTime placeHolder='hh:mm' value={selectDate} testId='input-time' />
      </WrapperTheme>
    );

    cy.get('[data-test="input-time"]').should('have.value', selectDate);
  });

  it('should deactivate the input', () => {
    mount(
      <WrapperTheme>
        <InputTime placeHolder='hh:mm' disabled testId='input-time' />
      </WrapperTheme>
    );

    cy.get('[data-test="input-time"]').should('be.disabled');
  });

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <InputTime label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });

  it('should show error label', () => {
    mount(
      <WrapperTheme>
        <InputTime label='This is a label' required errorLabel='error' />
      </WrapperTheme>
    );

    cy.get('p').should('contain', 'error');
  });
});
