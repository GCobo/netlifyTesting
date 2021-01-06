/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { HelpLabel } from './HelpLabel';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';

describe('HelpLabel component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <HelpLabel label='This is a help' />
      </ThemeProvider>
    );
    cy.contains('This is a help').should('be.visible');
  });
});
