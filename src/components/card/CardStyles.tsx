import { rem } from 'polished';
import { ReactNode } from 'react';

import styled from '@emotion/styled';

export type CardBoxWrapperProps = {
  imageBig?: boolean;
  header?: ReactNode;
  horizontal?: boolean;
};

export const CardBoxWrapper = styled.div<CardBoxWrapperProps>`
  border-radius: ${rem(10)};
  box-shadow: ${(props) => props.theme.mainShadow};
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
`;

export const CardBoxStyles = styled.div<CardBoxWrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.system.white};
  padding: ${(props) =>
    props.horizontal ? `${rem(21)} ${rem(24)}` : `${rem(12)}`};
  flex: 1;
  border-radius: ${(props) =>
    props.header ? `0 0 ${rem(10)} ${rem(10)}` : `${rem(10)}`};
  ${(props) =>
    props.horizontal &&
    `
    column-gap: ${rem(16)};
    `}
`;

export const CardBoxHeader = styled.div`
  height: ${rem(40)};
  background-color: ${(props) => props.theme.colors.primary.greyLighest};
  display: flex;
  align-items: center;
  grid-column-gap: ${rem(8)};
  padding: 0 ${rem(8)};
  color: ${(props) => props.theme.colors.primary.greyDark};
  fill: ${(props) => props.theme.colors.primary.greyDark};
  ${(props) => props.theme.fonts.regularText('M')};
  font-weight: 500;
`;

export const CardBoxLogo = styled.div<CardBoxWrapperProps>`
  width: ${(props) => (props.imageBig ? `${rem(144)}` : `${rem(72)}`)};
  height: ${(props) => (props.imageBig ? `${rem(144)}` : `${rem(72)}`)};
  border-radius: ${rem(24)};
  border: 3px solid ${(props) => props.theme.colors.primary.greyLighest};
  background-color: ${(props) => props.theme.colors.primary.greyLighest};
  margin-bottom: ${(props) =>
    !props.horizontal && props.imageBig ? `${rem(12)}` : 0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  svg {
    width: ${rem(80)};
    height: ${rem(80)};
    fill: ${(props) => props.theme.colors.primary.greyDarkest};
  }
`;

export const CardBoxTitle = styled.h3`
  text-align: center;
  ${(props) => props.theme.fonts.titleText('S')};
`;

export const CardBoxLastUpdate = styled.p`
  ${(props) => props.theme.fonts.regularText('S')};
  text-align: center;
  margin-top: ${rem(8)};
  font-weight: 300;
`;

export const CardBoxActions = styled.div<{ horizontal?: boolean }>`
  display: flex;
  justify-content: space-between;
  grid-column-gap: ${rem(16)};
  margin-top: ${rem(16)};
  ${(props) =>
    !props.horizontal &&
    `
    width: 100%;
  `}

  svg {
    fill: ${(props) => props.theme.colors.primary.greyDarkest} !important;
  }
`;
