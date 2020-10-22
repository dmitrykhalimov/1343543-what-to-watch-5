import {ALL_GENRES, QUANTITY_FILMS_RENDER} from "./const";
import films from "./mocks/films";

export const filterFilms = (genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const buildGenres = () => {
  let genresList = films.map((film) => film.genre);
  genresList = Array.from(new Set(genresList));
  genresList
    .sort()
    .unshift(ALL_GENRES);
  return genresList;
};

export const copmuteIncrement = (currentRendered, filmsQuantity) => {
  return Math.min(QUANTITY_FILMS_RENDER, filmsQuantity - currentRendered);
};
