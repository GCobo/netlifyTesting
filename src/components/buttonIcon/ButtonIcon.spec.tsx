/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { ButtonIcon } from './ButtonIcon';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';

describe('Button Icon', () => {
  it('works', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} />
      </JoinbleThemeProvider>
    );
  });

  it('should show a tooltip', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon
          icon={<SearchIcon />}
          tooltip='alert'
          testId='button-alert'
        />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-alert"]').invoke('show').click();
    cy.contains('alert').should('be.visible');
  });

  it('Button Primary macth with primary color ', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-primary' />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-primary"]');
    cy.should('have.css', 'fill', 'rgb(12, 102, 255)');
  });

  it('Button Secondary macth with secondary color', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' secondary />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-secondary"]');
    cy.should('have.css', 'fill', 'rgb(110, 118, 142)');
  });

  it('Button Negative macth with negative color', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' negative />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="button-secondary"]');
    cy.should('have.css', 'fill', 'rgb(255, 255, 255)');
  });
});
