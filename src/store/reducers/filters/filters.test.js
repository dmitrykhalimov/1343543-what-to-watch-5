import {filters} from "./filters";
import {ALL_GENRES} from "../../../const";

import {
  ActionType,
} from "../../action";

const initialState = {
  activeGenre: ALL_GENRES,
};


it(`ReducerFilter`, () => {
  expect(filters(initialState, {
    type: ActionType.CHANGE_GENRE,
    payload: `Adventure`
  })).toEqual({
    activeGenre: `Adventure`
  });
});
