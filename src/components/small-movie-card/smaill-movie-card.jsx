import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const SmallFilmCard = (props) => {
  const {id, preview, title, onFilmCardHover} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onFilmCardHover(id)}
      onMouseLeave={() => onFilmCardHover(null)}
    >
      <Link className="small-movie-card__link" to={`films/${id}`}>
        <VideoPlayer
          id = {id}
          preview = {preview}
          title = {title}
        />
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
  onFilmCardHover: PropTypes.func.isRequired,
};

export default SmallFilmCard;
