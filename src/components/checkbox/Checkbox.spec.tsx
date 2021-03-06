/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import { Checkbox } from './Checkbox';
import { WrapperTheme } from '../../utils/test';

describe('Button component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <Checkbox labelLeft='Label Example' />
      </WrapperTheme>
    );
    cy.contains('Label Example').should('be.visible');
  });

  it('should be checked ', () => {
    mount(
      <WrapperTheme>
        <Checkbox labelLeft='Label Example' />
      </WrapperTheme>
    );
    cy.get('button').click();
    cy.get('input[type=checkbox]').should('be.checked');
  });

  it('should show the required label', () => {
    mount(
      <WrapperTheme>
        <Checkbox labelLeft='Label Example' required />
      </WrapperTheme>
    );

    cy.get('label').should('contain', '*');
  });
});
