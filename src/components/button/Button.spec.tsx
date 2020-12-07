/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Button } from './Button'
import { ThemeProvider } from '@emotion/react'
import { JoinbleTheme } from '../../Theme'

describe('Button component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Button>Hello World!</Button>
      </ThemeProvider>
    )
    cy.contains('Hello World!').should('be.visible')
  })
})
