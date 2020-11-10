import React from 'react'
import { Global, css } from '@emotion/core'
import emotionReset from 'emotion-reset'

export const GlobalStyles: React.FunctionComponent = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        button {
          background: none;
          border: 0;
        }

        body {
          font-family: 'Inter';
          overflow-x: hidden;
        }

        * {
          &::-webkit-scrollbar-track {
            background-color: #dadde3;
            border-radius: 2px;
            box-shadow: none;
          }

          &::-webkit-scrollbar {
            width: 7px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #b3bdcd;
            border-bottom: 2px solid #fff;
            border-radius: 2px;
            border-top: 2px solid #fff;
            box-shadow: none;
          }
        }
      `}
    />
  )
}
