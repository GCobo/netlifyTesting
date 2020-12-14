import React, { useState, useRef } from 'react';
import { mount } from 'cypress-react-unit-test';
import { Portal } from './Portal';

import { JoinbleThemeProvider } from '../../providers';

const PortalComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <JoinbleThemeProvider>
      <button onClick={() => setShow(!show)} ref={buttonRef}>
        Show portal
      </button>
      <Portal show={show} actionRef={buttonRef}>
        This is the portal
      </Portal>
    </JoinbleThemeProvider>
  );
};

describe('Input Upload component', () => {
  it('works', () => {
    mount(<PortalComponent />);

    cy.get('button').click();

    cy.contains('This is the portal').should('be.visible');
  });
});
