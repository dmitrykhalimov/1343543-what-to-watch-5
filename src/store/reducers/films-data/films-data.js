import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {buildGenres} from "../../../core";

import {ACTIVE_FILM_INITIAL_STATE} from "../../../const";

const initialState = {
  films: [],
  filteredFilms: [],
  genresList: [],
  activeFilm: ACTIVE_FILM_INITIAL_STATE,
  activeComments: [],
  filmPromo: [],
  favorites: [],
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.CREATE_GENRES:
      return extend(state, {
        genresList: buildGenres(action.payload)
      });
    case ActionType.LOAD_SINGLE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
    case ActionType.LOAD_FILM_COMMENTS:
      return extend(state, {
        activeComments: action.payload,
      });
    case ActionType.LOAD_FILM_PROMO:
      return extend(state, {
        filmPromo: action.payload,
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
    case ActionType.ERASE_ACTIVE_FILM:
      return extend(state, {
        activeFilm: ACTIVE_FILM_INITIAL_STATE
      });
  }
  return state;
};

export {filmsData};
