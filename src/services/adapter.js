import {extend} from "../utils/utils";
import {translateRatingToText} from "../utils/common";

export const filmsAdapter = (films) => {
  return films.map((film) => {
    let adaptedFilm = extend(film, {
      title: film.name,
      poster: film.poster_image,
      preview: film.preview_image,
      background: film.background_image,
      rankNumber: film.rating,
      rankText: translateRatingToText(film.rating),
      year: film.released,
      video: film.video_link,
      videoPreview: film.preview_video_link,
      duration: film.run_time,
      cast: film.starring,
      votes: film.scores_count,
    });
    return adaptedFilm;
  });

};
