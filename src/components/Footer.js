import React from 'react';
import styled from '@emotion/styled';

const Content = styled.footer`
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
  font-size: 12px;

  &:first-child {
    font-size: 14px;
  }
`;

export default () => (
  <Content>
    <Paragraph>
      We hope these lines of code will be useful to you and help you build great
      products.
    </Paragraph>
    <Paragraph>
      Built with ♥ by the team @ <a href="https://www.mirego.com">Mirego</a>.
    </Paragraph>
  </Content>
);
