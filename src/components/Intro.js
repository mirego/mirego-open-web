import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 20px 25px;
  border-radius: 3px;
  margin: 0 auto 60px;
  background: rgba(0, 0, 0, 0.04);
  font-size: 14px;
  color: #333;

  @media (prefers-color-scheme: dark) {
    & {
      color: #bbb;
      background: rgba(255, 255, 255, 0.04);
    }
  }
`;

export default () => (
  <Content>
    <p>
      At <a href="https://www.mirego.com">Mirego</a>, we build a huge majority of our products using open source
      technologies (eg.
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
