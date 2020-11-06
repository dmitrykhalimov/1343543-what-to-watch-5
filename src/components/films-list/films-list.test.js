import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list";
import {TEST_MOCKS} from "../../const";
import {MemoryRouter} from 'react-router-dom';

describe(`FilmsList`, () => {
  it(`Should FilmsList render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <FilmsList
              films={TEST_MOCKS.films}
              maxQuantity={TEST_MOCKS.maxQuantity}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
