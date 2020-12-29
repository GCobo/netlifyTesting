import styled from '@emotion/styled';
import { animated } from 'react-spring/renderprops';
import { ChevronDownIcon } from '../icons';
import { InputStyle } from '../input/InputStyle';
import { HEIGHT_OPTION_ITEM } from '../optionMenu/OptionMenuItemStyles';
import {
  OptionsMenuWrapper,
  PADDING_X_OPTION_MENU
} from '../optionMenu/OptionMenuStyles';
import { ChevronProps, DropdownStyleProps } from './model';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
`;

export const DropdownStyle = styled(InputStyle)<DropdownStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 0.75rem;
  box-shadow: ${(props) => `
  inset 0px 0px 0px 1px ${
    props.errorLabel ? props.theme.colors.errorColor : props.theme.colors.grey
  }`};

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Chevron = styled(ChevronDownIcon)<ChevronProps>`
  fill: #6e768e;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
  min-width: 1.5rem;
  height: 1rem;
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
