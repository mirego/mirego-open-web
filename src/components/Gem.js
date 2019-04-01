import React from 'react';
import styled from '@emotion/styled';

import Gem from '../images/gem.svg';

const Image = styled.img`
  position: absolute;
  z-index: 0;
  top: -100px;
  right: 0;
  opacity: 0.015;
  pointer-events: none;

  @media (max-width: 720px) {
    & {
      top: 0;
    }
  }
`;

export default () => <Image src={Gem} alt="" />;
