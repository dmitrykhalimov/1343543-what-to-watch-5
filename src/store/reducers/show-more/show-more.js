import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {QUANTITY_FILMS_RENDER} from "../../../const";

const initialState = {
  rendered: QUANTITY_FILMS_RENDER,
};

const showMore = (state = initialState, action) => {
  switch (action.type) {
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


export {showMore};
