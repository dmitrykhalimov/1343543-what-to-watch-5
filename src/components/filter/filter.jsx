import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {genres, onFilterSelect} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={index} className="catalog__genres-item catalog__genres-item--active" onClick={() => onFilterSelect(genre)}>
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
