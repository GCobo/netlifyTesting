/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { HelpLabel } from './HelpLabel'

describe('HelpLabel component', () => {
  it('works', () => {
    mount(<HelpLabel>This is a help</HelpLabel>)
    cy.contains('This is a help').should('be.visible')
  })
})
