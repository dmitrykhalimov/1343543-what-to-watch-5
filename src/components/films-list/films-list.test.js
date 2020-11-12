import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`FilmsList`, () => {
  it(`Should FilmsList render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <FilmsList
              films={TEST_MOCKS.films}
              maxQuantity={8}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
