import React from 'react';

import styled from '@emotion/styled';

export default {
  title: 'Typography'
};

export const Typography = () => {
  const Box = styled.div`
    box-shadow: rgb(0 0 0 / 50%) 0px 1px 3px 0px;
    padding: 16px;
    border-radius: 4px;
    margin-top: 16px;
  `;

  const TypoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    p:first-of-type {
      ${(props) => props.theme.fonts.regularText('S')};
      width: 50px;
    }
  `;

  const Title = styled.p<{ size: 'L' | 'M' | 'S' | 'XS' }>`
    color: ${(props) => props.theme.colors.primary.greyDark};
    ${(props) => props.theme.fonts.titleText(props.size)};
  `;
  const Label = styled.p<{ size: 'XL' | 'L' | 'M' | 'S' | 'XS' }>`
    color: ${(props) => props.theme.colors.primary.greyDark};
    ${(props) => props.theme.fonts.regularText(props.size)};
  `;

  return (
    <Fragment>
      <Box>
        <TypoWrapper>
          <p>9</p>
          <Label size='XS'>Text with size XS</Label>
        </TypoWrapper>
        <TypoWrapper>
          <p>12</p>
          <Label size='S'>Text with size S</Label>
        </TypoWrapper>
        <TypoWrapper>
          <p>14</p>
          <Label size='M'>Text with size M</Label>
        </TypoWrapper>
        <TypoWrapper>
          <p>16</p>
          <Label size='L'>Text with size L</Label>
        </TypoWrapper>
        <TypoWrapper>
          <p>18</p>
          <Label size='XL'>Text with size XL</Label>
        </TypoWrapper>
        <TypoWrapper>
          <p>12</p>
          <Title size='XS'>Title with size XS</Title>
        </TypoWrapper>
        <TypoWrapper>
          <p>16</p>
          <Title size='S'>Title with size S</Title>
        </TypoWrapper>
        <TypoWrapper>
          <p>22</p>
          <Title size='M'>Title with size M</Title>
        </TypoWrapper>
        <TypoWrapper>
          <p>36</p>
          <Title size='L'>Title with size L</Title>
        </TypoWrapper>
      </Box>
    </Fragment>
  );
};
