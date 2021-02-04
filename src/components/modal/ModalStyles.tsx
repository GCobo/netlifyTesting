import styled from '@emotion/styled';
import { Portal } from '../portal/Portal';
import { animated } from 'react-spring';

export const ModalStyles = styled(animated.div)<{ lateral: Boolean }>`
  background-color: ${(props) => props.theme.colors.system.white};
  padding: ${(props) => (props.lateral ? 0 : `1.5rem`)};
  border-radius: 0.25rem;
  box-shadow: 0 8px 20px 0 rgba(205, 225, 235, 0.2);
  z-index: 10;
  position: relative;
  min-width: 20rem;

  ${(props) =>
    props.lateral &&
    `
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 35%;
    margin-left: auto;
  `}
`;

export const PortalStyles = styled(Portal)`
  display: flex;
  flex: 1;
  width: 100% !important;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div<{ lateral: boolean }>`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary.greyDark};
  height: ${(props) => (props.lateral ? '3.8rem' : 'auto')};
  padding: ${(props) => (props.lateral ? '1rem' : 'auto')};
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.lateral
      ? props.theme.colors.primary.greyLighest
      : props.theme.colors.system.white};
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  margin-left: auto;

  &:hover {
    > svg {
      fill: ${(props) => props.theme.colors.primary.greenLight};
    }
  }

  > svg {
    fill: ${(props) => props.theme.colors.primary.greyDark};
    width: 10px;
    height: 10px;
  }
`;

export const ModalActions = styled.div<{ lateral: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.lateral ? `center` : `flex-end`)};
  padding-top: 2rem;

  ${(props) =>
    props.lateral &&
    `
    margin-top: auto;
    padding-bottom: 1rem;
  `}

  > button {
    margin: 0 0.5rem;
  }
`;
