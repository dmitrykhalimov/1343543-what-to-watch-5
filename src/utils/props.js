
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

export const validComment = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
}).isRequired;


export const validReview = PropTypes.shape({
  filmId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(validComment).isRequired,
}).isRequired;


export const validRef = PropTypes.oneOfType([
  PropTypes.shape({current: PropTypes.instanceOf(Element)})
]);

export const validUserData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

