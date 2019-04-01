import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  width: calc(33.3333% - 10px);
  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 3px;
  margin: 0 5px 10px;
  background: rgba(0, 0, 0, 0.025);
  text-decoration: none;
  font-weight: normal;
  transition: background 0.1s ease-in;

  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }

  @media (max-width: 980px) {
    & {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 810px) {
    & {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-radius: 3px;
  margin: 0 0 5px;
  background: #fff;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  height: 60px;
`;

const Content = styled.div`
  padding: 14px 20px;
`;

const Name = styled.strong`
  display: block;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);

  @media (max-width: 720px) {
    & {
      word-wrap: break-word;
    }
  }
`;

const Description = styled.span`
  display: block;
  padding: 6px 0 0;
  color: rgba(0, 0, 0, 0.75);
`;

const Tags = styled.em`
  display: block;
  padding: 8px 0 0;
  font-size: 12px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.3);
`;

export default ({url, name, logo, description, tags}) => (
  <Link href={url} target="_blank">
    <ImageWrapper>
      <Image src={logo} alt={name} />
    </ImageWrapper>

    <Content>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Tags>{tags}</Tags>
    </Content>
  </Link>
);
