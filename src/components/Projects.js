import React from 'react';
import styled from '@emotion/styled';

import Project from './Project';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

export default ({projects}) => (
  <Content>
    {projects.map((project) => (
      <Project key={project.jd} {...project.node} />
    ))}
  </Content>
);
