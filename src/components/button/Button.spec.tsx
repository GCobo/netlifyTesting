/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Button } from './Button';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';
import { PlusIcon } from '../icons';

describe('Button component', () => {
  it('Should be works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button'>Hello World!</Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]')
      .contains('Hello World!')
      .should('be.visible');
  });

  it('Should be disabled', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' disabled>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should('have.attr', 'disabled');
  });

  it('Should be primary', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button'>Hello World!</Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.primaryColor
    );
  });

  it('Should be secondary', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' secondary>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.white
    );
  });

  it('Should be success', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' success>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.successColor
    );
  });
  it('Should be warning', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' warning>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.warningColor
    );
  });
  it('Should be error', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' error>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.errorColor
    );
  });

  it('Should have icon', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' icon={<PlusIcon />}>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"] svg').should('be.visible');
  });

  it('Should be type submit', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' type='submit'>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should('have.attr', 'type', 'submit');
  });

  it('Should be type reset', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button testId='button' type='reset'>
          Hello World!
        </Button>
      </ThemeProvider>
    );
    cy.get('[data-test="button"]').should('have.attr', 'type', 'reset');
  });
});
