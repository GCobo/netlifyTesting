import styled from '@emotion/styled';
import { animated } from 'react-spring/renderprops.cjs';
import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { AlertStylesProps } from './Alert';

export const AlertWrapper = styled(animated.div)<AlertStylesProps>`
  position: relative;
  width: 450px;
  padding: 0.875rem 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.success
      ? props.theme.colors.successColor
      : props.warning
      ? props.theme.colors.warningColor
      : props.error
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

  svg {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
  }
`;
