import React from 'react';
import styled from '@emotion/styled';

import ExternalProject from './ExternalProject.js';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 3px;
  margin: 0 0 50px;
`;

export default ({projects}) => (
  <Content>
    <ContentWrapper>
      {projects.map((project) => (
        <ExternalProject key={project.id} {...project.node} />
      ))}
    </ContentWrapper>
  </Content>
);
