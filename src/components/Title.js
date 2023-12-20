import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  margin: 0 0 64px;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 5px;
  font-family: 'Almirego Display', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

export default ({title, children}) => (
  <Content>
    <Title dangerouslySetInnerHTML={{__html: title}} />
    {children}
  </Content>
);
