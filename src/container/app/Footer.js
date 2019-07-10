import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTE from 'constants/routes';

const Footer = ({ title }) => {
  return (
    <footer>
      <div className="container">
        <Link to={ROUTE.INDEX} className="logo-font">
          {title}
        </Link>
        <span className="attribution">
          An interactive learning project from&nbsp;
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
