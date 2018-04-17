import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/library" activeClassName="active">Library</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={10} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
