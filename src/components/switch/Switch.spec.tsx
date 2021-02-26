/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Switch } from './Switch';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../..';

describe('Switch Component', () => {
  it('Should be Works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch id='label' testId='Switch' />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch"]').should('be.visible');
  });

  it('Should have label Left', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch labelLeft='label Left' id='label' testId='Switch' />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch"] label').should('be.visible');
  });

  it('Should have label Right', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch labelRight='label Right' id='label' testId='Switch' />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch" ] label').should('be.visible');
  });

  it('Should have label', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch label='label Right' id='label' testId='Switch' />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch" ] label').should('be.visible');
  });

  it('Should be checked', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch labelRight='label' id='label' testId='Switch' checked />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'checked');
  });

  it('Should be disabled', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch labelRight='label' id='label' testId='Switch' disabled />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'disabled');
  });

  it('Should be checked and disabled', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Switch
          labelRight='label'
          id='label'
          testId='Switch'
          disabled
          checked
        />
      </ThemeProvider>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'disabled');
    cy.get('[data-test="Switch"] input').should('have.attr', 'checked');
  });
});
