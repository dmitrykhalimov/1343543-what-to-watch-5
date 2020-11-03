import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `avatar.jpg`,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      console.log('req_auth');
      console.log(action.payload);
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_DATA:
      return extend(state, action.payload);
  }

  return state;
};

export {user};
