import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppPath} from "../../const";

const Logo = (props) => {

  const {isLight = false} = props;

  return (
    <div className="logo">
      <Link to={AppPath.index} className={`${isLight ? `logo__link logo__link--light` : `logo__link`}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool,
};

export default Logo;
