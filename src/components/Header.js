import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 70px;
  text-align: center;
  font-family: 'Almirego Display', sans-serif;
  font-size: 32px;
  line-height: 1;

  @media (max-width: 720px) {
    & {
      flex-direction: column;
    }
  }
`;

const Logo = styled.span`
  color: #050307;
  font-weight: bold;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

const Symbol = styled.span`
  display: block;
  padding: 8px 0 0;
  margin: -8px 0.5em 0 0.6em;
  animation: 0.5s zoom-out;

  @media (max-width: 720px) {
    & {
      margin: 0.8em 0;
    }
  }
`;

const Term = styled.span`
  display: block;
  padding: 8px 16px;
  margin: 0 0 0 8px;
  border: 2px solid;
  border-radius: 24px;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

export default () => (
  <Header>
    <Logo>MIREGO</Logo>
    <Symbol>
      <span role="img" aria-label="Heart">
        ❤️
      </span>
    </Symbol>
    <Term>open source</Term>
  </Header>
);
