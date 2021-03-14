import styled from '@emotion/styled';

export const PortalContainer = styled.div`
  position: fixed;
  z-index: 999999;
`;

export const PortalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;
