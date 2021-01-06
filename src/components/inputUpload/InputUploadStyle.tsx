import styled from '@emotion/styled';

import { DragZoneProps } from './InputUploadModel';
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
  width: 10.62rem;
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

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 4.4rem;
  height: 4.4.rem;

  > img {
    max-width: 100%;
  }
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

  &.inActive {
    padding: 2rem;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0.5rem;

  > button {
    margin: 0 0.2rem;
  }

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
  margin-top: 4px;
  svg {
    width: 1.25rem;
    min-width: 1.25rem;
    height: 1.25rem;
  }
`;
