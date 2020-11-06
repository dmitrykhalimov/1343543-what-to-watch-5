import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  id: 1,
  email: ``,
  name: ``,
  avatarUrl: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_DATA:
      return extend(state, action.payload);
  }

  return state;
};

export {user};
