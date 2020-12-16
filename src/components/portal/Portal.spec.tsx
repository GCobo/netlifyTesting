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

const TwoPortalComponent = () => {
  const [show, setShow] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);

  return (
    <JoinbleThemeProvider>
      <div
        style={{ width: '50%', height: '10px', marginBottom: '200px' }}
        ref={divRef}
      ></div>
      <div
        style={{ width: '50%', height: '10px', marginBottom: '200px' }}
        ref={divRef2}
      ></div>
      <button onClick={() => setShow(1)}>Show portal 1</button>
      <button onClick={() => setShow(2)}>Show portal 1</button>
      <button onClick={() => setShow(3)} data-test='button-all'>
        Show two portal
      </button>
      <Portal show={show === 1 || show === 3} actionRef={divRef}>
        Portal 1
      </Portal>
      <Portal show={show === 2 || show === 3} actionRef={divRef2}>
        Portal 2
      </Portal>
    </JoinbleThemeProvider>
  );
};

describe('Portal Component', () => {
  it('works', () => {
    mount(<PortalComponent />);

    cy.get('button').click();

    cy.contains('This is the portal').should('be.visible');
  });

  it('should show two portal', () => {
    mount(<TwoPortalComponent />);

    cy.get('button[data-test="button-all"]').click();

    cy.contains('Portal 2').should('be.visible');
    cy.contains('Portal 1').should('be.visible');
  });
});
