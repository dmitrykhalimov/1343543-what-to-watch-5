import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {genres, activeGenre, onFilterSelect} = props;
  console.log(activeGenre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li
            key={index}
            className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            onClick={() => onFilterSelect(genre)}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>);
      })}
    </ul>
  );
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Filter;
