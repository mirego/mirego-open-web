import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 600px) {
    & {
      padding: 0 10px;
    }
  }
`;

export default ({children}) => <Content>{children}</Content>;
