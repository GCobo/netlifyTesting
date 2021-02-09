import { useMapEvent } from 'react-leaflet';

import { Location } from './model';

type IProps = {
  onClickMap?(latlng: Location): void;
};

export const MapEvent = ({ onClickMap }: IProps) => {
  useMapEvent('click', (event: any) => {
    onClickMap && onClickMap([event.latlng.lat, event.latlng.lng]);
  });

  return null;
};
