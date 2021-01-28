import styled from '@emotion/styled';

export const LoadingStyles = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  text-align: center;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 2s infinite linear;
`;

export const Dot1 = styled.div`
  width: 55%;
  height: 55%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.primary.greenLight};
  border-radius: 100%;
  box-shadow: ${(props) =>
    `inset 0px 0px 0px 1px ${props.theme.colors.system.white} `};

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
  animation: bounce 2s infinite ease-in-out;
`;

export const Dot2 = styled(Dot1)`
  top: auto;
  bottom: 0;
  animation-delay: -1s;
`;
