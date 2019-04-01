import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  width: 100%;
  max-width: 580px;
  padding: 20px 25px;
  border-radius: 3px;
  margin: 0 auto 60px;
  background: rgba(0, 0, 0, 0.04);
  font-size: 15px;
  color: #333;
`;

export default () => (
  <Content>
    <p>
      At Mirego, we build a huge majority of our products using open source
      technologies (eg. <a href="https://emberjs.com/">Ember.js</a>,{' '}
      <a href="https://reactjs.org/">React</a>,{' '}
      <a href="https://elixir-lang.org/">Elixir</a>,{' '}
      <a href="https://rubyonrails.org/">Ruby on Rails</a>, etc.) maintained by
      stable, mature and active communities.
    </p>
    <p>
      It’s very important for us to give back to these communities by either
      contributing directly to their projects or by providing libraries and
      tools that add value to their respective ecosystem.
    </p>
  </Content>
);
