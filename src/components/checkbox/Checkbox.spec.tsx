/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Checkbox } from './Checkbox';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';

describe('Button component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Checkbox labelLeft='Label Example' />
      </ThemeProvider>
    );
    cy.contains('Label Example').should('be.visible');
  });

  it('should be checked ', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Checkbox labelLeft='Label Example' />
      </ThemeProvider>
    );
    cy.get('button').click();
    cy.get('input[type=checkbox]').should('be.checked');
  });
});
