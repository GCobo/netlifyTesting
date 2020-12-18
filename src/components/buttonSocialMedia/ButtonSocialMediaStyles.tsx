import styled from '@emotion/styled';

const Button = styled.button`
  width: 2.25rem;
  min-width: 2.25rem;
  height: 2.25rem;
  border-width: 1px;
  border-style: solid;
  padding: 0 0.5rem;
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const GoogleButton = styled(Button)`
  border-color: #ea4335;
`;
export const FacebookButton = styled(Button)`
  border-color: #395a9a;
  svg {
    fill: #395a9a;
  }
`;
export const TwitterButton = styled(Button)`
  border-color: #2aa9e0;
  svg {
    fill: #2aa9e0;
  }
`;
export const LinkedinButton = styled(Button)`
  border-color: #0077b7;
  svg {
    fill: #0077b7;
  }
`;
export const GithubButton = styled(Button)`
  border-color: transparent;
  padding: 0;
  svg {
    width: 2.25rem;
    height: 2.25rem;
  }
`;
