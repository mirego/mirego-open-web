import {graphql} from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Header from '../components/Header';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Projects from '../components/Projects';
import ExternalProjects from '../components/ExternalProjects';
import Outro from '../components/Outro';
import Footer from '../components/Footer';
import Gem from '../components/Gem';
import Wrapper from '../components/Wrapper';

export default ({data}) => (
  <Layout>
    <Gem />

    <Wrapper>
      <Header />

      <Intro />

      <Title title="Giving back to the community<span class='punctuation'>.</span>">
        <p>These are the open source projects we actively develop, maintain and support.</p>
      </Title>

      <Subtitle>✨ Featured projects ✨</Subtitle>
      <Projects projects={data.featuredProjects.edges} />

      <Subtitle>Other projects</Subtitle>
      <Projects projects={data.otherProjects.edges} />

      <Title title="“Standing on the shoulders of giants<span class='punctuation'>.</span>”">
        <p>We leverage several open source projects to build world-class products.</p>
      </Title>

      <ExternalProjects projects={data.externalProjects.edges} />

      <Title title="But wait, there’s more<span class='punctuation'>.</span>">
        <Outro />
      </Title>

      <Footer />
    </Wrapper>
  </Layout>
);

export const pageQuery = graphql`
  fragment projectData on Project {
    description
    id
    logo
    name
    slug
    starCount
    createdAt(formatString: "YYYY")
    tags
  }

  query IndexQuery {
    featuredProjects: allProject(filter: {featured: {eq: true}}, sort: {fields: [starCount, name], order: DESC}) {
      edges {
        node {
          ...projectData
        }
      }
    }
    otherProjects: allProject(filter: {featured: {eq: false}}, sort: {fields: [starCount, name], order: DESC}) {
      edges {
        node {
          ...projectData
        }
      }
    }
    externalProjects: allExternalProject {
      edges {
        node {
          id
          logo
          name
          url
        }
      }
    }
  }
`;
