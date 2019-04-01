import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  border: 0;
  margin: 0 20px;
  text-decoration: none;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 980px) {
    & {
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      margin-left: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  height: 50px;

  @media (max-width: 980px) {
    & {
      height: 100px;
    }
  }
`;

export default ({url, logo, name}) => (
  <Link href={url} target="_blank">
    <ImageWrapper>
      <Image src={logo} alt={name} />
    </ImageWrapper>
  </Link>
);
