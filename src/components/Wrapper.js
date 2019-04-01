import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export default ({children}) => <Content>{children}</Content>;
