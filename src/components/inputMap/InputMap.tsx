import React, {
  useState,
  ChangeEvent,
  useEffect,
  useMemo,
  Fragment
} from 'react';
import { Button } from '../button';

import { ButtonIcon } from '../buttonIcon/ButtonIcon';
import { MapIcon } from '../icons';
import { Input } from '../form/Input';
import { Map, Point, Location } from '../map';
import { Modal } from '../modal/Modal';
import {
  InputMapContainer,
  InputMapWrapper,
  LabelInputMap,
  MapContainer
} from './Styles';

export type MapLiterals = {
  latPlaceholder: string;
  lngPlaceholder: string;
  errorLat: string;
  errorlng: string;
  titleMap: string;
  buttonSuccess: string;
  buttonCancel: string;
};

type IProps = {
  label?: string;
  id?: string;
  value?: Location;
  onChange?(value: Location): void;
  testId?: string;
  texts?: MapLiterals;
  disabled?: boolean;
  overlay?: boolean;
};

type InputError = {
  lat?: boolean;
  lng?: boolean;
};

const literals: MapLiterals = {
  latPlaceholder: 'Latitude',
  lngPlaceholder: 'Longitude',
  errorLat: 'Invalid latitude',
  errorlng: 'Invalid longitude',
  titleMap: 'Select a point on the map',
  buttonSuccess: 'Select',
  buttonCancel: 'Cancel'
};

export const InputMap = ({
  label,
  id,
  value,
  onChange,
  testId,
  texts = literals,
  disabled = false,
  overlay = true
}: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [marker, setMarker] = useState<Point>();
  const [latLng, setLatLng] = useState<Location | undefined>(value);
  const [error, setError] = useState<InputError>({ lat: false, lng: false });

  const onClickMap = (position: Location) => {
    setMarker({
      id: 1,
      position
    });
  };

  const onAddPosition = () => {
    marker && setLatLng(marker.position);
    setMarker(undefined);
    setShowModal(false);
  };

  useEffect(() => {
    if (latLng) {
      validateLatLng(latLng);
    }
  }, [latLng]);

  useEffect(() => {
    if (latLng) {
      const [lat, lng] = latLng;

      if (
        !error.lat &&
        !error.lng &&
        !Number.isNaN(lat) &&
        !Number.isNaN(lng)
      ) {
        onChange && onChange(latLng);
        setMarker({ id: 1, position: latLng });
      }
    }
  }, [latLng, error]);

  const validateLatLng = (latLng: Location) => {
    const [lat, lng] = latLng;

    let latError = false;
    let lngError = false;

    if (lat < -90 || lat > 90) {
      latError = true;
    }

    if (lng < -180 || lng > 180) {
      lngError = true;
    }

    setError({ lat: latError, lng: lngError });
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: any = parseInt(event.target.value);

    if (event.target.name === 'lat') {
      setLatLng((prevValue) => [newValue, prevValue ? prevValue[1] : NaN]);
    } else {
      setLatLng((prevValue) => [prevValue ? prevValue[0] : NaN, newValue]);
    }
  };

  const latitudeValue = useMemo(() => {
    if (latLng) {
      if (!Number.isNaN(latLng[0])) {
        return latLng[0];
      }
    }
    return '';
  }, [latLng]);

  const longitudeValue = useMemo(() => {
    if (latLng) {
      if (!Number.isNaN(latLng[1])) {
        return latLng[1];
      }
    }

    return '';
  }, [latLng]);

  return (
    <InputMapContainer>
      {label && <LabelInputMap htmlFor={id}>{label}</LabelInputMap>}
      <InputMapWrapper data-test={testId}>
        <Input
          placeHolder={texts.latPlaceholder}
          value={latitudeValue}
          type='number'
          name='lat'
          onChange={onChangeValue}
          errorLabel={error.lat ? texts.errorLat : ''}
          disabled={disabled}
        />
        <Input
          placeHolder={texts.lngPlaceholder}
          value={longitudeValue}
          type='number'
          name='lng'
          onChange={onChangeValue}
          errorLabel={error.lng ? texts.errorlng : ''}
          disabled={disabled}
        />
        <ButtonIcon
          icon={<MapIcon />}
          onClick={() => setShowModal((show) => !show)}
          testId='button-show-map'
          disabled={disabled}
        />
      </InputMapWrapper>

      <Modal
        show={showModal}
        title={texts.titleMap}
        onChangeShow={(show) => setShowModal(show)}
        overlay={overlay}
        actions={
          <Fragment>
            <Button
              outline
              onClick={() => setShowModal((show) => !show)}
              testId='button-cancel'
            >
              {texts.buttonCancel}
            </Button>
            <Button
              success
              disabled={!marker}
              onClick={onAddPosition}
              testId='button-select'
            >
              {texts.buttonSuccess}
            </Button>
          </Fragment>
        }
      >
        <MapContainer>
          <Map
            onClickMap={onClickMap}
            position={marker && marker.position}
            markers={marker && [marker]}
          />
        </MapContainer>
      </Modal>
    </InputMapContainer>
  );
};
