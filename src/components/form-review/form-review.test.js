import React from "react";
import renderer from "react-test-renderer";
import {FormReview} from "./form-review";
import {TEST_MOCKS} from "../../const";

describe(`FormReview`, () => {
  it(`Should FormReview render correctly`, () => {
    const tree = renderer
    .create(
        <FormReview
          onReviewSubmit={TEST_MOCKS.noop}
          id={String(TEST_MOCKS.id)}
        />
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
