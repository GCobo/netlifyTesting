import styled from '@emotion/styled';
import { animated } from 'react-spring/renderprops.cjs';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { AlertStylesProps, StateAlert } from './Alert';

export const AlertWrapper = styled(animated.div)<AlertStylesProps>`
  position: relative;
  width: 450px;
  padding: 0.875rem 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.type === StateAlert.success
      ? props.theme.colors.successColor
      : props.type === StateAlert.warning
      ? props.theme.colors.warningColor
      : props.type === StateAlert.error
      ? props.theme.colors.errorColor
      : props.theme.colors.infoColor};
  border-radius: 4px;
`;

export const AlertTitle = styled.h4`
  margin-bottom: 0.625rem;
  ${(props) => props.theme.fonts.titleText('XS')};
`;

export const AlertMessage = styled.p`
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => props.theme.fonts.regularText('XS')};
`;

export const AlertButtonClose = styled(ButtonIcon)`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  &:hover,
  &:active {
    fill: ${(props) => props.theme.colors.white};
  }
  cursor: pointer;

  svg {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
  }
`;

export const AlertsContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10000;

  > div {
    margin-bottom: 0.5rem;
  }
`;
