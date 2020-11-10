import {ALL_GENRES, QUANTITY_FILMS_RENDER} from "./const";

export const filterFilms = (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};


export const filterSimilarFilms = (film, films) => {
  return films.filter((item) => {
    return (item.genre === film.genre) && (item.id !== film.id);
  });
};

export const buildGenres = (films) => {
  let genresList = films.map((film) => film.genre);
  genresList = Array.from(new Set(genresList));
  genresList
    .sort()
    .unshift(ALL_GENRES);
  return genresList;
};

export const computeIncrement = (currentRendered, filmsQuantity) => {
  return Math.min(QUANTITY_FILMS_RENDER, filmsQuantity - currentRendered);
};
