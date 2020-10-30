import films from "../../../mocks/films";
import reviews from "../../../mocks/reviews";

import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {buildGenres} from "../../../core";

const initialState = {
  films,
  reviews,
  genresList: buildGenres(films),
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
  }
  return state;
};

export {filmsData};
