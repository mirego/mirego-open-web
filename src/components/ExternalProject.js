import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  border: 0;
  margin: 0 20px 30px 0;
  text-decoration: none;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const Image = styled.img`
  height: 50px;

  @media (prefers-color-scheme: dark) {
    opacity: 0.75;
    filter: grayscale(1) invert(1);
  }
`;

export default ({url, logo, name}) => (
  <Link href={url} target="_blank" rel="noopener">
    <Image src={require(`../images/${logo}`)} alt={name} />
  </Link>
);
