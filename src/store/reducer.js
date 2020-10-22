import films from "../mocks/films";
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {ALL_GENRES} from "../const";

const initialState = {
  activeGenre: ALL_GENRES,
  filteredFilms: films,
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
  }

  return state;
};


export {reducer};
