import React from 'react';
import styled from '@emotion/styled';

import MiregoLogo from '../images/mirego.svg';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 70px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'noe', serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 1;

  @media (max-width: 720px) {
    & {
      flex-direction: column;
    }
  }
`;

const Symbol = styled.span`
  display: block;
  padding: 8px 0 0;
  margin: 0 0.5em 0 0.6em;

  @media (max-width: 720px) {
    & {
      margin: 0.8em 0;
    }
  }
`;

const Term = styled.span`
  display: block;
  padding: 5px 0 0;
`;

export default () => (
  <Header>
    <img src={MiregoLogo} alt="Mirego" />
    <Symbol>
      <span role="img" aria-label="Heart">
        ❤️
      </span>
    </Symbol>
    <Term>open source</Term>
  </Header>
);
