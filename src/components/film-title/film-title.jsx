import React from "react";
import PropTypes from "prop-types";
import FilmButtons from "../film-buttons/film-buttons";

const FilmTitle = (props) => {

  const {year, genre, title, id} = props;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>
      <FilmButtons
        id = {id}
      />
    </div>
  );
};

FilmTitle.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmTitle;
