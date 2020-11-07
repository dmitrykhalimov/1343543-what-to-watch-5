import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./player";
import {TEST_MOCKS} from "../../const";
import {MemoryRouter} from "react-router-dom";

// TeamPage.test.js

describe(`Player`, () => {
  it(`Should Player render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Player
            films={TEST_MOCKS.films}
            match={TEST_MOCKS.match}
          />,
        </MemoryRouter>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
