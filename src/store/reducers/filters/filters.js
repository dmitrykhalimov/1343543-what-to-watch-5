import {ALL_GENRES} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  activeGenre: ALL_GENRES,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
  }
  return state;
};

export {filters};
