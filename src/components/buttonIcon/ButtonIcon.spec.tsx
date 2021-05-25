/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { ButtonIcon } from './ButtonIcon';
import { SearchIcon } from '../icons';
import { JoinbleTheme } from '../../styles/Theme';
import { WrapperTheme } from '../../utils/test';

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
    cy.matchImageSnapshot('Button Icon');
  });

  it('Button Primary match with primary color ', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-primary' />
      </WrapperTheme>
    );

    cy.get('[data-test="button-primary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.greenLight);
    cy.matchImageSnapshot('Button Icon Primary');
  });

  it('Button Secondary match with secondary color', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' secondary />
      </WrapperTheme>
    );

    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.primary.greyDark);
    cy.matchImageSnapshot('Button Icon Secondary');
  });

  it('Button Negative match with negative color', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' negative />
      </WrapperTheme>
    );
    cy.get('[data-test="button-secondary"]');
    cy.should('have.fill', JoinbleTheme.colors.system.white);
    cy.matchImageSnapshot('Button Icon Negative');
  });

  it('Button Should be disabled', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon icon={<SearchIcon />} testId='button-secondary' disabled />
      </WrapperTheme>
    );

    cy.get('button').should('be.disabled');
    cy.matchImageSnapshot('Button Icon Disabled');
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

  it('Button Should have size XL', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          size='XL'
          icon={<SearchIcon />}
          testId='button-secondary'
          id='testing'
        />
      </WrapperTheme>
    );

    cy.get('button')
      .should('have.css', 'width', '36px')
      .and('have.css', 'min-width', '36px')
      .and('have.css', 'height', '36px');
    cy.matchImageSnapshot('Button Icon XL');
  });

  it('Button Should have size L', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          size='L'
          icon={<SearchIcon />}
          testId='button-secondary'
          id='testing'
        />
      </WrapperTheme>
    );

    cy.get('button')
      .should('have.css', 'width', '24px')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'height', '24px');
    cy.matchImageSnapshot('Button Icon L');
  });
  it('Button Should have size M', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          size='M'
          icon={<SearchIcon />}
          testId='button-secondary'
          id='testing'
        />
      </WrapperTheme>
    );

    cy.get('button')
      .should('have.css', 'width', '20px')
      .and('have.css', 'min-width', '20px')
      .and('have.css', 'height', '20px');
    cy.matchImageSnapshot('Button Icon M');
  });
  it('Button Should have size S', () => {
    mount(
      <WrapperTheme>
        <ButtonIcon
          size='S'
          icon={<SearchIcon />}
          testId='button-secondary'
          id='testing'
        />
      </WrapperTheme>
    );

    cy.get('button')
      .should('have.css', 'width', '16px')
      .and('have.css', 'min-width', '16px')
      .and('have.css', 'height', '16px');
    cy.matchImageSnapshot('Button Icon S');
  });
});
