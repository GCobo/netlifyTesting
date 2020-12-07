/// <reference types="Cypress" />

import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Input } from './Input'
import { ThemeProvider } from '@emotion/react'
import { JoinbleTheme } from '../../Theme'

describe('Input component', () => {
  it('works', () => {
    mount(
      <ThemeProvider theme={JoinbleTheme}>
        <Input label='This is a label' />
      </ThemeProvider>
    )
    cy.contains('This is a label').should('be.visible')
  })
})
