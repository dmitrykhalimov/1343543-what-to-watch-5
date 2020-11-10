import React from "react";
import renderer from "react-test-renderer";
import FilmPoster from "./film-poster";

describe(`FilmPoster`, () => {
  it(`Should FilmPoster render correctly`, () => {
    const tree = renderer
      .create(
          <FilmPoster
            title={``}
            poster={``}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

