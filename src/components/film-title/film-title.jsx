import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ButtonPlay from "../button-play/button-play";

const FilmTitle = (props) => {

  const {year, genre, title} = props;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        {/* TODO: Перерисовывается кнопка воспроизвести фильм, придумать чего делать с этим. И вообще неплохо было бы изменить на компонент Button*/}
        <Link className="btn btn--play movie-card__button" type="button" to={`/films/1`}>
          <ButtonPlay/>
        </Link>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
      </div>
    </div>
  );
};

FilmTitle.propTypes = {
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmTitle;
