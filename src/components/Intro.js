import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  width: 100%;
  margin: 0 auto 90px;
  font-size: 20px;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

export default () => (
  <Content>
    <p>
      At <a href="https://www.mirego.com">Mirego</a>, we build a huge majority of our products using open source
      technologies (eg.{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
        React
      </a>
      ,{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://elixir-lang.org/">
        Elixir
      </a>
      ,{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://swift.org/">
        Swift
      </a>
      ,{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://kotlinlang.org/">
        Kotlin
      </a>
      , etc.) maintained by stable, mature and active communities.
    </p>
    <p>
      It’s very important for us to give back to these communities by either contributing directly to their projects or
      by providing libraries and tools that add value to their respective ecosystem.
    </p>
  </Content>
);
