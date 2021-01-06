/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Button } from './Button';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';

describe('Button component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button white>Hello World!</Button>
      </ThemeProvider>
    );
    cy.contains('Hello World!').should('be.visible');
  });
});
