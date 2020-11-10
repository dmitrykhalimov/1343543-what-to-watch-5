import React from "react";
import renderer from "react-test-renderer";
import SmallFilmCard from "./small-film-card";
import {MemoryRouter} from 'react-router-dom';

describe(`SmallFilmCard`, () => {
  it(`Should SmallFilmCard render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <SmallFilmCard
              id={1}
              preview={``}
              title={``}
              src={``}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
