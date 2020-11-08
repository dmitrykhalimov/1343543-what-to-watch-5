import {showMore} from "./show-more";

import {
  ActionType,
} from "../../action";

const initialState = {
  rendered: 8,
};

describe(`ReducerShowMore`, () => {
  it(`Increment correctly`, () => {
    const payloadToTest = 8;
    expect(showMore(initialState, {
      type: ActionType.INCREMENT_RENDERED,
      payload: payloadToTest,
    })).toEqual({
      rendered: initialState.rendered + payloadToTest,
    });
  });
  it(`Reset correctly`, () => {
    expect(showMore(initialState, {
      type: ActionType.RESET_RENDERED,
    })).toEqual({
      rendered: initialState.rendered,
    });
  });
});
