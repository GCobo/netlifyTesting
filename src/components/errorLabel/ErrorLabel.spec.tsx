/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { ErrorLabel } from './ErrorLabel'

describe('ErrorLabel component', () => {
  it('works', () => {
    mount(<ErrorLabel>This is a error</ErrorLabel>)
    cy.contains('This is a error').should('be.visible')
  })
})
