import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTE from 'constants/routes';

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={ROUTE.INDEX} className="navbar-brand">
          {title}
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <NavLink to={ROUTE.INDEX} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTE.EDITOR} className="nav-link">
              <i className="ion-compose" />
              &nbsp;New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTE.SETTING} className="nav-link">
              <i className="ion-gear-a" />
              &nbsp;Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTE.SIGN_UP} className="nav-link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
