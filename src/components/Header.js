import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 70px;
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  line-height: 1;

  @media (max-width: 720px) {
    & {
      flex-direction: column;
    }
  }
`;

const Logo = styled.span`
  color: #1c1c1c;

  @media (prefers-color-scheme: dark) {
    & {
      color: #eee;
    }
  }
`;

const Symbol = styled.span`
  display: block;
  padding: 8px 0 0;
  margin: -8px 0.5em 0 0.6em;
  animation: 0.5s zoom-out;

  @media (max-width: 720px) {
    & {
      margin: 0.8em 0;
    }
  }
`;

const Term = styled.span`
  display: block;
  color: #1c1c1c;

  @media (prefers-color-scheme: dark) {
    & {
      color: #eee;
    }
  }
`;

export default () => (
  <Header>
    <Logo>
      <svg width="152" height="27" viewBox="0 0 152 27" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M138.48 21c-4.097 0-7.48-3.375-7.48-7.463C131 9.413 134.383 6 138.48 6c4.136 0 7.52 3.413 7.52 7.537 0 4.088-3.384 7.463-7.52 7.463m0-21C130.972 0 125 6.038 125 13.538 125 21.037 130.971 27 138.48 27c7.512 0 13.52-5.963 13.52-13.462C152 6.038 145.992 0 138.48 0m-19.192 13.124h-7.516a.69.69 0 0 0-.71.715v3.722c0 .376.299.677.71.677h2.357v2.18c-1.122.453-2.244.602-3.33.602-4.076 0-7.404-3.384-7.404-7.483 0-4.135 3.292-7.596 7.368-7.596 1.832 0 3.478.49 4.899 1.806a.79.79 0 0 0 1.01-.038l2.954-3.159c.3-.3.263-.753-.074-1.015C117.009 1.316 113.567 0 110.426 0 102.984 0 97 6.017 97 13.537 97 21.057 102.984 27 110.426 27c5.423 0 9.275-2.444 9.275-2.444.15-.114.299-.415.299-.602l-.038-10.115c0-.376-.299-.715-.674-.715M92.284 1h-15.57a.71.71 0 0 0-.714.705v24.59c0 .37.3.705.714.705h15.57a.71.71 0 0 0 .716-.705v-4.049c0-.374-.3-.705-.716-.705H81.867v-5.015h8.576c.375 0 .713-.3.713-.707V11.77c0-.371-.338-.706-.713-.706h-8.576V6.46h10.417A.71.71 0 0 0 93 5.754V1.705A.71.71 0 0 0 92.284 1M61.286 12H56V6h5.286C62.75 6 64 7.307 64 8.922 64 10.54 62.75 12 61.286 12M70 9.023C70 4.603 66.343 1 61.866 1H50.709a.707.707 0 0 0-.709.705v24.59c0 .37.299.705.709.705h4.44a.733.733 0 0 0 .71-.705V16.82h2.574l4.963 9.844a.689.689 0 0 0 .597.335h4.962c.634 0 .895-.595.634-1.077l-5.111-9.436C67.724 15.187 70 12.44 70 9.023M41.279 1H36.72c-.379 0-.721.334-.721.705v24.59c0 .37.342.705.721.705h4.558c.379 0 .721-.335.721-.705V1.705c0-.37-.342-.705-.721-.705m-17.07-1h-.585c-.182 0-.51.149-.62.375l-8.467 16.2h-.073L5.996.374C5.886.149 5.558 0 5.376 0h-.584a.704.704 0 0 0-.657.6L.01 25.798c-.073.489.256.827.694.827h4.307c.365 0 .657-.3.694-.601L7.31 14.437h.073l6.168 12.151c.11.224.402.412.62.412h.658c.182 0 .51-.188.62-.412l6.132-12.15h.073l1.642 11.587c.037.3.365.6.693.6h4.307c.438 0 .767-.337.694-.826L24.865.599A.704.704 0 0 0 24.208 0"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
    </Logo>
    <Symbol>
      <span role="img" aria-label="Heart">
        ❤️
      </span>
    </Symbol>
    <Term>open source</Term>
  </Header>
);
