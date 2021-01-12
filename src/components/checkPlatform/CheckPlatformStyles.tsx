import styled from '@emotion/styled/macro';

export const CheckPlatformWrapper = styled.ul`
  display: flex;
  grid-column-gap: 1.25rem;
`;

export const CheckPlatformOption = styled.li`
  cursor: pointer;
`;

export const CheckPlatformInput = styled.input`
  border: 0;
  position: absolute;
  width: 1px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;
