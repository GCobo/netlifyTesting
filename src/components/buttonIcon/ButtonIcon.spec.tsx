/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { ButtonIcon } from './ButtonIcon';
import { JoinbleThemeProvider } from '../../providers';
import { SearchIcon } from '../icons';
import { JoinbleTheme } from '../../styles/Theme';

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
    cy.get('span').should('be.visible');
  });

  it('Button Primary match with primary color ', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-primary' />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-primary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.greenLight);
  });

  it('Button Secondary match with secondary color', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' secondary />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.greyDark);
  });

  it('Button Negative match with negative color', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' negative />
      </JoinbleThemeProvider>
    );
    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.system.white);
  });
});
