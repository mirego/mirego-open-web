import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  border: 0;
  margin: 0 20px 30px;
  text-decoration: none;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  height: 50px;
  opacity: 0.75;
  filter: saturate(0.75);
`;

export default ({url, logo, name}) => (
  <Link href={url} target="_blank" rel="noopener">
    <ImageWrapper>
      <Image src={require(`../images/${logo}`)} alt={name} />
    </ImageWrapper>
  </Link>
);
