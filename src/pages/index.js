import {graphql} from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Header from '../components/Header';
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

      <Subtitle title="Giving back to the community<span class='punctuation'>.</span>">
        <p>These are the open source projects we actively develop, maintain and support.</p>
      </Subtitle>

      <Projects projects={data.allProject.edges} />

      <Subtitle title="“Standing on the shoulders of giants<span class='punctuation'>.</span>”">
        <p>We leverage several open source projects to build world-class products.</p>
      </Subtitle>

      <ExternalProjects projects={data.allExternalProject.edges} />

      <Subtitle title="But wait, there’s more<span class='punctuation'>.</span>">
        <Outro />
      </Subtitle>

      <Footer />
    </Wrapper>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allProject(sort: {fields: [starCount, name], order: DESC}) {
      edges {
        node {
          description
          id
          logo
          name
          slug
          starCount
          createdAt(formatString: "YYYY")
          tags
        }
      }
    }
    allExternalProject {
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
