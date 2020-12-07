/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { ErrorLabel } from './ErrorLabel'
import { ThemeProvider } from '@emotion/react'
import { JoinbleTheme } from '../../Theme'

describe('ErrorLabel component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <ErrorLabel label='This is a error' />
      </ThemeProvider>
    )
    cy.contains('This is a error').should('be.visible')
  })
})
