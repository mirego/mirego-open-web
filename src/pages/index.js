import {graphql} from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Header from '../components/Header';
import Title from '../components/Title';
import Projects from '../components/Projects';
import ExternalProjects from '../components/ExternalProjects';
import Outro from '../components/Outro';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';

export default ({data}) => (
  <Layout>
    <Wrapper>
      <Header />

      <Intro />

      <Title title="Giving back to the community">
        <p>These are the open source projects we actively develop, maintain and support.</p>
      </Title>

      <Projects projects={[...data.featuredProjects.edges, ...data.otherProjects.edges]} />

      <Title title="“Standing on the shoulders of giants">
        <p>We leverage several open source projects to build world-class products.</p>
      </Title>

      <ExternalProjects projects={data.externalProjects.edges} />

      <Title title="But wait, there’s more">
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
    featuredProjects: allProject(filter: {featured: {gte: 0}}, sort: {fields: [starCount, name], order: DESC}) {
      edges {
        node {
          ...projectData
        }
      }
    }
    otherProjects: allProject(filter: {featured: {eq: null}}, sort: {fields: [starCount, name], order: DESC}) {
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
