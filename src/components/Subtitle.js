import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  padding: 0 10px;
  margin: 0 0 30px;
  text-align: center;
  color: #666;

  @media (prefers-color-scheme: dark) {
    & {
      color: #aaa;
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 5px;
  text-align: center;
  font-size: 26px;
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
