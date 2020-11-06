export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_RENDERED: `INCREMENT_RENDERED`,
  CREATE_GENRES: `CREATE_GENRES`,
  RESET_RENDERED: `RESET_RENDERED`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_SINGLE_FILM: `LOAD_SINGLE_FILM`,
  LOAD_FILM_COMMENTS: `LOAD_FILM_COMMENTS`,
  LOAD_FILM_PROMO: `LOAD_FILM_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  ERASE_ACTIVE_FILM: `ERASE_ACTIVE_FILM`
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

export const loadSingleFilm = (film) => ({
  type: ActionType.LOAD_SINGLE_FILM,
  payload: film,
});

export const loadFilmComments = (comments) => ({
  type: ActionType.LOAD_FILM_COMMENTS,
  payload: comments,
});

export const createGenres = (films) => ({
  type: ActionType.CREATE_GENRES,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadFilmPromo = (film) => ({
  type: ActionType.LOAD_FILM_PROMO,
  payload: film,
});

export const loadUserData = (userData) => ({
  type: ActionType.LOAD_USER_DATA,
  payload: userData,
});

export const loadFavorites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const eraseActiveFilm = () => ({
  type: ActionType.ERASE_ACTIVE_FILM,
});


