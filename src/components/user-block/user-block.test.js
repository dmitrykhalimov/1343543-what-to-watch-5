import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`UserBlock`, () => {
  it(`Should UserBlock render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <UserBlock
              userData={TEST_MOCKS.userData}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
