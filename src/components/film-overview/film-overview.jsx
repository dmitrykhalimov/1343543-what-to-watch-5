import React from "react";
import {validFilm} from "../../utils/props";

const FilmOverview = (props) => {
  const {film} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rankNumber}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{film.rankText}</span>
          <span className="movie-rating__count">{film.votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.description.map((paragraph, index) => {
          return <p key = {index}>{paragraph}</p>;
        })}

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.cast}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  film: validFilm,
};

export default FilmOverview;


