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

export const getFilms1 = (filter, data) => {
  console.log('Дата');
  return filterFilms(filter.activeGenre, data.films);
};

// reselect
export const getFilteredFilms = createSelector(
    getFilms1,
    (films) => {
      return films;
    }
);
