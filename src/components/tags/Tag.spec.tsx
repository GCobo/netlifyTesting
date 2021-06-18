/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('Should be work', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Tag label='This is a tag' testId='tag' />
      </ThemeProvider>
    );
    cy.get('[data-test="tag"] p')
      .contains('This is a tag')
      .should('be.visible');
  });

  it('Should be warning type', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Tag label='This is a help' testId='tag' type='warning' />
      </ThemeProvider>
    );
    cy.get('[data-test="tag"]').should(
      'have.backgroundColor',
      JoinbleTheme.colors.system.warning
    );
  });

  it('Should have tooltip', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Tag label='This is a help' testId='tag' withTooltip />
      </ThemeProvider>
    );
    cy.get('[data-test="tag"]').invoke('show').click();
    cy.get('span').should('be.visible');
  });

  it('Should be disabled', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Tag
          label='This is a help'
          testId='tag'
          withTooltip
          disabled
          onClick={() => alert('disabled')}
        />
      </ThemeProvider>
    );
    cy.get('[data-test="tag"] button').should('have.attr', 'disabled');
  });
});
