/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputMap } from './InputMap';
import { WrapperTheme } from '../../utils/test';

describe('Input Map component', () => {
  it('should assign the added value to the component', () => {
    mount(
      <WrapperTheme>
        <InputMap label='Position' value={[12, 24]} />
      </WrapperTheme>
    );

    cy.get('[name="lat"]').should('have.value', 12);
    cy.get('[name="lng"]').should('have.value', 24);
  });

  it('should click on the map button and choose a point on the map', () => {
    mount(
      <WrapperTheme>
        <InputMap label='Position' />
      </WrapperTheme>
    );

    cy.get('[data-test="button-show-map"]').click({ force: true });
    cy.wait(300);

    cy.get('.leaflet-container').click('center');
    cy.get('[data-test="button-select"]').click();
    cy.get('[name="lat"]').invoke('val').should('be.ok');
    cy.get('[name="lng"]').invoke('val').should('be.ok');
  });

  it('should add erroneous values', () => {
    mount(
      <WrapperTheme>
        <InputMap label='Position' />
      </WrapperTheme>
    );

    cy.get('[name="lat"]').type('-91', { force: true });
    cy.get('[name="lng"]').type('200', { force: true });

    cy.contains('Invalid latitude').should('be.visible');
    cy.contains('Invalid longitude').should('be.visible');
  });

  it('should disabled the field', () => {
    mount(
      <WrapperTheme>
        <InputMap label='Position' disabled />
      </WrapperTheme>
    );

    cy.get('[name="lat"]').should('be.disabled');
    cy.get('[name="lng"]').should('be.disabled');
  });
});
