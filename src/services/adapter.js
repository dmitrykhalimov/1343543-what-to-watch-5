import {extend} from "../utils/utils";
import {translateRatingToText} from "../utils/common";

export const singleFilmAdapter = (film) => {
  const adaptedFilm = extend(film, {
    title: film.name,
    poster: film.poster_image,
    preview: film.preview_image,
    background: film.background_image,
    backgroundColor: film.background_color,
    rankNumber: film.rating,
    isFavorite: film.is_favorite,
    rankText: translateRatingToText(film.rating),
    year: film.released,
    video: film.preview_video_link,
    videoMain: film.video_link,
    duration: film.run_time,
    cast: film.starring.join(`, `),
    votes: film.scores_count,
    description: film.description.split(`. `),
  });

  delete adaptedFilm.name;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.rating;
  delete adaptedFilm.released;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.run_time;
  delete adaptedFilm.video_link;
  delete adaptedFilm.starring;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};

export const filmsAdapter = (films) => {
  return films.map((film) => singleFilmAdapter(film));
};

export const userDataToClient = (userData) => {
  const adaptedUserData = extend(userData, {
    avatarUrl: userData.avatar_url,
  });
  return adaptedUserData;
};

