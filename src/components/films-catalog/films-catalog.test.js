import React from "react";
import renderer from "react-test-renderer";
import FilmsCatalog from "./films-catalog";

describe(`FilmsCatalog`, () => {
  it(`Should FilmsCatalog render correctly`, () => {
    const tree = renderer
      .create(
          <FilmsCatalog/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
