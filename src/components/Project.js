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

  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }

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
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 16px;
  border-radius: 3px;
  background: #fff;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  height: 60px;
  animation: 0.5s zoom-in;
  transition: transform 0.1s ease-in;

  a:hover & {
    transform: scale3d(1.075, 1.075, 1.075);
  }
`;

const Content = styled.div`
  padding: 14px 20px;
`;

const Name = styled.strong`
  display: block;
  padding: 0 0 4px;
  background: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
  word-wrap: wrap;

  @media (max-width: 720px) {
    & {
      word-wrap: break-word;
    }
  }
`;

const Metadata = styled.span`
  display: block;
  background: #fff;
  padding: 0 0 14px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  text-align: center;
`;

const Description = styled.span`
  display: block;
  padding: 6px 0 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.75);
`;

const Tags = styled.em`
  display: block;
  padding: 8px 0 0;
  font-size: 12px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.4);
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
