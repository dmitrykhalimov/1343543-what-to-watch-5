import React from "react";
import PropTypes from "prop-types";

const SmallFilmCard = (props) => {
  const {id, preview, title, handleHover} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(null)}
    >
      <div className="small-movie-card__image">
        <img src={`img/${preview}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`/films/${id}`}>{title}</a>
      </h3>
    </article>

  );
};

SmallFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export default SmallFilmCard;
