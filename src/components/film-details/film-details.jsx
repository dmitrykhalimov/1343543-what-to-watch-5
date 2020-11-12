import React from "react";
import {translateMinutesToText} from "../../utils/common";
import {validFilm} from "../../utils/props";

const FilmDetails = (props) => {
  const {film} = props;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.cast
                .split(`,`)
                .map((item, index, array) => {
                  return (
                    <React.Fragment key={index}>
                      {`${item}${index !== array.length - 1 ? `,` : ``}`}
                      <br />
                    </React.Fragment>
                  );
                })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{translateMinutesToText(film.duration)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.year}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = {
  film: validFilm,
};

export default FilmDetails;


