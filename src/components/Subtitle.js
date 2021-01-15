import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  padding: 0 10px;
  margin: 0 0 30px;
  text-align: center;
  color: #666;
`;

const Title = styled.h2`
  margin: 0 0 5px;
  text-align: center;
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
