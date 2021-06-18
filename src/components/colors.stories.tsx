import React from 'react';

import styled from '@emotion/styled';

import { JoinbleTheme } from '../styles';

export default {
  title: 'Colors'
};

export const Colors = () => {
  const ColorsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    grid-column-gap: 16px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 16px;
    &:last-of-type {
      margin-bottom: 0;
    }

    p {
      text-transform: capitalize;
    }
  `;

  const ColorsBox = styled.span`
    height: 70px;
    width: 100%;
    border-radius: 4px;
    display: grid;
    place-items: center;
    color: white;
  `;

  const ColorItem = ({ background, label, hex }: any) => {
    return (
      <ColorsGrid>
        <p>{label}</p>
        <ColorsBox style={{ background: background }}>{hex}</ColorsBox>
      </ColorsGrid>
    );
  };

  return (
    <Fragment>
      <ColorItem
        background={JoinbleTheme.colors.primary.primary}
        label='primary'
        hex='#1CD8D2'
      />
      <ColorItem
        background={JoinbleTheme.colors.primary.primaryDark}
        label='primaryDark'
        hex='#0D837F'
      />
      <ColorItem
        background={JoinbleTheme.colors.primary.greyDarkest}
        label='greyDarkest'
        hex='#021514'
      />
      <ColorItem
        background={JoinbleTheme.colors.primary.greyDark}
        label='greyDark'
        hex='#6E768E'
      />
      <ColorItem
        background={JoinbleTheme.colors.primary.greyLight}
        label='greyLight'
        hex='#E1E4E8'
      />
      <ColorItem
        background={JoinbleTheme.colors.primary.greyLighest}
        label='greyLighest'
        hex='#F3F7F9'
      />
      <ColorItem
        background={JoinbleTheme.colors.system.success}
        label='success'
        hex='#1ABC9C'
      />
      <ColorItem
        background={JoinbleTheme.colors.system.warning}
        label='warning'
        hex='#F7B84B'
      />
      <ColorItem
        background={JoinbleTheme.colors.system.error}
        label='error'
        hex='#F1556C'
      />
      <ColorItem
        background={JoinbleTheme.colors.system.info}
        label='info'
        hex='#4FC6E1'
      />
    </Fragment>
  );
};
