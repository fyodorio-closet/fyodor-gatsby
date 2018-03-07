import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const AboutPage = () => (
  <div>
    <Helmet title={`About - My Days Of Code`} />
    <h1>Who Am I?</h1>
    <p>My name is Fyodor. I'm a JavaScript Developer.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
