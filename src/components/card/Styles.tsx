import styled from '@emotion/styled';
import { ImageSizeCard, ImageStyleCard } from './model';

export const ApplicationBoxStyles = styled.div<ImageSizeCard>`
  height: ${(props) => (props.imageBig ? '272px' : '208px')};
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.25rem;
  box-shadow: 1px 1px 2px rgba(56, 65, 74, 0.3);
  padding: 0.75rem;
`;

export const ApplicationBoxLogo = styled.div<ImageStyleCard>`
  width: ${(props) => (props.imageBig ? '9rem' : '4.5rem')};
  height: ${(props) => (props.imageBig ? '9rem' : '4.5rem')};
  border-radius: 1.5rem;
  border: 3px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.grey};
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

export const ApplicationBoxTitle = styled.h3`
  text-align: center;
  ${(props) => props.theme.fonts.titleText('S')};
`;

export const ApplicationBoxLastUpdate = styled.p`
  ${(props) => props.theme.fonts.regularText('S')};
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 300;
`;

export const ApplicationBoxActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  grid-column-gap: 1rem;
  margin-top: 1rem;
`;
