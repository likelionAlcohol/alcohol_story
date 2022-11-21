import React from 'react';
import styled from 'styled-components';

export default function Slide({ img, right }) {
  return <IMG src={img}/>;
}

const IMG = styled.img`
  width: 100%;
  height: 100%;
  padding-right: 20px;
`;

