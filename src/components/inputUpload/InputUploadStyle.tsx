import styled from '@emotion/styled';
import { rem } from 'polished';
import { Label } from '../form/Styles';
import { HelpLabel } from '../helpLabel/HelpLabel';
import { AlertIcon, UploadIcon } from '../icons';
import { DragZoneProps, InputUploadCircleProps } from './InputUploadModel';

const handleBorderColor = (props: any) => {
  if (props.errorLabel) {
    return `solid ${props.theme.colors.system.error}`;
  }
  if (props.isDragActive) {
    return `dashed ${props.theme.colors.primary.greyLight}`;
  }

  if (props.isActive) {
    return `solid ${props.theme.colors.primary.primary}`;
  }

  return `solid ${props.theme.colors.primary.greyLight}`;
};

export const LabelInputUpload = styled(Label)`
  display: block;
`;

const getWidth = (props: DragZoneProps) => {
  if (props.circle) {
    return `${rem(152)}`;
  }

  if (props.horizontal) {
    return '100%';
  }

  return `${rem(170)}`;
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
  border-radius: ${(props) => (props.circle ? '100%' : `${rem(4)}`)};
  width: ${(props) => getWidth(props)};
  height: ${(props) => (props.horizontal ? `${rem(40)}` : `${rem(152)}`)};
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
    border: 1px solid ${(props) => props.theme.colors.primary.primary};
    outline: none;
  }
`;

export const ImagePreview = styled.img<InputUploadCircleProps>`
  width: ${rem(70)};
  height: ${rem(70)};
  object-fit: contain;
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
  row-gap: ${rem(8)};

  .icon {
    fill: ${(props) => props.theme.colors.primary.greyDark};
    ${(props) => props.horizontal && `margin-left: auto; position: relative`}
  }

  p {
    ${(props) => props.theme.fonts.regularText('M')};

    ${(props) =>
      props.horizontal &&
      `
        margin-right: auto;
        padding-right: ${rem(16)};
    `}
  }

  &.inActive {
    padding: ${(props) => (props.horizontal ? `0 ${rem(16)}` : `${rem(32)}`)};
  }
`;

export const WrapperButtons = styled.div<InputUploadCircleProps>`
  display: flex;
  align-items: center;
  column-gap: ${rem(8)};
  position: absolute;
  bottom: ${rem(8)};
  right: ${(props) => (props.circle ? `${rem(48)}` : `${rem(8)}`)};

  .icon {
    fill: ${(props) => props.theme.colors.primary.greyDark};
  }
`;

export const IconError = styled(AlertIcon)<{ horizontal?: boolean }>`
  fill: ${(props) => props.theme.colors.system.error};
  width: ${(props) => (props.horizontal ? rem(20) : rem(40))};
  min-width: ${(props) => (props.horizontal ? rem(20) : rem(40))};
  height: ${(props) => (props.horizontal ? rem(20) : rem(40))};
`;

export const IconUpload = styled(UploadIcon)<{ horizontal?: boolean }>`
  width: ${(props) => (props.horizontal ? rem(20) : rem(40))};
  min-width: ${(props) => (props.horizontal ? rem(20) : rem(40))};
  height: ${(props) => (props.horizontal ? rem(20) : rem(40))};
`;

export const HelpLabelStyles = styled(HelpLabel)`
  margin-top: ${rem(8)};
  svg {
    width: ${rem(20)};
    min-width: ${rem(20)};
    height: ${rem(20)};
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
    padding-left: ${rem(16)};

  `}

  > svg {
    width: ${rem(62)};
    height: ${rem(62)};

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
    padding: ${rem(11)} ${rem(21)};
    margin: ${rem(3)} 0;
    > p {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
    }

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

export const InputRequired = styled.span`
  color: ${(props) => props.theme.colors.system.error};
`;
