import styled from '@emotion/styled';

export const InputCalendarWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 6px;
    fill: ${(props) => props.theme.colors.primary.greenLight};
    pointer-events: none;
  }
`;
