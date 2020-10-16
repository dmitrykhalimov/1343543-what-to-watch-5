import React from "react";
import PropTypes from "prop-types";

const FilmOverview = (props) => {
  // eslint-disable-next-line
  const {rankNumber, rankText, votes, description, director, cast} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rankNumber}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rankText}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description.map((paragraph, index) => {
          return <p key = {index}>{paragraph}</p>;
        })}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {cast}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FilmOverview;


