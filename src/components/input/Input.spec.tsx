/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Input } from './Input'

describe('Input component', () => {
  it('works', () => {
    mount(<Input label='This is a label' />)
    cy.contains('This is a label').should('be.visible')
  })
})
