
import PropTypes from "prop-types";

export const validFilm = PropTypes.shape({
  background: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired),
  director: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  rankNumber: PropTypes.number.isRequired,
  rankText: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
}).isRequired;

export const validReview = PropTypes.shape({
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  })).isRequired,
}).isRequired;
