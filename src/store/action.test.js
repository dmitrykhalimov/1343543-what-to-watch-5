import {
  changeGenre,
  incrementRendered,
  resetRendered,
  ActionType,
  loadFilms,
  loadFilmComments,
  createGenres,
  requireAuthorization,
  loadFilmPromo,
  loadUserData,
  loadFavorites,
  redirectToRoute,
  eraseActiveFilm,
} from "./action";

import {TEST_MOCKS, TEST_MOCK_FILM, TEST_MOCK_STORE} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator changes genre`, () => {
    expect(changeGenre(`Adventure`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Adventure`,
    });
  });

  it(`Action creator increments field 'increment'`, () => {
    expect(incrementRendered(8)).toEqual({
      type: ActionType.INCREMENT_RENDERED,
      payload: 8,
    });
  });

  it(`Action creator reset rendered correctly`, () => {
    expect(resetRendered()).toEqual({
      type: ActionType.RESET_RENDERED,
    });
  });

  it(`Action creator load films`, () => {
    expect(loadFilms(TEST_MOCKS.films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: TEST_MOCKS.films
    });
  });
  it(`Action creator load film comments`, () => {
    expect(loadFilmComments(TEST_MOCKS.comments)).toEqual({
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: TEST_MOCKS.comments,
    });
  });

  it(`Action creator createGenres`, () => {
    expect(createGenres(TEST_MOCKS.films)).toEqual({
      type: ActionType.CREATE_GENRES,
      payload: TEST_MOCKS.films,
    });
  });

  it(`Action creator requireAuthorization`, () => {
    expect(requireAuthorization(status)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  });

  it(`Action creator loadFilmPromo`, () => {
    expect(loadFilmPromo(TEST_MOCKS.film)).toEqual({
      type: ActionType.LOAD_FILM_PROMO,
      payload: TEST_MOCKS.film
    });
  });

  it(`Action creator loadUserData`, () => {
    expect(loadUserData(TEST_MOCK_STORE.user)).toEqual({
      type: ActionType.LOAD_USER_DATA,
      payload: TEST_MOCK_STORE.user,
    });
  });

  it(`Action creator loadFavorites`, () => {
    expect(loadFavorites(TEST_MOCKS.films)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: TEST_MOCKS.films,
    });
  });

  it(`Action creator redirectToRoute`, () => {
    expect(redirectToRoute(TEST_MOCKS.src)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: TEST_MOCKS.src,
    });
  });

  it(`Action creator eraseActiveFilm`, () => {
    expect(eraseActiveFilm()).toEqual({
      type: ActionType.ERASE_ACTIVE_FILM,
    });
  });
});
