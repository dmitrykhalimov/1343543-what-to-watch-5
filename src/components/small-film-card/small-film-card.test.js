import React from "react";
import renderer from "react-test-renderer";
import SmallFilmCard from "./small-film-card";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`SmallFilmCard`, () => {
  it(`Should SmallFilmCard render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <SmallFilmCard
              id={TEST_MOCKS.id}
              preview={TEST_MOCKS.preview}
              title={TEST_MOCKS.title}
              src={TEST_MOCKS.src}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
