import React from 'react';
import styled from '@emotion/styled';

import ExternalProject from './ExternalProject.js';

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 200px;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 3px;
  margin: 0 auto 50px;
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
