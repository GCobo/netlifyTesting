/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import { JoinbleThemeProvider } from '../../providers';
import { Badgets } from './Badgets';

describe('Button Icon', () => {
  it('badge should be 99', () => {
    mount(
      <JoinbleThemeProvider>
        <Badgets number={99} />
      </JoinbleThemeProvider>
    );
    cy.get('span').should('have.text', 99);
  });

  it('badge should be 99+', () => {
    mount(
      <JoinbleThemeProvider>
        <Badgets number={999} />
      </JoinbleThemeProvider>
    );
    cy.get('span').should('have.text', '99+');
  });
});
