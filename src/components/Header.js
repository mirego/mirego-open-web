import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 70px;
  text-align: center;
  font-family: 'Almirego Display', sans-serif;
  font-size: 32px;
  line-height: 1;

  @media (max-width: 720px) {
    & {
      flex-direction: column;
    }
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
`;

const Logo = styled.span`
  fill: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      fill: #f7edde;
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
  padding: 8px 16px;
  margin: 0 0 0 8px;
  border: 2px solid;
  border-radius: 24px;
  color: #050307;

  @media (prefers-color-scheme: dark) {
    & {
      color: #f7edde;
    }
  }
`;

export default () => (
  <Header>
    <Link href="/">
      <Logo>
        <svg width="130" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M129.325 11.744c0-7.026-4.701-11.727-11.727-11.727-7.06 0-11.761 4.701-11.761 11.727 0 7.095 4.701 11.83 11.761 11.83 7.009-.017 11.727-4.752 11.727-11.83zm-11.744-6.957c-4.086 0-6.804 2.803-6.804 6.957 0 4.223 2.718 7.044 6.804 7.044 4.052 0 6.77-2.821 6.77-7.044 0-4.17-2.701-6.957-6.77-6.957zM93.083 11.06h10.531v11.932h-4.12v-2.29a.375.375 0 00-.684-.223c-1.025 1.59-3.487 3.146-6.462 3.146-6.41 0-11.265-4.599-11.265-11.813S85.733 0 92.707 0c4.684 0 8.668 3.026 10.035 7.556h-4.957c-.77-1.658-2.718-2.735-5.129-2.735-3.983 0-6.633 2.667-6.633 6.975 0 4.752 3.095 6.975 6.12 6.975 2.701 0 4.838-1.573 5.761-3.522H93.05v-4.188h.034zM67.082 4.616h12.582V.29H62.056v22.702h17.608v-4.325H67.082v-5.111h11.47V9.043h-11.47V4.616zM54.534 12.94a.42.42 0 00.308.393c2.495.564 3.914 2.291 3.914 4.035v5.624h-4.992v-5.111c0-1.522-1.487-2.65-3.726-2.65h-5.214v7.761h-4.992V.291h11.864c4.616 0 7.659 2.632 7.659 6.615 0 2.599-1.88 4.838-4.53 5.642a.427.427 0 00-.291.393zm-9.693-8.36v5.881h6.222c1.83 0 3.3-1.333 3.3-2.889 0-1.555-1.47-2.991-3.624-2.991H44.84zM31.318.292v22.702h4.975V.291H31.32zm-3.59 0h-9.83l-3.64 18.086a.37.37 0 01-.377.308.386.386 0 01-.376-.308L9.864.291H0v22.702h4.992V5.043c0-.205.17-.393.393-.393a.37.37 0 01.376.308L9.54 22.993h8.65l3.778-18.035a.386.386 0 01.377-.308c.205 0 .393.17.393.393v17.95h4.992V.291z"
          />
        </svg>
      </Logo>
      <Symbol>
        <span role="img" aria-label="Heart">
          ❤️
        </span>
      </Symbol>
      <Term>open source</Term>
    </Link>
  </Header>
);
