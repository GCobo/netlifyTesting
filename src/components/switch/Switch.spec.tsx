/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Switch } from './Switch';
import { WrapperTheme } from '../../utils/test';

describe('Switch Component', () => {
  it('Should be Works', () => {
    mount(
      <WrapperTheme>
        <Switch id='label' testId='Switch' />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch"]').should('be.visible');
  });

  it('Should have label Left', () => {
    mount(
      <WrapperTheme>
        <Switch labelLeft='label Left' id='label' testId='Switch' />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch"] label').should('be.visible');
  });

  it('Should have label Right', () => {
    mount(
      <WrapperTheme>
        <Switch labelRight='label Right' id='label' testId='Switch' />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch" ] label').should('be.visible');
  });

  it('Should have label', () => {
    mount(
      <WrapperTheme>
        <Switch label='label Right' id='label' testId='Switch' />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch" ] label').should('be.visible');
  });

  it('Should be checked', () => {
    mount(
      <WrapperTheme>
        <Switch labelRight='label' id='label' testId='Switch' checked />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'checked');
  });

  it('Should be disabled', () => {
    mount(
      <WrapperTheme>
        <Switch labelRight='label' id='label' testId='Switch' disabled />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'disabled');
  });

  it('Should be checked and disabled', () => {
    mount(
      <WrapperTheme>
        <Switch
          labelRight='label'
          id='label'
          testId='Switch'
          disabled
          checked
        />
      </WrapperTheme>
    );
    cy.get('[data-test="Switch"] input').should('have.attr', 'disabled');
    cy.get('[data-test="Switch"] input').should('have.attr', 'checked');
  });

  it('Should show the help label', () => {
    mount(
      <WrapperTheme>
        <Switch
          labelRight='label'
          id='label'
          testId='Switch'
          helpLabel='This is the help'
        />
      </WrapperTheme>
    );
    cy.contains('This is the help').should('be.visible');
  });
});
