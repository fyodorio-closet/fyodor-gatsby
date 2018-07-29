import React from 'react';
import Helmet from 'react-helmet';
/* react-fontawesome documentation is at 
https://github.com/FortAwesome/react-fontawesome */
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'; 
import { faTelegramPlane, faTwitter, faCodepen, faGithub, faStackOverflow } from '@fortawesome/fontawesome-free-brands';

import './connect.scss';

const iconSize = '2x';

const ConnectPage = () => (
  <div>
    <Helmet title={`Connect - My Days Of Code`} />
    <h1>Let's Get In Touch</h1>
    <ul className="accounts">
      <li className="account">
        <a target="_blank" href="mailto:fyodor.loenko@mailhero.io">
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
        </a>
        <div className="account-name">fyodor.loenko@mailhero.io</div>
      </li>
      <li className="account">
        <a target="_blank" href="https://t.me/loenko">
          <FontAwesomeIcon icon={faTelegramPlane} size={iconSize} />
        </a>
        <div className="account-name">@loenko</div>
      </li>
      <li className="account">
        <a target="_blank" href="https://twitter.com/fyodorio">
          <FontAwesomeIcon icon={faTwitter} size={iconSize} />
        </a>
        <div className="account-name">@fyodorio</div>
      </li>
      <li className="account">
        <a target="_blank" href="https://github.com/loenko">
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
        </a>
        <div className="account-name">@loenko</div>
      </li>
      <li className="account">
        <a target="_blank" href="https://codepen.io/loenko/">
          <FontAwesomeIcon icon={faCodepen} size={iconSize} />
        </a>
        <div className="account-name">@loenko</div>
      </li>
      <li className="account">
        <a target="_blank" href="https://stackoverflow.com/users/6778546/fyodor-loenko">
          <FontAwesomeIcon icon={faStackOverflow} size={iconSize} />
        </a>
        <div className="account-name">@6778546</div>
      </li>
    </ul>
    <br />
  </div>
)

export default ConnectPage
