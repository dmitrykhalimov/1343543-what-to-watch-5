import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCK_STORE} from "../../const";

describe(`UserBlock`, () => {
  it(`Should UserBlock render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <UserBlock
              userData={TEST_MOCK_STORE.user}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
