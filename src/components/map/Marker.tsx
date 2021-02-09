import L from 'leaflet';

export const iconMarker = L.icon({
  iconUrl: require('../../assets/icon/location.svg'),
  iconRetinaUrl: require('../../assets/icon/location.svg'),
  iconSize: [60, 60],
  className: 'leaflet-venue-icon'
});
