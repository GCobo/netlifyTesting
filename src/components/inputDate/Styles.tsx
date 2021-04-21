import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const InputCalendarWrapper = styled.div<{ withLabel: boolean }>`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: ${(props) => (props.withLabel ? '1.8rem' : '0.4rem')};
    fill: ${(props) => props.theme.colors.primary.greenLight};
    pointer-events: none;
  }
`;

export const DateGlobalStyles = () => (
  <Global
    styles={css`
      .flatpickr-calendar.open {
        display: inline-block;
        z-index: 999999 !important;
      }
    `}
  />
);
