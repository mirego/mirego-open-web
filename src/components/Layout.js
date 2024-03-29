import React from 'react';
import Helmet from 'react-helmet';
import {useSiteMetadata} from '../utils/use-site-metadata';

import Favicon from '../images/favicon.svg';
import OpenGraphImage from '../images/social-pulse.png';

/* eslint-disable jsx-a11y/accessible-emoji */
export default function Layout({children, variant}) {
  const {title, description, siteUrl} = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="shortcut icon" type="image/svg+xml" href={Favicon} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteUrl + OpenGraphImage} />
        <meta property="og:image:width" content="1782" />
        <meta property="og:image:height" content="912" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mirego" />
        <meta name="twitter:creator" content="@mirego" />

        {process.env.GATSBY_ONETRUST_SITE_ID && (
          <script
            src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script={process.env.GATSBY_ONETRUST_SITE_ID}
          ></script>
        )}

        {process.env.GATSBY_ONETRUST_SITE_ID && <script type="text/javascript">function OptanonWrapper() {}</script>}
      </Helmet>

      <main>{children}</main>
    </>
  );
}
