import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`SignIn`, () => {
  it(`Should SignIn render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <SignIn
              onFormSubmit={TEST_MOCKS.noop}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
