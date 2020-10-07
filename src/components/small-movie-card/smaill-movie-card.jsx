import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallFilmCard = (props) => {
  const {id, preview, title, handleHover} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(null)}
    >
      <Link className="small-movie-card__link" to={`films/${id}`}>
        <div className="small-movie-card__image">
          <img src={`img/${preview}`} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{title}</span>
        </h3>
      </Link>
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
