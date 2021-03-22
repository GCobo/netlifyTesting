import styled from '@emotion/styled';

import { DragZoneProps, InputUploadCircleProps } from './InputUploadModel';
import { AlertIcon } from '../icons';
import { HelpLabel } from '../helpLabel/HelpLabel';
import { Label } from '../form/Styles';

const handleBorderColor = (props: any) => {
  if (props.errorLabel) {
    return `solid ${props.theme.colors.system.error}`;
  }
  if (props.isDragActive) {
    return `dashed ${props.theme.colors.primary.greyLight}`;
  }

  if (props.isActive) {
    return `solid ${props.theme.colors.primary.greenLight}`;
  }

  return `solid ${props.theme.colors.primary.greyLight}`;
};

export const LabelInputUpload = styled(Label)`
  display: block;
`;

const getWidth = (props: DragZoneProps) => {
  if (props.circle) {
    return '9.56rem';
  }

  if (props.horizontal) {
    return '100%';
  }

  return '10.62rem';
};

export const Container = styled.div<{ horizontal?: boolean }>`
  ${(props) =>
    props.horizontal &&
    `
   display: flex;
   flex-direction: column;
   flex: 1;
  `}
`;

export const ContainerDrag = styled.div<DragZoneProps>`
  border-radius: ${(props) => (props.circle ? '100%' : '0.25rem')};
  width: ${(props) => getWidth(props)};
  height: ${(props) => (props.horizontal ? '2.5rem' : '9.56rem')};
  border: 1px ${(props) => handleBorderColor(props)};
  background-color: ${(props) => props.theme.colors.system.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => props.theme.fonts.regularText('M')};
  color: ${(props) => props.theme.colors.primary.greyLight};
  font-weight: 500;
  flex-direction: column;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary.greenLight};
    outline: none;
  }
`;

export const ImagePreview = styled.img<InputUploadCircleProps>`
  width: 4.4rem;
  height: 4.4rem;
  object-fit: cover;
  border-radius: ${(props) => (props.circle ? '100%' : 0)};
`;

export const WrapperDrag = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
  width: 100%;
  flex-direction: ${(props) => (props.horizontal ? 'row-reverse' : 'column')};

  .icon {
    fill: ${(props) => props.theme.colors.primary.greyDark};

    ${(props) => props.horizontal && `margin-left: auto; position: relative`}
  }

  p {
    ${(props) => props.horizontal && `margin-right: auto; padding-right: 1rem`}
  }

  &.inActive {
    padding: ${(props) => (props.horizontal ? '0 1rem' : '2rem')};
  }
`;

export const WrapperButtons = styled.div<InputUploadCircleProps>`
  display: flex;
  align-items: center;
  grid-column-gap: 0.5rem;
  position: absolute;
  bottom: ${(props) => (props.circle || props.horizontal ? '0.5rem' : 0)};
  right: ${(props) => (props.circle ? '3rem' : '0.5rem')};

  .icon {
    fill: ${(props) => props.theme.colors.primary.greyDark};
  }
`;

export const IconError = styled(AlertIcon)`
  fill: ${(props) => props.theme.colors.system.error};
  width: 2.5rem;
  height: 2.5rem;
`;

export const HelpLabelStyles = styled(HelpLabel)`
  margin-top: 0.5rem;
  svg {
    width: 1.25rem;
    min-width: 1.25rem;
    height: 1.25rem;
  }
`;

export const PreviewFile = styled.div<{ horizontal?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};

  ${(props) =>
    props.horizontal &&
    `
    margin-right: auto;
    padding-left: 1rem;

  `}

  > svg {
    width: 3.9rem;
    height: 3.9rem;

    ${(props) => props.horizontal && 'display: none'}
  }

  > p {
    ${(props) => props.theme.fonts.regularText('M')};
    color: ${(props) => props.theme.colors.primary.greyDark};
  }
`;

export const MultipleFiles = styled.ul`
  > li {
    display: flex;
    border-bottom: 1px solid
      ${(props) => props.theme.colors.primary.greyLighest};
    ${(props) => props.theme.fonts.regularText('M')};
    color: ${(props) => props.theme.colors.primary.greyDark};
    padding: 0.7rem 1.3rem;
    margin: 0.2rem 0;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary.greyLighest};
    }

    > button {
      margin-left: auto;

      svg {
        fill: ${(props) => props.theme.colors.primary.greyDark};
      }
    }
  }
`;
