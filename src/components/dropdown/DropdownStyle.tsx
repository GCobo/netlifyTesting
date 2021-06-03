import styled from '@emotion/styled';
import { rem } from 'polished';
import { animated } from 'react-spring/renderprops.cjs';
import { InputStyle } from '../form/Styles';
import { ChevronDownIcon } from '../icons';
import { HEIGHT_OPTION_ITEM } from '../optionMenu/OptionMenuItemStyles';
import {
  OptionsMenuWrapper,
  PADDING_X_OPTION_MENU
} from '../optionMenu/OptionMenuStyles';
import { ChevronProps, DropdownStyleProps } from './model';

export const InputRequired = styled.span`
  color: ${(props) => props.theme.colors.system.error};
`;

export const DropdownStyle = styled(InputStyle)<DropdownStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => props.theme.colors.system.white};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  padding: ${rem(12)};
  border-radius: ${rem(4)};
  column-gap: ${rem(8)};
  box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel
      ? props.theme.colors.system.error
      : props.theme.colors.primary.greyLight
  }`};

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${props.theme.colors.primary.primary}`};
  }
  &:disabled {
    &:hover {
      box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${props.theme.colors.primary.greyLight}`};
    }
  }
`;

export const Chevron = styled(ChevronDownIcon)<ChevronProps>`
  fill: ${(props) => props.theme.colors.primary.greyDark};
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
  width: ${rem(16)};
  min-width: ${rem(16)};
  height: ${rem(16)};
`;

export const AnimatedOptions = styled(animated.div)`
  box-shadow: 0px 5px 35px rgba(154, 161, 171, 0.3);
`;

export const DropdownOptions = styled(OptionsMenuWrapper)`
  overflow-y: auto;
  max-height: calc(
    (${PADDING_X_OPTION_MENU}) + (${HEIGHT_OPTION_ITEM} * 4) +
      (${PADDING_X_OPTION_MENU})
  );
`;
