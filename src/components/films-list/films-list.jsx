import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/smaill-movie-card";

const FilmsList = (props) => {
  const {films} = props;
  console.log(films);
  const elements = []
  for (let i = 0; i < 5; i++) {
    elements.push(<SmallMovieCard key = {films[i].id} preview = {films[i].preview} title = {films[i].title} />)
  }

  return (
    <div className="catalog__movies-list">
      {elements}
    </div>
  );
};

export default FilmsList;
