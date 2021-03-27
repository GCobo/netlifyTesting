import React, { useState, useRef } from 'react';
import { mount } from 'cypress-react-unit-test';
import { Portal } from './Portal';

import { WrapperTheme } from '../../utils/test';

const PortalComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <WrapperTheme>
      <button onClick={() => setShow(!show)} ref={buttonRef}>
        Show portal
      </button>
      <Portal show={show} actionRef={buttonRef}>
        This is the portal
      </Portal>
    </WrapperTheme>
  );
};

const TwoPortalComponent = () => {
  const [show, setShow] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);

  return (
    <WrapperTheme>
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
    </WrapperTheme>
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

  it('should recalculate position if the portal opens in a corner of the screen', () => {
    const offset: number = 200;
    const TestComponent = () => {
      const [show, setShow] = useState<boolean>(false);
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <WrapperTheme>
          <div style={{ display: 'flex', marginLeft: 'auto ' }}>
            <button onClick={() => setShow(!show)} ref={buttonRef}>
              Show portal
            </button>
            <Portal
              show={show}
              actionRef={buttonRef}
              offset={offset}
              testId='modal'
            >
              <div style={{ width: `${offset}px`, backgroundColor: 'red' }}>
                This is the portal
              </div>
            </Portal>
          </div>
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);

    cy.get('button').click();

    cy.contains('This is the portal').should('be.visible');

    cy.get('[data-test="modal"]').then(($element) => {
      const { left } = $element.position();
      const windowWidth = Cypress.config('viewportWidth');
      const position = left + offset;
      expect(position).to.be.closeTo(windowWidth, position);
    });
  });

  it('should show portal with overlay', () => {
    const TestComponent = () => {
      const [show, setShow] = useState<boolean>(false);
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <WrapperTheme>
          <button onClick={() => setShow(!show)} ref={buttonRef}>
            Show portal
          </button>
          <Portal
            show={show}
            actionRef={buttonRef}
            overlay
            onClickOutside={() => setShow(false)}
            testId='portal'
          >
            This is the portal
          </Portal>
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);

    cy.get('button').click();

    cy.contains('This is the portal').should('be.visible');

    cy.get('[data-test="portal-overlay"]').click();

    cy.contains('This is the portal').should('not.exist');
  });

  it('should show portal with custom styles', () => {
    const TestComponent = () => {
      const [show, setShow] = useState<boolean>(false);
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <WrapperTheme>
          <button onClick={() => setShow(!show)} ref={buttonRef}>
            Show portal
          </button>
          <Portal
            show={show}
            actionRef={buttonRef}
            onClickOutside={() => setShow(false)}
            testId='portal'
            style={{ background: 'red', width: '250px' }}
          >
            This is the portal with
          </Portal>
        </WrapperTheme>
      );
    };

    mount(<TestComponent />);

    cy.get('button').click();
    cy.get('[data-test="portal"]').should(
      'have.css',
      'background-color',
      'rgb(255, 0, 0)'
    );
  });
});
