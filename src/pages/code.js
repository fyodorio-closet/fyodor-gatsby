import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const CodePage = () => (
  <div>
    <Helmet title={`Code - My Days Of Code`} />
    <h1>My Code Portfolio</h1>
    <p>You can find the examples of my work here.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default CodePage