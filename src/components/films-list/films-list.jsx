import React from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-film-card/small-film-card";
import {validFilm} from "../../utils/props";

// не предусмотрена кнопка Load More

const FilmsList = (props) => {
  let {films, maxQuantity} = props;
  return (
    <div className="catalog__movies-list">
      {films
          .slice(0, Math.min(films.length, maxQuantity))
          .map((film, index) => {
            return <SmallFilmCard
              key = {film.id + index}
              preview = {`${film.preview}`}
              title = {film.title}
              id = {film.id}
              src = {film.video}/>;
          })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(validFilm),
  maxQuantity: PropTypes.number.isRequired,
};

export default FilmsList;
