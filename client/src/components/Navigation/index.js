import React from 'react'
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const Navigation = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={ routes.HOME }>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={ routes.LOGIN }>Login</Link>
          </li>
          <li>
            <Link to={ routes.REGISTER }>Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
