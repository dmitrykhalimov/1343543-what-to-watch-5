import films from "../mocks/films";
import {buildGenres} from "../core";
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {ALL_GENRES, QUANTITY_FILMS_RENDER} from "../const";

const initialState = {
  activeGenre: ALL_GENRES,
  films,
  filteredFilms: films,
  genresList: buildGenres(films),
  rendered: QUANTITY_FILMS_RENDER,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.FILTER_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });

    case ActionType.INCREMENT_RENDERED:
      return extend(state, {
        rendered: state.rendered + action.payload,
      });
    case ActionType.RESET_RENDERED:
      return extend(state, {
        rendered: QUANTITY_FILMS_RENDER,
      });
  }

  return state;
};


export {reducer};
