import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {TEST_MOCKS} from "../../const";

describe(`Review`, () => {
  it(`Should Review render correctly`, () => {
    const tree = renderer
      .create(
          <Review
            comment={TEST_MOCKS.comment}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
