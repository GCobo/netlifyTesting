/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { ThemeProvider } from '@emotion/react';
import { JoinbleTheme } from '../../styles/Theme';
import { Card } from './Card';
import { ButtonIcon, EditIcon } from '..';

const imageUrl = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';

describe('HelpLabel component', () => {
  it('Should be works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Card
          testId='card-test'
          title='title'
          lastUpdate='last update'
          actions={
            <ButtonIcon
              secondary
              icon={<EditIcon />}
              onClick={() => alert('click card action')}
            />
          }
        />
      </ThemeProvider>
    );
    cy.get("[data-test='card-test']").should('be.visible');
  });

  it('Should be have title', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Card
          testId='card-test'
          title='title'
          lastUpdate='last update'
          actions={
            <ButtonIcon
              secondary
              icon={<EditIcon />}
              onClick={() => alert('click card action')}
            />
          }
        />
      </ThemeProvider>
    );
    cy.get("[data-test='card-test'] h3").contains('title').should('be.visible');
  });

  it('Should be have lastUpdate', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Card
          testId='card-test'
          title='title'
          lastUpdate='last update'
          actions={
            <ButtonIcon
              secondary
              icon={<EditIcon />}
              onClick={() => alert('click card action')}
            />
          }
        />
      </ThemeProvider>
    );
    cy.get("[data-test='card-test'] p")
      .contains('last update')
      .should('be.visible');
  });

  it('Should be have img', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Card
          testId='card-test'
          title='title'
          lastUpdate='last update'
          image={<img src={imageUrl} alt='Example' />}
          actions={
            <ButtonIcon
              secondary
              icon={<EditIcon />}
              onClick={() => alert('click card action')}
            />
          }
        />
      </ThemeProvider>
    );
    cy.findByRole('img', { src: imageUrl }).should('exist');
  });

  it('Should be click on actions', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Card
          testId='card-test'
          title='title'
          lastUpdate='last update'
          image={<img src={imageUrl} alt='Example' />}
          actions={
            <ButtonIcon
              secondary
              icon={<EditIcon />}
              onClick={() => alert('click card action')}
              testId='card-button-test'
            />
          }
        />
      </ThemeProvider>
    );
    cy.get("[data-test='card-test']")
      .find("[data-test='card-button-test']")
      .should('be.visible');
  });
});
