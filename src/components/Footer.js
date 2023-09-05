import React from 'react';
import styled from '@emotion/styled';

const Content = styled.footer`
  text-align: center;
  color: rgba(0, 0, 0, 0.25);

  @media (prefers-color-scheme: dark) {
    & {
      color: #bbb;
    }
  }
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
  font-size: 12px;

  &:first-of-type {
    font-size: 14px;
  }
`;

const CookieButton = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

export default () => (
  <Content>
    <Paragraph>We hope these lines of code will be useful to you and help you build great products.</Paragraph>
    <Paragraph>
      <a href="https://github.com/mirego/mirego-open-web" target="_blank" rel="noopener noreferrer">
        Built
      </a>{' '}
      with ♥ (and{' '}
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Gatsby.js
      </a>
      ) by the team @ <a href="https://www.mirego.com">Mirego</a>.
    </Paragraph>

    <CookieButton>
      <span id="ot-sdk-btn" class="ot-sdk-show-settings"></span>
    </CookieButton>
  </Content>
);
