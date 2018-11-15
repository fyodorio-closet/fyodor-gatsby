import React from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faCodepen, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';

import './connect.scss';

const iconSize = '2x';

const ConnectPage = () => (
  <Layout>
    <div>
      <Helmet title={`Fyodor Loenko - Connect`} />
      <h1>Let's Get In Touch</h1>
      <ul className="accounts">
        <li className="account">
          <a className="account-link" target="_blank" rel="noopener noreferrer" href="mailto:fyodor.loenko@mailhero.io">
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          </a>
          <div className="account-name">fyodor.loenko@mailhero.io</div>
        </li>
        <li className="account">
          <a className="account-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/fyodorio">
            <FontAwesomeIcon icon={faTwitter} size={iconSize} />
          </a>
          <div className="account-name">@fyodorio</div>
        </li>
        <li className="account">
          <a className="account-link" target="_blank" rel="noopener noreferrer" href="https://github.com/loenko">
            <FontAwesomeIcon icon={faGithub} size={iconSize} />
          </a>
          <div className="account-name">@loenko</div>
        </li>
        <li className="account">
          <a className="account-link" target="_blank" rel="noopener noreferrer" href="https://codepen.io/loenko/">
            <FontAwesomeIcon icon={faCodepen} size={iconSize} />
          </a>
          <div className="account-name">@loenko</div>
        </li>
        <li className="account">
          <a className="account-link" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/6778546/fyodor">
            <FontAwesomeIcon icon={faStackOverflow} size={iconSize} />
          </a>
          <div className="account-name">@6778546</div>
        </li>
      </ul>
      <br />
    </div>
  </Layout>
);

export default ConnectPage
