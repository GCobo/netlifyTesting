import styled from '@emotion/styled';
import { Portal } from '../portal/Portal';

export const ModalStyles = styled.div`
  background-color: ${(props) => props.theme.colors.lightestColor};
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 8px 20px 0 rgba(6, 62, 91, 0.2);
  z-index: 10;
  position: relative;
  min-width: 20rem;
`;

export const PortalStyles = styled(Portal)`
  display: flex;
  flex: 1;
  width: 100% !important;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.titleColor};
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  margin-left: auto;

  &:hover {
    > svg {
      fill: ${(props) => props.theme.colors.primaryColor};
    }
  }

  > svg {
    fill: ${(props) => props.theme.colors.fontColor};
    width: 10px;
    height: 10px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;

  > button {
    margin: 0 0.5rem;
  }
`;
