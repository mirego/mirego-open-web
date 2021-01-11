import React from 'react';
import Helmet from 'react-helmet';
import {useSiteMetadata} from '../utils/use-site-metadata';

import Favicon from '../images/favicon.png';
import OpenGraphImage from '../images/social.png';

import 'simple-css-reset/reset.css';
import '../styles/global.css';

/* eslint-disable jsx-a11y/accessible-emoji */
export default function Layout({children, variant}) {
  const {title, description, siteUrl} = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="shortcut icon" type="image/png" href={Favicon} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteUrl + OpenGraphImage} />
        <meta property="og:image:width" content="1782" />
        <meta property="og:image:height" content="912" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mirego" />
        <meta name="twitter:creator" content="@mirego" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700"
        />
      </Helmet>

      <main>{children}</main>
    </>
  );
}
