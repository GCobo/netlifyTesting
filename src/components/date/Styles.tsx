import React from 'react';
import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';

export const InputCalendarWrapper = styled.div<{
  withLabel: boolean;
  errorLabel?: string;
}>`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  position: relative;

  ${(props) =>
    !props.errorLabel &&
    `
      svg {
        position: absolute;
        right: 10px;
        top: ${props.withLabel ? '1.8rem' : '0.4rem'};
        fill: ${props.theme.colors.primary.greenLight};
        pointer-events: none;
        }
  `}
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const DatePickerGlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        .nice-dates-navigation {
          align-items: center;
          color: #333;
          display: flex;
          justify-content: space-between;
          position: relative;
          text-align: center;
          text-transform: capitalize;
        }
        .nice-dates-navigation_current {
          flex-grow: 1;
          font-size: 16px;
          margin-right: auto;
          text-align: left;
          padding-left: 15px;
          font-size: 25px;
          font-weight: bold;
        }
        .nice-dates-navigation_previous,
        .nice-dates-navigation_next {
          cursor: pointer;
          height: 0;
          padding-bottom: calc(100% / 10);
          position: relative;
          width: calc(100% / 10);
          background-color: ${theme.colors.primary.greyLighest};
          border-radius: 100%;
        }
        .nice-dates-navigation_previous:before,
        .nice-dates-navigation_next:before {
          border-right: 2px solid #999;
          border-top: 2px solid #999;
          box-sizing: border-box;
          content: '';
          display: block;
          height: 12px;
          left: 50%;
          margin-left: -5px;
          margin-top: -7px;
          position: absolute;
          top: 50%;
          transform: rotate(45deg);
          transition: 200ms border-color;
          width: 14px;
        }
        .nice-dates-navigation_next:before {
          margin-left: -9px;
        }
        .nice-dates-navigation_previous {
          margin-left: auto;
          position: absolute;
          right: 50px;
        }
        .nice-dates-navigation_previous:hover:before,
        .nice-dates-navigation_next:hover:before {
          border-color: #333;
        }
        .nice-dates-navigation_previous.-disabled,
        .nice-dates-navigation_next.-disabled {
          cursor: default;
          pointer-events: none;
        }
        .nice-dates-navigation_previous.-disabled:before,
        .nice-dates-navigation_next.-disabled:before {
          border-color: #ddd;
        }
        .nice-dates-navigation_previous:before {
          transform: rotate(-135deg);
        }
        .nice-dates-week-header {
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          display: flex;
          padding: 8px 0;
        }
        .nice-dates-week-header_day {
          color: #999;
          font-size: 14px;
          line-height: 1;
          text-align: center;
          text-transform: capitalize;
          width: calc(100% / 7);
        }
        .nice-dates-grid {
          box-sizing: content-box;
          overflow: hidden;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .nice-dates-grid_container {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-wrap: wrap;
          left: 0;
          position: absolute;
          right: 0;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-property: none;
          will-change: transform;
        }
        .nice-dates-grid_container.-moving .nice-dates-day_date {
          transition: 300ms color;
        }
        .nice-dates-grid_container.-origin-bottom {
          top: auto;
          bottom: 0;
        }
        .nice-dates-grid_container.-origin-top {
          top: 0;
          bottom: auto;
        }
        .nice-dates-grid_container.-transition {
          transition-property: transform;
        }
        .nice-dates-day {
          border-top: 1px solid transparent;
          box-sizing: border-box;
          color: #333;
          cursor: pointer;
          font-size: 14px;
          position: relative;
          text-align: center;
          width: calc(100% / 7);
          align-items: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .nice-dates-day_date {
          transition: 150ms color;
          will-change: color;
          z-index: 3;
        }
        .nice-dates-day_month {
          color: #999;
          font-size: 12px;
          left: 0;
          line-height: 1;
          position: absolute;
          right: 0;
          text-transform: capitalize;
          top: 10%;
          z-index: 3;
        }
        .nice-dates-day:before,
        .nice-dates-day:after {
          border-radius: 999px;
          bottom: 0;
          box-sizing: border-box;
          content: '';
          display: block;
          left: 0;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        .nice-dates-day:before {
          background-color: #333;
          z-index: 1;
        }
        .nice-dates-day:after {
          border: 2px solid #333;
          transform: scale(0.95);
          transition-duration: 150ms;
          transition-property: transform, opacity;
          z-index: 2;
        }
        .nice-dates-day:not(.-disabled):hover:after {
          opacity: 1;
          transform: scale(1);
        }
        .nice-dates-day.-selected:before {
          opacity: 1;
        }
        .nice-dates-day.-selected:hover:after {
          background-color: #fff;
        }
        .nice-dates-day.-selected:not(:hover) *,
        .nice-dates-day.-selected.-disabled * {
          color: #fff;
        }
        .nice-dates-day.-selected.-selected-start:before {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          right: 0;
        }
        .nice-dates-day.-selected.-selected-end:before {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          left: 0;
        }
        .nice-dates-day.-selected.-selected-middle:before {
          border-radius: 0;
          left: 0;
          right: 0;
        }
        .nice-dates-day.-selected.-selected-middle:nth-child(7n + 1):before {
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
        }
        .nice-dates-day.-selected.-selected-middle:not(.-end):nth-child(7n):before {
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
        }
        .nice-dates-day.-today {
          font-weight: 600;
        }
        .nice-dates-day.-wide:before,
        .nice-dates-day.-wide:after {
          left: 12.5%;
          right: 12.5%;
        }
        .nice-dates-day.-outside {
          color: #999;
        }
        .nice-dates-day.-disabled {
          cursor: default;
          pointer-events: none;
          color: #ddd;
        }
        .nice-dates-popover {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.12);
          margin: 8px 0;
          max-width: 600px;
          position: absolute;
          transform-origin: top;
          transform: perspective(1000px);
          transition-property: transform, opacity;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(0.4, 0.2, 0, 1.1);
          width: 100%;
          will-change: transform, opacity;
          z-index: 9;
        }
        .nice-dates-popover:not(.-open) {
          opacity: 0;
          pointer-events: none;
          transform: perspective(1000px) rotateX(-15deg);
        }

        .-selected & {
          &:before {
            width: 100% !important;
            height: 100% !important;
            background-color: ${theme.colors.primary.greyDark} !important;
            transform: translate(0, 0) !important;
            left: 0 !important;
            top: 0 !important;
            z-index: 0 !important;
          }
        }

        .nice-dates-day {
          &.day-with-event {
            &:before {
              content: '';
              width: 0.4rem;
              height: 0.4rem;
              background-color: ${theme.colors.primary.greyDark};
              display: block;
              border-radius: 100%;
              opacity: 1;
              left: 50%;
              right: 0;
              top: 2.5rem;
              transform: translate(-50%, 0%);
              z-index: 10;
            }
          }
        }
      `}
    />
  );
};
