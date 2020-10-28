import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";


const SmallFilmCard = (props) => {
  const {id, preview, title, src} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
    >
      <Link className="small-movie-card__link" to={`../films/${id}`} >
        <VideoPlayer
          id = {id}
          preview = {preview}
          title = {title}
          src = {src}
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
  src: PropTypes.string.isRequired,
};

export default SmallFilmCard;
