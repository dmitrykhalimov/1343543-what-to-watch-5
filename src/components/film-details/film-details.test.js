import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details";
import {TEST_MOCKS} from "../../const";

describe(`FilmDetails`, () => {
  it(`Should FilmDetails render correctly`, () => {
    const tree = renderer
      .create(
          <FilmDetails
            film={TEST_MOCKS.film}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

