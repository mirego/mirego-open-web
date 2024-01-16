import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  width: calc(25% - 10px);
  border: 0;
  border-radius: 26px;
  background: #f7edde;
  margin: 0 5px 10px;
  text-decoration: none;
  font-weight: normal;
  transition: background 0.1s ease-in;

  @media (max-width: 980px) {
    & {
      width: calc(33.3333% - 10px);
    }
  }

  @media (max-width: 720px) {
    & {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 600px) {
    & {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    & {
      background: transparent;
      border: 1px solid #f7edde;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 32px 32px 32px;
`;

const Image = styled.img`
  display: block;
  height: 70px;
`;

const Content = styled.div`
  padding: 16px 32px 40px;
`;

const Name = styled.strong`
  display: block;
  padding: 0 32px 8px;
  font-family: 'Almirego Display', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #050307;
  word-wrap: wrap;

  @media (max-width: 720px) {
    & {
      word-wrap: break-word;
    }
  }

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

const Metadata = styled.span`
  display: block;
  padding: 0 32px 0;
  color: #050307;
  font-size: 14px;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

const Description = styled.span`
  display: block;
  padding: 6px 0 12px;
  font-size: 15px;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

const Tags = styled.em`
  display: block;
  padding: 8px 0 0;
  font-size: 12px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.75);

  @media (prefers-color-scheme: dark) {
    & {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const Pill = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  padding: 1px 8px;
  border: 1px solid #050307;
  border-radius: 12px;

  @media (prefers-color-scheme: dark) {
    & {
      border-color: #f7edde;
    }
  }
`;

export default ({slug, name, logo, description, starCount, createdAt, tags}) => (
  <Link href={`https://github.com/mirego/${slug}`} target="_blank" rel="noopener">
    <ImageWrapper>
      <Image src={require(`../images/${logo}`)} alt={name} />
    </ImageWrapper>

    <Name>{name}</Name>
    <Metadata>
      <Pill>★ {starCount}</Pill>
      <Pill>since {createdAt}</Pill>
    </Metadata>
    <Content>
      <Description>{description}</Description>
      <Tags>{tags.map((tag) => `#${tag}`).join(' ')}</Tags>
    </Content>
  </Link>
);
