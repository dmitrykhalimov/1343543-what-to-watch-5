import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block";
import Logo from "../logo/logo";

const FilmHeader = (props) => {

  const {background, title} = props;
  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={background} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>
        <UserBlock/>
      </header>
    </React.Fragment>
  );
};

FilmHeader.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmHeader;
