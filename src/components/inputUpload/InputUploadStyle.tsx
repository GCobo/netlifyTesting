import styled from '@emotion/styled';

import { DragZoneProps, InputUploadCircleProps } from './InputUploadModel';
import { AlertIcon } from '../icons';
import { HelpLabel } from '../helpLabel/HelpLabel';
import { Label } from '../input/InputStyle';

const handleBorderColor = (props: any) => {
  if (props.errorLabel) {
    return `solid ${props.theme.colors.errorColor}`;
  }
  if (props.isDragActive) {
    return `dashed ${props.theme.colors.grey}`;
  }

  if (props.isActive) {
    return `solid ${props.theme.colors.primaryColor}`;
  }

  return `solid ${props.theme.colors.grey}`;
};

export const LabelInputUpload = styled(Label)`
  display: block;
`;

export const ContainerDrag = styled.div<DragZoneProps>`
  border-radius: ${(props) => (props.circle ? '100%' : '0.25rem')};
  width: ${(props) => (props.circle ? '9.56rem' : '10.62rem')};
  height: 9.56rem;
  border: 1px ${(props) => handleBorderColor(props)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.87rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.greyLight};
  font-weight: 500;
  flex-direction: column;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primaryColor};
    outline: none;
  }
`;

export const ImagePreview = styled.img<InputUploadCircleProps>`
  width: 4.4rem;
  height: 4.4rem;
  object-fit: cover;
  border-radius: ${(props) => (props.circle ? '100%' : 0)};
`;

export const WrapperDrag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
  width: 100%;

  .icon {
    fill: ${(props) => props.theme.colors.fontColor};
  }

  &.inActive {
    padding: 2rem;
  }
`;

export const WrapperButtons = styled.div<InputUploadCircleProps>`
  display: flex;
  align-items: center;
  grid-column-gap: 0.5rem;
  position: absolute;
  bottom: ${(props) => (props.circle ? '0.5rem' : 0)};
  right: ${(props) => (props.circle ? '3rem' : '0.5rem')};

  .icon {
    fill: ${(props) => props.theme.colors.fontColor};
  }
`;

export const IconError = styled(AlertIcon)`
  fill: ${(props) => props.theme.colors.errorColor};
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

export const PreviewFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > svg {
    width: 3.9rem;
    height: 3.9rem;
  }

  > p {
    ${(props) => props.theme.fonts.regularText('M')};
    color: ${(props) => props.theme.colors.fontColor};
  }
`;
