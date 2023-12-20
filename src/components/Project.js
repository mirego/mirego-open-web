import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  width: calc(25% - 10px);
  border: 0;
  border-radius: 26px;
  background: #050307;
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
  color: #f7edde;
  word-wrap: wrap;

  @media (max-width: 720px) {
    & {
      word-wrap: break-word;
    }
  }
`;

const Metadata = styled.span`
  display: block;
  padding: 0 32px 0;
  color: #f7edde;
  font-size: 14px;
`;

const Description = styled.span`
  display: block;
  padding: 6px 0 12px;
  font-size: 15px;
  color: rgba(247, 237, 222, 1);
`;

const Tags = styled.em`
  display: block;
  padding: 8px 0 0;
  font-size: 12px;
  font-style: normal;
  color: rgba(247, 237, 222, 0.75);
`;

export default ({slug, name, logo, description, starCount, createdAt, tags}) => (
  <Link href={`https://github.com/mirego/${slug}`} target="_blank" rel="noopener">
    <ImageWrapper>
      <Image src={require(`../images/${logo}`)} alt={name} />
    </ImageWrapper>

    <Name>{name}</Name>
    <Metadata>
      ★ {starCount}  •  since {createdAt}
    </Metadata>
    <Content>
      <Description>{description}</Description>
      <Tags>{tags.map((tag) => `#${tag}`).join(' ')}</Tags>
    </Content>
  </Link>
);
