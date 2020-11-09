import React from "react";
import renderer from "react-test-renderer";
import FilmReviews from "./film-reviews";
import {TEST_MOCKS} from "../../const";

describe(`FilmReviews`, () => {
  it(`Should FilmReviews render correctly`, () => {
    const tree = renderer
      .create(
          <FilmReviews
            comments={TEST_MOCKS.comments}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
