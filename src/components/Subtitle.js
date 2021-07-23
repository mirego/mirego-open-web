import React from 'react';
import styled from '@emotion/styled';

const Subtitle = styled.h3`
  margin: 0 0 30px;
  color: #555;
  font-variant: small-caps;
  font-weight: 600;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    & {
      color: #ccc;
    }
  }
`;

export default ({children}) => <Subtitle>{children}</Subtitle>;
