import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  margin: 0 0 100px;
  text-align: center;
  color: #666;

  p {
    margin-bottom: 6px;
  }
`;

export default () => (
  <Content>
    <p>We’ve been developing open source software since 2012 and have contributed to dozens of projects.</p>
    <p>That means we unfortunately cannot list them all on this page.</p>
    <p>
      Take a look at our{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/mirego">
        GitHub profile
      </a>{' '}
      to learn more.
    </p>
    <p>
      Also, we’re <a href="https://life.mirego.com/en/available-positions">hiring</a>!
    </p>
  </Content>
);
