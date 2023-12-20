import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  margin: 0 0 64px;
  color: #666;

  @media (prefers-color-scheme: dark) {
    & {
      color: #aaa;
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 5px;
  font-family: 'Almirego Display', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #444;

  @media (prefers-color-scheme: dark) {
    & {
      color: #ccc;
    }
  }
`;

export default ({title, children}) => (
  <Content>
    <Title dangerouslySetInnerHTML={{__html: title}} />
    {children}
  </Content>
);
