import {extend} from "../utils/utils";
import {translateRatingToText} from "../utils/common";

export const filmsAdapter = (films) => {
  return films.map((film) => {
    let adaptedFilm = extend(film, {
      title: film.name,
      poster: film.poster_image,
      preview: film.preview_image,
      background: film.background_image,
      backgroundColor: film.background_color,
      rankNumber: film.rating,
      rankText: translateRatingToText(film.rating),
      year: film.released,
      video: film.preview_video_link,
      videoMain: film.video_link,
      duration: film.run_time,
      cast: film.starring.join(`, `),
      votes: film.scores_count,
      description: film.description.split(`. `),
    });
    return adaptedFilm;
  });

};
