import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import './index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <div className="index-page">
        <Helmet title={`Fyodor Loenko Home`} />
        <div className="index-page__content">
          <div className="index-page__content-header">Hello, I'm Ted (Fyodor) Loenko</div>
          <div className="index-page__content-tagline">I'm successfully solving Front End Web Development problems with a wide range of frontend technologies, specialized primarily in Angular ecosystem</div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage