import styled from '@emotion/styled';

import { Label } from '../form/Styles';

export const InputMapWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  position: relative;

  button {
    top: 0.3rem;
    position: relative;
  }

  > section {
    margin-right: 0.6rem;
  }
`;

export const LabelInputMap = styled(Label)`
  display: block;
  width: 100%;
`;

export const InputMapContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const MapContainer = styled.div`
  width: 27.75rem;
  height: 18.5rem;
`;
