import React from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-film-card/small-film-card";

// не предусмотрена кнопка Load More

const FilmsList = (props) => {
  const {films, maxQuantity} = props;
  return (
    <div className="catalog__movies-list">
      {films
          .slice(0, Math.min(films.length, maxQuantity))
          .map((film) => {
            return <SmallFilmCard key = {film.id} preview = {`${film.preview}`} title = {film.title} id = {film.id} src = {film.video}/>;
          })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  maxQuantity: PropTypes.number.isRequired,
};

export default FilmsList;
