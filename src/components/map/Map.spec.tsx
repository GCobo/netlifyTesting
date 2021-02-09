/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Map, Marker, Location } from './Map';
import { WrapperTheme } from '../../utils/test';

const position: Location = [40.42707293240109, -3.6970299207975854];
const markers: Marker[] = [
  {
    id: 1,
    title: 'Example1',
    position: [40.42448566692237, -3.7047984276288055]
  },
  {
    id: 2,
    title: 'Example2',
    position: [40.429290509313844, -3.68343503384295]
  }
];

describe('Map component', () => {
  it('works', () => {
    mount(
      <WrapperTheme>
        <Map />
      </WrapperTheme>
    );
  });

  it('should add two markers to map', () => {
    mount(
      <WrapperTheme>
        <Map position={position} markers={markers} />
      </WrapperTheme>
    );

    cy.get('.leaflet-marker-icon').should('have.length', 2);
  });
});
