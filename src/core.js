import {ALL_GENRES} from "./const";

export const filterFilms = (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const buildGenres = (films) => {
  let genresList = films.map((film) => film.genre);
  genresList = Array.from(new Set(genresList));
  genresList
    .sort()
    .unshift(ALL_GENRES);
  return genresList;
};
