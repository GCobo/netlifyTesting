/// <reference types="Cypress" />

import { mount } from '@cypress/react';
import React from 'react';
import { JoinbleTheme } from '../../styles/Theme';
import { WrapperTheme } from '../../utils/test';
import { SearchIcon } from '../icons';
import { ButtonIcon } from './ButtonIcon';

describe('Button Icon', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} />
      </WrapperTheme>
    );
  });

  it('should show a tooltip', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          icon={<SearchIcon />}
          tooltip='alert'
          testId='button-alert'
        />
      </WrapperTheme>
    );

    cy.get('[data-test="button-alert"]').invoke('show').click();
    cy.get('span').should('be.visible');
  });

  it('Button Primary match with primary color ', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-primary' />
      </WrapperTheme>
    );

    cy.get('[data-test="button-primary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.primary);
  });

  it('Button Secondary match with secondary color', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' secondary />
      </WrapperTheme>
    );

    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.greyDark);
  });

  it('Button Negative match with negative color', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' negative />
      </WrapperTheme>
    );
    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.system.white);
  });

  it('Button Should be disabled', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' disabled />
      </WrapperTheme>
    );

    cy.get('button').should('be.disabled');
  });

  it('Button Should have Id', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          icon={<SearchIcon />}
          testId='button-secondary'
          id='testing'
        />
      </WrapperTheme>
    );

    cy.get('button').should('have.attr', 'id', 'testing');
  });
});
