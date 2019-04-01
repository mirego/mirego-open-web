import React from 'react';
import styled from '@emotion/styled';

import ExternalProject from './ExternalProject.js';

import EmberLogo from '../images/emberjs.png';
import ReactLogo from '../images/react.png';
import ElixirLogo from '../images/elixir.png';
import RailsLogo from '../images/rails.png';
import SwiftLogo from '../images/swift.png';
import KotlinLogo from '../images/kotlin.png';
import DockerLogo from '../images/docker.png';
import GraphQLLogo from '../images/graphql.svg';

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 40px;

  @media (max-width: 980px) {
    & {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 3px;
  margin: 0 auto 40px;

  @media (max-width: 980px) {
    & {
      flex-direction: column;
      background: transparent;
    }
  }
`;

export default () => (
  <Content>
    <ContentWrapper>
      <ExternalProject
        url="https://emberjs.com"
        logo={EmberLogo}
        name="Ember.js"
      />

      <ExternalProject
        url="https://reactjs.org"
        logo={ReactLogo}
        name="React"
      />

      <ExternalProject
        url="https://elixir-lang.org"
        logo={ElixirLogo}
        name="Elixir"
      />

      <ExternalProject
        url="https://graphql.org"
        logo={GraphQLLogo}
        name="GraphQL"
      />

      <ExternalProject
        url="https://rubyonrails.org"
        logo={RailsLogo}
        name="Ruby on Rails"
      />

      <ExternalProject url="https://swift.org" logo={SwiftLogo} name="Swift" />

      <ExternalProject
        url="https://kotlinlang.org/"
        logo={KotlinLogo}
        name="Kotlin"
      />

      <ExternalProject
        url="https://www.docker.com/"
        logo={DockerLogo}
        name="Docker"
      />
    </ContentWrapper>
  </Content>
);
