/// <reference types="Cypress" />

import { mount } from '@cypress/react';
import React from 'react';
import { JoinbleTheme } from '../../styles/Theme';
import { WrapperTheme } from '../../utils/test';
import { PlusIcon } from '../icons';
import { Button } from './Button';

describe('Button component', () => {
  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <Button testId='button'>Hello World!</Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]')
      .contains('Hello World!')
      .should('be.visible');
  });

  it('Should be disabled', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' disabled>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should('have.attr', 'disabled');
  });

  it('Should be primary', () => {
    mount(
      <WrapperTheme>
        <Button testId='button'>Hello World!</Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.primary.primary
    );
  });

  it('Should be outline', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' outline>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      'transparent'
    );
  });

  it('Should be success', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' success>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.system.success
    );
  });
  it('Should be warning', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' warning>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.system.warning
    );
  });
  it('Should be error', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' error>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.system.error
    );
  });

  it('Should have icon', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' icon={<PlusIcon />}>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"] svg').should('be.visible');
  });

  it('Should be type submit', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' type='submit'>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should('have.attr', 'type', 'submit');
  });

  it('Should be type reset', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' type='reset'>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should('have.attr', 'type', 'reset');
  });

  it('Should be an A ', () => {
    mount(
      <WrapperTheme>
        <Button testId='button' type='reset' as='a'>
          Hello World!
        </Button>
      </WrapperTheme>
    );
    cy.get('a').should('be.visible');
  });
});
