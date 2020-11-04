import React from "react";
import PropTypes from "prop-types";

const FilmPoster = (props) => {
  const {poster, title} = props;

  return (
    <div className="movie-card__poster">
      <img src={poster} alt={title} width="218" height="327" />
    </div>
  );
};

FilmPoster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmPoster;
