/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import { Input } from './Input';
import { WrapperTheme } from '../../utils/test';

describe('Input component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <Input label='This is a label' />
      </WrapperTheme>
    );
    cy.contains('This is a label').should('be.visible');
  });

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <Input label='This is a label' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });
});
