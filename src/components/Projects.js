import React from 'react';
import styled from '@emotion/styled';

import Project from './Project';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px 80px;

  @media (max-width: 810px) {
    & {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default ({projects}) => (
  <Content>
    {projects.map((project) => (
      <Project {...project.node} />
    ))}
  </Content>
);
