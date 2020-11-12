import styled from '@emotion/styled'

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  > * {
    top: 50%;
    left: 50%;
  }
`
