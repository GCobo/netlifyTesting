/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Button } from './Button';
import { JoinbleTheme } from '../../styles/Theme';
import { PlusIcon } from '../icons';
import { WrapperTheme } from '../../utils/test';

describe('Button component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Should be works', () => {
    mount(
      <WrapperTheme>
        <Button testId='button'>Hello World!</Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]')
      .contains('Hello World!')
      .should('be.visible');
    cy.matchImageSnapshot('Button');
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
    cy.matchImageSnapshot('Button disabled');
  });

  it('Should be primary', () => {
    mount(
      <WrapperTheme>
        <Button testId='button'>Hello World!</Button>
      </WrapperTheme>
    );
    cy.get('[data-test="button"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.primary.greenLight
    );
    cy.matchImageSnapshot('Button primary');
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
    cy.matchImageSnapshot('Button outline');
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
    cy.matchImageSnapshot('Button success');
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
    cy.matchImageSnapshot('Button warning');
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
    cy.matchImageSnapshot('Button error');
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
    cy.matchImageSnapshot('Button icon');
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
