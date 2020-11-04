import {filterFilms} from "../../core";
import {createSelector} from 'reselect';

// простые селекторы
export const getFilms = (state) => {
  return state.data.films;
};

export const getActiveGenre = (state) => {
  return state.filter.activeGenre;
};

export const getGenresList = (state) => {
  return state.data.genresList;
};

export const getRendered = (state) => {
  return state.showMore.rendered;
};

export const getUserData = (state) => {
  return state.user;
};

export const getAuthStatus = (state) => {
  return state.user.authorizationStatus;
};

export const getPromoFilm = (state) => {
  return state.data.filmPromo;
};

export const getActiveFilm = (state) => {
  return state.data.activeFilm;
};

export const getComments = (state) => {
  return state.data.activeComments;
};

// reselect
export const getFilteredFilms = createSelector(
    getActiveGenre,
    getFilms,
    (activeGenre, films) => {
      return filterFilms(activeGenre, films);
    }
);
