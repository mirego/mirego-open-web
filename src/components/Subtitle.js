import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  margin: 0 0 30px;
  padding: 0 10px;
  text-align: center;
  color: #666;
`;

const Title = styled.h2`
  margin: 0 0 5px;
  text-align: center;
  font-family: 'noe', serif;
  font-size: 26px;
  font-weight: bold;
  color: #444;
`;

export default ({title, children}) => (
  <Content>
    <Title dangerouslySetInnerHTML={{__html: title}} />
    {children}
  </Content>
);
