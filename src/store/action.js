export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_RENDERED: `INCREMENT_RENDERED`,
  RESET_RENDERED: `RESET_RENDERED`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const incrementRendered = (increment) => ({
  type: ActionType.INCREMENT_RENDERED,
  payload: increment,
});

export const resetRendered = () => ({
  type: ActionType.RESET_RENDERED,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

// задел на будущее

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
