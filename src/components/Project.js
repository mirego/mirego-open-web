import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  display: block;
  width: calc(25% - 10px);
  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 3px;
  margin: 0 5px 10px;
  background: rgba(0, 0, 0, 0.025);
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
      background: rgba(255, 255, 255, 0.02);
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 16px;
  border-radius: 3px;
  background: #fff;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    & {
      background: rgba(255, 255, 255, 0.02);
    }
  }
`;

const Image = styled.img`
  display: block;
  height: 60px;
  animation: 0.5s zoom-in;
  transition: transform 0.1s ease-in;

  @media (prefers-color-scheme: dark) {
    opacity: 0.75;
    filter: saturate(0.75);
  }

  a:hover & {
    transform: scale3d(1.075, 1.075, 1.075);
  }
`;

const Content = styled.div`
  padding: 14px 20px;
`;

const Name = styled.strong`
  display: block;
  padding: 0 10px 8px;
  background: #fff;
  text-align: center;
  font-family: 'Almirego Display', sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.1;
  color: rgba(0, 0, 0, 0.75);
  word-wrap: wrap;

  @media (max-width: 720px) {
    & {
      word-wrap: break-word;
    }
  }

  @media (prefers-color-scheme: dark) {
    & {
      background: rgba(255, 255, 255, 0.02);
      color: #bbb;
    }
  }
`;

const Metadata = styled.span`
  display: block;
  background: #fff;
  padding: 0 0 14px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    & {
      background: rgba(255, 255, 255, 0.02);
      color: #999;
    }
  }
`;

const Description = styled.span`
  display: block;
  padding: 6px 0 0;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.75);

  @media (prefers-color-scheme: dark) {
    & {
      color: #aaa;
    }
  }
`;

const Tags = styled.em`
  display: block;
  padding: 8px 0 0;
  font-size: 11px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.4);

  @media (prefers-color-scheme: dark) {
    & {
      color: #777;
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
      ★ {starCount}  •  since {createdAt}
    </Metadata>
    <Content>
      <Description>{description}</Description>
      <Tags>{tags.map((tag) => `#${tag}`).join(' ')}</Tags>
    </Content>
  </Link>
);
