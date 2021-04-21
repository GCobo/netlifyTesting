import styled from '@emotion/styled';

export const InputCalendarWrapper = styled.div<{ withLabel: boolean }>`
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
    top: ${(props) => (props.withLabel ? '1.8rem' : '0.3rem')};
    fill: ${(props) => props.theme.colors.primary.greenLight};
    pointer-events: none;
  }
`;
