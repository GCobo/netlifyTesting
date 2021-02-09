import React, { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { iconMarker } from './Marker';

const addDependencies = () => {
  var head = document.head;
  var link = document.createElement('link');

  const styles = document.querySelector("[title='leafletCSS']");

  if (!styles) {
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity =
      'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';
    link.title = 'leafletCSS';

    head.appendChild(link);
  }
};

export type Location = [number, number];
export type Marker = {
  id: string | number;
  title?: string;
  position: Location;
};

type IProps = {
  position?: Location;
  markers?: Marker[];
  zoom?: number;
};

export const Map = ({
  position = [51.505, -0.09],
  markers = [],
  zoom = 13
}: IProps) => {
  useEffect(() => {
    addDependencies();
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution={`<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((marker: Marker) => (
        <Marker key={marker.id} icon={iconMarker} position={marker.position}>
          {marker.title && <Popup>{marker.title}</Popup>}
        </Marker>
      ))}
    </MapContainer>
  );
};