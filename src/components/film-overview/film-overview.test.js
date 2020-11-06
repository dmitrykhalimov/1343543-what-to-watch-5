import React from "react";
import renderer from "react-test-renderer";
import FilmOverview from "./film-overview";
import {TEST_MOCKS} from "../../const";

describe(`FilmOverview`, () => {
  it(`Should FilmOverview render correctly`, () => {
    const tree = renderer
      .create(
          <FilmOverview
            film={TEST_MOCKS.film}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

