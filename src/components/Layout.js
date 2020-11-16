import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Favicon from '../images/favicon.png';

import 'simple-css-reset/reset.css';
import '../styles/global.css';

const Layout = ({children}) => (
  <>
    <Helmet>
      <title>Open source — Mirego</title>
      <meta
        name="description"
        content="At Mirego, we build a huge majority of our products using open source technologies maintained by stable, mature and active communities. It’s very important for us to give back to these communities by either contributing directly to their projects or by providing libraries and tools inside their respective ecosystem."
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700"
      />
      <link rel="shortcut icon" type="image/png" href={Favicon} />
    </Helmet>

    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
