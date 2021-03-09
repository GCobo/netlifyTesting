/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';
import { TextArea } from './TextArea';

describe('TextArea component', () => {
  it('Should be works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <TextArea label='This is a label' testId='textarea' />
      </ThemeProvider>
    );
    cy.get('[data-test="textarea"]').should('be.visible');
  });

  it('Should have label', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <TextArea label='This is a label' testId='textarea' />
      </ThemeProvider>
    );
    cy.get('[data-test="textarea"] label').should('be.visible');
  });

  it('Should have placeholder', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <TextArea
          label='This is a label'
          placeHolder='Esto es un placeHolder'
          testId='textarea'
        />
      </ThemeProvider>
    );
    cy.get('[data-test="textarea"] textarea').should(
      'have.attr',
      'placeholder',
      'Esto es un placeHolder'
    );
  });

  it('Should be disabled', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <TextArea label='This is a label' disabled testId='textarea' />
      </ThemeProvider>
    );
    cy.get('[data-test="textarea"] textarea').should('have.attr', 'disabled');
  });

  it('Should have more rows', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <TextArea rows={6} testId='textarea' />
      </ThemeProvider>
    );
    cy.get('[data-test="textarea"] textarea').should('have.attr', 'rows', 6);
  });
});
