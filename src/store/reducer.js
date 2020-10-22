import films from "../mocks/films";
import {extend} from "../utils/utils";
import {ActionType} from "./action";

const initialState = {
  genre: `All genres`,
  filteredFilms: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.FILTER_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });
  }

  return state;
};


export {reducer};
