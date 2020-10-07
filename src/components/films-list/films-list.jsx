import React from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-movie-card/smaill-movie-card";

// не предусмотрена кнопка Load More
const MAX_FILMS_QUANTITY = 8;

const FilmsList = (props) => {
  const {films} = props;
  const elements = [];
  for (let i = 0; i < MAX_FILMS_QUANTITY; i++) {
    elements.push(<SmallFilmCard key = {films[i].id} preview = {films[i].preview} title = {films[i].title} id = {films[i].id}/>);
  }

  return (
    <div className="catalog__movies-list">
      {elements}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default FilmsList;
