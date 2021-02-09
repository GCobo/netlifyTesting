/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { WrapperTheme } from '../../utils/test';

import { Alert } from './Alert';
import { StateAlert } from './AlertModel';
import { AlertProvider, useAlert } from './AlertProvider';

const titleAlert = 'This is a example de alert';
const idAlert = 'alertTest';

const WrapperAlerts = ({ children }: any) => {
  return (
    <WrapperTheme>
      <AlertProvider>{children}</AlertProvider>
    </WrapperTheme>
  );
};

const AlertComponent = ({ type = StateAlert.info }: any) => {
  const { addAlert } = useAlert();

  console.log(type);

  const onShowAlert = () => {
    addAlert(titleAlert, { testId: idAlert, type });
  };

  return (
    <div>
      <button onClick={onShowAlert}>Show Alert</button>
    </div>
  );
};

describe('Alert Component', () => {
  it('it works', () => {
    mount(
      <WrapperTheme>
        <Alert id='1' title={titleAlert} />
      </WrapperTheme>
    );

    cy.contains(titleAlert).should('be.visible');
  });

  it('should add alert from provider', () => {
    mount(
      <WrapperAlerts>
        <AlertComponent />
      </WrapperAlerts>
    );

    cy.get('button').click();
    cy.contains(titleAlert).should('be.visible');
  });

  it('should close alert from provider', () => {
    mount(
      <WrapperAlerts>
        <AlertComponent />
      </WrapperAlerts>
    );

    cy.get('button').click();
    cy.contains(titleAlert).should('be.visible');

    cy.get(`[data-test="${idAlert}"]`)
      .find('[data-test="alert-close"]')
      .click();

    cy.wait(100);

    cy.contains(titleAlert).should('not.exist');
  });

  it('should add alert of type error', () => {
    mount(
      <WrapperAlerts>
        <AlertComponent type={StateAlert.error} />
      </WrapperAlerts>
    );

    cy.get('button').click();

    cy.get(`[data-test="${idAlert}"]`).should(
      'have.css',
      'background-color',
      'rgb(241, 85, 108)'
    );
  });

  it('should add alert of type warning', () => {
    mount(
      <WrapperAlerts>
        <AlertComponent type={StateAlert.warning} />
      </WrapperAlerts>
    );

    cy.get('button').click();

    cy.get(`[data-test="${idAlert}"]`).should(
      'have.css',
      'background-color',
      'rgb(247, 184, 75)'
    );
  });

  it('should add alert of type success', () => {
    mount(
      <WrapperAlerts>
        <AlertComponent type={StateAlert.success} />
      </WrapperAlerts>
    );

    cy.get('button').click();

    cy.get(`[data-test="${idAlert}"]`).should(
      'have.css',
      'background-color',
      'rgb(26, 188, 156)'
    );
  });
});
