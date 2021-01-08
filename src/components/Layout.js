import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Favicon from '../images/favicon.png';
import OpenGraphImage from '../images/social.png';

import 'simple-css-reset/reset.css';
import '../styles/global.css';

/* eslint-disable jsx-a11y/accessible-emoji */
const Layout = ({children}) => (
  <>
    <Helmet>
      <title>Mirego ❤️ Open source</title>
      <meta
        name="description"
        content="At Mirego, we build a huge majority of our products using open source technologies maintained by stable, mature and active communities. It’s very important for us to give back to these communities by either contributing directly to their projects or by providing libraries and tools inside their respective ecosystem."
      />

      <link rel="shortcut icon" type="image/png" href={Favicon} />

      <meta property="og:title" content="Mirego ❤️ Open source" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OpenGraphImage} />
      <meta property="og:image:width" content="1782" />
      <meta property="og:image:height" content="912" />

      <meta name="twitter:card" content="summary" />
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
/* eslint-enable jsx-a11y/accessible-emoji */

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
