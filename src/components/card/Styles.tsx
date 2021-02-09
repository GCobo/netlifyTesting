import styled from '@emotion/styled';
import { ReactNode } from 'react';

export type CardBoxWrapperProps = {
  imageBig?: boolean;
  header?: ReactNode;
};

export const CardBoxWrapper = styled.div<CardBoxWrapperProps>`
  border-radius: 0.25rem;
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
    props.header ? '0 0 0.25rem 0.25rem' : '0.25rem'};
`;

export const CardBoxHeader = styled.div`
  height: 2.5rem;
  background-color: #f3f7f9;
  display: flex;
  align-items: center;
  grid-column-gap: 0.5rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.colors.primary.greyDark};
  fill: ${(props) => props.theme.colors.primary.greyDark};
  ${(props) => props.theme.fonts.regularText('M')};
  font-weight: 500;
`;

export const CardBoxLogo = styled.div<CardBoxWrapperProps>`
  width: ${(props) => (props.imageBig ? '9rem' : '4.5rem')};
  height: ${(props) => (props.imageBig ? '9rem' : '4.5rem')};
  border-radius: 1.5rem;
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
`;

export const CardBoxTitle = styled.h3`
  text-align: center;
  ${(props) => props.theme.fonts.titleText('S')};
`;

export const CardBoxLastUpdate = styled.p`
  ${(props) => props.theme.fonts.regularText('S')};
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 300;
`;

export const CardBoxActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  grid-column-gap: 1rem;
  margin-top: 1rem;
`;
