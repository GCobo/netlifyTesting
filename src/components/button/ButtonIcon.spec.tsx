/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { ButtonIcon } from './ButtonIcon';
import { AndroidIcon } from '../icons';
import { JoinbleThemeProvider } from '../../providers';

describe('Button Icon', () => {
  it('works', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon icon={<AndroidIcon />} />
      </JoinbleThemeProvider>
    );
  });

  it.only('should show a tooltip', () => {
    mount(
      <JoinbleThemeProvider>
        <ButtonIcon
          icon={<AndroidIcon />}
          tooltip='Android'
          testId='button-android'
        />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="button-android"]').invoke('show').click();
    cy.contains('Android').should('be.visible');
  });
});
