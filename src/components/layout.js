import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import './layout.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="My Days Of Code"
      meta={[
        { name: 'description', content: 'My Days Of Code Blog' },
        { name: 'keywords', content: 'javascript, react' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
