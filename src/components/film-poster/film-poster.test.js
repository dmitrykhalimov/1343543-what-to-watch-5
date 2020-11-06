import React from "react";
import renderer from "react-test-renderer";
import FilmPoster from "./film-poster";
import {TEST_MOCKS} from "../../const";

describe(`FilmPoster`, () => {
  it(`Should FilmPoster render correctly`, () => {
    const tree = renderer
      .create(
          <FilmPoster
            title={TEST_MOCKS.title}
            poster={TEST_MOCKS.poster}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

