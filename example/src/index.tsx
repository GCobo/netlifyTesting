import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { JoinbleTheme } from './Theme'

ReactDOM.render(
  <ThemeProvider theme={JoinbleTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
