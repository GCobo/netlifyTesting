import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputUpload } from './InputUpload';
import { JoinbleThemeProvider } from '../../providers';

const imageUrl = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';

describe('Input Upload component', () => {
  it('works', () => {
    mount(
      <JoinbleThemeProvider>
        <InputUpload label='This is a label' />
      </JoinbleThemeProvider>
    );
    cy.contains('This is a label').should('be.visible');
  });

  it('should show the preview of the file with value', () => {
    mount(
      <JoinbleThemeProvider>
        <InputUpload label='Upload file' value={imageUrl} />
      </JoinbleThemeProvider>
    );

    cy.findByRole('img', { src: imageUrl }).should('exist');
  });

  it('should delete the preview of the file', () => {
    mount(
      <JoinbleThemeProvider>
        <InputUpload label='Upload file' value={imageUrl} />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="delete-file"]').click();

    cy.contains('Drap and Drop your file here').should('exist');
  });

  it('should show the error label', () => {
    const errorLabel = 'This format is not supported';

    mount(
      <JoinbleThemeProvider>
        <InputUpload errorLabel={errorLabel} />
      </JoinbleThemeProvider>
    );

    cy.contains(errorLabel).should('exist');
  });

  it('should hace circle props', () => {
    mount(
      <JoinbleThemeProvider>
        <InputUpload circle testId='input-upload-circle' />
      </JoinbleThemeProvider>
    );

    cy.get('[data-test="input-upload-circle"]').should(
      'have.css',
      'border-radius',
      '100%'
    );
  });
});
