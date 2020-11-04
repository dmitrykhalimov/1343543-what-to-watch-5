import reviews from "../../../mocks/reviews";

import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {buildGenres} from "../../../core";

const initialState = {
  films: [],
  filteredFilms: [],
  reviews,
  genresList: [],
  activeFilm: {},
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.CREATE_GENRES:
      return extend(state, {
        genresList: buildGenres(action.payload)
      });
    case ActionType.LOAD_SINGLE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }

  return state;
};

export {filmsData};
