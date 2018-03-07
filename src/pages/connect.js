import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const ConnectPage = () => (
  <div>
    <Helmet title={`Connect - My Days Of Code`} />
    <h1>Let's Get In Touch</h1>
    <p>You can find my contacts and social accounts here.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ConnectPage
