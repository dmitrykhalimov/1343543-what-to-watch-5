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

// reselect
export const getFilteredFilms = createSelector(
    getActiveGenre,
    getFilms,
    (activeGenre, films) => {
      return filterFilms(activeGenre, films);
    }
);
