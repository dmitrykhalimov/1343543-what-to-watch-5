import React from "react";
import renderer from "react-test-renderer";
import FilmsCatalog from "./films-catalog";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

describe(`FilmsCatalog`, () => {
  it(`Should FilmsCatalog render correctly`, () => {
    const tree = renderer
      .create(
          <FilmsCatalog>
            <MockComponent/>
          </FilmsCatalog>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
