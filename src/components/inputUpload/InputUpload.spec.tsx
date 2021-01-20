import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { InputUpload } from './InputUpload';
import { TypeFiles } from './InputUploadModel';
import { WrapperTheme } from '../../utils/test';

const imageUrl = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
const fileUrl = 'http://www.africau.edu/images/default/sample.pdf';

describe('Input Upload component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <InputUpload label='This is a label' />
      </WrapperTheme>
    );
    cy.contains('This is a label').should('be.visible');
  });

  it('should show the preview of the image with value', () => {
    mount(
      <WrapperTheme>
        <InputUpload label='Upload file' value={imageUrl} />
      </WrapperTheme>
    );

    cy.findByRole('img', { src: imageUrl }).should('exist');
  });

  it('should show the preview of the file with value', () => {
    mount(
      <WrapperTheme>
        <InputUpload
          label='Upload file'
          value={fileUrl}
          fileName='sample.pdf'
        />
      </WrapperTheme>
    );

    cy.contains('sample.pdf').should('exist');
  });

  it('should delete the preview of the file', () => {
    mount(
      <WrapperTheme>
        <InputUpload label='Upload file' value={imageUrl} />
      </WrapperTheme>
    );

    cy.get('[data-test="delete-file"]').click();

    cy.contains('Drap and Drop your file here').should('exist');
  });

  it('should show the error label', () => {
    const errorLabel = 'This format is not supported';

    mount(
      <WrapperTheme>
        <InputUpload errorLabel={errorLabel} />
      </WrapperTheme>
    );

    cy.contains(errorLabel).should('exist');
  });

  it('should hace circle props', () => {
    mount(
      <WrapperTheme>
        <InputUpload circle testId='input-upload-circle' />
      </WrapperTheme>
    );

    cy.get('[data-test="input-upload-circle"]').should(
      'have.css',
      'border-radius',
      '100%'
    );
  });

  it('should accept only ttf files', () => {
    mount(
      <WrapperTheme>
        <InputUpload acceptFiles={[TypeFiles.ttf, TypeFiles.otf]} />
      </WrapperTheme>
    );
  });
});
