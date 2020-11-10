import React from "react";
import renderer from "react-test-renderer";
import FilmReviews from "./film-reviews";

describe(`FilmReviews`, () => {
  it(`Should FilmReviews render correctly`, () => {
    const tree = renderer
      .create(
          <FilmReviews
            comments={[]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
