/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Button } from './Button'

describe('Button component', () => {
  it('works', () => {
    mount(<Button>Hello World!</Button>)
    cy.contains('Hello World!').should('be.visible')
  })
})
