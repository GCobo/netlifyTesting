/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Checkbox } from './Checkbox'

describe('Button component', () => {
  it('works', () => {
    mount(<Checkbox labelLeft='Label Example' />)
    cy.contains('Label Example').should('be.visible')
  })
})
