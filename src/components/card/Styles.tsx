import styled from '@emotion/styled';
import { rem } from 'polished';
import { ReactNode } from 'react';

export type CardBoxWrapperProps = {
  imageBig?: boolean;
  header?: ReactNode;
};

export const CardBoxWrapper = styled.div<CardBoxWrapperProps>`
  border-radius: ${rem(10)};
  box-shadow: ${(props) => props.theme.mainShadow};
  height: ${(props) =>
    props.header ? '20.5rem' : props.imageBig ? '17rem' : '13rem'};
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const CardBoxStyles = styled.div<CardBoxWrapperProps>`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.system.white};
  padding: 0.75rem;
  flex: 1;
  border-radius: ${(props) =>
    props.header ? `0 0 ${rem(10)} ${rem(10)}` : `${rem(10)}`};
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
  margin-bottom: ${(props) => (props.imageBig ? '0.75rem' : 0)};
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
    width: 5rem;
    height: 5rem;
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

export const CardBoxActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  grid-column-gap: 1rem;
  margin-top: 1rem;

  svg {
    fill: ${(props) => props.theme.colors.primary.greyDarkest};
  }
`;
