import styled from '@emotion/styled';
import { rem } from 'polished';

const BUTTON_SIZE = `${rem(36)}`;
const TRANSITION = 'all 0.25s ease-in-out';

const Button = styled.button`
  width: ${BUTTON_SIZE};
  min-width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  svg {
    transition: ${TRANSITION};
    z-index: 2;
  }
  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.system.white};
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: ${TRANSITION};
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px transparent;
  }
  &:focus {
    outline: none;
  }
`;

export const GoogleButton = styled(Button)`
  &:before {
    box-shadow: inset 0 0 0 1px #ea4335;
  }
  &:hover {
    svg {
      #top,
      #right,
      #left,
      #bottom {
        fill: ${(props) => props.theme.colors.system.white};
      }
    }
    &:before {
      box-shadow: inset 0 0 0 ${BUTTON_SIZE} #ea4335;
    }
  }
`;
export const FacebookButton = styled(Button)`
  svg {
    fill: #395a9a;
  }
  &:before {
    box-shadow: inset 0 0 0 1px #395a9a;
  }
  &:hover {
    &:before {
      box-shadow: inset 0 0 0 ${BUTTON_SIZE} #395a9a;
    }
  }
`;
export const TwitterButton = styled(Button)`
  svg {
    fill: #2aa9e0;
  }
  &:before {
    box-shadow: inset 0 0 0 1px #2aa9e0;
  }
  &:hover {
    &:before {
      box-shadow: inset 0 0 0 ${BUTTON_SIZE} #2aa9e0;
    }
  }
`;
export const LinkedinButton = styled(Button)`
  svg {
    fill: #0077b7;
  }
  &:before {
    box-shadow: inset 0 0 0 1px #0077b7;
  }
  &:hover {
    &:before {
      box-shadow: inset 0 0 0 ${BUTTON_SIZE} #0077b7;
    }
  }
`;
export const GithubButton = styled(Button)`
  svg {
    fill: #000;
  }
  &:before {
    box-shadow: inset 0 0 0 1px #000;
  }
  &:hover {
    &:before {
      box-shadow: inset 0 0 0 ${BUTTON_SIZE} #000;
    }
  }
`;
